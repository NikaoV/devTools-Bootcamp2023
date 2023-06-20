function drawX(num){

    if (num % 2 !== 0){
        throw TypeError('El numero debe ser par')
    }

    for(let i = 0; i <= num; i++){
        for(let j = 0; j <= num; j++){
            if(i === j || i+j === num){
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        console.log("");
    }
}
drawX(4);