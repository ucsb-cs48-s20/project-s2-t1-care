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
      <h1> let's see how you're doing! </h1>
      <Graph user={user}></Graph>
      <JournalLog user={user}></JournalLog>
    </Layout>
  );
}
