import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { useUserLoginMutation } from "@shared/api/user/login";
import { useUserInfoState } from "@shared/atom/userInfo";
import { Page } from "@shared/components/Page";

export const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutateAsync } = useUserLoginMutation();
  const { setUserInfo } = useUserInfoState();

  return (
    <Page>
      <Page.Header title="로그인" />
      <Page.Body>
        <Form
          form={form}
          onFinish={async (values) => {
            const { nickname } = await mutateAsync(values);

            setUserInfo({ login: true, nickname });
            navigate("/");
            // window.location.replace("/");
          }}
        >
          <Form.Item
            label="아이디"
            name="id"
            rules={[{ required: true, message: "아이디를 입력해주세요" }]}
          >
            <Input autoComplete="username" />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password autoComplete="current-password" />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" className="my-4">
              로그인
            </Button>
          </Form.Item>
        </Form>
        <div className="flex gap-2 justify-center my-4">
          <Button
            type="text"
            className="text-xs"
            onClick={() => navigate("/sign-up")}
          >
            아이디 찾기
          </Button>
          <Button
            type="text"
            className="text-xs"
            onClick={() => navigate("/sign-up")}
          >
            비밀번호 찾기
          </Button>
          <Button
            type="text"
            className="text-xs"
            onClick={() => navigate("/sign-up")}
          >
            회원가입
          </Button>
        </div>
      </Page.Body>
    </Page>
  );
};
