// ====================
// Import
// ====================
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Preview from "./components/Preview";
import Detail from "./components/Detail";

// ====================
// Functions
// ====================
function App() {
  const [items, setItems] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigate();
  const freeItems = items.filter(i => !i.is_premium);
  const onePremium = items.find(i => i.is_premium);
  const allFreeExceptOne = onePremium ? [...freeItems, onePremium] : freeItems;
  useEffect(() =>{ getData();}, []);

  async function getData() {
    const url = "http://localhost:3456/api/images";

    try {
      const response = await fetch(url);
      if (!response.ok) { throw new Error(`Response status: ${response.status}`); }
      const json = await response.json();
      setItems(json);
    } catch (error) {
      console.error(error.message);
    }

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

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <h2>Level 1</h2>
            <div className="main">
              {showBanner && <Banner onClick={togglePopup} />}


              {allFreeExceptOne.map((i) => (
                <Preview
                  key={i.id}
                  item={i}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
            <h2>Level 2</h2>

            <div className="main">

              {items.filter(i => i.is_premium && i.id != onePremium.id).map((i) => (
                <Preview
                  key={i.id}
                  item={i}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </div>
        } />

        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;