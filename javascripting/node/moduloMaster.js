var mymodule = require('./ModuloFiltroArchivo.js');
var fs = require ('fs');
var path = require ('path');

if (process.argv.length>2){
  var ruta = process.argv[2],
      ext = process.argv[3];

  mymodule(ruta,ext,function(err,data){
  	if (err){console.log(err);}
  });
}

