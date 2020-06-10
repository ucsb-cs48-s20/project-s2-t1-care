import { database } from "../../utils/database";

async function getUser(req) {
  const { sub } = req.query;

  if (!sub) {
    throw {
      status: 400,
      message: "Missing User",
    };
  }

  const client = await database();
  const users = client.collection("users");

  return users.findOne({ "user.sub": sub }, { PlantLevel: 1 });
}

async function updatePlantLevel(req) {
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
      goal: req.body.goal,
    },
    $inc: {
      PlantLevel: req.body.plantLevel,
    },
    $push: {
      HistoryLog: {
        $each: [req.body.entry],
        $position: 0,
      },
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
    case "GET":
      const plantLevel = await getUser(req);
      res.end(JSON.stringify(plantLevel));
      return;
    case "POST":
      updatePlantLevel(req);
      res.status(204);
      res.end();
      return;
  }
  throw { status: 405 };
}

export default performAction;
