const request = require('request');
const { expect } = require('chai');

describe('Cart page', function () {
  it('tests the server', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 200 when id is an integer', function (done) {
    request.get('http://localhost:7865/cart/15', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 15');
      done();
    });
  });

  it('should return status code 404 when id is not an integer', function (done) {
    request.get('http://localhost:7865/cart/hi', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('tests the server with wrong cart id', function (done) {
    request.get('http://localhost:7865/cart/hello2', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

