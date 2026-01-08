import React, { useState } from 'react';
import SlideLayout from './components/SlideLayout';
import CoverSlide from './components/slides/CoverSlide';
import IntroSlide from './components/slides/IntroSlide';
import PhasesSlide from './components/slides/PhasesSlide';
import FocusPointsSlide from './components/slides/FocusPointsSlide';
import SummarySlide from './components/slides/SummarySlide';
import EndingSlide from './components/slides/EndingSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: <CoverSlide />, title: "", isCover: true },
    { component: <IntroSlide />, title: "一、核心建设逻辑", isCover: false },
    { component: <PhasesSlide />, title: "二、六阶段实施路径", isCover: false },
    { component: <FocusPointsSlide />, title: "三、核心关注点", isCover: false },
    { component: <SummarySlide />, title: "四、总结与回顾", isCover: false },
    { component: <EndingSlide />, title: "", isCover: true },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <SlideLayout
      currentSlideIndex={currentSlide}
      totalSlides={slides.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      title={currentSlideData.title}
      isCover={currentSlideData.isCover}
    >
      {currentSlideData.component}
    </SlideLayout>
  );
};

export default App;