import Lottie from "lottie-react";
import LottieStrategy from "../../public/lottie/LottieStrategy.json";
import LottieBranding from "../../public/lottie/LottieBranding.json";
import LottieDesign from "../../public/lottie/LottieDesign.json";
import LottieEngin from "../../public/lottie/LottieEngin.json";
import LottieProduct from "../../public/lottie/LottieProduct.json";

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
