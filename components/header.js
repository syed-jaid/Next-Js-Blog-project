import { FaReact } from 'react-icons/fa';
import { BsLinkedin, BsPersonSquare } from 'react-icons/bs';

const header = () => {
    const manu = <>
        <li className='border-[1px] border-[#ccdbe0] rounded-[10px] btn btn-outline mr-[3px]'><a><BsLinkedin className='mt-[2px]' />Linkedin</a></li>
        <li className='border-[1px] border-[#ccdbe0] rounded-[10px] btn btn-outline mr-[3px]'><a><BsPersonSquare className='mt-[2px]' />Portfolio</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><FaReact className='mr-[5px] mt-[2px]' />JS Blog</a>
                </div>
                <div className="navbar-end lg:navbar-end">
                    <a className="btn-outline hover:bg-[#1f2937] font-semibold p-[7px] border-b-[2px] border-black">Design</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {manu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default header;