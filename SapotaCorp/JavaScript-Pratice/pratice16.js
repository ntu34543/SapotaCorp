async function demo() {
    let database = await connectToDatabase();
    let user = await getUser(database);
    let setting = await getUserSetting(database);
    await EnableAccess(user, setting);
}


//Tạo promise
let promise = new Promise(
    function(result,reject){
        result('success') //trả về result
    }
)
//Gọi lại promise
promise()
.then(function(result){// nhận lại result
    console.log('Thành công ',result);
})
.catch(function(er){
    console.log('Có lỗi');
})
.finally(function(){
    console.log('Hoàn thành');
})
//Result
// Thành công  success
// Hoàn thành


//tham trị: biến sẽ được lưu trực tiếp vào vùng nhớ

//tham chiếu: nó sẽ lưu địa chỉ của kho chứa, chứ ko ko lưu trực tiếp vào vùng nhớ


