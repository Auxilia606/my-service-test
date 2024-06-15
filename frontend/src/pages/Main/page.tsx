import { useUserInfoState } from "@shared/atom/userInfo";
import { Page } from "@shared/components/Page";

export const Main: React.FC = () => {
  const { userInfo } = useUserInfoState();

  return (
    <Page>
      <Page.Header title="메인페이지" logout />
      안녕하세요! {userInfo.nickname}
    </Page>
  );
};
