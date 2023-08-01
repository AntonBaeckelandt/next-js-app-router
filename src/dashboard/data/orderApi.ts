import { Order } from "../domain/models";

async function getOrders(): Promise<Order[]> {
    await new Promise((acc) => setTimeout(acc, 2000));
    return [
        { id: 0, name: "order1" },
        { id: 1, name: "order2" },
        { id: 2, name: "order3" },
    ];
}

const orderApi = {
    getOrders,
};

export default orderApi;