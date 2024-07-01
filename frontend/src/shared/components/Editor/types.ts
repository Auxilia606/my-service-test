import { IJoditEditorProps } from "jodit-react";

export type EditorProps = IJoditEditorProps["config"] & {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};
