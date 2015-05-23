var http = require('http'),
	dir = process.argv[2],
	streamTotal='';

http.get(dir, function(res) {
  
  res.on("data",function(data){
  	//console.log(data.toString().length);
  	streamTotal += data;
  });

  res.on("end",function(data){
  	console.log(streamTotal.toString().length);
  	console.log(streamTotal.toString());
  });

});