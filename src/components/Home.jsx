import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getInfo } from '../Pages/action'

function Home() {

  const data=useSelector((store)=>store.data.data)
  const info=useSelector((store)=>store.data.info)

  const dispatch=useDispatch()

  console.log("data",data?.scotland?.events[0]
  )

  console.log(info,"info")

  useEffect(()=>{
    dispatch(getData())
    dispatch(getInfo())
  },[])
  return (
    <div>Home

      {data?.scotland?.events?.map((item)=>(
        <h3>
        {item?.title}
        </h3>
      ))}

<h3>{info?.GalleryNumber}</h3>
    </div>
  )
}

export default Home