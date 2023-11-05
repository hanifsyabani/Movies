"use client"

import {useGetMovies} from "@/hooks/usemovie"
import Card from '../components/Card'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function ListMovie(){
  const[sortBy, setSortBy] = useState("popularity.desc")

  const searchParams = useSearchParams()
  const data = useGetMovies(sortBy, searchParams.get('page'));

  console.log(data)
  return(
    <>
       <div>
          <select name="" id="" onChange={(e)=> setSortBy(e.target.value)}>
            <option value="popularity.desc">Popularity Desc</option>
            <option value="popularity.asc">Popularity asc</option>
          </select>
        </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-5 "> 
        {data?.results?.map((item,index)=>(
          <Card key={item.id} image={item.poster_path} id={item.id} title={item.title} popularity={item.popularity} overfiew={item.overview} />
        ))}
      </div>
      <div className="mt-10">
        <ul className="flex justify-center items-center gap-6">
          <li>
            <AiOutlineLeft/>
          </li>
          <li>
            <Link href='/?page=1'>
              1
            </Link>
          </li>
          <li>
            <Link href='/?page=2'>
              2
            </Link>
          </li>
          <li>
            <Link href='/?page=3'>
              3
            </Link>
          </li>
          <li>
            <Link href='/?page=4'>
              4
            </Link>
          </li>
          <li>
            <AiOutlineRight/>
          </li>
        </ul>
      </div>
    </>
  )
}