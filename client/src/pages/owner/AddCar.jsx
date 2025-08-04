import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets} from '../../assets/assets'
const AddCar = () => {


const [image, setImage] =useState(null)
const [car, setCar] = useState({
  brand:'',
  model:'',
  year:0,
  pricePerDay: 0,
  category:'',
  fuel_type:'',
  seating_capacity:0,
location: '',
description: '',

})

const onSubmitHandler = async (d) =>{
d.preventDefault()
}




  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      
<Title title='Add new Car' subTitle='Fill in details to list a new car for booking, including pricing, availability , and car specification.' />

<form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>


{/* car image */}
<div className='flex items-center gap-2 w-full'>
  <label htmlFor="car-image">

 <img src={image ? URL.createObjectURL(image) :assets.upload_icon } alt="" className='h-15 rounded-full cursor-pointer  bg-amber-950' />
<input type="file" id="car-image" accept='image/*' hidden onChange={e=>setImage(e.target.files[0])} />


  </label>

  <p className='text-sm text-cyan-800'>Upload a Picture of your Car</p>
 


</div>

{/* car brand and model */}
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
  <div className='flex flex-col w-full '>
    <label htmlFor="" >Brand </label>
    <input type="text" placeholder='e.g BMW, Mercedes, Audi...' required className='px-3 py-3 mt-1  border border-b-sky-950 rounded-md outline-amber-500 ' value={car.brand} onChange={e=> setCar({...car, brand: e.target.value})} />
  </div>

    <div className='flex flex-col w-full'>
    <label htmlFor="">Model </label>
    <input type="text" placeholder='X5, E-class, M4' required className='px-3 py-3 mt-1 border border-b-sky-950 rounded-md outline-amber-500' value={car.model} onChange={e=> setCar({...car, model: e.target.value})} />
  </div>

</div>


{/* car yar, price,category */}
<div>
  
</div>


</form>
    </div>
  )
}

export default AddCar
