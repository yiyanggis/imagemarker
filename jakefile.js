build=require("./build/build.js");

desc('This is the default task.');
task('build', [], function (params) {
  console.log('This is the default task.');
  //console.log(params);
  var version="1.1";
  build.build(version);
});

