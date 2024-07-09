import { useCallback, useMemo, useState } from "react";
import { ConfigProvider, Table, TablePaginationConfig, TableProps } from "antd";

import { ReqDTO, usePostListQuery } from "@shared/api/post/list";

import { usePostListColumns } from "./hooks";
import { PostListProps } from "./types";

export const PostTable = (props: PostListProps) => {
  const { hidePagination, pageSize, className } = props;
  const [searchParams, setSearchParams] = useState<ReqDTO>({
    pageSize: pageSize || "10",
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
        className={className}
        dataSource={data?.data}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={!hidePagination && pagination}
        onChange={onChangeTable}
        size="small"
        loading={isLoading}
      />
    </ConfigProvider>
  );
};
