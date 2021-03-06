//对象深克隆
function deepClone(obj){
    //处理obj为正则、原始数据、
    if(typeof obj !== 'object') return obj;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj === 'symbol') return Symbol(obj);
    
    let newObj = new obj.constructor();
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj;
}
let obj = {
    name:'1111',
    obj:{
        in:'obj'
    },
    sy:Symbol('21111'),
    date:new Date(),
    reg:/\w*/g,
    arr:[1,2,3]
}
let sy2 = Symbol('21111');
obj[sy2] = 11111;
let obj2 = deepClone(obj);
obj.obj.in = 'hello';
obj.arr[2] = 6;
console.log(obj,obj2);
