import orderApi from "@/dashboard/orderApi";
import { Suspense } from "react";

export default function Orders() {
  return (
    <Suspense fallback={<p>Loading Indicator</p>}>
      {/* @ts-expect-error Async Server Component */}
      <OrderList />
    </Suspense>
  );
}


async function OrderList() {
  const orders = await orderApi.getOrders();

  return (
    <ul>
      {
        orders.map((order: string) =>
          <li key={order}>- {order}</li>
        )
      }
    </ul>
  );
}