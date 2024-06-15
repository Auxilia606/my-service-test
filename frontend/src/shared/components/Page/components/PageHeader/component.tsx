import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "antd/es/button";
import { LeftOutlined } from "@ant-design/icons";

import { useUserLogoutMutation } from "@shared/api/user/logout";
import { useUserInfoState } from "@shared/atom/userInfo";

import { PageHeaderProps } from "./types";

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, back, logout } = props;
  const navigate = useNavigate();
  const { mutateAsync } = useUserLogoutMutation();
  const { setUserInfo } = useUserInfoState();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onClickLogout = useCallback(async () => {
    await mutateAsync();
    setUserInfo({ login: false, nickname: "" });
    navigate("/");
  }, [mutateAsync, navigate, setUserInfo]);

  return (
    <div className="p-4 flex gap-4 border-b-4 border-double">
      {back && (
        <Button
          type="text"
          icon={<LeftOutlined style={{ fontSize: "1.5rem" }} />}
          onClick={onClickBack}
        />
      )}
      <span className="text-2xl flex-1">{title}</span>
      {logout && (
        <Button type="default" onClick={onClickLogout}>
          로그아웃
        </Button>
      )}
    </div>
  );
};
