const cdk = require('@aws-cdk/core');
const CorsproxyService = require('./corsproxy-service');

class CorsproxyStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new CorsproxyService.CorsproxyService(this, 'CorsProxy');
  }
}

module.exports = { CorsproxyStack };