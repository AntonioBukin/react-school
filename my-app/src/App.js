import Painting from "./components/Painting";
import Painting from "./paintings.json";

export default function App() {
  return (
    <div>
      <Painting
        url={painting[0].url}
        title={painting[0].title}
        authorName={painting[0].author.tag}
        profileUrl={painting[0].author.url}
        price={painting[0].price}
      />
    </div>
  );
}
