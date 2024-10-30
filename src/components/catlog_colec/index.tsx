import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../../style/catlogue_style.css";

interface Props {
  numStart: number;
  numStop: number;
}

export default function CatlogCollection({ numStart, numStop }: Props) {
  interface Item {
    ID: string;
    NOME: string;
    FOTO: string;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [ListaColecao, setListaColecao] = useState<Item[]>([]);

  useEffect(() => {
    fetch("https://sudocomics.onrender.com/colecao")
      .then((response) => response.json())
      .then((data) => setListaColecao(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div className="QUADRINHOS_LISTA">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        spaceBetween={5}
        speed={850}
        slidesPerView={4}
        centeredSlides={true}
        navigation
        autoplay={{ delay: 3000 }}
        slideToClickedSlide={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSlideChange={(swiper: SwiperClass) => {
          console.log(swiper);
          setActiveIndex(swiper.activeIndex);
        }}
        onSwiper={(swiper: SwiperClass) => console.log(swiper)}
      >
        {ListaColecao.slice(numStart, numStop).map((item, index) => (
          <SwiperSlide
            key={item.ID}
            className={`swiper-slide ${
              index === activeIndex ? "active-slide" : ""
            }`}
          >
            <Link to={"/colecao/" + item.ID}>
              <div className="slider_item">
                <img src={item.FOTO} height={235} alt="placeholder" />
                <div className="slider_item_content">{item.NOME}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
