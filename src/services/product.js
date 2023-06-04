import axios from 'axios';

const baseUrl = 'http://localhost:3001/menuList';

const getList = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
    return [];
  }
};

const postOrder = async (order) => {
  console.log(order);
  const response = await axios.post(baseUrl, order);
  return response.data;
};

const product = { getList, postOrder };
export default product;
