const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OldKeralaBlog');//'mongodb://localhost:27017/MyLibraryMain'

const schema = mongoose.Schema;

const CommentSchema = new schema({
    commentline:String
});

var commoncomments = mongoose.model('comments',CommentSchema);
module.exports = commoncomments;