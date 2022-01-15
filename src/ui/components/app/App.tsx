import { Dashboard } from "../../pages/dashboard";

import { SwghThemeProvider } from "../theme";

export const App = () => {
  return (
    <div className="App">
      <SwghThemeProvider>
        <Dashboard/>
      </SwghThemeProvider>
    </div>
  );
};
