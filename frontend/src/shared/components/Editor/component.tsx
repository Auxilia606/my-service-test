import { useMemo, useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";

import { getLocalStorageItem } from "@shared/utils";

import { EditorProps } from "./types";
import { uploader } from "./utils";

export const Editor = (props: EditorProps) => {
  const { content, setContent } = props;
  const editor = useRef<Jodit>(null);

  const config = useMemo(() => {
    return {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "내용을 입력해주세요",
      uploader: uploader({
        token: getLocalStorageItem("userInfo")?.token || "",
      }),
      height: 500,
      allowResizeX: false,
      allowResizeY: false,
    };
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => {}}
    />
  );
};
