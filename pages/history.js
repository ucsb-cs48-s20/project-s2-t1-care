import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import JournalForm from "../components/JournalForm";
import { optionalAuth } from "../utils/ssr";
import JournalLog from "../components/log";
//import Graph from "../components/Graph";
const Graph = dynamic(() => import("../components/Graph"), {
  ssr: false,
});

export const getServerSideProps = optionalAuth;
export default function MultiForm(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      {user ? (
        <div>
          <h1> let's see how you're doing! </h1>
          <br />
          <Graph user={user}></Graph>
          <br />
          <br />
          <JournalLog user={user}></JournalLog>
        </div>
      ) : (
        <h1> you must log in to access your history! </h1>
      )}
    </Layout>
  );
}
