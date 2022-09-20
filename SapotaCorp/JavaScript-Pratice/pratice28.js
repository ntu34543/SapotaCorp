// const a = 0;
// const b= a??undefined??5;// chỉ null và undefinded thì ko lấy || nhiều hơn

// console.log(b);//0



// let a=null;
// console.log(a??=9); //9
// console.log(a);     //9



let user ={
    name:"Manh",
    age: 21,
    run: function(){
        console.log("Running.......")
    }
}
console.log(user?.name);