import ReactDOM from "react-dom";
import App from "./App";
import paintings from "./paintings.json";

// const elem1 = <span>Hello</span>;

// const elem2 = <span>world</span>;

//!Props Children - це діти вашого елементу

// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// ); //це js вираз

// console.log(element);

// ReactDOM.render(element, document.querySelector("#root"));
//___________________________________________________________//

//Відрісовка сторінки (JSX вираз)

// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector("#root"));

//___________________________________________________________//

//Компоненти - це незалежні шматочки інтерфейсу

//Щоб не писати повсюду Props (можна зробити деструктурізацію)
//Ф-цію перенесли в файл Painting.js

// function Painting(props) {
//   const { url, title, profileUrl, authorName, price } = props;
//   //console.log(Props);
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{authorName}</a>
//       </p>
//       <p>Цена: {price}кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// const painting = paintings[2];

ReactDOM.render(<App />, document.querySelector("#root"));
