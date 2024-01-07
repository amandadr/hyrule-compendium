import axios from 'axios';

export const fetchData = async (url) => {
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
}