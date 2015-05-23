var fs = require ('fs');

if (process.argv.length>1){
  var ruta = process.argv[2],
     varch;

  arch = fs.readFile(ruta,function(err,data){
      data = data.toString().split("\n");
      console.log(data.length-1);
  });

}


