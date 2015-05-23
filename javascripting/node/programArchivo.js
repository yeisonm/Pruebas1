var fs = require ('fs');

if (process.argv.length>1){
  var ruta = process.argv[2],
     varch;

  arch = fs.readFileSync(ruta);
  varch = arch.toString().split("\n");
  console.log(varch.length-1);

/*  if(arch.toString().endsWith("\n")){
    console.log(varch.length-1);
  }else{
    console.log(varch.length);
  }*/

}


