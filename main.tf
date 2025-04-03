provider "aws" {
    region = "us-west-2"
    access_key = AKIA2XNDEWJFGAB7KBO2
    secret_key = 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
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
    hash_key = "VENU123ID"
    attribute {
        name = "VENU123ID"
        type = "S"
        }
}
