import Auther from './child/auther';

export default function section2() {
    return (
        <div>
            <h1 class="text-3xl mb-14 font-bold text-center">
                Latest Posts
            </h1>
            <div className="mb-20 flex flex-wrap">
                {post1()}
                {post2()}
                {post3()}
                {post2()}
                {post1()}
                {post2()}
            </div>
        </div>
    )
}


function post1() {
    return (
        <>
            <div className="card card-compact w-[360px] bg-base-100 shadow-xl my-10 mx-auto">
                <figure><img src="https://i.ibb.co/FWpPhDK/nextjs-image.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                    <h1 className="text-[22px] font-semibold my-0">What is React JS and why we should use this ?</h1>
                    <p className="">The React js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    <Auther></Auther>
                </div>
            </div>
        </>
    )
}
function post2() {
    return (
        <>
            <div className="card card-compact w-[360px] bg-base-100 shadow-xl my-10 mx-auto">
                <figure><img src="https://i.ibb.co/nwrvjJS/960x0.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                    <h1 className="text-[22px] font-semibold my-0">What is React JS and why we should use this ?</h1>
                    <p className="">The React js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    <Auther></Auther>
                </div>
            </div>
        </>
    )
}
function post3() {
    return (
        <>
            <div className="card card-compact w-[360px] bg-base-100 shadow-xl my-10 mx-auto">
                <figure><img src="https://i.ibb.co/FWpPhDK/nextjs-image.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <p><span className="text-[#ee8eb0] font-semibold">Web Development</span>-<small>17/12/2022</small></p>
                    <h1 className="text-[22px] font-semibold my-0">What is React JS and why we should use this ?</h1>
                    <p className="">The React js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    <Auther></Auther>
                </div>
            </div>
        </>
    )
}