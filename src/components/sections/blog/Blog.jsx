import React, { useState } from "react";
import "./Blog.scss";

export const Blog = ({ blog, scrollToSection }) => {
    const [data,setData] = useState({})
  const dummyData = [
    {
      id: 1,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/12/banner-16.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
    {
      id: 2,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/12/WI1015_cover.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
    {
      id: 3,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/11/manuel-cosentino-M3fhZSBFoFQ-unsplash-e1613656498145.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
    {
      id: 4,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/11/balazs-ketyi-jRUW43RuZ_A-unsplash-e1613656520111.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
    {
      id: 5,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/11/omid-armin-UtuGfdUwdRg-unsplash-e1612884266490.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
    {
      id: 6,
      image:
        "https://templatekit.jegtheme.com/pirus/wp-content/uploads/sites/43/2020/11/Gear-Outdoor-Research-Face-Mask-2.jpg",
      about:
        "Could this VR sketching tool be coming of age for designers in the future?",
      about1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    },
  ];

  const handleChange = (e) =>{
    const dum = e;
    setData(dum)
  }

  return (
    <div ref={blog}>
      <div className="BlogContainer">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1401269015/photo/concentrated-asian-middle-aged-female-businesswoman-using-portable-computer.webp?b=1&s=170667a&w=0&k=20&c=S71c92sfP6BeoNUoCH5JbLSm_sFQ39Ug8FcQ8WY-dJk="
            alt="blogimage"
            className="BlogImage"
          />
        </div>
        <div className="BlogContentContainer">
          <h1 className="BlogContent">Blog Content</h1>
        </div>
      </div>
      <div className="CheckOutSection">
        <h1 className="latestNews">Check our latest news.</h1>
        <h3 className="CheckoutNews">CHECK OUT SOME OF OUR NEWS</h3>

      </div>
      <div className="CardContainer">
        {dummyData.map((data) => (
          <div key={data.id} className="Card">
            <img src={data.image} alt={data.about} className="CardImage" />
            <h2 className="CardTitle">{data.about}</h2>
            <p className="CardDescription">{data.about1}</p>

            <div className="buttonContainer">
              <button type="button" className="ReadMore" onClick={()=>handleChange(data?.id)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
