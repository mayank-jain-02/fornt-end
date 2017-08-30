import axios from 'axios';

const BASE_URL = 'http://localhost:3333';
const instance = axios.create({
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heWFuay5qIiwiaWF0IjoxNTA0MDE0NTc2LCJleHAiOjE1MDQwMTgxNzZ9.5C3aNIbthm6H70PFzrT_-PcFQMF1yuu2-6ZOqCY4KfA"
    }
})
function getFoodData() {
    const url = `${BASE_URL}/jokes/food`;
    return instance.get(url)
        .then(response => response.data)
        .catch(error => console.log('error occurred ', error));
}

function getCelebrityData() {
    const url = `${BASE_URL}/jokes/celebrity`;
    return instance.get(url)
        .then(response => response.data)
        .catch(error => console.log('error occurred ', error));
}

export {
    getFoodData,
    getCelebrityData
};