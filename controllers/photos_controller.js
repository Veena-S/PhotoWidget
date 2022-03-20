var cloudinary = require('cloudinary').v2;
var crypto = require('crypto');
var multipart = require('connect-multiparty');
var schema = require('../config/schema');

var Photo = schema.models.Photo;


function index(req, res) 
{
  Photo.all().then(function (photos) 
  {
    res.render('photos/index', { photos: photos });
  });
}


module.exports.wire = function (app) 
{
  // index
  app.get('/', index);
  app.get('/photos', index);  
};
