const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Corsproxy = require('../lib/corsproxy-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Corsproxy.CorsproxyStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
