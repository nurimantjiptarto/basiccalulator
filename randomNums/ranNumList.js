function rndmNumList(a,b) {
    let rndmList = [];
    while (a < b){
        rndmList.push(Math.random() * t);
    }
    
    return rndmNumList;

}

function rndmListWSeed(){
    let rndmListWSeed = [];
    for( var i = 0; i < length; i++ ){
        rndmListWSeed.push(Math.random());
    }


}

function rndmListNum(arr, n){
    var result = new Array(n), len = arr.length, taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;


}

