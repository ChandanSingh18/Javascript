const myobject = {
    js: "javascript",
    cpp: "c++",
    css: "cascading style sheet",
}


// for (const key in myobject) {
//     if (myobject.hasOwnProperty.call(myobject, key)) {
//         const element = myobject[key];
//         console.log(key, ":-", element);
//     }
// }

for(const key in myobject){
    // console.log(`${key } shortcut is for ${myobject[key]}`);
}

const programming = ["javascript", "c++", "python", "java"]

for(const key in programming){
    console.log(key);
}