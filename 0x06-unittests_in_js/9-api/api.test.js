const {describe, it} = require("mocha");
const expect = require("chai").expect;
const request = require("request");

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  }

  it("check correct status code", () => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it("check correct content", () => {
    request(options, (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system");
    });
  });

  it('check correct content-length', () => {
    request(options, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});

describe("Cart page", function() {
  it("check correct status code for correct url", () => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it("check correct content for correct url", () => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(body).to.contain("Payment methods for cart 12");
    });
  });

  it("check correct status code for incorrect url", () => {
    request.get("http://localhost:7865/cart/abc", (err, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });
});

