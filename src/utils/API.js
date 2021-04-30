import axios from 'axios';

randos();
async function randos() {

axios.get("https://randomuser.me/api/?results=5&inc=name,location,email,id,picture")

.then(response => {
    console.log(response.data.results);
})

.catch(error => {
    console.log(error);
})
}


//this.setState({users: response.data.resuts})
