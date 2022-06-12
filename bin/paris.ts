#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CertStack } from '../lib/cert-stack';

import { config as devConfig } from './env/dev'

// definition of the different environments

// dev01
const dev01Environment: cdk.Environment = {
  account: '078914830291',
  region: 'us-east-1',
}

const app = new cdk.App();

new CertStack(app, 'CertStackDev01',  {
  env: dev01Environment,
  ...devConfig,
});
