import orderServices from "@/dashboard/domain/orderServices";
import Link from "next/link";
import { Suspense } from "react";

export default function Orders() {
  return (
    <>
      <Suspense fallback={<p>Loading Indicator</p>}>
        <OrderList />
      </Suspense>
      <Link href={"/dashboard/account-info"}>To account info</Link>
    </>
  );
}


async function OrderList() {
  const orders = await orderServices.getOrders();

  return (
    <ul>
      {
        orders.map((order) =>
          <li key={order.id}> {order.name}</li>
        )
      }
    </ul>
  );
}