const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Specilist: {
        type: String,
        required: false
    },
    Branch: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Summary: {
        type: String,
        required: false
    },
    internship_specialization: {
        type: String,
        required: false
    },
    internship_organisation:{
        type:String,
        required:false
    },
    training_course:{
        type:String,
        required:false
    },
    training_organisation:{
        type:String,
        required:false
    },
    skills:{
        type:String,
        required:false
    },
    hobbies:{
        type:String,
        required:false
    },
    profile:{
        type:String,
        required:false
    }
},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);
module.exports = User;