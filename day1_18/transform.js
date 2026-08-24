const fs = require('fs')
const zlib = require('zlib') // contains the methods for compressing and decompressing data

const readStream = fs.createReadStream('./file2.tx')
const gzip=zlib.createGzip()
const writeStream = fs.createWriteStream('./new.txt')
readStream.on('end ',(error) => {
    console.log(error)
})
readStream.pipe(gzip)
.pipe(writeStream)