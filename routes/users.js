var User = require('../models/user').User; 

// Get users
exports.index = function(req, res) {
  User.find({}, function(err, users) {
    if(!err) {
      res.json(200, { users: users });  
    } else {
      res.json(500, { message: err });
    }
  });
}

// Create user
exports.create = function(req, res) {
  var reqemail = req.body.user_email; 
  var reqforename = req.body.user_forename; 
  var reqsurname = req.body.user_surname; 

  console.log(reqemail, reqforename, reqsurname);

  User.findOne({ email: { $regex: new RegExp(reqemail, "i") } }, function(err, user) {
    if(!err && !user) {
      var newUser = new User(); 

      newUser.email = reqemail; 
      newUser.forename = reqforename; 
      newUser.surname = reqsurname; 
      
      newUser.save(function(err) {
        if(!err) {
          res.json(201, {message: "User created with name: " + newUser.forename + " " + newUser.surname + ", email: " + newUser.email });    
        } else {
          res.json(500, {message: "Create error: " + err});
        }
      });
    } else if(!err) {
      res.json(403, {message: "User already exists!"}); 
    } else {
      res.json(500, { message: err});
    } 
  });
}

// Update user
exports.update = function(req, res) {
  var id = req.body.id; 
  var reqemail = req.body.user_email; 
  var reqforename = req.body.user_forename; 
  var reqsurname = req.body.user_surname; 
 
  User.findById(id, function(err, user) {
      if(!err && user) {
        user.email = reqemail; 
        user.forename = reqforename; 
        user.surname = reqsurname; 

        user.save(function(err) {
          if(!err) {
            res.json(200, {message: "User updated: " + user.forename + " " + user.surname + ", email: " + user.email });    
          } else {
            res.json(500, {message: "User not updated! " + err});
          }  
        });
      } else if(!err) {
        res.json(404, { message: "User not found!"});
      } else {
        res.json(500, { message: "Update error: " + err});
      }
    }); 
}

// Delete user
exports.delete = function(req, res) {
  var id = req.body.id; 
  User.findById(id, function(err, user) {
    if(!err && user) {
      user.remove();
      res.json(200, { message: "User deleted."});
    } else if(!err) {
      res.json(404, { message: "User not found!"});
    } else {
      res.json(403, {message: "Delete error: " + err });
    }
  });
}

// Search user by ID
exports.show = function(req, res) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    if(!err && user) {
      res.json(200, user);
    } else if(err) {
      res.json(500, { message: "User search error: " + err});
    } else {
      res.json(404, { message: "User not found!"});
    }
  });
}
