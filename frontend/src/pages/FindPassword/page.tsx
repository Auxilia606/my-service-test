import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";

import { useUserSignUpMutation } from "@shared/api/user/sign-up";
import { Page } from "@shared/components/Page";

import { SignUpForm } from "./types";

export const FindPassword: React.FC = () => {
  const [form] = Form.useForm<SignUpForm>();
  const { mutateAsync } = useUserSignUpMutation();

  const onClickUniqueCheck = () => {};
  const onClickSubmit = async (values: SignUpForm) => {
    try {
      await mutateAsync({
        id: values.id,
        nickname: values.nickname,
        password: values.password,
      });
      window.location.replace("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Page>
      <Page.Header back title="비밀번호 찾기" />
      <Page.Body>
        <Form form={form} onFinish={onClickSubmit}>
          <Form.Item
            label="아이디"
            name="id"
            rules={[{ required: true, message: "아이디를 입력해주세요" }]}
          >
            <Input autoComplete="username" />
          </Form.Item>
          <Form.Item name="check" noStyle>
            <Button
              type="primary"
              htmlType="button"
              className="my-4"
              onClick={onClickUniqueCheck}
            >
              중복확인
            </Button>
          </Form.Item>
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[{ required: true, message: "닉네임을 입력해주세요" }]}
          >
            <Input autoComplete="username" />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
          <Form.Item
            label="비밀번호 확인"
            name="password-confirm"
            rules={[
              { required: true, message: "비밀번호를 입력해주세요" },
              ({ getFieldValue }) => ({
                validator: (_, value) => {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("비밀번호가 일치하지 않습니다")
                  );
                },
              }),
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" className="my-4">
              가입하기
            </Button>
          </Form.Item>
        </Form>
      </Page.Body>
    </Page>
  );
};
