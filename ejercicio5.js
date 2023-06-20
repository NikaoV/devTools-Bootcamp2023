function drawX(num){

    if (num % 2 === 0){
        console.log("Debe ser un numero impar");
    }else{

    for(let i = 0; i < num; i++){
        for(let j = 0; j <= num; j++){
            if(i === j || i+j === num -1){
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        console.log("");
    }
}}
drawX(4);