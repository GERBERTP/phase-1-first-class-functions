let receivesAFunction = function (callback){
    return callback()
};

let myCallBack = function () {
    return "we hit my call back"
};
console.log(receivesAFunction(myCallBack));



let returnsANamedFunction = function (){
    return receivesAFunction
};



let returnsAnAnonymousFunction = function(){
    return function() {
        console.log("Hello, world");
    };
};
