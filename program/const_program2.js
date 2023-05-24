function display(...args) {  
    console.log(args)
    let ans = 1;  
    for (let i of args) {  
        ans *= i;  
    }  
    console.log("Product = "+ans);  
  }  
    
  var result=display(4, 2, 3);
  console.log(result);