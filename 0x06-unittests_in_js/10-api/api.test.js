const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Home page", function() {
    const choices = {
    url: "http://localhost:7865/",
    method: "GET"
    }
    it("check correct status code", function(done) {
    request(choices, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
    });
    it("check correct content", function(done) {
    request(choices, function(err, res, body) {
        expect(body).to.equal("Welcome to the payment system");
        done();
    });
    });
});

describe("Cart page", function() {
    it("check correct status code for correct url", function(done) {
    request.get("http://localhost:7865/cart/12", function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
    });
    it("check correct content for correct url", function(done) {
    request.get("http://localhost:7865/cart/12", function(err, res, body) {
        expect(body).to.equal("Payment methods for cart 12");
        done();
    });
    });
    it("check correct status code for incorrect url", function(done) {
    request.get("http://localhost:7865/cart/hello", function(err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
    });
    });
});

describe("Available_payments page", function() {
    it("check correct status for correct url", function() {
    request.get("http://localhost:7865/available_payments", (err, res, body) => {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(res.statusCode).to.equal(200);
        }
    });
    });
    it("check correct body content for correct url", function() {
    const choice = {json: true};
    const paymentMethods = {
        payment_methods: {
        credit_cards: true,
        paypal: false
        }
    }
    request.get("http://localhost:7865/available_payments", choice, (err, res, body) => {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(body).to.deep.equal(paymentMethods);
        }
    });
    });
});

describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
    const option = {
        url: "http://localhost:7865/login",
        json: true,
	    body: {
        user: 'JOE'
        }
    };
    request.post(option, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
    });
    it("check correct content for request that's sent properly", function(done) {
    const options = {
        url: "http://localhost:7865/login",
        json: true,
        body: {
        user: 'JOE'
        }
    };
    request.post(options, function(err, res, body) {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(body).to.contain('Welcome JOE');
        }
        done();
    });
    });
    it("check correct status code for request that's not sent properly", function(done) {
    const opt = {
        url: "http://localhost:7865/login",
        json: true,
        body: {
        usr: 'JOE'
        }
    };
    request.post(opt, function(err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
    });
    });
});

