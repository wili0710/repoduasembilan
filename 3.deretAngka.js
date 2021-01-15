const deretAngka=(input)=>{
    let output = []
    let nextNumber
    for(let x=0;x<input;x++){
        if(x>1) {
            nextNumber=output[x-1]+output[x-2]
            output.push(nextNumber)    
        }
        else output.push(x)
    }
    return output
}

console.log(deretAngka(20))