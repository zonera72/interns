let multi=1;

let countDownFrom= (num,multi)=>{
 
    
    if(multi ===11){
        return;
    }
    console.log((num)+"*"+(multi)+"="+((num)*(multi)));
    countDownFrom(num,multi=multi+1);
   
}

countDownFrom(2,multi)