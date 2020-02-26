function helloWorld(){
    var num = 1;
    var numIncre = num++;
    // ans is 1 
    // console.log('numIncre',numIncre); 
    // ans is 2 because the new value after adding in num
    // console.log('num2',num); 
    //  console.log('numIncre2',numIncre);

    var numBefAdd = 1;
    var numIncreBefAdd = ++numBefAdd; 
    // ans is 2 because the new value after adding in num
    // console.log('numIncreBefAdd',numIncreBefAdd); 
    // ans is 2 because the new value after adding in num
    // console.log('num2BefAdd',numBefAdd); 

    // console.log('numIncreBefAdd',numIncreBefAdd); and now its giving value 2

    // but in loop (numIncreBefAdd) it will first give 1 than second time it will give increment value of (numBefAdd)

    var numDcre = 1;
    var numNewDcre = numDcre--;
    // console.log('numNewDcre',numNewDcre); ans is 1
    // console.log('numNewDcre',numDcre); ans is 0 becz it will assign dcrement in value

    var numDcreBefSub = 1;
    var numNewDcreBefSub = -- numDcreBefSub;
    // console.log('numNewDcre',numNewDcreBefSub); ans is 0 becz new value now is --
    // console.log('numNewDcre',numDcreBefSub); this value is 0 now for dcrement --

}
helloWorld()