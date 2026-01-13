import Home from "../pages/Home";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return <Home />;
};
