#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CorsproxyStack } = require('../lib/corsproxy-stack');

const app = new cdk.App();
new CorsproxyStack(app, 'CorsproxyStack');
