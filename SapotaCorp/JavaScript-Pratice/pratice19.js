for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1);
  }

  console.log("Log i",i);
//   console.log("Log j",j);//lỗi