import { Container } from "theme-ui";
import PageTitle from "components/PageTitle";
import PrivacyText from "components/PrivacyText";

const Privacy = () => {
  return (
    <Container>
      <PageTitle title={"Privacy Policy"} />
      <PrivacyText data={data} />
    </Container>
  );
};

export default Privacy;

const data = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum.`,
};
