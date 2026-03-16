import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Scale,
  Search,
  SquareFunction,
  Footprints,
  Mountain,
  Lightbulb,
  HeartHandshake,
  ListTodo
} from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
  image: string;
  label: string;
}

interface HeroProps {
  slides: SlideData[];
}

function getIconForLabel(label: string) {
  const l = label?.toLowerCase() || "";
  if (l.includes("leader"))
    return <Scale size={64} className="mb-4 text-white" />;
  if (l.includes("researcher"))
    return <Search size={64} className="mb-4 text-white" />;
  if (l.includes("engineer"))
    return (
      <SquareFunction size={64} className="mb-4 text-white" />
    );
  if (l.includes("runner"))
    return <Footprints size={64} className="mb-4 text-white" />;
  if (l.includes("hiker"))
    return <Mountain size={64} className="mb-4 text-white" />;
  if (l.includes("innovator"))
    return <Lightbulb size={64} className="mb-4 text-white" />;
  if (l.includes("organizer"))
    return <ListTodo size={64} className="mb-4 text-white" />;
  if (l.includes("spirited"))
    return <HeartHandshake size={64} className="mb-4 text-white" />;
  return null;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-sm pointer-events-auto"
      aria-label="Next image"
    >
      <ChevronRight size={32} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-sm pointer-events-auto"
      aria-label="Previous image"
    >
      <ChevronLeft size={32} />
    </button>
  );
}

export function Hero({ slides }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current: number, next: number) =>
      setCurrentSlideIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{ bottom: "20px" }}
        className="absolute w-full left-0 z-30 pointer-events-auto flex justify-center"
      >
        <ul className="m-0 p-0"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Static 50% width Black Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/7 bg-black/50 p-8 md:px-10 flex flex-col justify-between z-10 pointer-events-none">
        <div className="mt-20 flex flex-col items-start pointer-events-auto">
          <h1 className="text-5xl md:text-[60px] font-bold text-white leading-[1.2] md:leading-[90px]">
            Hello! My name's Nathaniel,
          </h1>
          <h2 className="text-[32px] md:text-[50px] text-white font-bold leading-snug md:leading-[68.75px] mt-4">
            and I am...
          </h2>
        </div>

        <div className="mb-5 flex flex-col items-end pointer-events-auto w-full">
          {getIconForLabel(slides[currentSlideIndex]?.label)}
          <p className="text-4xl md:text-[60px] font-semibold text-white transition-opacity duration-300 md:leading-[60px]">
            {slides[currentSlideIndex]?.label}
          </p>
        </div>
      </div>

      {/* Image Slider */}
      <div className="absolute inset-0 [&_.slick-slider]:h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full">
        <style>{`
          .slick-dots li button:before { color: white !important; opacity: 0.5; }
          .slick-dots li.slick-active button:before { color: white !important; opacity: 1; }
        `}</style>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="h-full w-full relative outline-none bg-black"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none z-30">
        <button
          onClick={() => {
            document
              .getElementById("timeline")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce pointer-events-auto hover:text-gray-300 transition-colors bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <ChevronDown
            size={32}
            className="text-white"
          />
        </button>
      </div>
    </section>
  );
}