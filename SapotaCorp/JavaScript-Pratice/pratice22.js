
function getMoviesFromApi() {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
          console.log("Data",json.movies);
        return json.movies;

      })
      .catch((error) => {
        console.error(error);
      });
  }




//YÊU CẦU
//Chuyển promise trên thành cách ansyc await

//BÀI LÀM

 async function getMoviesFromApCopy() {
        try {
            let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            let data = await response.json();
            return data.movies;
        } catch (error) {
            console.log(error);
        }
    }

    console.log(getMoviesFromApCopy());
