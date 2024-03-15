import { Container } from "@chakra-ui/react";
import { UserDetails } from "components";
import UserDetailInfo from "components/UserDetailInfo";

function App() {
  return (
    <Container display="flex" flexDirection="column" gap={4}>
      <UserDetails />
      <UserDetailInfo />
    </Container>
  );
}

export default App;
