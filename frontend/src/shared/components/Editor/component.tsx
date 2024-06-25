import { useMemo, useRef, useState } from "react";
import JoditEditor, { Jodit } from "jodit-react";

import { uploader } from "./utils";

export const Editor = () => {
  const editor = useRef<Jodit>(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "내용을 입력해주세요",
      uploader,
    }),
    []
  );

  console.log(content);

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
