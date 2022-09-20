//Giựa vào mảng đó để in ra số tuổi hiện tại
const birthYear = [1997, 1984, 2005, 1966];

//Giựa vào mảng đó để in ra số tuổi hiện tại

//Cách 1
let newArray = birthYear.map(function(year){
    return 2022-year
})

//Cách 2
let newArray1=[];
function convertAge(array){
    for(let i = 0; i<array.length; i++){
        newArray1.push(2022-array[i])
    }
    return newArray1;
}

//Cách 3
let newArray2= birthYear.forEach(function(year,index){//dùng forEach thì ko thể trả về 1 mảng mới được
    console.log(2022-year);
})


console.log(convertAge(birthYear));

console.log(newArray);  

// console.log(newArray2);