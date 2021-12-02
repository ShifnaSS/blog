const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OldKeralaBlog');//'mongodb://localhost:27017/MyLibraryMain'

const schema = mongoose.Schema;

const ImageSchema = new schema({
    myimage : String,
    desc : String,
    comment : String
});

var image = mongoose.model('images',ImageSchema);
module.exports = image;