import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import { PostTable } from "@features/PostTable";
import { Page } from "@shared/components";

export const Main = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate("/post/list");
  };

  return (
    <Page>
      <Page.Header title="메인페이지" logout />
      <Page.Section className="gap-2">
        <PostTable hidePagination pageSize="5" />
        <Button
          className="ml-auto self-end"
          type="text"
          onClick={onClickPost}
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
          모든 글 보기
        </Button>
      </Page.Section>
    </Page>
  );
};
