import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import  download  from '../assets/download.png';
import { downloadImage } from '../utils';
import Loader from '../assets/Loader';
function Home() {
  const [loading, setLoading] = useState(false);
  const [posts,setPosts]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:8000/api/allposts")
    .then((res)=>{
      setPosts(res.data.reverse())
      setLoading(false)
    })
    .catch((err)=>console.log(err))
  },[])
  const filteredPosts = posts.filter(post => 
    post.input.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredPosts)
  return (
    <div className='bg-gray-50 md:px-24 px-10 py-8 h-dvh'>
      <div className="md:flex justify-between block  ">
        <div className=''>
          <p className='font-bold text-3xl text-[#222328]'>Welcome to VisionCraft</p>
          <p className='text-lg  text-[#666e75] max-w-96 '> Transform Your Words into Stunning Images
          Discover the magic of turning your imagination into reality with VisionCraft.
          </p>
        </div>
    <div className="flex items-center justify-center">
    <div className="w-full max-w-2xl md:mt-0 mt-8 ">
      <div className=" relative space-y-4">
      <div className="p-5 bg-white rounded-lg md:flex items-center justify-between border-2 border-black ">
        <div className="flex-1">
          <div className=" w-full rounded">
          Enter a detailed description of the image you envision.
          </div>
        </div>
        
        <div>
          <div className="rounded-lg flex justify-center mt-3">
          <FaCheck size={"28px"} />
          </div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg md:flex items-center justify-between border-2 border-black  ">
        <div className="flex-1">
          <div className="w-full rounded">
          Our advanced AI interprets your text and creates a high-quality photo that matches your description.
          </div>
        </div>
        <div>
        <div className=" flex justify-center mt-3 rounded-lg ">
          <FaCheck size={"28px"} />
        </div>
        </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link to="/create-post" className="font-inter font-medium bg-[#0f0f0f] text-white px-4 py-2 mt-4  rounded-md w-40 flex justify-center  ">Create</Link>
      </div>
    </div>
  </div>
  </div>
  <input 
      type="text"
      onChange={(e)=>{setSearchQuery(e.target.value)}}
      className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000000] focus:border-[#000000] outline-none block w-full p-3"
      placeholder='search ...'
      required
    />
    <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) :
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {
              filteredPosts.map((post,index)=>(
                <div key={post._id} className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
                  <img
                    className="w-full h-auto object-cover rounded-xl"
                    src={post.photo}
                  />
                  <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                  <p className="text-white text-sm overflow-y-auto prompt"></p> 
                  <div className="mt-5 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{post.name[0]}</div>
                        <p className="text-white text-sm">{post.name}</p>
                      </div>
                      <button type="button" onClick={() => downloadImage(post._id, post.photo)} className="outline-none bg-transparent border-none">
                      <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                      </button>
                    </div>
                  </div>
                </div>
                ))
            }
          </div>
          }
    </div>



</div>

    
  )
}

export default Home