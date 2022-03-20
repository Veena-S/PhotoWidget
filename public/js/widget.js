const options = {
    cloudName: "vsnair",
    uploadPreset: "sample_d32b076fd6864a6cd5d21176a8c8283dbc4b0024",
    maxImageWidth: 750,
    maxImageHeight: 750,
    validateMaxWidthHeight: true,
    tags: ["cl-veena_nair"],
    thumbnails: ".photos .thumbnails",
    thumbnailTransformation: [
      { crop: "thumb", gravity: "face", height: 150, width: 150 }
    ]
  }


const thumbnailsArray = [];

const handleResults = (error, result) => {
    if (!error && result && result.event === "success") 
    {
      console.log("Done! Here is the image info: ", result.info);
      thumbnailsArray.push( result.info);
    }
  }

var widget = cloudinary.createUploadWidget( options, handleResults );

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    widget.open();
  },
  false
);
