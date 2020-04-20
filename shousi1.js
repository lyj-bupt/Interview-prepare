// 实现两个升序数组合成一个升序数组
var a = [1,3,5,7,9];
var b = [2,4,6,8];
var i=j=0,c=[],a_length=a.length,b_length=b.length;
while(i<a_length && j<b_length){
    if(b[j]>a[i]){
        c.push(a[i]);
        i++;
    }else{
        c.push(b[j]);
        j++;
    }
}
while(i<a_length){
    c.push(a[i]);
    i++;
}
while(j<b_length){
    c.push(b[j]);
    j++;
}
console.log(c);

// 京东笔试题，验证6组数据是否可以组成长方体
var width=[1345,2584,2584,683,683,2584];
var height = [2584,683,1345,1345,1345,683];
var temp = 0;
for(let j=0;j<6;j++){
    if(width[j]<height[j]){
        temp=width[j];
        width[j]=height[j];
        height[j]=temp;
    }
}
for(let k=0;k<6;k++){
    for(let l=0;l<5-k;l++){
        if(width[l]<width[l+1]){
            temp=width[l];
            width[l] = width[l+1];
            width[l+1]=temp;
            temp=height[l];
            height[l]=height[l+1];
            height[l+1]=temp;
        }
    }
}
var flag = true;
for(let m=0;m<6;m=m+2){
    if((width[m]!=width[m+1]) || (height[m]!=height[m+1])){
        flag = false;
    }
    if((width[0]!=width[2]) || (height[0]!=width[4]) || (height[2]!==height[4])){
        flag = false;
    }
}
if(flag){
    console.log("POSSIBLE");
}else{
    console.log("IMPOSSIBLE");
}

// 京东笔试题求最小亏损
var q = 3;
var kui = 0;
var day = 1;
var money=[1,2,3,4,5];
var nums = 5
var max = 2;
money.sort();
if(q>=nums){
    for(let i = money.length-1;i>=0;i=i-max){
        for(let j=0;j<max;j++){
            kui=kui+money[i-j]*day;
        }
        day=day+1;
    }
}else{
    for(let i = q-1;i>=0;i=i-max){
        for(let j=0;j<max;j++){
            if(i>=j){
                kui=kui+money[i-j]*day;
            }else{
                break;
            }
            
            console.log(kui);
        }
        day=day+1;
    }
}
console.log(kui+'/n');

// 求一个字符串中每个字符出现的次数
function countNum(arr) {
    var count = new Map();
    var num = 0;
    for (let i=0;i<arr.length;i++){
        if (count.has(arr[i])){
            num = count.get(arr[i]);
            num = num+1;
            count.set(arr[i],num);
        }else{
            count.set(arr[i],1);
        }
    }
    console.log(count);
}
var str = 'abbaefcz';
var arr = str.split("");
countNum(arr);

// 数组扁平化
function flatten (arr) {
    var newArr = [];
    for (let i=0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arr = [1,2,[3,[4,5]],[6,7,8]];
console.log(flatten(arr));

// 求字符串中最大不重复子字符串
function search(str) {
    var arr = str.split("");
    var count = new Array();
    var child = new Array();
    var max = 0;
    for(let i=0;i<arr.length;i++){
        if (count.indexOf(arr[i])===-1){
            count.push(arr[i]);
        }else{
            if(count.length>max){
                max = count.length;
                child = count.concat();
            }
            for(let j=0;j<=count.indexOf(arr[i]);j++){
                count.shift();
            }
            count.push(arr[i]);
        }
    }
    console.log(child);
  }
var str = 'aacbredacbgflseas';
search(str);