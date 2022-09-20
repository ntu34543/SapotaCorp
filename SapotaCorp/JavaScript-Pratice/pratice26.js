const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 10);
// }

for (var i = 0; i < arr.length; i++) {
    (function (i) {
        setTimeout(function() {
            console.log(i)
        }, 100)
    })(i)
}
//