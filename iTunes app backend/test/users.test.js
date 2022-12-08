let expect = require('chai').expect;
let request = require('request');

describe('Status and content', function() {
 describe ('search page', function() {
    it('content', function(done){
    request('http://localhost:8000/search/beyonce',
    function(error, response, body) {
    expect(response).to.contain('{trackName: Yoncé}');
    done();
   });
  }); 
 });
});