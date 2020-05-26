  
import React from "react";
import JournalForm from "../components/JournalForm";
import { select, text } from "@storybook/addon-knobs";

export default {
  title: "JournalForm",
  component: JournalForm,
};

export const loggedOutEmpty = () => {
  return <JournalForm />;
};

export const loggedInDoesNothingAtAll = () => {
  const name = text("Name", "Misha Rocks");
  const role = select("Role", ["admin", "student", "guest"], "guest");
  const picture = text(
    "Image URL",
    "https://avatars3.githubusercontent.com/u/1119017"
  );
  const user = { name, role, picture };
  return (
    <JournalForm user={user} />
    );
};