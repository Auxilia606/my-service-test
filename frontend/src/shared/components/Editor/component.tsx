import { useMemo, useRef } from "react";
import { Form } from "antd";
import JoditEditor, { Jodit } from "jodit-react";

import { getLocalStorageItem } from "@shared/utils";

import { EditorProps } from "./types";
import { uploader } from "./utils";

export const Editor = (props: EditorProps) => {
  const { content, setContent } = props;
  const editor = useRef<Jodit>(null);
  const form = Form.useFormInstance();

  const config = useMemo(() => {
    return {
      ...props,
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      uploader: uploader({
        token: getLocalStorageItem("userInfo")?.token || "",
      }),
      allowResizeX: false,
      allowResizeY: false,
      minHeight: 500,
    };
  }, [props]);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => {
        setContent(newContent);
        form.setFieldValue(["content"], newContent);
      }} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => {}}
    />
  );
};
