import Layout from "../components/Layout";
import JournalForm from "../components/JournalForm";
import { optionalAuth } from "../utils/ssr";
import PlantGif from "../components/PlantGif";

export const getServerSideProps = optionalAuth;
export default function MultiForm(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div>
          <JournalForm user={user}></JournalForm>
        </div>
      ) : (
        <h1> you must log in to access your journal! </h1>
      )}
    </Layout>
  );
}
