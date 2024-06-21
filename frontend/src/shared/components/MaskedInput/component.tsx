import { useLayoutEffect, useRef, useState } from "react";
import { Input, InputRef } from "antd";

import { MaskedInputProps } from "./types";

import IMask from "imask";

export const MaskedInput = (props: MaskedInputProps) => {
  const { opts: _opts } = props;
  const [value] = useState({ opts: _opts });
  const inputRef = useRef<InputRef>(null);

  useLayoutEffect(() => {
    if (!inputRef.current || !inputRef.current.input) return;

    IMask(inputRef.current.input, value.opts);
  }, [value.opts]);

  return <Input {...props} ref={inputRef} />;
};
