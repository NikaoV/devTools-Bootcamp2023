function drawX(){
    for(let i = 0; i <= 4; i++){
        for(let j = 0; j <= 4; j++){
            if(i === j || i+j === 4){
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        console.log("");
    }
}
drawX(5);