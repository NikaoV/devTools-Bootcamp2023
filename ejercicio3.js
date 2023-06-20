function countNameRepetitions(names){
    let conteo = {};
 
    for (const i of names) {
     if (conteo[i]) {
         conteo[i] += "*";
     }else {
         conteo[i] = "*";
     }
    }
     return conteo
 }
 
 let nombres = ['nicolas', 'nicolas', 'nicolas', 'paola','paola', 'diego','diego','diego','diego', 'daniel', 'Danilo', 'Danilo']
 
 console.log(countNameRepetitions(nombres));
 