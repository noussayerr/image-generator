import React,{useState} from 'react'
import clay_crafting from "../assets/clay_crafting.png"
import  preview  from '../assets/preview.png';
import axios from 'axios';
import Loader from '../assets/Loader';
import { useNavigate } from 'react-router-dom';
function Create() {
  const [loading, setLoading] = useState(false);
  const [image,setImage]=useState('');
  const [name,setName]=useState();
  const [input,setInput]=useState();
  const [posting,setPosting]=useState(false);
  const navigate = useNavigate();
  console.log(image)
  const generateImage = (e) =>{
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:8000/api/generateimage",{input})
    .then(res=>{
      setImage(res.data.data.data.amazon.items[0].image_resource_url)

      setLoading(false)
    })
    .catch(err=>console.log(err))
     
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    setPosting(true)

    axios.post("http://localhost:8000/api/createpost",{name,input,image})
    .then((res)=>{
      alert('Success');
      navigate('/');
    })
    .catch(err=>console.log(err))
    
  }
  return (
    <div className='bg-gray-50 md:px-24 px-8 py-8 h-full flex justify-center'>
      
      <div className=' w-5/6 h-full bg-[#ffffff] mt-4 rounded-xl border-2 p-6 px-40  border-[#e6ebf4]'>
        <div className='flex flex-col items-center'>
          <img className='w-20 h-20 ' src={clay_crafting} alt="" />
          <p className='flex justify-center mt-4 text-xl font-bold'>Create photo using your imagination</p>
        </div>

        <form className='mt-10 text-md' onSubmit={handlesubmit}>
          <label>Your Name :</label>
          <input 
            type="text"
            onChange={(e)=>setName(e.target.value)}
            className=" m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000000] focus:border-[#000000] outline-none block w-full p-3"
            placeholder='search ...'
            required
          />
          <div  className='mt-4'>
            <label>Your description :</label>
            <input 
              type="text"
              onChange={(e)=>setInput(e.target.value)}
              className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#000000] focus:border-[#000000] outline-none block w-full p-3"
              placeholder='search ...'
              required
            />
            <div className='flex justify-center'>
              <button type="button" onClick={generateImage} className='font-inter font-medium bg-[#0f0f0f] text-white px-4 py-2 mt-4 h-14 rounded-md w-96'  >
              {
                loading ? (
                  <Loader />
                  ) : "Submit"
              }
              </button>
            </div>
            <div className='flex justify-center'>
            { 
              
              }
            </div>
            
            {image?(
              <div className='flex justify-center mt-16'>
                <img src={image} alt="" className="w-9/12 h-9/12 object-contain rounded-md" />
              </div> 
            )
          :
              <div className='flex justify-center'>
                <img
                    src={preview}
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain"
                  />
              </div>
          }
          </div>
          {image ?
          <div className='flex justify-center'>
          <button type="submit" className='font-inter font-medium bg-[#0f0f0f] text-white px-4 py-2 mt-12 h-14 rounded-md w-96'  >
          {
                posting ? (
                  <Loader />
                  ) : "share"
              }
          </button>
        </div>
        :null  
        }
        </form>
      
      </div>
    
    </div>
  )
}

export default Create