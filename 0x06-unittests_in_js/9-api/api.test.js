const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should return status code 200', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct message', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

  it('tests the server with wrong cart id', function (done) {
    request.get('http://localhost:7865/cart/hello2', function (error, response, body) {
      expect(response.statusCode).to.equal(404);                      done();
    });
  });
});
