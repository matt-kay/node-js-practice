console.log("hey Mattosha");
setTimeout(function(){
  console.log("3 second have passed");
},3000);

var time = 0;
setInterval(function(){
  time += 2;
  console.log(time + "second had passed");
},2000);

console.log(" the directory name is  " + __dirname + "  and the file name is" + __filename);
