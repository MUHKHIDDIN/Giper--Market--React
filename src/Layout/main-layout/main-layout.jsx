import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Layout/header";
import { Footer } from "../../Layout/footer";
export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
