import { Button, Form, Input } from "antd";

import { ValidateUserId } from "@features/ValidateUserId";
import { ValidateUserNickname } from "@features/ValidateUserNickname";
import { ValidateUserPhone } from "@features/ValidateUserPhone";
import { useUserSignUpMutation } from "@shared/api/user/sign-up";
import { Page } from "@shared/components/Page";

import { SignUpForm } from "./types";

export const SignUp = () => {
  const [form] = Form.useForm<SignUpForm>();
  const { mutateAsync } = useUserSignUpMutation();

  const onClickSubmit = async (values: SignUpForm) => {
    try {
      await mutateAsync({
        id: values.id,
        nickname: values.nickname,
        phone: values.phone,
        password: values.password,
      });
      window.location.replace("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Page>
      <Page.Header back title="회원가입" />
      <Page.Body>
        <Form form={form} onFinish={onClickSubmit}>
          <Form.Item<SignUpForm> noStyle name={["confirm", "nickname"]} />
          <ValidateUserId />
          <ValidateUserPhone />
          <ValidateUserNickname />
          <Form.Item<SignUpForm>
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
          <Form.Item<SignUpForm>
            label="비밀번호 확인"
            name={["passwordConfirm"]}
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
          <Button type="primary" htmlType="submit" className="my-4">
            가입하기
          </Button>
        </Form>
      </Page.Body>
    </Page>
  );
};
