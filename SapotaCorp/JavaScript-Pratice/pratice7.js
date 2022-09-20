var users =[
    {
        id: 1,
        name:'Manh',
        coins:10
    },
    {
        id: 2,
        name:'Long',
        coins:20
    },
    {
        id: 3,
        name:'Huy',
        coins:30
    },
    {
        id: 4,
        name:'Ky',
        coins:10
    }
]

//Lọc ra các user có coins lớn hơn 10
var newArray = users.filter(function(user){
    return user.coins>10;
})

console.log(newArray);


//result: [ false, true, true, false ]




