import React, { useState } from 'react';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const goToSlide = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    return (
        <>
            <div
               style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
                         
                id="carouselExampleCaptions"
                className="relative px-44 mt-64"
                data-te-carousel-init
                data-te-carousel-slide
            >
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators
                >
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="0"
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${activeSlide === 0 ? 'opacity-100' : 'opacity-50'
                            }`}
                        aria-current={activeSlide === 0}
                        aria-label="Slide 1"
                        onClick={() => goToSlide(0)}
                    ></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="1"
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${activeSlide === 1 ? 'opacity-100' : 'opacity-50'
                            }`}
                        aria-current={activeSlide === 1}
                        aria-label="Slide 2"
                        onClick={() => goToSlide(1)}
                    ></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="2"
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${activeSlide === 2 ? 'opacity-100' : 'opacity-50'
                            }`}
                        aria-current={activeSlide === 2}
                        aria-label="Slide 3"
                        onClick={() => goToSlide(2)}
                    ></button>
                </div>

                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'
                            }`}
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                            className="block w-full"
                            alt="Slide 1"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'
                            }`}
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="Slide 2"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'
                            }`}
                        data-te-carousel-item
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="Slide 3"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
