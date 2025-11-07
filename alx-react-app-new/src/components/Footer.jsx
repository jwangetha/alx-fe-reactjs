import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My React App</p>
    </footer>
  );
}

export default Footer;
