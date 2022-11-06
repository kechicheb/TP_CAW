//command structure is:
//      node node_file_name.js 'the string to search here' file1.txt file2.txt dir




const fs = require('fs')
const path = require('path')
var exists = false
var data
var absolute

const direc = (dir) => {
    fs.readdirSync(dir,'utf8').forEach(file => {
        absolute = path.join(dir,file)
        if(fs.lstatSync(absolute).isDirectory()){
            return direc(absolute)
        }else{
            data = fs.readFileSync(absolute, {encoding: 'utf-8', flag: 'r'})
            if(data.includes(process.argv[2])){
                console.log(file)
            }else{
                console.log(file+': NONE')
            }
        }
    })
}




const direc2 = (dir) => {
    fs.readdirSync(dir,'utf8').forEach(file => {
        absolute = path.join(dir,file)
        if(fs.lstatSync(absolute).isDirectory()){
            return direc2(absolute)
        }else{
            data = fs.readFileSync(absolute, {encoding: 'utf-8', flag: 'r'})
            if(data.includes(process.argv[2])){
                console.log(file)
                exists = true
            }
        }
    })
}














//show NONE for each file that doesnt contain the string
console.log('show NONE for each file that doesnt contain the string:')
for (let i = 3; i <= process.argv.length-1; i++) {
    if(fs.lstatSync(process.argv[i]).isDirectory()){
        direc(process.argv[i])
    }else{
        data = fs.readFileSync(process.argv[i], {encoding: 'utf-8', flag: 'r'})
        if(data.includes(process.argv[2])){
            console.log(process.argv[i])
        }else{
            console.log(process.argv[i]+': NONE')
        }
    }
}

console.log('###########################################################################')
//shows NONE only when no files contain the string
console.log("shows NONE only when no files contain the string:")
exists = false
for (let i = 3; i <= process.argv.length-1; i++) {
    if(fs.lstatSync(process.argv[i]).isDirectory()){
        direc2(process.argv[i])
    }else{
        data = fs.readFileSync(process.argv[i], {encoding: 'utf-8', flag: 'r'})
        if(data.includes(process.argv[2])){
            console.log(process.argv[i])
            exists = true
        }
    }
}
if(!exists){
    console.log('NONE')
}

