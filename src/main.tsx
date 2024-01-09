import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="max-w-[1440px] mx-4">
      <Navbar />
      <App />
      <Footer />
    </main>
  </React.StrictMode>
);
