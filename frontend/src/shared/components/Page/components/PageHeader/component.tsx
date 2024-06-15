import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "antd/es/button";
import { LeftOutlined } from "@ant-design/icons";

import { PageHeaderProps } from "./types";

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, back } = props;
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="p-4 flex gap-4 border-b-4 border-double">
      {back && (
        <Button
          onClick={onClickBack}
          type="text"
          icon={<LeftOutlined style={{ fontSize: "1.5rem" }} />}
        />
      )}
      <span className="text-2xl">{title}</span>
    </div>
  );
};
