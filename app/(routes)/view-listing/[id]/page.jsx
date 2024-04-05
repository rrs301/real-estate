"use client"
import { supabase } from '@/utils/supabase/client'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import Slider from '../_components/Slider';
import Details from '../_components/Details';

function ViewListing({params}) {

    const [listingDetail,setListingDetail]=useState();
    useEffect(()=>{
        GetListingDetail();
    },[])
    const GetListingDetail=async()=>{
        const {data,error}=await supabase
        .from('listing')
        .select('*,listingImages(url,listing_id)')
        .eq('id',params.id)
        .eq('active',true);
    
        if(data)
        {
            setListingDetail(data[0]);
            console.log(data)
        }
        if(error)
        {
            toast('Server side error!')
        }
    }
  return (
    <div className='px-4 md:px-32 lg:px-56 py-5'>
        <Slider imageList={listingDetail?.listingImages} />
        <Details listingDetail={listingDetail} />
    </div>
  )
}

export default ViewListing