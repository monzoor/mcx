import { FC } from "react";
import Generic from "./Generic";

const isLoggedIn = true;
const Private: FC = ({ children }) => {
  if (!isLoggedIn) {
    return <p>Not logged in</p>;
  }
  return <Generic>{children}</Generic>;
};

export default Private;
