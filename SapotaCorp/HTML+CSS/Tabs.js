var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
   var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   }); // lặp qua các tab content để remove class active

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   }); // lặp qua các tab links để remove class active

   document.querySelector("#" + electronic).classList.add("active");
   // trả về phần tử đầu tiên có id="" được add class active
   
   btn.classList.add("active");
   // các button mà chúng ta click vào sẽ được add class active
}

// Array.prototype.map2 = function(callback) {
//    var arrayLength = this.length;
//    for (var i = 0; i < arrayLength; i++) {
//       var result = callback(this[i], i);
//       console.log('result: ', result);
//    }
// }

// Array.prototype.forEach2 = function(callback) {
//    for (var index in this){
//       if (this.hasOwnProperty(index)) {
//          callback(this[index], index, this);
//       }
//    }
// }

// Array.prototype.Filter2 = function(callback) {
//    var output = [];
//    for(var index in this) {
//       if (this.hasOwnProperty(index)) {
//         var result = callback(this[index], index, this);
//         if (result) {
//          output.push(this[index]);
//         }
//       }
//    }
//    return output;
// }

// Array.prototype.some2 = function(callback) {
//    var output = false;
//    for(var index in this) {
//       if (this.hasOwnProperty(index)) {
//         if (callback(this[index], index, this)) {
//          output = true;
//          break;
//         }
//       }
//    }
//    return output;
// }

// var courses = [
//    'JS',
//    'HTML',
//    'CSS'
// ];

// var courses = [
//    {
//       name: 'JavaScript',
//       coin: 30000
//    },
//    {
//       name: 'HTML',
//       coint: 20000
//    },
//    {
//       name: 'CSS',
//       coin: 10000
//    },
// ]

// var courses = [
//    {
//       name: 'JavaScript',
//       coin: 30000,
//       isFinish: false,
//    },
//    {
//       name: 'HTML',
//       coint: 20000,
//       isFinish: true,
//    },
//    {
//       name: 'CSS',
//       coin: 10000,
//       isFinish: false,
//    },
// ]

// var htmls = courses.map2(function(course, i) {
//    return `<h2>${course}</h2>`;
// });

// var htmls = courses.forEach2(function(course, index, array){
//    console.log(course, index, array);
// })

// var htmls = courses.Filter2(function(course, index, array){
//    console.log(course, index, array);
// })

// var htmls = courses.some2(function(course, index, array){
//    return course.isFinish;
// })
// console.log(htmls);



// function myFunction(param) {
//    if (typeof param === 'function') {
//       param("Ad");
//    }
//    else {
//       console.log("Error");
//    }
// }

// function myCallBack(value) {
//    console.log('value : ' + value); 
// }

// myFunction(myCallBack)

// function deQuy() {
//    deQuy();
// }

// deQuy();