import { Form } from "antd";

import { Page } from "@shared/components";

export const FindPassword = () => {
  const [form] = Form.useForm();

  const onClickSubmit = async () => {};

  return (
    <Page>
      <Page.Header back title="비밀번호 찾기" />
      <Page.Body>
        <Form form={form} onFinish={onClickSubmit}></Form>
      </Page.Body>
    </Page>
  );
};
