const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        unique:[true, "email id already present"],
        validator(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min: 10,
        unique: [true, "phone number already exit"]
    },
    address: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;