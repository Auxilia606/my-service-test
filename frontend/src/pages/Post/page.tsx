import { useParams } from "react-router-dom";
import { Button } from "antd";

import { usePostQuery } from "@shared/api/post";
import { Page } from "@shared/components";

export const Post = () => {
  const params = useParams();
  const { data } = usePostQuery(params);

  const onClickCancel = () => {};

  return (
    <Page>
      <Page.Header title="포스트" back />
      <Page.Body>
        <div>
          <p>{data?.title}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.content || "" }}></div>
        <div className="flex bg-white mt-4 gap-2">
          <Button htmlType="button" onClick={onClickCancel}>
            목록
          </Button>
          <Button
            className="ml-auto"
            danger
            htmlType="button"
            onClick={onClickCancel}
          >
            삭제
          </Button>
          <Button htmlType="button">수정</Button>
        </div>
      </Page.Body>
    </Page>
  );
};
