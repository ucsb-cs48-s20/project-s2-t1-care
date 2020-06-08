import { database } from "../../utils/database";

async function resetLevel(req) {
  const { user } = req.body;

  if (!req.body) {
    throw {
      status: 400,
      message: "Missing User",
    };
  }

  const client = await database();
  const users = client.collection("users");

  const mutation = {
    $setOnInsert: {
      user,
    },
    $set: {
      PlantLevel: 0,
    },
  };

  const result = await users.findOneAndUpdate(
    { "user.sub": req.body.user.sub },
    mutation,
    {
      upsert: true,
      returnOriginal: false,
    }
  );

  return result.value;
}

async function performAction(req, res) {
  switch (req.method) {
    case "POST":
      resetLevel(req);
      res.status(204);
      res.end();
      return;
  }
  throw { status: 405 };
}

export default performAction;
