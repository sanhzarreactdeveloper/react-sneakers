/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper">
      <header className="justify-between d-flex align-center p-30">
        <div className="d-flex align-center">
          <img
            width="45px"
            height="45px"
            src="https://img.freepik.com/premium-vector/highquality-logo-concept-features-sneaker-made-vibrant-segments-with-cool-modern-look-vintage-hand-drawn_668007-95.jpg?w=2000"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-4">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight" >
          <li>
            <img
              width="18px"
              height="18px"
              src="https://cdn-icons-png.flaticon.com/512/419/419910.png"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width="18px"
              height="18px"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={145}
              height={145}
              src="https://freepngimg.com/thumb/categories/627.png"
              alt=""
              className="ml-30"
            />
            <h5>Женские кроссовки Nike Woman BLue Orange SSX</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
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
              width={145}
              height={145}
              src="https://freepngimg.com/thumb/categories/627.png"
              alt=""
              className="ml-30"
            />
            <h5>Женские кроссовки Nike Woman BLue Orange SSX</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
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
              width={145}
              height={145}
              src="https://freepngimg.com/thumb/categories/627.png"
              alt=""
              className="ml-30"
            />
            <h5>Женские кроссовки Nike Woman BLue Orange SSX</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
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
              width={145}
              height={145}
              src="https://freepngimg.com/thumb/categories/627.png"
              alt=""
              className="ml-30"
            />
            <h5>Женские кроссовки Nike Woman BLue Orange SSX</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
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
