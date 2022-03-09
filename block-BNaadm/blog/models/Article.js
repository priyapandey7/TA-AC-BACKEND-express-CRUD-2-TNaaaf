var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var articleSchema = new Schema({
    title : {type : String, required : true},
    discription :{type : String, required : true},
    tags : [String],
    author :String,
    likes :{type : Number, default : 0},
    dislikes: { type: Number, default: 0 },
    comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
},{timestamps :true});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;