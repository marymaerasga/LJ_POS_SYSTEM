package main

import (
	"crypto/sha1"
	"encoding/hex"

	"github.com/LJ_POS_SYSTEM/models"
	"github.com/uadmin/uadmin"
)

func main() {
	uadmin.RootURL = "/admin"
	uadmin.Port = 1122
	uadmin.SiteName = "LJ POS System"
	// http.HandleFunc("/", uadmin.Handler(views.LoginHandler))
	// http.HandleFunc("/initialize", uadmin.Handler(views.InitializeData))
	// http.HandleFunc("/logout", uadmin.Handler(views.LogOutHandler))
	DBConfig()
	uadmin.Register(
		models.Account{},
	)
	uadmin.StartServer()
}

func DBConfig() {
	uadmin.Database = &uadmin.DBSettings{
		Type:     "mysql",
		Host:     "localhost",
		Name:     "pos_system",
		User:     "root",
		Password: "a",
		Port:     3306,
	}
}

func EncryptPass(text string) string {
	algorithm := sha1.New()
	algorithm.Write([]byte(text))
	return hex.EncodeToString(algorithm.Sum(nil))
}
