const User = require("../model/User");
const fs = require('fs');

exports.registerNewUser = async (req, res) => {
    try {
    let isUser = await User.find({ email: req.body.email });
     console.log(isUser);
      if (isUser.length >= 1) {
        return res.status(409).json({
          message: "email already in use"
        });
      }
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        age: req.body.age,
        image: "user.png"
      });
      let data = await user.save();
      const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
      res.status(201).json({ data, token });
    } catch (err) {
      res.status(400).json({ err: err });
      console.log(err)
    }
  };

  exports.loginUser = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email);
      console.log(password);
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res.status(401).json({ error: "Login failed! Check authentication credentials" });
      }
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (err) {
      res.status(400).json({ err: err });
      console.log(err)
    }
  };

exports.getUserDetails = async (req, res) => {
  try{
    User.findById(req.params.id, function(err,found){
      if(err){
        console.log(err);
      } else{
        res.json(found);
      }
    })
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

exports.editProfile = async (req,res) => {
  try{
    if(req.body.imagepath != req.body.oldimage){
      const image  = './public/image/profile/' + req.body.oldimage;
      if(req.body.oldimage != "user.png"){
        fs.unlink(image , function(err){
          if(err){
              console.log(err);
          } else {
            console.log("deleted")
          } 
        })
      }
    } else {
      console.log("not delete")
    }
    const dataEdit = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      age: req.body.age,
      image: req.body.imagepath
    }
    User.findByIdAndUpdate(req.params.id, dataEdit, function(err,update){
      if(err){
        console.log(err);
      } else{
        res.json(true);
      }
    });
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};