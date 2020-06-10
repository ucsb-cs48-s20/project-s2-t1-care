import Layout from "../components/Layout";
import { optionalAuth } from "../utils/ssr";
import PlantGif from "../components/PlantGif";

export const getServerSideProps = optionalAuth;

function HomePage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div
        // style={{
        //   alignItems: "center",
        //   margin: "auto",
        //   justifyContent: "center",
        // }}
        >
          <h1 style={{ textAlign: "center" }}>
            chlorophyll your journal to take care of your plant!
          </h1>
          {/* <SubmitNotification user={user} />

          <MaxLevelNotification user={user} /> */}

          <PlantGif user={user} style={{ backgroundColor: "transparent" }} />
        </div>
      ) : (
        <div>
          <h1>you're not logged in!</h1>
          <h2>please sign in to start growing together with your plant!</h2>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
