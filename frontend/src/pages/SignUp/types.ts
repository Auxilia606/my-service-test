import { FormItemProps } from "antd";

export type SignUpForm = {
  id: string;
  phone: string;
  nickname: string;
  confirm: {
    id: FormItemProps["validateStatus"];
    phone: FormItemProps["validateStatus"];
    nickname: FormItemProps["validateStatus"];
  };
  password: string;
  passwordConfirm: string;
};
