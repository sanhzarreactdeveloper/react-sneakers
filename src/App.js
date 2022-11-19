import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper">
        <Drawer />
        <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img
              width={25}
              height={25}
              alt="Search"
              src="https://img.icons8.com/sf-ultralight/512/search.png"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <div className="card">
            <img
              width={110}
              height={140}
              src="https://cdn-images.farfetch-contents.com/14/08/89/05/14088905_18503305_1000.jpg"
              alt=""
              className="ml-40"
            />
            <h5>Мужские кроссовки Air Jordan 1 High OG twist</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>1 112,00 USD</b>
              </div>
              <button className="button">
                <img
                  width="11"
                  height="11"
                  src="https://cdn-icons-png.flaticon.com/512/232/232463.png"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={110}
              height={140}
              src="https://cdn-images.farfetch-contents.com/18/72/75/83/18727583_42389574_1000.jpg"
              alt=""
              className="ml-40"
            />
            <h5>Мужские кроссовки Balenciaga Speed 2.0</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>1 040,00 USD</b>
              </div>
              <button className="button">
                <img
                  width="11"
                  height="11"
                  src="https://cdn-icons-png.flaticon.com/512/232/232463.png"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={110}
              height={140}
              src="https://cdn-images.farfetch-contents.com/19/27/11/13/19271113_42432317_1000.jpg"
              alt=""
              className="ml-40"
            />
            <h5>Мужские кроссовки Off-White 3.0 Off-Court</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>585,00 USD</b>
              </div>
              <button className="button">
                <img
                  width="11"
                  height="11"
                  src="https://cdn-icons-png.flaticon.com/512/232/232463.png"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
