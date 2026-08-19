const buffer = Buffer.from("Tarun")
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.length)

// const buffer2 = Buffer.alloc(20);
// console.log(buffer2);
// console.log(buffer2.toString());
// console.log(buffer2.length)
const buffer3 = buffer[3];
console.log(String.fromCharCode(buffer3));