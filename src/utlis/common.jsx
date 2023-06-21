import Lottie from "lottie-react";
import LottieStrategy from '../../public/lottie/LottieStrategy.json'
import LottieBranding from '../../public/lottie/LottieBranding.json'
import LottieDesign from '../../public/lottie/LottieDesign.json'
import LottieEngin from '../../public/lottie/LottieEngin.json'
import LottieProduct from '../../public/lottie/LottieProduct.json'

export const tabs = [
  {
    title: "Strategy",
    img:    <Lottie
    animationData={LottieBranding}
    loop={true}

  />
  },
  {
    title: "Branding",
    img: <Lottie
    animationData={LottieStrategy}
    loop={true}

  />,
  },
  {
    title: "Designs",
    img: <Lottie
    animationData={LottieDesign}
    loop={true}

  />,
  },
  {
    title: "Engineering",
    img: <Lottie
    animationData={LottieEngin}
    loop={true}
  />,
  },
  {
    title: "Product Management",
    img: <Lottie
    animationData={LottieProduct}
    loop={true}

  />,
  },
];
