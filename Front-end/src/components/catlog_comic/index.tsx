import { Link } from "react-router-dom";

type PropQuad = {
  quad?:{
    id?: string,
    name?: string,
    url?: string
  }
}

export default function CatlogComic(props:PropQuad) {

  return (
    <Link className="link" to="./avengers" >
      <div className="slider_colecao">
          <div className="slider_item">
            <img
              src={props.quad?.url}
              height={235}
              alt="placeholder"
            />
            <div className="slider_item_content">{props.quad?.name}
            </div>
        </div>
      </div>
    </Link>
  );
}
