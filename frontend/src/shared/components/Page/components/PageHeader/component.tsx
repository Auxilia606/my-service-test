import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { useUserLogoutMutation } from "@shared/api/user/logout";
import { useUserInfoState } from "@shared/atom/userInfo";

import { PageHeaderProps } from "./types";

export const PageHeader = (props: PageHeaderProps) => {
  const { title, back, logout } = props;
  const navigate = useNavigate();
  const { mutateAsync } = useUserLogoutMutation();
  const { userInfo, updateUserInfo } = useUserInfoState();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onClickLogout = useCallback(async () => {
    await mutateAsync();
    updateUserInfo({ token: "", nickname: "" });
    navigate("/");
  }, [mutateAsync, navigate, updateUserInfo]);

  return (
    <div className="sticky top-0 p-4 flex gap-4 border-b-4 border-double items-center bg-white">
      {back && (
        <Button
          type="text"
          icon={<LeftOutlined style={{ fontSize: "1.5rem" }} />}
          onClick={onClickBack}
        />
      )}
      <span className="text-2xl flex-1">{title}</span>
      {userInfo && <span className="font-bold">{userInfo.nickname}님</span>}
      {logout && (
        <Button type="default" onClick={onClickLogout}>
          로그아웃
        </Button>
      )}
    </div>
  );
};
