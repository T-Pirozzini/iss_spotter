const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('2001:569:bcea:e600:d2af:81c1:5e5:457e', (error, coordinates) => {
  if (error){
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates);
});
