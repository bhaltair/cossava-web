var COS = require("cos-nodejs-sdk-v5");
var fs = require("fs");
var path = require("path");
var shell = require('shelljs');
require("dotenv").config();

// 读环境变量
var cos = new COS({
  SecretId: process.env.SecretId,
  SecretKey: process.env.SecretKey,
});

var config = {
  Bucket: process.env.Bucket,
  Region: process.env.Region,
};
async function uploadFile(files, exclude = "dist") {
  return new Promise((resolve, reject) => {
    cos.uploadFiles(
      {
        files: files.map((file) => {
          return {
            ...config,
            Key: file.replace(exclude, ""),
            FilePath: file,
          };
        }),
        SliceSize: 1024 * 1024,
        onProgress: function (info) {
          var percent = parseInt(info.percent * 10000) / 100;
          var speed = parseInt((info.speed / 1024 / 1024) * 100) / 100;
          console.log("进度：" + percent + "%; 速度：" + speed + "Mb/s;");
        },
        onFileFinish: function (err, data, options) {
          console.log(options.Key + "上传" + (err ? "失败" : "完成"));
        },
      },
      function (err, data) {
        if (err) {
          reject();
        } else {
          resolve();
        }
      }
    );
  });
}

function travel(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    var pathname = path.join(dir, file);
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback);
    } else {
      callback(pathname);
    }
  });
}

async function uploadDir(dir) {
  var arr = [];
  travel(dir, function (pathname) {
    // console.log(pathname);
    arr.push(pathname);
  });
  console.log(arr);
  try {
    await uploadFile(arr);
  } catch (error) {
    console.log(error)
  }
}

async function main() {
   const filePath = path.resolve(process.cwd(), './dist');

  //  console.log(__filename)
  //  console.log(__dirname)

   await uploadDir(filePath, 'dist');

   shell.exec('node upload/refresh.js')

   process.exit();

}

main()

