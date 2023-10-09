import fs from 'fs'
const args = process.argv[2] || './';
fs.readdir(args,(err,files)=>{
    if (err) {
        console.log("error :",err)
    }else{
        let tab= []
        for (let index = 0; index < files.length; index++) {
            let path = `${files[index]}`
            path=path.slice(0,path.length-5)
            let firstName= path.split('_')[0]
            let lastname=path.split('_')[1]
            tab[index]=(lastname+" "+firstName)
        }
        tab=tab.sort()
        for (let index = 0; index < tab.length; index++) {
            console.log(index+1+". "+tab[index]);
        }
    }
})