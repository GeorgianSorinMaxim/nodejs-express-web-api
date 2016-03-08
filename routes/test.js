var assert = require("assert");
var should = require("should");
var supertest = require("supertest");

var User = require('../models/user').User; 

var server = supertest.agent("http://localhost:3000");
 
describe('Unit test for the User model', function() {

  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

  it("should return all users",function(done){
    server
    .get("/users")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      var result = JSON.parse(res.text);
      res.status.should.equal(200);
      done();
    });
  });

  // USE A VALID USER ID
  it("should return the user if the id param is a valid user",function(done){
    server
    .get("/users/56dea2badad57fae043cc045")
    .end(function(err,res){
      res.status.should.equal(200);
      var result = JSON.parse(res.text);
      assert.deepEqual('56dea2badad57fae043cc045', result._id);
      done();
    });
  });

  it("should return 500 if the id param is not a valid user",function(done){
    server
    .get("/users/notfound")
    .end(function(err,res){
      res.status.should.equal(500);
      done();
    });
  });

  it("should create an user",function(done){
    server
    .post("/users")
    .send({user_email : "mochatest@gmail.com", user_forename : "Mocha", user_surname : "Test" })
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      done();
    });
  });

  // USE A VALID USER EMAIL
  it("should not allow to create an existent user",function(done){
    server
    .post("/users")
    .send({user_email : "georgian.maxim@gmail.com", user_forename : "Mocha", user_surname : "Test" })
    .expect("Content-type",/json/)
    .expect(403)
    .end(function(err,res){
      res.status.should.equal(403);
      done();
    });
  });

  // USE A VALID USER ID
  it("should update an existent user",function(done){
    server
    .put("/users")
    .send({ id : "56deb342088abfc7082a8759", user_email : "georgian.maxim@gmail.com", user_forename : "Georgian-Sorin I", user_surname : "Maximus" })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

  // USE A VALID USER ID
  it("should delete an existent user",function(done){
    server
    .del("/users")
    .send({ id : "56dea2badad57fae043cc045" })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
 
});
