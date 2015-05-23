var http = require('http'),
	dir = process.argv[2];

http.get(dir, function(res) {
  
  res.on("data",function(data){
  	console.log(data.toString());
  })

});