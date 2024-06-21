import React from "react";
import { Button, Form, Input } from "antd";

import { SignUpForm } from "@pages/SignUp/types";
import { useUserCheckIdMutation } from "@shared/api/user/check/id";

export const ValidateUserId: React.FC = () => {
  const form = Form.useFormInstance();

  const { mutateAsync: mutateUserCheckId } = useUserCheckIdMutation();
  const idValidation = Form.useWatch(["confirm", "id"], form);

  const onClickIdUniqueCheck = async () => {
    const { exist } = await mutateUserCheckId({ id: form.getFieldValue("id") });

    if (exist) {
      form.setFieldValue(["confirm", "id"], "error");
    } else {
      form.setFieldValue(["confirm", "id"], "success");
    }
    form.validateFields(["id"]);
  };

  const onChangeId = () => {
    form.setFieldValue(["confirm", "id"], "");
  };

  return (
    <>
      <Form.Item<SignUpForm> noStyle name={["confirm", "id"]} />
      <Form.Item<SignUpForm>
        label="아이디"
        name="id"
        // validateStatus={idValidation}
        hasFeedback
        rules={[
          {
            required: true,
            message: "아이디를 입력해주세요",
          },
          ({ getFieldValue, setFieldValue }) => ({
            validator: (_, value) => {
              if (value.length > 16) {
                setFieldValue(["confirm", "id"], "validating");
                return Promise.reject(
                  new Error("최대 16글자를 넘을 수 없습니다")
                );
              } else if (!value.match(/^[a-z]+[a-z0-9]{0,17}$/g)) {
                setFieldValue(["confirm", "id"], "validating");
                return Promise.reject(
                  new Error("올바른 아이디 형식이 아닙니다")
                );
              } else if (getFieldValue(["confirm", "id"]) === "") {
                setFieldValue(["confirm", "id"], "");
                return Promise.reject(
                  new Error("아이디 중복확인을 진행해주세요")
                );
              } else if (getFieldValue(["confirm", "id"]) === "error") {
                setFieldValue(["confirm", "id"], "validating");
                return Promise.reject(new Error("동일한 아이디가 존재합니다"));
              } else {
                setFieldValue(["confirm", "id"], "");
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <div className="flex gap-2">
          <Input
            autoComplete="username"
            onChange={onChangeId}
            placeholder="영소문자로 시작하여 숫자와 조합"
            count={{ max: 16 }}
          />
          <Button
            type="primary"
            htmlType="button"
            onClick={onClickIdUniqueCheck}
            disabled={
              idValidation === "success" || idValidation === "validating"
            }
          >
            중복확인
          </Button>
        </div>
      </Form.Item>
    </>
  );
};
