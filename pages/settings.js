import Layout from "../components/Layout";
import Settings from "../components/Settings";
import { optionalAuth } from "../utils/ssr";
import PlantGif from "../components/PlantGif";
import ResetButton from "../components/ResetButton";

export const getServerSideProps = optionalAuth;
export default function setform(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div>
          <h1> settings page </h1>
          <Settings user={user}></Settings>
          <br></br>
          <br></br>
          <br></br>
          <ResetButton user={user}> </ResetButton>
        </div>
      ) : (
        <h1> you must log in to access settings! </h1>
      )}
    </Layout>
  );
}
