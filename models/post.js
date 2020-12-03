let mongoose = require('mongoose')
let posSchema = mongoose.Schema({
    title : String,
    name : String,
    specialist : String,
    body : String,
    like : String,
    comment : Array,
    media : String,
    year : String,
    branch : String,
    email:String,
    pic : String,
    heart : Number
})
let post = mongoose.model('post',posSchema)
module.exports = {
post
}