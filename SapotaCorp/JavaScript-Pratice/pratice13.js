const traicays=[
    {
        name:'xoài',
        price:17,
        type:'good'
    },
    {
        name:'ổi',
        price:18,
        type:'good'
    },
    {
        name:'táo',
        price:10,
        type:'bad'
    },
    {
        name:'cam',
        price:10,
        type:'good'
    }
]

let result = traicays.map(function(item){
    if(item.price>10){ // trái cây nào có giá lớn hơn 10 thì mới return ra, nếu ko thì sẽ return ra undefined
        return item;
    }
})

console.log(result);

console.log(typeof undefined);// là undefined
// Undefined có nghĩa là không xác định. Trong javascript, khi bạn khai báo một biến nhưng chưa gán giá trị cho nó, giá trị của biến đó sẽ là undefined.
console.log(typeof null);//Object
//Null có nghĩa là giá trị rỗng hoặc giá trị không tồn tại


console.log(undefined ===null); //false
console.log(undefined ==null);//true