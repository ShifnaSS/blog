const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const image = require('./src/model/imagedata');
const commoncomments = require('./src/model/commentdata');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.get('/comments',(req,res)=>{
    res.header("Access-Controll-Allow-origin","*");
    res.header("Access control methods: GET,POST,PATCH,PUT,DELETE");
    commoncomments.find()
    .then(function(comments){
        res.send(comments);
    });
})
app.post('/insert',function(req,res){
    console.log("entered")
    console.log(req.body.old)
    var newimage = {
         myimage : req.body.old.myimage,
         desc : req.body.old.desc
    } 
    var Item = new image(newimage);
    Item.save();
})
app.post('/addcomment',function(req,res){
    console.log("entered")
    console.log(req.body.cmnt)

    var cmnt = {
        commentline : req.body.cmnt
    }
    var Item = new commoncomments(cmnt);
    Item.save();
})
app.get('/get',(req,res)=>{
    res.header("Access-Controll-Allow-origin","*");
    res.header("Access control methods: GET,POST,PATCH,PUT,DELETE");
    image.find()
    .then(function(images){
        res.send(images);
    });
})
app.put('/update',(req,res)=>{
    id=req.body.data._id,
    oldcomment = req.body.data.comment,
    comment= req.body.newcomment
   image.findByIdAndUpdate({"_id":id},
                                {$set:{"comment":comment,
                                }})
   .then(function(){
       res.send();
   })
 })
app.get('/:id', (req, res) => {
  
    const id = req.params.id;
      image.findOne({"_id":id})
      .then((image)=>{
          res.send(image);
      });
  })
 
app.listen(3300,function(){
    console.log("server ready at port number 3300")
});