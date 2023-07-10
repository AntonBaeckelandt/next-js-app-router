async function getOrders() {
    await new Promise((acc) => setTimeout(acc, 2000));
    return [
        "order1",
        "order2",
        "order3",
    ];
}

const orderApi = {
    getOrders,
};

export default orderApi;