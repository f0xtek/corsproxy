const path = require('path');
const cdk = require('@aws-cdk/core');
const { LambdaRestApi } = require('@aws-cdk/aws-apigateway');
const { Function, Runtime, Code } = require('@aws-cdk/aws-lambda');
const { Duration } = require('@aws-cdk/core');

class CorsproxyService extends cdk.Construct {
  constructor(scope, id) {
    super(scope, id);

    const lambdaFunction = new Function(this, 'corsProxyHandler', {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset(path.join(__dirname, '../handlers')),
      handler: 'index.handler',
      timeout: Duration.seconds(10),
    });

    const api = new LambdaRestApi(this, 'corsProxyApi', {
      handler: lambdaFunction,
      proxy: false,
    });

    api.root.addMethod('GET');
  }
}

module.exports = { CorsproxyService };
