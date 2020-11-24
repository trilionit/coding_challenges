"use strict";

let ar=[10, 10, 10, 20];
let n=2;

function sockMerchant(n, ar) {
    let newPairs=[];
    let sumOfPairs=[];
    let totalPair
    if(ar.length>=2){
        ar.forEach(pair=>{
            //create unique values
            //to be used to iterate through the array provided
            if(newPairs.indexOf(pair)==-1){
                newPairs.push(pair);
            }
        });
    }else{
        return 0;
    }
    
    //using the newPairs, iterate through the array to find unique pairs
    newPairs.forEach(val=>{
        let filtered= ar.filter(thisVal=>thisVal==val);
        if(filtered.length>1){
            //lets see the number of identical values per filter
            totalPair= filtered.length;
            let eachPair;
            //to see if the iterated values is a pair, divide by n(where n=2);
            if(totalPair>=n){            
                eachPair= Math.floor(totalPair/n);
                sumOfPairs.push(eachPair);    
            }
        }
        
    })

    //lets sum the sumofPairs to get the total pairs now
    if(sumOfPairs.length>0){
        return sumOfPairs.reduce((a, b)=>a+b);
    }else{
        return 0;
    }
}
console.log(sockMerchant(n, ar));