for(let i = 1; i <= 50; i++){
    let resultado = "";
    if(i % 3 == 0){
        resultado += "Fizz";
    }
    if(i % 5 == 0){
        resultado += "Buzz"
    }
    console.log(resultado || i);
} 