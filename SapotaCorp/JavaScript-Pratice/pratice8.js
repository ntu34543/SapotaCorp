//Biến b coppy từ biến a


let a = {
    name:'Manh',
    age:20
};

// let b = a;

let b = {'name':'Manh','age':'20'};

function copy (a){

    console.log(a);
    let b ={};
    const arrayKey= Object.keys(a);
    const arrayValue= Object.values(a);
    for (let index = 0; index < arrayKey.length; index++) {
        b[arrayKey[index]] = arrayValue[index]; 
        console.log(b[arrayKey[index]]);
    }
    return b;
}

console.log(copy({'name':'Manh','age':'21'}));
//Copy từng thằng

Object.keys //trả về mảng name và age
Object.values //trả về value


// console.log(Object.keys(a));
// console.log(Object.values(a));

/*CÁCH 1*/
// let b = Object.assign({},a);

/*CÁCH 2*/
//let b = {...a};

// b.name="Huy";
// b.age=22;

console.log(a);
// console.log(b);


