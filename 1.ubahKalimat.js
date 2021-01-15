const ubahKalimat=(input)=>{
    let arr=input.split(' ')
    let output=[]
    for(let x=0;x<arr.length;x++){
      output.push(arr[x].split('').reverse().join(''))
    }
    return output.join(' ')
}

console.log(ubahKalimat('italem irad irigayaj'))
console.log(ubahKalimat('iadab itsap ulalreb'))
console.log(ubahKalimat('nalub kusutret gnalali'))