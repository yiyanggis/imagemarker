var browserify = require('browserify');
var fs=require('fs');
var b = browserify();

exports.build=function(version){
	b.add("./src/Marker.js");
	console.log(version);
	b.bundle(function(err, buf){
		console.log("success");
		console.log(err);
		console.log(buf);

		fs.writeFile("./dist/imageMarker.js", buf, function(err) {
		    if(err) {
		        return console.log(err);
		    }

		    console.log("The file was saved!");
		}); 
	});
}

