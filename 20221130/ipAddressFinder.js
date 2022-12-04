function ipFinder(str) {
    const asciiArr = [...str].map(char => char.charCodeAt());
    const sum = asciiArr.reduce((acc, curr) => acc + curr);
    let address = [];
    for(let i = 1; i <= 4; i++ ) {
        address.push(sum * i % 256);
    }
    return address
}

const address = "www.codewars.com" ;
console.log(ipFinder(address));