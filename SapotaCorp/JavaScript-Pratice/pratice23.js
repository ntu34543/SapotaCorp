//THỰC HIỆN SO SÁNH GIỮA DEEPCOPY VÀ SHALLCOPY
let user = {
    name:'Manh',
    age:20
}

let userCoppy= JSON.parse(JSON.stringify(user))
const obj = {...user} 

//tạo ra một biến mới gắn user object vào
userCoppy.age=22;
//Thực hiện thay đổi thuộc tính age của object user
console.log("User",user);//User { name: 'Manh', age: 20 }
console.log("UserCoppy",userCoppy);//UserCoppy { name: 'Manh', age: 22 }




