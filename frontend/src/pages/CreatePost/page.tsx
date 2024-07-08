import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { App, Button, Form, Input, Modal } from "antd";

import { usePostCreateMutation } from "@shared/api/post/create";
import { Editor, Page } from "@shared/components";

export const CreatePost = () => {
  const { modal } = App.useApp();
  const [form] = Form.useForm();
  const { mutateAsync: mutatePostCreate } = usePostCreateMutation();
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { title: string }) => {
    try {
      await mutatePostCreate({ title: values.title, content });
      modal.success({
        title: "등록을 완료했습니다.",
        onOk: () => {
          navigate(-1);
        },
        onClose: () => navigate(-1),
      });
    } catch (error) {
      modal.error({ title: "등록을 실패했습니다." });
    }
  };

  const onClickCancel = () => {
    setIsModalOpen(true);
  };

  const onClickModalOk = async () => {
    navigate("/", { replace: true });
    setIsModalOpen(false);
  };

  const onClickModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Page>
      <Page.Header title="글쓰기" back />
      <Page.Body>
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="제목" required name={["title"]}>
            <Input placeholder="제목을 입력해주세요" />
          </Form.Item>
          <Form.Item label="내용" required name={["content"]}>
            <Editor
              {...{ content, setContent }}
              placeholder="내용을 작성해주세요"
            />
          </Form.Item>
          <div className="flex justify-between bg-white mt-4">
            <Button danger htmlType="button" onClick={onClickCancel}>
              취소
            </Button>
            <Button type="primary" htmlType="submit">
              등록
            </Button>
          </div>
        </Form>
      </Page.Body>
      <Page.Section></Page.Section>
      <Modal
        closable
        open={isModalOpen}
        title="글쓰기를 취소하시겠습니까?"
        okText="목록으로 이동"
        okType="danger"
        onOk={onClickModalOk}
        cancelText="취소"
        onCancel={onClickModalCancel}
      >
        취소하면 목록으로 되돌아가고 작성한 내용은 되돌릴 수 없어요
      </Modal>
    </Page>
  );
};
