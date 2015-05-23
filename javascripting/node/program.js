var arg = process.argv,
  total=0;


for (var i=2 ; i<arg.length ; i++){
  total = total + Number(arg[i]);
}

console.log(total);

