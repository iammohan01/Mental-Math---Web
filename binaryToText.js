let c ="101110111001 101110110010 101111001011 100000 101110101010 101110011010 101110011001 101111001101 101110010101 101110110011 101110111110";

let binaryString = "";
let binaryTOString = "";
for (let x = 0;x<c.length-1;x++){
    if (c[x] !=" "){
        binaryString+=c[x]
    }
    else {
        binaryTOString += binaryToNumber(binaryString);
        binaryString=""
    }
}
console.log(binaryTOString)


binaryToNumber("101110111001");
function binaryToNumber(binary){ 
    let count = 0;
    let sum =0;
    for (let i= binary.length-1;i>=0;i--){
        sum += Math.pow(2,count++)*Number(binary[i]);
    }
    // console.log(sum);
    return(String.fromCodePoint(sum))
}
