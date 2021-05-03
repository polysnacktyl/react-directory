import axios from 'axios';

// export default {
//     summonRandos: function() {
//       return axios.get("https://randomuser.me/api/?results=5");
//     }
//   };
// lines 3-7 achieve desired results, but lines 10-19 do the same 
// job without an anonymous export warning. cool good talk. 

function summonRandos() {
  return axios.get("https://randomuser.me/api/?results=50");
}

const API = {
  summonRandos
}

export default API;

