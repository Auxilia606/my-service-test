import { Page } from "@shared/components/Page";

export const Main = () => {
  return (
    <Page>
      <Page.Header title="메인페이지" logout />
      <Page.Section>
        <div className="w-40 h-40"></div>
      </Page.Section>
    </Page>
  );
};
