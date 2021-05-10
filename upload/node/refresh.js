require("dotenv").config();
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");

const CdnClient = tencentcloud.cdn.v20180606.Client;

const clientConfig = {
  credential: {
    secretId: process.env.SecretId,
    secretKey: process.env.SecretKey,
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "cdn.tencentcloudapi.com",
    },
  },
};

const client = new CdnClient(clientConfig);
const params = {
    "Urls": [
        "https://cossava-web-1255885027.file.myqcloud.com"
    ]
};
client.PurgeUrlsCache(params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);