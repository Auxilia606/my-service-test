import { useMemo, useRef, useState } from "react";
import { IUploaderOptions } from "jodit/esm/types";
import JoditEditor, { Jodit } from "jodit-react";

const uploader: IUploaderOptions<{ mypayload: string; file: File }> = {
  data: {},
  contentType: () => "multipart/form-data",
  error: () => undefined,
  getDisplayName: (baseUrl, fileName) => `${baseUrl}${fileName}`,
  processFileName: (key, file, name) => [key, file, name],
  pathVariableName: "path",
  filesVariableName: (i) => `${i}`,
  insertImageAsBase64URI: false,
  imagesExtensions: ["jpg", "png", "jpeg", "gif"],
  withCredentials: false,
  format: "json",
  method: "POST",
  url: "http://localhost:4000/files",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  prepareData: function (data) {
    data.append("file", this.file);
    return data;
  },
  isSuccess: function (resp) {
    return resp.success;
  },
  getMessage: function (resp) {
    return resp.data.messages?.join() || "";
  },
  process: function (resp) {
    return {
      messages: resp.data.messages,
      files: resp.data.files,
      isImages: resp.data.isImages,
      path: "",
      baseurl: "",
    };
  },
  defaultHandlerSuccess: function (resp) {
    const files = resp.files || [];

    if (files.length) {
      console.log(files);
      // this.selection.insertImage(files[0], null, 250);
    }
  },
  defaultHandlerError: function (resp) {
    console.log(resp.message);
  },
};

export const Editor = () => {
  const editor = useRef<Jodit>(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Start typings...",
      buttons: ["image", "bold", "about"],
      uploader,
    }),
    []
  );

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
