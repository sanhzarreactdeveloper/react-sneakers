import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import React from "react";

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);

  fetch("https://63864d9cbeaa64582679a2ee.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });

  return (
    <div className="wrapper">
      {cardOpened && <Drawer onClose={() => setCardOpened(false)} />}
      <Header onClickCart={() => setCardOpened(true)} />
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
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onFavorite={() => console.log("Добавить в избранное")}
              onPlus={() => console.log("Нажать на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
