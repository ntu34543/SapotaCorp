// var emailKey = 'email';
// var myInfor = {
//     name: 'tu',
//     age: 19,
//     address: 'DN, VN',
//     [emailKey]: 'ntu@gmail.com',
//     getName: function() {
//         return this.name;
//     }
// };

// var myKey = 'name';
// console.log(myInfor);

// Object prototype - Basic, Object constructor

// var User = function (firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// User.prototype.className = 'F8';
// User.prototype.getTitle = function() {
//     return this.className;
// }

// var author = new User('Tu', 'Nguyen', 'Avatar');
// var user = new User('Duong', 'A','Avatar');

// author.title = 'A';
// user.comment = 'B';

// console.log(author.getTitle());
// console.log(user);

// Vòng lặp For/in
var myInfor = {
    name: 'Tu',
    age: 19,
};

var language = {
    name: 'Tu',
    age: 19,
};
for (var key of Object.values(language)) {
    // console.log(key);
    console.log(key);
}
