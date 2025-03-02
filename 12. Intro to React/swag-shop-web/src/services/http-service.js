import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    fetch("https://localhost:3000/product").then((response) => {
      console.log(response.json());
    });
  };
}

export default HttpService;
