import { createRoot } from "react-dom/client";

function SimpleApp() {
  return <h1>React is Working!</h1>;
}

createRoot(document.getElementById("root")!).render(<SimpleApp />);
