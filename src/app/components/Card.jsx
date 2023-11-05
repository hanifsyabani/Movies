import Image from "next/image"
import {imageUrl} from '@/lib/api'

export default function Card({image,title,popularity, overfiew}){
  return(
    <>
      <div className="bg-gray-500 rounded-md">
        <Image src={imageUrl + image} alt={title} width='200' height='200' className="w-full"/>
        <div className="mt-4 text-center text-sm">
          <h3 className="font-semibold">{title}</h3>
          <div>
            <p>{overfiew.length>50 ? overfiew.slice(0,50) + '...' : overfiew}</p>
          </div>
          <p>{popularity}</p>
        </div>
      </div>
    </>
  )
}