import { useCallback, useMemo, useState } from "react";
import { ConfigProvider, Table, TablePaginationConfig, TableProps } from "antd";

import { ReqDTO, usePostListQuery } from "@shared/api/post/list";

import { usePostListColumns } from "./hooks";

export const PostList = () => {
  const [searchParams, setSearchParams] = useState<ReqDTO>({
    pageSize: "10",
    page: "1",
  });
  const { data, isLoading } = usePostListQuery(searchParams);

  const pagination: TableProps["pagination"] = useMemo(() => {
    return {
      pageSize: Number(searchParams.pageSize),
      current: Number(searchParams.page),
      total: data?.total,
      position: ["bottomCenter" as const],
    };
  }, [data?.total, searchParams.page, searchParams.pageSize]);
  const columns = usePostListColumns();

  const onChangeTable: TableProps["onChange"] = useCallback(
    (paginationConfig: TablePaginationConfig) => {
      setSearchParams((prev) => ({
        ...prev,
        page: `${paginationConfig.current}`,
      }));
    },
    []
  );

  return (
    <ConfigProvider theme={{ components: { Table: { cellFontSizeSM: 10 } } }}>
      <Table
        dataSource={data?.data}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={pagination}
        onChange={onChangeTable}
        size="small"
        title={() => <p className="text-xl font-bold">모든 글 보기</p>}
        loading={isLoading}
      />
    </ConfigProvider>
  );
};
