import { Button, Form } from "antd";

import { SignUpForm } from "@pages/SignUp/types";
import { useUserCheckPhoneMutation } from "@shared/api/user/check/phone";
import { MaskedInput } from "@shared/components/MaskedInput";

export const ValidateUserPhone = () => {
  const form = Form.useFormInstance<SignUpForm>();

  const { mutateAsync: mutateUserCheckPhone } = useUserCheckPhoneMutation();
  const phoneValidation = Form.useWatch(["confirm", "phone"], form);

  const onClickPhoneUniqueCheck = async () => {
    const { exist } = await mutateUserCheckPhone({
      phone: form.getFieldValue("phone"),
    });

    if (exist) {
      form.setFieldValue(["confirm", "phone"], "error");
    } else {
      form.setFieldValue(["confirm", "phone"], "success");
    }
    form.validateFields(["phone"]);
  };

  const onChangePhone = () => {
    form.setFieldValue(["confirm", "phone"], "");
  };

  return (
    <>
      <Form.Item<SignUpForm> noStyle name={["confirm", "phone"]} />
      <Form.Item<SignUpForm>
        label="전화번호"
        name="phone"
        hasFeedback
        rules={[
          { required: true, message: "전화번호를 입력해주세요" },
          ({ getFieldValue, setFieldValue }) => ({
            validator: (_, value) => {
              if (!value) {
                setFieldValue(["confirm", "phone"], "validating");
                return Promise.resolve();
              } else if (!value.match(/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/)) {
                setFieldValue(["confirm", "phone"], "validating");
                return Promise.reject(
                  new Error("올바른 전화번호 형식이 아닙니다")
                );
              } else if (getFieldValue(["confirm", "phone"]) === "") {
                setFieldValue(["confirm", "phone"], "");
                return Promise.reject(
                  new Error("전화번호 중복확인을 진행해주세요")
                );
              } else if (getFieldValue(["confirm", "phone"]) === "error") {
                setFieldValue(["confirm", "phone"], "validating");
                return Promise.reject(
                  new Error("동일한 전화번호가 존재합니다")
                );
              } else {
                setFieldValue(["confirm", "phone"], "");
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <div className="flex gap-2">
          <MaskedInput
            type="tel"
            onChange={onChangePhone}
            placeholder="010-xxxx-xxxx"
            opts={{ mask: "000-0000-0000" }}
          />
          <Button
            type="primary"
            htmlType="button"
            onClick={onClickPhoneUniqueCheck}
            disabled={
              phoneValidation === "success" || phoneValidation === "validating"
            }
          >
            중복확인
          </Button>
        </div>
      </Form.Item>
    </>
  );
};
