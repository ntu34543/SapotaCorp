var person = {
    firstName: "Anh",
    lastName: "Tranngoc",
    showFullName: function() {
        // "Ngữ cảnh"
        // console.log(this.firstName + " " + this.lastName);
    }
}


var anotherPerson = {
    firstName: "VietPhuong",
    lastName: "Doan"
};

// Chúng ta có thể sử dụng phương thức apply để gán giá trị "this" một
// cách rõ ràng hơn trong phương thức apply.  "this" sẽ có giá trị của
// bất cứ thứ gì gọi hàm this.  Vì thế:
let result=person.showFullName.apply(anotherPerson); // VietPhuong Doan

