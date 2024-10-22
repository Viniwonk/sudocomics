import CatlogComic from "../catlog_comic";
import { Link } from "react-router-dom";

export default function CatlogCollection() {
  const ListaQuad = [
    {
      id: "dc1",
      name: "Batman Vol. 2: The Bat-Man of Gotham TP",
      url: "/quadrinhos/Batman.jpg",
    },
    {
      id: "dc2",
      name: "Batman / Superman: Worlds Finest #30",
      url: "/quadrinhos/bbb.jpg",
    },
    { id: "mvl1", name: "Phoenix #2", url: "/quadrinhos/Fenix.jpg" },
    {
      id: "mvl2",
      name: "Miles Morales: Spider-Man Annual #1",
      url: "/quadrinhos/Miles Morales.jpg",
    },
    {
      id: "mvl3",
      name: "The Incredible Hulk Epic Collection: Ground Zero TP",
      url: "/quadrinhos/Hulk.jpg",
    },
  ];

  return (
    <div>
      <div className="slider_map">
        {ListaQuad.map((item) => (
          <Link to={"catalogue/" + item.id} key={item.id}>
            <div className="slider_item">
              <img src={item.url} height={235} alt="placeholder" />
              <div className="slider_item_content">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
