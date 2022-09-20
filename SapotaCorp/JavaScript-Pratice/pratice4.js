// Cho object user có dạng
//   {
//     ID: number,
//     name: string,
//     isActive: boolean
//   },
 
//Viết hàm duyệt qua các phần tử và tạo ra 1 mảng newUser mới sao cho các item được tạo ra có dang
// {
//   ID: ID của item
//   name: name của item
//   isActive: is active của item  (nếu isActive là null hoặc undefined thì trả về true)
//   createdDate: new Date()
// }

 
//cho mảng object
const users = [
    {
      ID: 1,
      name: 'Sỷ Nguyễn',
      isActive: true
    },
    {
      ID: 2,
      name: 'Dũng Trần',
      isActive: false
    },
    {
      ID: 3,
      name: 'Hùng Nguyễn',
      isActive: null
    },
    {
      ID: 4,
      name: 'Sen Hồ',
      isActive: 0
    },
    {
        ID: 5,
        name: 'Huan Van',
        isActive: false
      }
  ]



//Bài làm

  let arrayNew = users.map(function(user){
      return{
         ... user,
          isActive: user.isActive ?? true,//nếu null hoặc undifile thì lấy vế phải, còn ko thì lấy vế trái
          createdDate:new Date()
      }
  })
 
  console.log(arrayNew);

  /* THAM KHẢO */

//  const user = users.map((value, index)=>{
//         return {
//             ...value,
//             isActive: value.isActive ?? true,
//             createdDate: new Date()
//         }
//   })
//   console.log(user);
