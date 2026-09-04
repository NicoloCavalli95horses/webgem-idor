// ====================
// Import
// ====================
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Banner from "./components/Banner";
import Preview from "./components/Preview";
import Detail from "./components/Detail";
import SecretPage from "./components/SecretPage";
import { executeReq } from "./utils/api";

// ====================
// Functions
// ====================
function App() {
  const [items, setItems] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { getData(); }, []);

  async function getData() {
    const data = await executeReq("http://localhost:3456/api/images");
    setItems(data);
  }

  function handleClick(i) {
    if (i.is_premium) {
      setShowBanner(true);
    } else {
      navigate(`/${i.id}`);
    }
  }

  function togglePopup() {
    setShowBanner(false);
  }

  async function onSecretPageLoad() {
    const user = await executeReq("http://localhost:3456/api/user");
    if (user?.isAuth) {
      navigate("secret-page");
    } else {
      setShowBanner(true);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <h2>External resources (IDOR)</h2>
            <div className="main">
              {showBanner && <Banner onClick={togglePopup} />}
              {items.map((i) => (
                <Preview
                  key={i.id}
                  item={i}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
            <h2>Client-side access control</h2>
            <div className="main">
              <button onClick={onSecretPageLoad}>Go to secret page</button>
            </div>
          </div>
        } />

        <Route path="/secret-page" element={<SecretPage />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;