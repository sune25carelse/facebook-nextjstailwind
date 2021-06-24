import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>facebook</title>
      </Head>

      <Header />

      <div>
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
