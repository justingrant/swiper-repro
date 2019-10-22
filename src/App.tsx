import React, { useLayoutEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

const App: React.FC = () => {
  useLayoutEffect(() => {
    /* const swiper = */ new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      initialSlide: 50,
      mousewheel: {
        forceToAxis: true,
        invert: true,
      },
      freeMode: true,
      freeModeSticky: true,
      freeModeMomentumRatio: 0.5,
      virtual: {
        slides: Array.from(new Array(100).keys(), i => `Slide #${i}`),
      },
    });
  }, []);
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper" />
    </div>
  );
};

export default App;
