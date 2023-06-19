function createphonenumber(numbers) { 
    let format = "(aaa) aaa-aaaa" 
    for (let i = 0; i < numbers.length; i++) 
    { 
        format = format.replace("a",numbers[i]); 
    } 
    console.log(format); 
    return format; 
} 
createphonenumber([6,0,8,5,4,5,6,7,8,9])