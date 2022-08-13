import axios from "axios";

const getProducts = async () => {
    const base_url = 'https://fakestoreapi.com';
    const response = await axios.get(`${base_url}/products`);
    return response.data;
}

export { getProducts }