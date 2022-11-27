import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import React from "react";

const arr = [
  {
    title: "Мужские кроссовки Dolce & Gabbana",
    price: "567,00 USD",
    imgUrl:
      "https://cdn-images.farfetch-contents.com/19/17/23/60/19172360_42213250_1000.jpg",
  },
  {
    title: "Мужские кроссовки Air Jordan 1 High OG twist",
    price: "1 112,00 USD",
    imgUrl:
      "https://cdn-images.farfetch-contents.com/14/08/89/05/14088905_18503305_1000.jpg",
  },
  {
    title: "Мужские кроссовки Balenciaga Speed 2.0",
    price: "1 040,00 USD",
    imgUrl:
      "https://cdn-images.farfetch-contents.com/18/72/75/83/18727583_42389574_1000.jpg",
  },
  {
    title: "Мужские кроссовки Off-White 3.0 Off-Court",
    price: "585,00 USD",
    imgUrl:
      "https://cdn-images.farfetch-contents.com/19/27/11/13/19271113_42432317_1000.jpg",
  },
];

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);


  return (
    <div className="wrapper">
      {cardOpened ? <Drawer onClose={()=> setCardOpened(false )}/> : null}
      <Header onClickCart={()=> setCardOpened (true)}/>
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
          {arr.map((obj) => (
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
