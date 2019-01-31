const mongoose = require('mongoose');
const Schema = mongoose.Schema


projectSchema = new Schema({
    title:String,
    unit: String
   // studentId: mongoose.Schema.Types.ObjectId
})

studentSchema = new Schema({
    n:{
        type:String,
        required:[true,'el campo name es obligatorio'],
        alias:'name'
    },
    age:{
        type:Number,
        validate:[function(age){
            return age>=0&age<=99
              
            
        },
        'edad entre 0-99']
    },
    projects:[{type: Schema.ObjectId, ref:'Project'}]

})



studentSchema.pre('save', async function() {
    this.name = this.name.toUpperCase()
    //console.log(this.name)
  });

studentSchema.post('save', function(doc) {
    console.log('%s has been saved', doc._id);
  }); 
  
studentSchema.post('remove', function(doc) {
    console.log('%s has been remove', doc._id);
  }); 
  


Student = mongoose.model('Student',studentSchema)
Project = mongoose.model('Project',projectSchema)

module.exports = {
    Student, Project
}