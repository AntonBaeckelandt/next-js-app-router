import orderApi from "../data/orderApi";

const getOrders = () => {
  return orderApi.getOrders();
};

const orderServices = {
  getOrders,
};

export default orderServices;