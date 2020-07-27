//Drugi zadatak

let n = 5;
let red = '';

for(let i = 1; i<n; i++){
    red = ' '.repeat(n-i) + '*'.repeat(i) + '*'.repeat(i-1) +' '.repeat(n-i);
    console.log(red); // gornji deo- uspravan trougao
}

red = '*'.repeat(n-1) + ' '.repeat(n-(n-1)) + '*'.repeat(n-1);
console.log(red); // sredina

for(let i = n-1; i<n;i--){
    red = ' '.repeat(n-i) + '*'.repeat(i) + '*'.repeat(i-1) + ' '.repeat(n-1);
    console.log(red); // donji deo- obrnuti trougao
} 





