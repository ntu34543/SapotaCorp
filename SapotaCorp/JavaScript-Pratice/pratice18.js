

// function getMoviesFromApi() {
//     return fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => {
//           console.log("Data",json.movies);
//         return json.movies;

//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   getMoviesFromApi()


// async function getMoviesFromApCopy() {

//     try {
//         let response = await fetch('https://reactnative.dev/movies.json');
//         let data = await response.json();
//         return data.movies;
//     } catch (error) {
//         console.log(error);
//     }
// }


// let user = {
//     name:'Manh',
//     age:20
// }

// // let userCoppy={...user}//di coppyy

// let userCoppy1=user
// userCoppy1.age=22

// console.log(user);
// // console.log(userCoppy);
// console.log(userCoppy1);
    


(function test(){
    console.log("hello");
})()



//
// const birthYear = [1997, 1984, 2005, 1966]
const ages = birthYear.map(year => 2018 - year);
const calculateAge = year => 2018 - year;
const ages2 = birthYear.map(calculateAge);

console.log(ages2);