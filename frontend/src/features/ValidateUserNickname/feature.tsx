import React from "react";
import { Button, Form, Input } from "antd";

import { SignUpForm } from "@pages/SignUp/types";
import { useUserCheckNicknameMutation } from "@shared/api/user/check/nickname";

export const ValidateUserNickname: React.FC = () => {
  const form = Form.useFormInstance();

  const { mutateAsync: mutateUserCheckNickname } =
    useUserCheckNicknameMutation();
  const nicknameValidation = Form.useWatch(["confirm", "nickname"], form);

  const onClickNicknameUniqueCheck = async () => {
    const { exist } = await mutateUserCheckNickname({
      nickname: form.getFieldValue("nickname"),
    });

    if (exist) {
      form.setFieldValue(["confirm", "nickname"], "error");
    } else {
      form.setFieldValue(["confirm", "nickname"], "success");
    }
    form.validateFields(["nickname"]);
  };

  const onChangeNickname = () => {
    form.setFieldValue(["confirm", "nickname"], "");
  };

  return (
    <>
      <Form.Item<SignUpForm> noStyle name={["confirm", "nickname"]} />
      <Form.Item<SignUpForm>
        label="닉네임"
        name="nickname"
        hasFeedback
        rules={[
          { required: true, message: "닉네임을 입력해주세요" },
          ({ getFieldValue, setFieldValue }) => ({
            validator: (_, value) => {
              if (value.length > 16) {
                setFieldValue(["confirm", "nickname"], "validating");
                return Promise.reject(
                  new Error("최대 16글자를 넘을 수 없습니다")
                );
              } else if (!value.match(/^[a-zA-Zㄱ-힣0-9][a-zA-Zㄱ-힣0-9]*$/)) {
                setFieldValue(["confirm", "nickname"], "validating");
                return Promise.reject(
                  new Error("올바른 닉네임 형식이 아닙니다")
                );
              } else if (getFieldValue(["confirm", "nickname"]) === "") {
                setFieldValue(["confirm", "nickname"], "");
                return Promise.reject(
                  new Error("닉네임 중복확인을 진행해주세요")
                );
              } else if (getFieldValue("idConfirm") === "error") {
                setFieldValue(["confirm", "nickname"], "validating");
                return Promise.reject(new Error("동일한 닉네임이 존재합니다"));
              } else {
                setFieldValue(["confirm", "nickname"], "success");
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <div className="flex gap-2">
          <Input autoComplete="username" onChange={onChangeNickname} />
          <Button
            type="primary"
            htmlType="button"
            onClick={onClickNicknameUniqueCheck}
            disabled={
              nicknameValidation === "success" ||
              nicknameValidation === "validating"
            }
          >
            중복확인
          </Button>
        </div>
      </Form.Item>
    </>
  );
};
