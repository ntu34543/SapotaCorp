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
    },
    {
        name:'cam',
        price:11,
        type:'good'
    }
]

/*YÊU CẦU*/
//Tạo phương thức reduce() bằng callback

//Tính tổng giá trái cây trong mảng

/* BÀI LÀM */
Array.prototype.reduce2 = function(callback,result){
    let index =0;
    console.log("length đối số",arguments.length);
    if(arguments.length < 2){// kiểm tra có bao nhiêu đối số truyền vào
        index = 1;
        result = this[0]//gán phần tử đầu tiên trong mảng
        
        return result;
    }

    for(index = 0;index < this.length; index++){
        
        result =  callback(result,this[index],index,this)
    }
    
    return result;
}

let result = traicays.reduce2(function(total,traicay,index,traicays){
    total = total + traicay.price;
    return total
},0)
//Nếu ko truyền giá trị khởi tạo thì reduce sẽ tra về phần tử đầu tiên trong mảng

console.log("Kết quảs:", result);