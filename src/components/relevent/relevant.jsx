import React,{useEffect}from 'react';
import ReleventItem from './releventItem';


export default function Relevant({relevants}) {
    useEffect(()=>{
        console.log(relevants)
    },[])

    return (
        <div>
            {relevants ? (
                <div>
                    <h2 className="inf-title">Өзекті мәселелер</h2>
                <div class="relevant-container">
                
                {relevants.map((item,index)=>(
                    <ReleventItem item={item} index={index}></ReleventItem>
                ))}
                </div>   
               </div> 
            ) : ''}
     
      </div>
    )
}