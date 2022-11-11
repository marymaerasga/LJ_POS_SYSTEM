package models

import (
    "github.com/uadmin/uadmin"
)

type Account struct {
	uadmin.Model
	Username string
	Password string
	Name     string
	Position string
}

