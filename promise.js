function buy(){
    console.log("开始买笔");
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("买了笔芯");
            resolve("数学作业");
        },1000);
    });
    return p;
}
function work(data) {
    console.log("开始写作业:"+data);
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("写完作业");
            resolve("作业本");
        },1000);
    });
    return p;
}
function out(data) {
    console.log("开始上交："+data);
    var p = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("上交完毕");
            resolve("得分：A");
        },1000);
    });
    return p;
}
buy().then(work).then(out).then(function(data){
    console.log(data);
});

function rebuy() {
    console.log("开始买笔");
    var q = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("买笔失败");
            reject("没带够钱");
        },1000);
    });
    return q;
}
function rework() {
    console.log("开始写作业："+data);
    var q = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("写完作业");
            resolve("作业本");
        },1000);
    });
    return q;
}
rebuy().then(rework,function(data){
    console.log(data);
})

function cutUp() {
    console.log("挑作业本");
    var r = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("挑好购买作业本");
            resolve("新的作业本");
        },1000)        
    });
    return r;
}
function boil() {
    console.log("挑笔芯");
    var r = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("挑好购买笔芯");
            resolve("新的笔芯");
        },1000)        
    });
    return r;
}
Promise.all([cutUp(),boil()]).then(function(results){
    console.log("写作业的工具买好啦");
    console.log(results);
})

function requestImg() {
    var s = new Promise(function(resolve,reject){
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = 'xxxxx';
    });
    return s;
}
function timeout() {
    var s = new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("请求时间超时");
        },5000)
    });
    return s;
}
Promise.race([requestImg(),timeout()]).then(function(results){
    console.log(results);
}).catch(function(reason){
    console.log(reason)
});
