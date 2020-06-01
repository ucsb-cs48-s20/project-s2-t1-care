import auth0 from "./auth0";
import config from "./config";
import { getTestAuthSession } from "./testAuth";

export async function getUserSession(req) {
  let session;
  if (config.USE_TEST_AUTH) {
    session = getTestAuthSession(req);
  } else {
    session = await auth0.getSession(req);
  }

  if (session && session.user) {
    return session;
  }

  return null;
}

export async function optionalAuth({ req }) {
  const session = await getUserSession(req);

  if (session && session.user) {
    return {
      props: {
        user: session.user,
      },
    };
  }

  return { props: {} };
}

export async function requiredAuth({ req, res }) {
  const session = await auth0.getUserSession(req);

  if (session && session.user) {
    return {
      props: {
        user: session.user,
      },
    };
  }

  res.writeHead(302, {
    Location: "/api/login",
  });
  res.end();
}
