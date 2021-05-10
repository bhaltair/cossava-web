package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	"github.com/joho/godotenv"
	"github.com/tencentyun/cos-go-sdk-v5"
)

func readBuckets() {
	m := getConfig()
	SecretId := m["SecretId"]
	SecretKey := m["SecretKey"]

	c := cos.NewClient(nil, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  SecretId,
			SecretKey: SecretKey,
		},
	})
	s, _, err := c.Service.Get(context.Background())

	// 报错
	if err != nil {
		panic(err)
	}

	// 打印
	for _, b := range s.Buckets {
		fmt.Printf("%#v\n", b)
	}
}

func uploadFile() {
	m := getConfig()
	Bucket := m["Bucket"]
	Region := m["Region"]
	SecretId := m["SecretId"]
	SecretKey := m["SecretKey"]

	// 将 examplebucket-1250000000 和 COS_REGION 修改为真实的信息
	u, _ := url.Parse("https://" + Bucket + ".cos." + Region + ".myqcloud.com")
	// fmt.Printf("%+v\n", *u)
	fmt.Printf("%s\n", u)

	b := &cos.BaseURL{BucketURL: u}
	c := cos.NewClient(b, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  SecretId,
			SecretKey: SecretKey,
		},
	})
	// 对象键（Key）是对象在存储桶中的唯一标识。
	// 例如，在对象的访问域名 `examplebucket-1250000000.cos.COS_REGION.myqcloud.com/test/objectPut.go` 中，对象键为 test/objectPut.go
	name := "test/objectPut.go"

	// 1.通过字符串上传对象
	f := strings.NewReader("test")
	_, err := c.Object.Put(context.Background(), name, f, nil)
	if err != nil {
		panic(err)
	}
	fmt.Printf("success")
}

func uploadFile2(key string, file string) {

	m := getConfig()
	Bucket := m["Bucket"]
	Region := m["Region"]
	SecretId := m["SecretId"]
	SecretKey := m["SecretKey"]

	u, _ := url.Parse("https://" + Bucket + ".cos." + Region + ".myqcloud.com")
	// fmt.Printf("%+v\n", *u)
	// fmt.Printf("%s\n", u)

	b := &cos.BaseURL{BucketURL: u}
	client := cos.NewClient(b, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  SecretId,
			SecretKey: SecretKey,
		},
	})

	// key := "test/objectPut.go"
	// file := "./test/objectPut.go"
	_, _, err := client.Object.Upload(
		context.Background(), key, file, nil,
	)
	if err != nil {
		fmt.Println("upload " + key + " error")
		panic(err)
	}
	fmt.Println("upload " + key + " success")
}

// 输出一个文件数组
func readDir(path string) []string {
	// files, err := ioutil.ReadDir(".")
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// for _, f := range files {
	// 	fmt.Println(f.Name())
	// }

	var arr []string

	err := filepath.Walk(path,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return err
			}
			if info.IsDir() {
				return nil
			}

			// fmt.Println(path, info.Size())
			arr = append(arr, path)
			return nil
		})
	if err != nil {
		log.Println(err)
	}

	return arr

}

func uploadFiles(arr []string) {
	for _, v := range arr {
		// fmt.Println("index:", v)
		name := strings.Replace(v, "../../dist", "", 1)
		uploadFile2(name, v)
	}
}

func getConfig() map[string]string {
	SecretId := os.Getenv("SecretId")
	SecretKey := os.Getenv("SecretKey")
	Bucket := os.Getenv("Bucket")
	Region := os.Getenv("Region")

	m := make(map[string]string)
	m["SecretId"] = SecretId
	m["SecretKey"] = SecretKey
	m["Bucket"] = Bucket
	m["Region"] = Region

	return m
}

func main() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal(err)
	}

	// fmt.Println("SecretId: ", os.Getenv("SecretId"))
	// fmt.Println("SecretKey: ", os.Getenv("SecretKey"))
	// fmt.Println("Bucket: ", os.Getenv("Bucket"))
	// fmt.Println("Region: ", os.Getenv("Region"))

	// uploadFile2()
	// readBuckets()

	s := readDir("../../dist")
	uploadFiles(s)

	// fmt.Printf("len: %d  cap: %d pointer: %p\n", len(s), cap(s), s)
}
