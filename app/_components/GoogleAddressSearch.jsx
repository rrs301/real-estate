"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress,setCoordinates}) {
  return (
    <div className='flex items-center w-full'>
        <MapPin className='h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-200'/>
          <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
            selectProps={{
                placeholder:'Search Property Address',
                isClearable:true,
                className:'w-full',
                onChange:(place)=>{
                    console.log(place);
                    selectedAddress(place);
                    geocodeByAddress(place.label)
                    .then(result=>getLatLng(result[0]))
                    .then(({lat,lng})=>{
                       
                        setCoordinates({lat,lng})
                    })
                }
            }}
        
        />
    </div>
  )
}

export default GoogleAddressSearch