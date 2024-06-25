import { Editor, Page } from "@shared/components";

export const Post = () => {
  return (
    <Page>
      <Page.Header title="글쓰기" back />
      <Page.Section>
        <Editor />
      </Page.Section>
    </Page>
  );
};
