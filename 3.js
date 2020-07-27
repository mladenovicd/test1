//Treci zadatak

let k = 3;
let n = 35;
let suma = 0;
let proizvod = 1;

if(k<=n){
    for(i=k; i<=n; i++){
        if(i%3==0){
            suma+=i;
        }
        if(i%3!=0 && i%7==0){
            proizvod*=i;
        }
    }
}

if(k>=n){
    for(i=k; i>=n; i--){
        if(i%3==0){
            suma+=i;
        }
        if(i%3!=0 && i%7==0){
            proizvod*=i;
        }
    }
}

console.log(suma);
console.log(proizvod);