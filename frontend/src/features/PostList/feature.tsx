import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableColumnsType, TableProps } from "antd";

import { ListData, ReqDTO, usePostListQuery } from "@shared/api/post/list";

import dayjs from "dayjs";

const usePostListColumns = () => {
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

export const PostList = () => {
  const [searchParams, setSearchParams] = useState<ReqDTO>({
    pageSize: "10",
    page: "1",
  });
  const { data } = usePostListQuery(searchParams);
  const [pagination, setPagination] = useState<TableProps["pagination"]>({
    pageSize: 10,
    current: 1,
    total: data?.total,
    position: ["bottomCenter" as const],
  });
  const columns = usePostListColumns();

  const onChangeTable: TableProps["onChange"] = (p) => {
    setSearchParams((prev) => ({ ...prev, page: `${p.current}` }));
    setPagination(p);
  };

  return (
    <Table
      dataSource={data?.data}
      columns={columns}
      rowKey={(record) => record.id}
      pagination={pagination}
      onChange={onChangeTable}
      size="small"
      title={() => "모든 글 보기"}
    />
  );
};
