const { expect } = require('chai');
const request = require('request');
const url = 'http://localhost:7865';

describe('Index page', () => {
  it('should have status code of 200 from index page', () => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should return correct welcome message', () => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });

  it('should have content-length equal to 29', () => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');
    });
  });
});

describe("Cart page", function() {
  it('should have correct status code when id is a number', () => {
    request.get(`${url}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should have correct status code when id is not a number', () => {
    request.get(`${url}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });

  it('should have correct response message when id is a number', () => {
    request.get(`${url}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
    });
  });

  it('should  have correct result when id is not a number', () => {
    request.get(`${url}/cart/hello`, (error, response, body) => {
      expect(body).to.include('Cannot GET /cart/hello');
    });
  });
});
