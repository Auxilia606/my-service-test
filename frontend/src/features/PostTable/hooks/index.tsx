import { Link } from "react-router-dom";
import { TableColumnsType } from "antd";

import { ListData } from "@shared/api/post/list";

import dayjs from "dayjs";

export const usePostListColumns = () => {
  const columns: TableColumnsType<ListData> = [
    {
      title: "제목",
      dataIndex: "title",
      width: "60%",
      onHeaderCell: () => ({ style: { textAlign: "center" } }),
      render: (value, record) => <Link to={`/post/${record.id}`}>{value}</Link>,
    },
    {
      title: "작성자",
      dataIndex: "creator",
      align: "center",
    },
    {
      title: "작성날짜",
      dataIndex: "createdAt",
      render: (value) => dayjs(value).format("YY.MM.DD"),
      align: "center",
    },
  ];

  return columns;
};
