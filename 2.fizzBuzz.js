const fizzBuzz=(input)=>{
    let output=[]
    for(let x=1;x<=input;x++){
        if(x%3 === 0 && x%5 === 0) output.push(x+' FizzBuzz')
        else if(x%3 === 0) output.push(x+' Fizz')
        else if(x%5 === 0) output.push(x+' Buzz')
        else output.push(x.toString())
    }
    return output
}
let y=1

console.log(fizzBuzz(100))
console.log(fizzBuzz(100)[72-y])