import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RestaverseLandingPage from "./pages/RestaverseLandingPage";
import RestaverseFeaturesPage from "./pages/RestaverseFeaturesPage";
import RestaverseCareersPage from "./pages/RestaverseCareersPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/restaverse-features-page":
        title = "";
        metaDescription = "";
        break;
      case "/restaverse-careers-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<RestaverseLandingPage />} />
      <Route
        path="/restaverse-features-page"
        element={<RestaverseFeaturesPage />}
      />
      <Route
        path="/restaverse-careers-page"
        element={<RestaverseCareersPage />}
      />
    </Routes>
  );
}
export default App;
