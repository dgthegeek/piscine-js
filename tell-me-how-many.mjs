import fs from 'fs'

const args = process.argv[2] || './';

fs.readdir(args,(err,files)=>{
    if (err) {
        console.log("error :",err)
    }else{
        console.log(files.length)
    }
})