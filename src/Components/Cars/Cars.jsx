// Style
import style from './Cars.module.css'

// Icons
import menu from '../../assets/menu.svg'
import x from '../../assets/x.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'

// React features
import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Cars({ search }) {

  const APIcars = 'https://autoapi.dezinfeksiyatashkent.uz/api/cars'
  const urlImage = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
  const { id } = useParams();
  console.log(id)
  const [filter_toggle, set_filter_toggle] = useState(false)
  const [cars, setCars] = useState(null)
  
  console.log(location)
  useEffect(() => {
    fetch(APIcars)
    .then((res) => res.json())
    .then((data) => {
      setCars(data.data)
      console.log(id)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
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
          
          <form id="form" className={style.cars_filter_form}>
            <div id="offer_filter">
              <p>Offers</p>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>3 DAYS RENT = 1300 AED🔥 </span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>3 DAYS RENT = 1800 AED🔥</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>NO DEPOSIT</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>Rent Ferrari Dubai</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="1" name="" id="" />
                <span>4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
            </div>

            <div id="type_filter">
              <p>Car Type</p>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>SUV</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>Sports Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>Luxury Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>Convertible Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>Budget Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="2" name="" id="" />
                <span>American Brands</span>
              </label>
            </div>

            <div id="model_filter">
              <p>Models</p>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Ferrari</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Ford</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Rolls-Royce</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Porsche</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>McLaren</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="bmw" name="" id="" />
                <span>BMW</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Cadillac</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>GMC</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="audi" name="" id="" />
                <span>Audi</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Mercedes Benz</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="chevrolet" name="" id="" />
                <span>Chevrolet</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Lamborghini</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Toyota</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Infiniti</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="kia" name="" id="" />
                <span>Kia</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" value="3" name="" id="" />
                <span>Hyundai</span>
              </label>
            </div>

            <div>
              <p>Model</p>
              <select className="text-black" name="" id="">
                <option value="urus">Urus</option>
                <option value="elantra">Elantra</option>
                <option value="yukon">Yukon</option>
                <option value="k5">K 5</option>
                <option value="escalade">Escalade</option>
                <option value="traverse">Traverse</option>
                <option value="cullinan">Cullinan</option>
                <option value="Seltos">Seltos</option>
                <option value="audia3">Audi A3</option>
                <option value="mclaren720s">Mclaren 720s</option>
                <option value="porsche911">Porsche 911</option>
                <option value="camaro">Camaro</option>
                <option value="fiesta">Fiesta</option>
                <option value="g63">G63</option>
                <option value="ferrari458">Ferrari 458</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button 
              className="rounded-[10px] py-5 text-xl px-10 border-[1px] border-white border-solid" 
              type="reset"
              >
                Reset
              </button>
              
              <button 
              className="rounded-[10px] py-5 text-xl px-10 bg-[#00C600]" type="submit"
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
              
              cars
              .filter((car) => {
                return car.brand.title.toLowerCase().includes(search)
              })
              .map((car, i) => {
                return (
                  <Link to={`${car.id}`} key={i}>
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
                  </Link>
                )
              })
            }
          </div>
        </div>

      </div> 
      }
    </div>
  )
}
