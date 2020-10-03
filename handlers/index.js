const axios = require('axios').default;

const forwardRequest = async (url) => {
  return await axios.get(url)
    .then(response => response)
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
};

exports.handler = async (event) => {
  const params = event.queryStringParameters;
  console.log(`Got request with URL params: ${Object.entries(params)}`);

  if (! params.url) {
    const errorResponse = {
      statusCode: 400,
      body: 'Unable to obtain \'url\' from URL parameters',
    };
    throw new Error(errorResponse);
  }

  try {
    const response = await forwardRequest(params.url);
    const proxyResponse = {
      isBase64Encoded: false,
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials' : true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(response.data, null, 2),
    };
    return proxyResponse;
  }
  catch(error) {
    throw new Error(error);
  }
};
