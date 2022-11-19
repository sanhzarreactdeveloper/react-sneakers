function Card() {
  return(<div className="card">
  <div className="favorite">
    <img
      width={36}
      height={36}
      src="https://i.ibb.co/Qbhn7n5/unliked-png.png"
      alt="unliked"
    />
  </div>
  <img
    width={110}
    height={140}
    src="https://cdn-images.farfetch-contents.com/19/17/23/60/19172360_42213250_1000.jpg"
    alt=""
    className="ml-40"
  />
  <h5>Мужские кроссовки Dolce & Gabbana</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
      <p>Цена:</p>
      <b>567,00 USD</b>
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
</div>)
}

export default Card;
