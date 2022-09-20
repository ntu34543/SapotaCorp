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
let result1 = traicays.map(function(traicay){
    return(
        traicay.price>15
    )
 });
 
 console.log(result1);
 //[ true, true, false, false ]

 let result2 = traicays.map(function(traicay){
    return(
        traicay
    )
 });
 
 console.log(result2);
 /*[
    { name: 'xoài', price: 17, type: 'good' },
    { name: 'ổi', price: 18, type: 'good' },
    { name: 'táo', price: 10, type: 'bad' },
    { name: 'cam', price: 10, type: 'good' }
  ]*/