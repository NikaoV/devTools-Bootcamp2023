function drawX(num){
    for(let i = 1; i <= num; i++){
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
drawX(10);