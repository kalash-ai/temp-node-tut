const {readFile , writeFile}= require('fs')

readFile('./Content/first.txt', 'utf-8', (err, data)=>{
    if(err){
        return err

    }
    const first = data

readFile('./Content/second.txt', 'utf-8', (err, data)=>{
    if(err){
        return err
    }
    const second = data

writeFile('./Content/praccoderesu', 
            `This is our first file: ${first}, 
            this is our second file ${second}`, (err, result)=>{
                if(err){
                    return err
                }
                
            console.log("DONE" )
        return result
        })

    })
    })