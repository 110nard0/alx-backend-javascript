const { expect } = require('chai');
const request = require('request');
const url = 'http://localhost:7865';

describe('make api call to index page', () => {
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

  it('should have Content-length equal to 29', () => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');
    });
  });
});
