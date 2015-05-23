var fs = require ('fs');
var path = require ('path');

if (process.argv.length>2){
  var ruta = process.argv[2],
      ext = process.argv[3];

  lista = fs.readdir(ruta,function(err,list){
     for (var i=0;i<list.length ;i++){
       if (('.'+ext) == path.extname(list[i])){
          console.log(list[i]);
       }
     }
  });

}

