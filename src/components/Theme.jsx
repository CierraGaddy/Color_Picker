import React from "react";

const ThemeSelector = ({ palette, themeColor, updateTheme, resetTheme }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Selected Theme: {themeColor}</h2>
      {palette.map((color) => (
        <button
          key={color}
          onClick={() => updateTheme(color)}
          style={{
            backgroundColor: color,
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "5px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {color}
        </button>
      ))}
      <button
        onClick={resetTheme}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ThemeSelector;
