import React, { useState } from "react";
import Theme from "./components/Theme.jsx";
import { palette } from "./components/Palette.jsx"; // Import colors

const App = () => {
  const [themeColor, setThemeColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: themeColor,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Theme
        palette={palette}
        themeColor={themeColor}
        updateTheme={setThemeColor}
        resetTheme={() => setThemeColor("white")}
      />
    </div>
  );
};

export default App;
