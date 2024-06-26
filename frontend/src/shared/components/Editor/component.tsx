import { useMemo, useRef, useState } from "react";
import JoditEditor, { Jodit } from "jodit-react";

import { getLocalStorageItem } from "@shared/utils";

import { uploader } from "./utils";

export const Editor = () => {
  const editor = useRef<Jodit>(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => {
    return {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "내용을 입력해주세요",
      uploader: uploader({
        token: getLocalStorageItem("userInfo")?.token || "",
      }),
    };
  }, []);

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        // onChange={(newContent) => {}}
      />
    </div>
  );
};
