const patternLock=(input)=>{
    if(input.length>=5 && input.length<=7){
        for(let x=1;x<input.length;x++){
            if(input[x-1] === input[x]) {
                return 'Tidak'
            }
            else if(input[x-1]<1 || input[x-1]>9 || input[x]<1 || input[x]>9){
                return 'Tidak'
            }
            else if(input[x-1] === 1 && !(input[x] === 2 || input[x] === 5 || input[x] === 4 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 2 && (input[x] === 7 || input[x] === 8 || input[x] === 9 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 3 && !(input[x] === 2 || input[x] === 5 || input[x] === 6 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 4 && (input[x] === 3 || input[x] === 6 || input[x] === 9 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 5 && (input[x] === 5 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 6 && (input[x] === 1 || input[x] === 4 || input[x] === 7 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 7 && !(input[x] === 4 || input[x] === 5 || input[x] === 8 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 8 && (input[x] === 1 || input[x] === 2 || input[x] === 3 )) {
                return 'Tidak'
            }
            else if(input[x-1] === 9 && !(input[x] === 6 || input[x] === 5 || input[x] === 8 )) {
                return 'Tidak'
            }
        }
        return 'Ya'
    } else {
        return 'Tidak'
    }

}

console.log(patternLock([2,3,6,5,4,7,8,9])) // Lebih
console.log(patternLock([5,1,5,1])) // Kurang
console.log(patternLock([8,9,8,7,4,1,'a'])) // ada NaN
console.log(patternLock([10,9,8,7,4,1])) // diatas 9
console.log(patternLock([0,9,8,7,4,1])) // dibawah 1
console.log(patternLock([1,2,3,2,1]))
console.log(patternLock([5,1,2,3,6,9]))
console.log(patternLock([5,1,2,3,6,9,8]))
console.log(patternLock([5,1,5,1,2,3]))