import React from 'react'

export default function auther() {
    return (
        <div className='flex gap-[10px]'>
            <div className="avatar">
                <div className="w-[50px] rounded-full">
                    <img src="https://i.ibb.co/3z6xzzC/profile-pic.png" />
                </div>
            </div>
            <div>
                <h6 className='font-semibold mb-0'>Syed Jaid Ahmed</h6>
                <p className='text-[14px] mt-[-4px]'>Mern Stack Dev</p>
            </div>
        </div>
    )
}
