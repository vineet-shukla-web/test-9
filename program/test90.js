// var arr=[40,40,30,50,90,50,70,90];


//     //int numRay[] = { 0, 4, 3, 2, 7, 8, 2, 3, 1 };
//     //var arr_size = sizeof(arr) / sizeof(arr[0]);
//     var arr_size = arr.length/arr[0].length;
//     console.log(arr_size);
//     var i;
//     // count the frequency
//     for (i = 0; i < arr_size; i++) {
//         arr[arr[i] % arr_size]= arr[arr[i] % arr_size] + arr_size;
//     }
    
//     for (var  i = 0; i < arr_size; i++) {
//         if (arr[i] >= arr_size * 2) {
//             console.log(i);
//         }
//     }
    //return 0;

    var a={
        name:'vineet',
        age:29,
        address:{
            city:"gkp"
        }
    }
    var b=a;
    b.age=50;
    b.city="gzb";
    console.log(a);
    console.log(b);
    var z=20;
    var b1=z;
    b1=50;
    console.log(z);
    console.log(b1);
