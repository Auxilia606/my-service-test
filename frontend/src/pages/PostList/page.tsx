import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { PostTable } from "@features/PostTable";
import { Page } from "@shared/components";

export const PostList = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate("/post/create");
  };

  return (
    <Page>
      <Page.Header title="모든 글 보기" back />
      <Page.Body className="flex flex-col flex-1 pb-4">
        <PostTable className="flex-1" pageSize="15" />
        <Button className="ml-auto" type="primary" onClick={onClickPost}>
          글쓰기
        </Button>
      </Page.Body>
    </Page>
  );
};
