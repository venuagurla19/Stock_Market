provider "aws" {
    region = "us-west-2"
}

resource "aws_s3_bucket" "venu_s3" {
    bucket = "venu-s3-bucket"


lifecycle {
    prevent_destroy = false
    }
}   

resource "aws_dynamodb_table" "venu_Db" {
    name         = "venu_Db"
    billing_mode = "PAT_PER_REQUEST"
    hash_key = "LOCKID"
    attribute {
        name = "UserId"
        type = "S"
}