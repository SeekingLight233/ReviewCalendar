//初始化数据库并连接
const mongoose = require('mongoose');
var Schema = mongoose.Schema
//连接数据库

mongoose.connect('mongodb://127.0.0.1:27017/word', {useNewUrlParser: true});

//设计数据库结构
var UserSchema = new Schema({
    word:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:false
    },
    data:{
        type:Date,
        default:Date.now
    },
    defn:{
        type:String,
        required:false
    },
    commit:{
        type:String,
        required:false
    },
    audio:{
        type:String,
        required:false
    },
    status:{
        type:Number,
        required:true
    }
    
  });
exports.UserSchema = UserSchema;

