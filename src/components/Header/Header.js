/* eslint-disable jsx-a11y/alt-text */

function Header() {
  return (
    <header className="justify-between d-flex align-center p-30">
      <div className="d-flex align-center">
        <img
          width={45}
          height={45}
          src="https://img.freepik.com/premium-vector/highquality-logo-concept-features-sneaker-made-vibrant-segments-with-cool-modern-look-vintage-hand-drawn_668007-95.jpg?w=2000"
        />
        <div className="headerInfo">
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-4">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img
            width={18}
            height={18}
            src="https://cdn-icons-png.flaticon.com/512/419/419910.png"
          />
          <span>3 800,00 USD</span>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
