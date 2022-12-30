const fs = require('fs')
import 
// const {currTime} = require("./timingEngine.js")

function readDb(dbName='db.json',query)
{
    const data =fs.readFileSync(dbName,"utf-8")
   var x=["c","c "," c "]
    
    const y=JSON.parse(data)

    var element= new Array()
    element.push(data.join(","))

    for (let i = 0; i <= data.length; i++) 
    {
        
        //element.push(data[i])
        console.log (element)
    }
    
    //console.log(element.length)
    
    

}

function writeDb(obj,dbName='db.json')
{
    if(!obj){return console.log("Please provide data to save!")}

    try{
        fs.writeFileSync(dbName,JSON.stringify(obj))
        return console.log('save successful')
    }catch(err){
        return console.log('save failed')

    }
}

function appendDb(obj,dbName="db.json")
{
    if(!obj){return console.log("Please provide data to save!")}

    try{
        fs.appendFileSync(dbName,JSON.stringify(obj))
        
        return console.log('save successful')
    }catch(err){
        return console.log('save failed')

    }
}

function clearDb(dbName="db.json")
{
            date = currTime()
            fs.writeFileSync(dbName,`{ "Cleared on" :"${date}" }`)
}

module.exports={readDb,writeDb,appendDb,clearDb}
