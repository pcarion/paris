#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CertStack } from '../lib/01-cert-stack';
import { CommonStack } from '../lib/05-common-stack';
import { WebappStack } from '../lib/10-webapp';

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

new CommonStack(app, 'CommonStackDev01',  {
  env: dev01Environment,
  ...devConfig,
});

new WebappStack(app, 'WebappStackDev01',  {
  env: dev01Environment,
  ...devConfig,
});
