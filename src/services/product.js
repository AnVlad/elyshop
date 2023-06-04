import axios from 'axios';

const baseUrl = 'http://localhost:3001/elyshop';

const getList = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const postOrder = async (order) => {
  console.log(order);
  const response = await axios.post(baseUrl, order);
  return response.data;
};

const product = { getList, postOrder };
export default product;
