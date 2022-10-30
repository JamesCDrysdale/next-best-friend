import { createContext } from "react";

// This mimics a useState hook
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
