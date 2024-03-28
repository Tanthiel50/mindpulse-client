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
import { useLoading } from "./context/LoadingContext.jsx";
import LoadingIndicator from "./pages/components/LoadingIndicator.jsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { isLoading } = useLoading();

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <Portal>
        <div
          id="canvasId"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        >
          <Canvas flat>
            <Experience />
          </Canvas>
        </div>
      </Portal>
      <Router>
        <UserProvider>
          <ScrollToTop />
          <Layout>
            <RouterOutlet />
            <SpeedInsights />
          </Layout>
        </UserProvider>
        <ToastContainer position="bottom-right" />
      </Router>
    </>
  );
};
export default App;
