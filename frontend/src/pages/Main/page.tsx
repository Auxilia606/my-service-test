import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { PostList } from "@features/PostList";
import { Page } from "@shared/components";

export const Main = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate("/post/create");
  };

  return (
    <Page>
      <Page.Header title="메인페이지" logout />
      <Page.Section>
        <PostList />
        <div className="flex px-4 pb-4">
          <Button className="ml-auto" type="primary" onClick={onClickPost}>
            글쓰기
          </Button>
        </div>
      </Page.Section>
    </Page>
  );
};
