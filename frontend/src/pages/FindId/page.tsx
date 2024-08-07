import { Form } from "antd";

import { Page } from "@shared/components";

export const FindId = () => {
  const [form] = Form.useForm();

  const onClickSubmit = async () => {};

  return (
    <Page>
      <Page.Header back title="아이디 찾기" />
      <Page.Body>
        <Form form={form} onFinish={onClickSubmit}></Form>
      </Page.Body>
    </Page>
  );
};
