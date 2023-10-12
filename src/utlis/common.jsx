import Lottie from "lottie-react";
import LottieStrategy from "../../public/lottie/LottieStrategy.json";
import LottieBranding from "../../public/lottie/LottieBranding.json";
import LottieDesign from "../../public/lottie/LottieDesign.json";
import LottieEngin from "../../public/lottie/LottieEngin.json";
import LottieProduct from "../../public/lottie/LottieProduct.json";
import BlogFeatureImage from "../../public/casestudyone.png";

export const tabs = [
  {
    title: "Website Design (UI/UX)",
    img: <Lottie animationData={LottieStrategy} loop={true} />,
  },
  {
    title: "Web & Mobile App Development",
    img: <Lottie animationData={LottieProduct} loop={true} />,
  },
  {
    title: "Ecommerce Development",
    img: <Lottie animationData={LottieEngin} loop={true} />,
  },
  {
    title: "Digital Marketing",
    img: <Lottie animationData={LottieDesign} loop={true} />,
  },
  {
    title: "Website Maintenance",
    img: <Lottie animationData={LottieBranding} loop={true} />,
  },
];

export const blogsData = [
  {
    id: 1,
    slug: "Why-ui-ux-plays",
    image: BlogFeatureImage,
    title: "Why UI/UX Plays an Important Role",
    description:
      "Why UI/UX Plays an Important Role. Why UI/UX Plays an Important Role",
  },
  {
    id: 2,
    slug: "could-this-vr-sketching",
    image: BlogFeatureImage,
    title: "Could this VR sketching ",
    description:
      "Could this VR sketching . Could this VR sketching . Could this VR sketching ",
  },
];
