const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should resolve with undefined when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
