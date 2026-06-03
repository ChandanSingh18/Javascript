// for of

//["", "", ""]

//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const item of arr){
    // console.log(item);
} 

const greeting = "chandan singh"

for(const greet of greeting){
    // console.log(`each char is ${greet}`);
}

// Map

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India")

console.log(map.get("IN"));

for(const [key, value] of map){
    console.log(key, ":-", value);
}
