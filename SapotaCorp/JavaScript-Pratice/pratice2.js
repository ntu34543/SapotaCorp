
interns = [
    {
      ID: 1,
      name: 'Sỷ Nguyễn',
      isActive: true,
      skills: ['HTML','CSS', 'React native', 'Flutter']
    },
    {
      ID: 2,
      name: 'Dũng Trần',
      isActive: true,
      skills: ['HTML','CSS', 'React JS']
    },
    {
      ID: 3,
      name: 'Hùng Nguyễn',
      isActive: true,
      skills: ['HTML','CSS', 'NextJS']
    },
    {
      ID: 4,
      name: 'Sen Hồ',
      isActive: true,
      skills: ['HTML','CSS', 'Javascript']
    },
  ]

/*YÊU CẦU */
  // In ra thông tin inter theo dạng sau:
  // Ex: Sỹ Nguyễn: HTML | CSS | React native | Flutter

/*BÀI LÀM */
let result = interns.map(function(item, index){
    console.log(item.skills.join(' | '));

    return item.name+': ' + item.skills.join(' | ');   //sử dụng join() để thay đổi ký tự cách giữa các phần tử của mảng
})

console.log(result.length);