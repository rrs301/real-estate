import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
  
function Slider({imageList}) {
    console.log(imageList)
  return (
    <div >
         {imageList?      
          <Carousel>
        <CarouselContent>
            {imageList.map((item,index)=>(
                 <CarouselItem>
                    <Image src={item.url} width={800}
                    height={300}
                    alt='image'
                    className='rounded-xl object-cover h-[360px] w-full'
                    />
                 </CarouselItem>
            ))}
           
           
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        :<div className='w-full h-[200px] bg-slate-200 animate-pulse rounded-lg'>
            
        </div>}

    </div>
  )
}

export default Slider