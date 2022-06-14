import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import path = require('path');

import { UserPool } from 'aws-cdk-lib/aws-cognito'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'


interface CommonStackProps extends cdk.StackProps {
  readonly userPoolName: string;
  readonly env: cdk.Environment;
}

export class CommonStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: CommonStackProps) {
    super(scope, id, props);

    // see:
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    const postConfirmationFn = new NodejsFunction(this, 'postConfirmationFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      entry: 'src/lambda/userPoolPostConfirmation/index.ts',
      handler: 'handler'
    })

    // Cognito User Pool with Email Sign-in Type.
    const userPool = new UserPool(this, props.userPoolName, {
      signInAliases: {
        email: true
      },
      lambdaTriggers: {
        postConfirmation: postConfirmationFn,
      }
    })
  }
}
