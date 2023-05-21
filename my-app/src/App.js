import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      <Painting
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />
    </div>
  );
}

//____________________________________________

//Рендер по умові (або логічне && або тренарник)

// export default function App() {
//   const isOnline = true;
//   return (
//     <div>
//       {isOnline && "Онлайн"} //якщо потрібно вивести, якщо щось true|false, то
//       використовуй такий варіант
//       {isOnline ? "Онлайн" : "Офлайн"} //через тренарний оператор, коли потрібно
//       зарендерити або або
//     </div>
//   );
// }
