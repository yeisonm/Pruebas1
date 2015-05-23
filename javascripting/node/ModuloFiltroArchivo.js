module.exports = function(arch,ext,fcallback){
	var fs = require ('fs'),
		path = require ('path');

	fs.readdir(arch,function(err,list){
		var lista=[];
		if (err){
			return fcallback(err,lista);	
		} 
     	for (var i=0;i<list.length ;i++){
	       if (('.'+ext) == path.extname(list[i])){
	       	  lista.push(list[i])
	       	  console.log(list[i]);
	       }
	    }
	    fcallback(null,lista);
  });
}

