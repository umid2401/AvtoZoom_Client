
import style from './Cars.module.css'
import menu from '../../assets/menu.svg'
import x from '../../assets/x.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import { useEffect, useState } from 'react'
import {  useLocation, useNavigate, useParams } from 'react-router-dom'
import { base_url, getBrands, getCars, getCategories, getModels,} from "../../getData/getData";
import axios from 'axios'
export default function Cars({ search ,setLoader}) {
  const urlImage = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
  const { type, id } = useParams();
  const location = useLocation();
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filter_toggle, set_filter_toggle] = useState(false);
  const [activeModel, setActiveModel] = useState("");
  const [cars, setCars] = useState(null);
  const [offers, setOffers] = useState([
    {
      id: 1,
      text: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      value: "three_days_price=5000",
    },
    {
      id: 2,
      text: "3 DAYS RENT = 1300 AED🔥 ()",
      value: "three_days_price=1300",
    },
    { id: 3, text: "3 DAYS RENT = 1800 AED🔥", value: "three_days_price=1800" },
    { id: 4, text: "NO DEPOSIT", value: "no_deposit=1300" },
    { id: 5, text: "5000 AED🔥 ALL INCLUSIVE", value: "three_days_price=5000" },
    {
      id: 6,
      text: "2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      value: "all_inclusive=0",
    },
    { id: 7, text: "Rent Ferrari Dubai", value: "rent_ferrari=1800" },
    {
      id: 8,
      text: "4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      value: "four_days_price=5000",
    },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
   
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cars?${type}_id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      setCars(data.data)
      
    })
    .catch((err) => console.log(err))
  }, [location]);
  useEffect(()=>{
    getData();
  }
  ,[]);
  const PreventDefault = (e) => {
    e.preventDefault();
  };
  const getData = async () => {
    const cars = await getCars();
    const brands = await getBrands();
    setBrands(brands?.data);
    if (!id) {
      setCars(cars?.data);
    }
    const models = await getModels();
    setModels(models?.data);
    const categories = await getCategories();
    setCategories(categories?.data);
  };
