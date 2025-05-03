// 'use client'
// import { ISubscription } from "@/interfaces";
// import { Table } from "antd";
// import dayjs from "dayjs";
// import React from "react";

// function SubscriptionsTable({ data }: { data: ISubscription[] }) {
//   const columns = [
//     {
//       title: "User",
//       dataIndex: "user",
//       render: (user: any) => user.name,
//     },
//     {
//       title: "Payment ID",
//       dataIndex: "paymentId",
//     },
//     {
//       title: "Amount",
//       dataIndex: "amount",
//       render: (amount: number) => `$${amount}`,
//     },
//     {
//       title: "Purchased On",
//       dataIndex: "createdAt",
//       render: (createdAt: string) =>
//         dayjs(createdAt).format("MMM DD, YYYY hh:mm A"),
//     },
//   ];
//   return (
//     <div>
//       <Table columns={columns} dataSource={data} />
//     </div>
//   );
// }

// export default SubscriptionsTable;

'use client';
import { ISubscription } from "@/interfaces";
import { Table } from "antd";
import dayjs from "dayjs";
import React, { useMemo } from "react";

function SubscriptionsTable({ data }: { data: ISubscription[] }) {
  const columns = useMemo(() => [
    {
      title: "User",
      dataIndex: "user",
      render: (user: any) => user?.name || "Unknown User",
    },
    {
      title: "Payment ID",
      dataIndex: "paymentId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (amount: number) => `$${amount}`,
    },
    {
      title: "Purchased On",
      dataIndex: "createdAt",
      render: (createdAt: string) =>
        dayjs(createdAt).format("MMM DD, YYYY hh:mm A"),
    },
  ], []);

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey={(record) => record.paymentId} // or record.id if available
      />
    </div>
  );
}

export default SubscriptionsTable;

