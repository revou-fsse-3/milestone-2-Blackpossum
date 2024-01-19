import React from "react";
import Navbar from "../component/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  // Check the authentication status (replace with your logic)
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <div>
      <Navbar
        onLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {isLoggedIn ? (
        // Render content for authenticated users
        <div style={{ padding: "20px" }}>{children}</div>
      ) : (
        // Render a message or redirect to login for unauthenticated users
        <div style={{ padding: "20px" }}>
          Please log in to access this page.
        </div>
      )}
    </div>
  );
};

export default ProtectedLayout;
