import React,{useEffect}from 'react';
import ReactangleCard from './card/rectangle';

export default function RoadInf({item}) {
    useEffect(()=>{
        console.log(item)
    },[])

    return (
        <div>
            {item ? (
                <div>
                  <h2 className='inf-title'>АҚҚҰМ ЕЛДІ МЕКЕНІНДЕГІ КӨШЕЛЕРДІҢ СЫЗБАСЫ</h2>
                    <div class="card-container card-container--fulled">
                    {item.map((it,index)=>(
                      <ReactangleCard item={it}></ReactangleCard>
                    ))}
                    </div>
                 </div>
            ) : ''}
     
      </div>
    )
}