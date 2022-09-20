// nhìn tên function là biết ngay nó thực việc nhân 2 số rồi chứ 
const multiplication = function(a,b){
    // nhân 2 param đầu vào với nhau
    return a * b ;
}

// "operation" có nghĩa là "phép toán" trong Toán học 
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// chạy function applyOperation và kiểm tra kết quả
console.log(applyOperation(6, 9, multiplication))