const connectionDB = require('../config/connection.js')
const schema = require('../models/schema')
const Student = schema.Student
const Project = schema.Project

module.exports = function(io) {
    return{

    index:(req,res)=>{
        Student.find({})
            .then(students=>{
                res.json(students)
            //    io.emit("news",JSON.stringify(students))
            })
            .catch(console.error.bind(console, 'error: '))
        
    },

    show: (req,res)=>{
        Student.findOne({name:req.params.name})
            .then(student=>{res.json(student)})
            .catch(console.error.bind(console,'error: '))
    },

    showProject: (req,res)=>{
        student = new Student();
        let doc = student.projects.id('5bfb1b9868380c0954574bb2');
            
        console.log(doc);
    },
    create: (req,res)=>{
        student = new Student({name: req.body.name, age:req.body.age})
        for(project of req.body.projects){
            student.projects.push(project)
        }
        Student.create(student)
        .then(student=>{
                io.emit('news', student)
                res.json(student)})
        .catch((error)=>
            res.json(error.message)
        )
    },
    
    delete: (req,res)=>{
        Student.remove({name:req.body.name})
        .then(student=>{res.json(student)})
        .catch(console.error.bind(console,'error: '))
    },

    update: (req,res)=>{
        Student.update({name:req.body.oldName}, {name:req.body.name}, {new:true})
        .then((student)=>{return student})
        .catch(console.error.bind(console,'error: '))
    }

}}

