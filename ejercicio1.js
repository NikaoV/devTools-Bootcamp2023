function next_pal(num) {
    for (let i = num + 1; ; i++) {
      if (String(i) == String(i).split("").reverse().join("")) {
        console.log(i)
        return i;
      }   
     }
  }
  next_pal(22)