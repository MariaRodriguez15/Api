const { validationResult } =require("express-validator");
const { sequelize } = require("../models");
const db = require("../models");
const Users = require("../models/todo");

exports.saveTodo=(req, res, next)=>{

        const errors = validationResult(req); 
     
        if (!errors.isEmpty()) {
            const error = new Error('Validation failed.');
            error.statusCode = 500;
            error.data = errors.array(); 
            throw error;
        }

        sequelize.transaction( async t =>{
            db.Todo.create({
                text: req.body.text,
                description: req.body.description,
                version: +req.body.version,
              });
        }).then( data =>{
            res.status(201).json({status: 'sucess', message: 'User create'});

        }).catch( error =>{
            res.status(500).json({status: 'fail', message: 'Error!'}); 
        })
};