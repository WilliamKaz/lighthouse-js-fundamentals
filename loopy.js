function loopy(){
  for(i = 100; i <= 200; i++ ){
    var skip  =0;
    if(i % 4 === 0  && i % 3 === 0){
      console.log('LoopyLighthouse');
    } else if( i % 4 === 0 ){
      console.log('Lighthouse');
    } else if( i % 3 === 0 ){
      console.log("Loopy");
    } else if(!skip) {
      console.log(i);
    }
  }
}

loopy();

