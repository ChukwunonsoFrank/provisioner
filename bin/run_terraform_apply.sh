#!/bin/bash

# Check if a directory path is provided as an argument
if [ -z "$1" ]
then
  echo "Usage: $0 <terraform_directory_path>"
  exit 1
fi

# Change to the provided directory where your Terraform code resides
cd "terraform/configs/${1}"

# Run the terraform apply command
terraform init && terraform plan && terraform apply
# terraform plan
