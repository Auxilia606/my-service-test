import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { Page } from "@shared/components";

export const Main = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate("/post");
  };

  return (
    <Page>
      <Page.Header title="메인페이지" logout />
      <Page.Section>
        <Button type="primary" onClick={onClickPost}>
          글쓰기
        </Button>
        <div className="w-40 h-40"></div>
      </Page.Section>
    </Page>
  );
};
