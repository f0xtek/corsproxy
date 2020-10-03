# CORS Proxy

A HTTP proxy for CORS requests during local development built on AWS Lambda and API Gateway using the AWS CDK.

Proxies requests to API URLs specified in the `?url` query string parameter. E.g.

`https://corsproxy.domain.com?url=https://api-url-to-proxy.com`

This was built to get around CORS issues during local development in cases where APIs do not accept requests from your browser (e.g. when using the fetch() API from your local browser).

## Useful commands

The [AWS CDK](https://aws.amazon.com/cdk/) was used to build this project.

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `npm run synth`        emits the synthesized CloudFormation template
* `npm run invoke`       invoke your lambda locally with AWS SAM using the sythensized CloudFormation template
