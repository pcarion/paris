# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

# References

* [CDK examples in typescript](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript)

## Useful commands

deployment:

```
aws sso login --profile sso-dev01-admin
cdk deploy  CertStackDev01 --profile sso-dev01-admin
```


* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## bootstrap

```
cdk bootstrap --profile sso-dev01-admin
```

You create the route53 hosted zone manually in the admin console.
This step will give the domain names servers to associate to the domain name in the registrar.
The propgataion may take up to 24 hours
