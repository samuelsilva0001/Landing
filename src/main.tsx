import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const redirect = new URLSearchParams(window.location.search);
const redirectPath = redirect.get("p");

if (redirectPath) {
  const query = redirect.get("q");
  const nextUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}${redirectPath}${query ? `?${query}` : ""}${window.location.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

createRoot(document.getElementById("root")!).render(<App />);