const scrollTo = (item) =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  setLoader(true);
  navigate(`/carinfo/${item}`)
};
const resetAll = () =>{
  getData();
  // navigate("/cars")
}
const handleCheckboxChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    setSelectedOptions([...selectedOptions, value]);
  } else {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  }
};
const queryParams = selectedOptions.map(option => option).join('&');

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory(selectedCategory.filter((option) => option !== value));
    }
  };
  const handleModels = (e) => {
    setActiveModel(e.target.value);
  };
  const queryCategory = selectedCategory.map(option => `category_id=${option}`).join('&');

  const handleBrandsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((option) => option !== value));
    }
  };

  const queryBrands = selectedBrands.map(option => `brands_id=${option}`).join('&');
  const applyFilter = () => {
    axios
      .get(
        `${base_url}/cars?${queryParams}&${queryBrands}&${queryCategory}&model_id=${activeModel}`
      )
      .then((res) => {
        setCars(res?.data?.data);
        console.log(res?.data?.data);
        if (res?.data?.data.length === 0) {
          // setNotFound(true);
        }
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    console.log(cars)
  };
  return (
    <div className='cars section'>
      <div className={`${cars ? 'hidden' : ''} w-full h-[1000px] bg-[#1E1F27]`}></div>
      { cars && 
      <div className="flex bg-[#1E1F27] text-white relative">

        <div className={`${filter_toggle ? 'hidden' : ''} md:hidden absolute bg-[#272933] top-5 left-5`} onClick={() => set_filter_toggle(true)}>
          <img src={menu} alt="filter toggler" width={30}/>
        </div>
        <div className={`${filter_toggle ? '' : 'hidden'} md:hidden absolute bg-[#272933] top-5 left-5`} onClick={() => set_filter_toggle(false)}>
          <img src={x} alt="filter toggler" width={30}/>
        </div>

        {/* Filters */}
        <div className={`${filter_toggle ? '' : 'hidden'} md:block w-full md:w-auto basis-1/3 bg-[#272933] text-white px-5 py-20`}>
          <p className="text-3xl font-bold">Filtered By</p>
          
          <form id="form" onSubmit={PreventDefault} className={style.cars_filter_form}>
            <div id="offer_filter">
              <p>Offers</p>
              {offers?.map((item, index) => {
              return (
                <div className='flex !mb-1' key={index}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    value={item?.value}
                    onChange={handleCheckboxChange}
                  />
                  <label className='font-lato lowercase !my-0 !p-2' htmlFor={item?.id}>{item?.text}</label>
                </div>
              );
            })}
            </div>

            <div id="type_filter">
              <p>Car Type</p>
              {categories?.map((item, index) => {
              return (
                <div className='flex gap-1 !mb-0' key={index}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    value={item?.id}
                    onChange={handleCategoryChange}
                  />
                  <label className='!ml-0 my-2 px-2 lowercase' htmlFor={item?.id}>{item?.name_en}</label>
                </div>
              );
            })}
            </div>

            <div id="model_filter">
              <p>Brands</p>
              {brands?.map((item, index) => {
              return (
                <div className='flex gap-1 !mb-0' key={index}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    value={item?.id}
                    onChange={handleBrandsChange}
                  />
                  <label className='!ml-0 my-2 px-2 lowercase' htmlFor={item?.id}>{item?.title}</label>
                </div>
              );
            })}
            </div>

            <div>
              <p>Model</p>
              <select className='' onChange={handleModels}>
              <option value="" >
                Models
              </option>
              {selectedBrands.length
                ? models
                    ?.filter((item) => selectedBrands?.includes(item?.brand_id))
                    ?.map((item, index) => {
                      return (
                        <option className='' value={item?.id} key={index}>
                          {item?.name}
                        </option>
                      );
                    })
                : models?.map((item, index) => {
                    return (
                      <option value={item?.id} key={index}>
                        {item?.name}
                      </option>
                    );
                  })}
            </select>
            </div>

            <div className="flex gap-4 justify-between">
              <button 
              onClick={resetAll}
              className="rounded-[10px] py-3 text-xl px-10 border-[1px] border-white border-solid" 
              type="reset"
              >
                Reset
              </button>
              <button 
              onClick={applyFilter}
              className="rounded-[10px] py-3 text-xl px-5 bg-[#00C600]" type="submit"
              >
                Apply filter
              </button>
            </div>

          </form>
        </div>

        {/* Right screen */}
        <div className={`${filter_toggle ? 'hidden' : ''} w-full  md:block px-5 py-20`}>
          <p className="text-[#A5A5A9]">Luxury Cars for Rent in Dubai / Hire the latest supercar</p>

          {/* Cars */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20 gap-5">
            
            {/* Car Card */}
            {
              cars.length>0?(
                cars
              .filter((car) => {
               
                return search?.length>0?car.brand.title.toLowerCase().includes(search):(car)
              })
              .map((car, i) => {
                
                return (
                  <div onClick={()=>scrollTo(car?.id)} className='cursor-pointer'  key={i}>
                    <div  
                    className={`${style.car_card} bg-[#2D2E35] p-3 rounded-[10px] border-solid border-[1px] border-zinc-500`} 
                    onClick={() => {
                      document.getElementById('search').value = ''
                    }}
                    >
                      <div className="border-solid border-b-[1px] border-zinc-500">
                        <img className="my-10" src={`${urlImage}${car.car_images[0].image.src}`} alt={car.brand.title}/>
                        <span className="text-xl">
                          {car.brand.title} {car.model.name}
                        </span>
                      </div>

                      <p className="font-semibold text-xl">
                        {`AED${car.price_in_aed}`} / {`$${car.price_in_usd}`}
                      </p>
                      <p className="mt-2">
                        per day
                      </p>

                      <div className="flex justify-between mt-10">
                        <a href="https://api.whatsapp.com/send/?phone=971558462124&text&type=phone_number&app_absent=0" target="_blank">
                          <button className="bg-[#00C600] rounded-[10px] p-2 text-xl flex">
                            <img src={whatsapp} alt="whatsapp" width={25}/>
                            <span className="ml-1">Whatsup</span>
                          </button>
                        </a>
                        <a href="https://t.me/+971558462124" target="_blank">
                          <button className="bg-[#2727E0] rounded-[10px] p-2 text-xl flex">
                            <img src={telegram} alt="telegram" width={25}/>
                            <span className="ml-1">Telegram</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })
              ):(
                <div className='text-white text-left font-lato uppercase text-sm md:text-xl  '>
                  Data not found
                </div>
              )
              
            }
          </div>
        </div>

      </div> 
      }
    </div>
  )
}
