import "./styles/App.css";
import RouterOutlet from "./RouterOutlet";
import { UserProvider } from "./context/UserProvider";
import Layout from "./pages/components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Portal } from '@mui/base/Portal';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Portal>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        >
          <Canvas
            flat
            orthographic
            camera={{
              zoom:200,
              near: 0.1,
              far: 200,
              position: [0, 0, 4],
            }}
          >
            <Experience />
          </Canvas>
        </div>
      </Portal>
      <Router>
        <UserProvider>
          <Layout>
            <RouterOutlet />
            <SpeedInsights />
          </Layout>
        </UserProvider>
        <ToastContainer position="bottom-right" />
      </Router>
    </>
  );
}

export default App;
