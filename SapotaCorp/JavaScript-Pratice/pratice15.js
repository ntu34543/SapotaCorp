/*Cho object là 1 params có dạng sau*/
const params = {
  pageSize: 15, // (number)
  pageNumber: 3, //(number)
  isActiveUser: "Active", //(nhận 2 giá trị là "Active" và "Inactive")
  filter: "enouvo@enouvo.com", //(string),
  
}

/*viết hàm duyệt qua object params và chuyển đổi những params thành object mới có dạng sau */

queryParams = {
  limit: 15,
  offset: 45,
  isActive: true,
  filter: "enouvo@enouvo.com",
}


//Chú ý là viết hàm duyệt qua từng prop nha 

/*BÀI LÀM*/
// function converObject(object){
//     return{
//         limit:object.pageSize,
//         offset:object.pageSize*object.pageNumber,
//         isActive:object.isActiveUser==="Active"?true:false,
//         filter: object.filter
//     }
// }
// converObject(params)
// console.log(converObject(params));


console.log(convert(params));


function convert(obj) {
    let queryparams = {}
    for (let [key, value] of Object.entries(obj)) {
        switch (key) {
            case 'pageSize':
                queryparams.limit = value
                break;
            case 'pageNumber':
                queryparams.offset = obj.pageSize * value
                break;
            case 'isActiveUser':
                queryparams.isActive = value === 'Active' ? true : false
                break;
            case 'filter':
                queryparams.filter = value
                break;
            default:
                queryparams[key] = value
                break;
        }
    }
    return queryparams;
}