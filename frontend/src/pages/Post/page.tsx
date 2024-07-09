import { useParams } from "react-router-dom";
import { Button } from "antd";

import { usePostQuery } from "@shared/api/post";
import { Page } from "@shared/components";

import dayjs from "dayjs";

export const Post = () => {
  const params = useParams();
  const { data } = usePostQuery({ id: params.id || "" });

  const onClickCancel = () => {};

  return (
    <Page>
      <Page.Header title="포스트" back />
      <Page.Body className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="font-bold text-lg">{data?.title}</p>

          <p className="text-xs inline-flex gap-2">
            <span>{dayjs(data?.createdAt).format("YYYY.MM.DD")}</span>
            <span>{data?.creator}</span>
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.content || "" }}></div>
        <div className="flex bg-white mt-4 gap-2">
          <Button htmlType="button" onClick={onClickCancel}>
            목록
          </Button>
          {data?.isOwner && (
            <Button
              className="ml-auto"
              danger
              htmlType="button"
              onClick={onClickCancel}
            >
              삭제
            </Button>
          )}
          {data?.isOwner && <Button htmlType="button">수정</Button>}
        </div>
      </Page.Body>
    </Page>
  );
};
