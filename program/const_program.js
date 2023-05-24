const a = {

    en: 'Hello',
   
    de: 'Hallo',
   
    es: 'Hola',
   
    pt: 'Olà'
   
   }
   let b = a
   b.pt = 'Oi'
   console.log(b.pt)
   console.log(a.pt) 

//    const a1 = {
//     foods: {
//       dinner: 'Pasta'
//     }
//   };
//   let b = {...a1};
//   console.log(b);
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
//   var res=myBio("Oluwatobi","Sofela","CodeSweetly","Web Developer","Male","sk")
//   console.log(res);

const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
console.log(arr1.toString());
arr1[2] = "Narayan"; 
console.log(arr1);

