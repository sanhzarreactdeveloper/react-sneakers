import style from "./Card.module.scss";


function Card(props) {
  return (
    <div className={style.card}>
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
        src={props.imgUrl}
        alt=""
        className="ml-40"
      />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img
            width="11"
            height="11"
            src="https://cdn-icons-png.flaticon.com/512/232/232463.png"
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
