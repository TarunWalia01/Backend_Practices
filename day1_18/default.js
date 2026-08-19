const os = require('os');
// console.log(`OS Platform:   ${os.platform()}`);
// console.log(`Architecture:  ${os.arch()}`);
// console.log(`Machine Type:  ${os.machine()}`);
// console.log(`OS Uptime:     ${(os.uptime() / 3600).toFixed(2)} hours`);

// console.log('\n--- MEMORY INFO ---');
// const totalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
// const freeGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
// console.log(`Total Memory:  ${totalGB} GB`);
// console.log(`Free Memory:   ${freeGB} GB`);

console.log('\n--- USER & PATHS ---');
console.log(`Hostname:      ${os.hostname()}`);
console.log(`Username:      ${os.userInfo().username}`);
console.log(`Home Dir:      ${os.homedir()}`);
console.log(`Temp Dir:      ${os.tmpdir()}`);
