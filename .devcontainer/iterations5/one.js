// for

for(let i = 1; i<=10; i++){
    // console.log(i);
}


for(let i = 2; i<=20;i++){
    // console.log(`outer loop value: ${i}`);
    for(let j = 1; j<=10; j++){
        // console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' +j + '=' + i*j);
    }
}

let array = ["flash", "superman", "batman"];
for(let i = 0; i<array.length; i++){
const element = array[i];
// console.log(element);
}


//break and continue

for(let i =1; i<=20;i++){
  if(i === 5){
    console.log(`value detected 5`)
    break;
  }  
 console.log(`value of i is: ${i}`);
} 