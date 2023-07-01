import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";

import UserProvider from "./users/providers/UserProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;