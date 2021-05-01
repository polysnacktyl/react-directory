import axios from 'axios';

export default {
    summonRandos: function(employee) {
      return axios.get("https://randomuser.me/api/?results=5");
    }
  };
