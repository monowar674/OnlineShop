import React, { useState } from 'react'
import data from '../../../CardData'
import './card.css'
const Card = () => {
  const [offer, setoffer] = useState(data)
  return (
    <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-5">

      {data.map((e) => {
        return (
          <div key={e.product} className="card col-span-1 overflow-hidden bg-[#fff] shadow-2xl border-3 border-[#dbc2c2] p-2 rounded-2xl ">
            <div className="overflow-hidden mb-6">
              <img className='rounded-xl w-full hover:scale-125 transition-all duration-700 ease-in-out' src={e.img} alt="" />
            </div>
            <h4 className='mb-2 headding'>{e.name}</h4>
            <p className='mb-2 pra'>{e.wight}</p>
            <p className='mb-2 before-p'>{e.beforePrice}</p>
            <p className='mb-2 pra'>{e.price}</p>
            {offer ? <div className='absolute -top-2 -left-2 px-2.5 py-3 flex items-center justify-center rounded-full bg-amber-500'>{e.offer}</div> : ""}
            <button type="button" className="btn btn-secondary text-2xl  ">ODER NOW</button>
          </div>
        )
      })}
    </div>
  )
}

export default Card