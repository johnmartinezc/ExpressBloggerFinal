// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

const Blog = require('../model/Blogs');

/* GET home page. */
router.get('/', async function(req, res) {

  //query blogs 
  try {
    const allBlogs = await Blog.find({});
    res.json({blogs: allBlogs });
  }catch(e){
    console.log(e);
  }
});


module.exports = router;