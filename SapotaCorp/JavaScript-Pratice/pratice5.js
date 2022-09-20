
// Cho mảng object
const users = [
  {
    ID: 1,
    name: 'Sỷ Nguyễn',
    isActive: true
  },
  {
    ID: 2,
    name: 'Dũng Trần',
    isActive: null
  },
  {
    ID: 3,
    name: 'Hùng Nguyễn'
  },
  {
    ID: 4,
    name: 'Sen Hồ',
    isActive: undefined
  },
]
 
 
 
/*YÊU CẦU* */
// const usersID = [1,3]
const newUsersID = [3,4]
const newUser = users.filter((user,index) => {
  return !(newUsersID.includes(user.ID));
})
console.log(newUser);
 
/*
Từ mảng users tạo ra một mảng newUsers mới sao cho newUsers không chứa các phần tử có ID trùng với list ID trong usersID
*/
 
 
 
//Bài làm
// const newUser = users.filter((user,index) => {

//    return !(usersID.includes(user.ID));
// })
// console.log(newUser);
