import { registerRootComponent } from "expo";

import App from "./App";

import { AuthProvider } from "./context/AuthProvider";

const MainContainer = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default registerRootComponent(MainContainer);