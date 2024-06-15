import { useNavigate } from "react-router-dom";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";

import { Page } from "@shared/components/Page";

export const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <Page>
      <Page.Header back title="회원가입" />
      <Page.Body>
        <Form form={form}>
          <Form.Item
            label="아이디"
            name="id"
            rules={[{ required: true, message: "아이디를 입력해주세요" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password />
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
            <Input.Password />
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
