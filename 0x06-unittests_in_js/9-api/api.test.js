const { expect } = require('chai');
const request = require('request');

describe('make api call to index page', () => {
  it('should return Welcome to the payment system', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });

  it('should have status code of 200 when going to index page', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have content-length equal to 29', () => {
    const url = 'http://localhost:7865';
    request.get(url, (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');
    });
  });
});

describe('make api calls to the cart page', () => {
  it('should return Payment methods for cart 83 when cart id is 83', () => {
    const url = 'http://localhost:7865/cart/83';
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 83');
    });
  });

  it('should return status code 200 when cart id is 83', () => {
    const url = 'http://localhost:7865/cart/83';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return status code 404 when cart id is not an integer', () => {
    const url = 'http://localhost:7865/cart/hello';
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });
});
