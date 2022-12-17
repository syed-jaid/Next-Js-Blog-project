import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Auther from './child/auther'

export default function section3() {
    SwiperCore.use([Autoplay])
    return (
        <div>
            <h1 class="text-3xl mt-20 font-bold text-center">
                Popular Posts
            </h1>
            <div>
                <Swiper
                    slidesPerView={2}
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
        </div>
    )
}

function slider1() {
    return (<>
        <div className="card card-side shadow-xl my-[50px] mx-[10px]">
            <figure><img className='h-[210px] w-[340px]' src="https://i.ibb.co/FWpPhDK/nextjs-image.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                <h1 className="text-[17px] font-semibold my-0">What is Next JS and why we should use this ?</h1>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">Details</button>
                </div>
            </div>
        </div>
    </>)
}
function slider2() {
    return (<>
        <div className="card card-side shadow-xl my-[50px] mx-[10px]">
            <figure><img className='h-[210px] w-[340px]' src="https://i.ibb.co/nwrvjJS/960x0.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <p><span className="text-[#ee8eb0] font-semibold">New Technology</span>-<small>22/12/2022</small></p>
                <h1 className="text-[17px] font-bold">What is blockchain and how does it work ?</h1>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">Details</button>
                </div>
            </div>
        </div>
    </>)
}
function slider3() {
    return (<>
        <div className="card card-side shadow-xl my-[50px] mx-[10px]">
            <figure><img className='h-[210px] w-[340px]' src="https://i.ibb.co/0YmYmSb/react-js.png" alt="Movie" /></figure>
            <div className="card-body">
                <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                <h1 className="text-[17px] font-bold">What is React JS and why we should use this ?</h1>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">Details</button>
                </div>
            </div>
        </div>
    </>)
}