import { database } from "../../utils/database";

async function updateSettings(req) {
  const client = await database();
  const users = client.collection("users");
}

async function performAction(req, res) {
  switch (req.method) {
    case "POST":
      updateSettings(req);
      res.status(204);
      res.end();
      return;
  }
  throw { status: 405 };
}

export default performAction;
