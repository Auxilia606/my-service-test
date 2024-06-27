import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";

import { Editor, Page } from "@shared/components";

export const Post = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const onCancel = () => {
    Modal.warning({
      title: "글 작성을 취소합니다.",
      content: "작성을 취소하면 작성한 내용은 사라집니다.",
      closable: true,
      okCancel: true,
      cancelText: "뒤로가기",
      onCancel: () => {},
      okText: "취소하기",
      okButtonProps: { danger: true },
      onOk: () => {
        navigate("/", { replace: true });
      },
    });
  };

  return (
    <Page>
      <Page.Header title="글쓰기" back />
      <Page.Body className="flex-1">
        <Form form={form}>
          <Form.Item
            label="제목"
            name="title"
            rules={[{ required: true, message: "제목을 입력해주세요" }]}
          >
            <Input placeholder="제목을 입력해주세요" />
          </Form.Item>
          <Editor {...{ content, setContent }} />
          <div className="flex justify-end gap-2 my-2">
            <Button danger type="primary" className="w-24" onClick={onCancel}>
              취소
            </Button>
            <Button type="primary" className="w-24">
              작성하기
            </Button>
          </div>
        </Form>
      </Page.Body>
    </Page>
  );
};
