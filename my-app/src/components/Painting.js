import PropTypes from "prop-types";
import defaultImage from "./noImage.png";

export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  authorName = "немає інформації",
  price,
  quantity,
}) {
  //console.log(Props);
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов </p>
      <p>Доступность: {quantity < 10 ? "закінчюється" : "є в наявності"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
