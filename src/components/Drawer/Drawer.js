import style from './Drawer.module.scss'

function Drawer(props) {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="mb-20 d-flex justify-between">
          Корзина
          <img onClick={props.onClose}
            className="removeBtn cu-p"
            width={30}
            height={30}
            src="https://i.ibb.co/Qf1bZyg/close-1.png"
            alt="Close"
          />
        </h2>

        <div className="items">
          <div className="cardItem d-flex align-center mb-20">
            <img 
              className="ml-20 mb-40"
              width={110}
              height={140}
              src="https://cdn-images.farfetch-contents.com/19/17/23/60/19172360_42213250_1000.jpg"
              alt=""
            />
            <div className="mr-20">
              <p className="mb-15">Мужские кроссовки Dolce & Gabbana</p>
              <b>567,00 USD</b>
            </div>
            <img
              className="removeBtn"
              width={30}
              height={30}
              src="https://i.ibb.co/Qf1bZyg/close-1.png"
              alt="Remove"
            />
          </div>

          <div className="cardItem d-flex align-center mb-20">
            <img
              className="ml-20 mb-40"
              width={110}
              height={140}
              src="https://cdn-images.farfetch-contents.com/14/08/89/05/14088905_18503305_1000.jpg"
              alt=""
            />
            <div className="mr-20">
              <p className="mb-15">
                Мужские кроссовки Air Jordan 1 High OG twist
              </p>
              <b>1 112,00 USD</b>
            </div>
            <img
              className="removeBtn"
              width={30}
              height={30}
              src="https://i.ibb.co/Qf1bZyg/close-1.png"
              alt="Remove"
            />
          </div>
        </div>

        <div className="cardTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>1 679,00 USD</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>84,5 USD</b>
            </li>
          </ul>

          <button className="greenButton">
            Оформить заказ{" "}
            <img src="https://i.ibb.co/BG0TBg3/image.png" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
