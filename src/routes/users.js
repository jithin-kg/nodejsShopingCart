const express = require('express');
const chalk = require('chalk');
const bcrypt = require('bcrypt');

var User = require('../model/usersModel');
const router = express.Router();
const saltRounds = 10;    

router.route('/signup')
        .post(( req, res )=>{
            console.log(chalk.yellow('inside signup'));
            var password = req.body.password;
          console.log(chalk.red(req.body.name));
          if (req.body.name &&
            req.body.email &&
            req.body.password &&
            req.body.pwdcofm) {
           
           var newUser = new User();
           newUser.name = req.body.name;
           newUser.email = req.body.email;
           newUser.password = newUser.generateHash(req.body.password);

           newUser.save((err, data)=>{
               if(err){
                res.end()
                return console.log(chalk.blue(err));           
               }
               res.redirect('/');
               console.log(data);
           });
        
       }else{
        //res.end  
        return;
       }
        })

router.route('/login')
        .post(( req, res)=>{
            let email = req.body.email;
             let password = req.body.password;
             if(email && password){

                User.findOne({email: email},(err, user)=>{
                    if(err){
                        res.end();
                        return console.log(chalk.blue("Error while finding login user details"));
                    }
                    if(!user.validPassword(password)){
                        return console.log(chalk.red("password doesnt match"));
                        res.end();
                    }
                    res.redirect('/');
                    console.log("varified password");
                    console.log(chalk.blue(user));
                })
             }
        });
module.exports = router;