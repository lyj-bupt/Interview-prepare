// 深拷贝实现
// 1、使用JSON.stringify和JSON.parse,只适用于没有方法的拷贝
let deepClone1 = function(obj) {
    let _tmp = JSON.stringify(obj);
    let result = JSON.parse(_tmp);
    return result;
};
let obj1 = {
    wei:{
        age:20,
        class:1502
    },
    liu:{
        age:21,
        class:1503
    }
}
let obj2 = deepClone1(obj1);
obj1.liu.age = 22;
console.log(obj2);

// 2、使用for...in实现遍历和复制
function deepClone2(obj) {
    let result = typeof obj.splice === "function" ? [] : {}; // 判断是数组还是对象，有很多别的判断方法
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object'){
                result[key]=deepClone2(obj[key]);
            }else{
                result[key]=obj[key];
            }
        }
        return result;
    }
    return obj;
}

// 利用数组的Object.prototype.forEach()
function deepClone3 (obj) {
    let newObj = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function(items){
        let item = Object.getOwnPropertyDescriptor(obj,items);
        Object.defineProperty(newObj,items,item);
    });
    return newObj;
}
