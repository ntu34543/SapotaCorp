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

/*YÊU CẦU */
//tính tổng các trái cây có giá lớn hơn 10
let result = traicays.reduce((tamp,item,index,traicay)=>{
  
    console.log(item.price);
    if(item.price>10){
        tamp = tamp+item.price
    }
    return tamp// bỏ return ở ngoài if
},0)
    
console.log(result);