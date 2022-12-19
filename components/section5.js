import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const section5 = () => {
    const [cards, setCards] = useState([]);
    const [loved, setLoved] = useState(false)
    useEffect(() => {
        fetch('cardInfo.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    console.log(cards)
    return (
        <div className="flex flex-wrap max-w-[1200px] mx-auto">
            {
                cards.map(card => <div className="bg-[#0b2237] w-[290px] p-[25px] mx-auto my-[10px] rounded-xl">
                    {/* card top  */}
                    <div className="flex justify-between mb-[15px]">
                        <div className="badge badge-outline text-[#6f708f]">Hot Deal</div>
                        {card?.auction
                            ?
                            <div className="bg-[#141a30] border-[1.5px] border-[#754917] rounded-3xl px-[13px] py-[1px] text-white text-[11px]">AUCTION</div>
                            :
                            <div className="bg-[#141a30] border-[1.5px] border-[#36498a]  rounded-3xl px-[13px] py-[1px] text-white text-[12px]">SALE</div>
                        }
                    </div>
                    {/* card img  */}
                    <img className="rounded-lg" src={card?.image} alt="" />
                    {/* card info  */}
                    <div className='mt-[15px] flex justify-between'>
                        <div>
                            <p className="text-[#ced1d6]">{card?.nftId}</p>
                            <p className="text-[#4281be] text-[14px]">Enoch Citizen</p>
                        </div>
                        {loved ?
                            <p className='text-[#c5cacf] flex items-center'><FaHeart className='mr-[10px] text-[19px] text-[#ff0080]' onClick={() => setLoved(false)} /> {card?.love + 1}</p>
                            :
                            <p className='text-[#7c8187] flex items-center' ><FaHeart className='mr-[10px] text-[19px]' onClick={() => setLoved(true)} /> {card?.love}</p>
                        }
                    </div>
                </div >)
            }
        </div>
    );
};

export default section5;