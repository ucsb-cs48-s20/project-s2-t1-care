import React from "react";
import { select, text } from "@storybook/addon-knobs";
import PlantGif from "../components/PlantGif";

export default {
  title: "PlantGif",
  component: PlantGif,
};

//<PlantGif user={user} style={{ backgroundColor: "transparent" }} />

export const newPlant = () => {
  const json = 0;
  return <PlantGif json={json} />;
};

export const loggedIn = () => {
  const name = text("Name", "Chill Ponrad");
  const role = select("Role", ["admin", "student", "guest"], "guest");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const sub = text("ID", "google-oauth2|112141203730427097678");
  const user = { name, role, picture, sub };
  const plant = 10;

  return <PlantGif user={user} plant={plant} />;
};
