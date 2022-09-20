let arrays =[
    {
        name: 'Manh',
        age:14.
    },
    {
        name: 'Lam',
        age:18.
    },
    {
        name: 'Quac',
        age:12.
    },
]

let sort = arrays.sort(function(a,b){
    return a.age<b.age?-1:1
})

console.log(sort);