import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "I absolutely love my new handwoven storage basket! It's not only beautiful but also very functional. It fits perfectly in my living room and holds all my blankets and magazines.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Michael Smith",
    text: "The eco-friendly market basket is a game-changer for my grocery shopping. It's sturdy, lightweight, and looks great. I get compliments every time I use it!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sarah Dery",
    text: "The decorative woven basket I bought is stunning. It adds a touch of elegance to my home décor. I use it to display flowers, and it’s become the centerpiece of my dining table.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "David Brown",
    text: "The picnic basket with a lid is perfect for our family outings. It’s spacious, well-designed, and keeps everything organized. Highly recommend it!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from our happy customers about their experiences with our beautifully crafted baskets.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;