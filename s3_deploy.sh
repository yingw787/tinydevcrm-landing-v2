#!/usr/bin/env bash

rm -rf public/
gatsby build
aws s3 sync ./public s3://tinydevcrm.com --profile s3_personal
