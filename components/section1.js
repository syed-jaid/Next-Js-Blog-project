import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Auther from './child/auther'

const section1 = () => {

    SwiperCore.use([Autoplay])
    return (
        <div>

            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000
                }}
            >
                <SwiperSlide>{slider1()}</SwiperSlide>
                <SwiperSlide>{slider2()}</SwiperSlide>
                <SwiperSlide>{slider3()}</SwiperSlide>
            </Swiper>
        </div>
    );
};

function slider1() {
    return (<>
        <h1 class="text-3xl mt-10 font-bold text-center">
            Trending !
        </h1>
        <div className="hero py-[50px] md:pt-[90px] md:pb-[150px]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={'https://i.ibb.co/0YmYmSb/react-js.png'} className="lg:mr-[100px] w-[522px] rounded-lg shadow-2xl" />
                <div>
                    <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                    <h1 className="text-5xl font-bold">What is React JS and why we should use this ?</h1>
                    <p className="py-6">The React js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    <Auther></Auther>
                </div>
            </div>
        </div>
    </>)
}
function slider2() {
    return (<>
        <h1 class="text-3xl mt-10 font-bold text-center">
            What is new !
        </h1>
        <div className="hero py-[50px] md:pt-[90px] md:pb-[150px]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={'https://i.ibb.co/FWpPhDK/nextjs-image.jpg'} className="lg:mr-[100px] w-[522px] rounded-lg shadow-2xl" />
                <div>
                    <p><span className="text-[#ee8eb0] font-semibold">React Framework
                        for Production</span>-<small>18/12/2022</small></p>
                    <h1 className="text-5xl font-bold">What is Next JS and why we should use this ?</h1>
                    <p className="py-6">Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
                    <Auther></Auther>
                </div>
            </div>
        </div>
    </>)
}
function slider3() {
    return (<>
        <h1 class="text-3xl mt-10 font-bold text-center">
            Have To learning !
        </h1>
        <div className="hero py-[50px] md:pt-[90px] md:pb-[150px]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={'https://i.ibb.co/nwrvjJS/960x0.jpg'} className="lg:mr-[100px] w-[522px] rounded-lg shadow-2xl" />
                <div>
                    <p><span className="text-[#ee8eb0] font-semibold">New Technology</span>-<small>22/12/2022</small></p>
                    <h1 className="text-5xl font-bold">What is blockchain and how does it work ?</h1>
                    <p className="py-6">What is a blockchain in simple words?
                        Blockchain defined: Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).</p>
                    <Auther></Auther>
                </div>
            </div>
        </div>
    </>)
}

export default section1;