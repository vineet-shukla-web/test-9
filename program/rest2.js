// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   var result=myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
//   console.log("=====",result);

function myBio(firstName, lastName, middlename) { 
    return `${firstName} ${lastName} ${middlename}`;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  var result=myBio(...["CodeSweetly", "Web Developer", "Male"]);
  console.log(result);