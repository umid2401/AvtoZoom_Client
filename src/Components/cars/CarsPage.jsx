// Style
import style from './Cars.module.css'

// Icons
import menu from '../../assets/menu.svg'
import x from '../../assets/x.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import { useState } from 'react'

export default function CarsPage() {

  const APIcars = 'https://autoapi.dezinfeksiyatashkent.uz/api/cars'

  const [filter_toggle, set_filter_toggle] = useState(false)

  fetch(APIcars)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

  return (
    <div>
      <div className="flex bg-[#1E1F27] text-white relative">

        <div className={`${filter_toggle ? 'hidden' : ''} md:hidden absolute bg-[#272933] top-5 left-5`} onClick={() => set_filter_toggle(true)}>
          <img src={menu} alt="filter toggler" width={30}/>
        </div>
        <div className={`${filter_toggle ? '' : 'hidden'} md:hidden absolute bg-[#272933] top-5 left-5`} onClick={() => set_filter_toggle(false)}>
          <img src={x} alt="filter toggler" width={30}/>
        </div>

        {/* Filters */}
        <div className={`${filter_toggle ? '' : 'hidden'} md:block w-full md:w-auto bg-[#272933] text-white px-5 py-20`}>
          <p className="text-3xl font-bold">Filtered By</p>
          
          <form className={style.cars_filter_form}>
            <div>
              <p>Offers</p>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>3 DAYS RENT = 1300 AED🔥 </span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>3 DAYS RENT = 1800 AED🔥</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>NO DEPOSIT</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Rent Ferrari Dubai</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</span>
              </label>
            </div>

            <div>
              <p>Car Type</p>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>SUV</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Sports Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Luxury Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Convertible Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Budget Cars</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>American Brands</span>
              </label>
            </div>

            <div>
              <p>Models</p>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Ferrari</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Ford</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Rolls-Royce</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Porsche</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>McLaren</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>BMW</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Cadillac</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>GMC</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Audi</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Mercedes Benz</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Chevrolet</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Lamborghini</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Toyota</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Infiniti</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Kia</span>
              </label>
              <label>
                <input className="cars_filter_input" type="checkbox" name="" id="" />
                <span>Hyundai</span>
              </label>
            </div>

            <div>
              <p>Model</p>
              <select name="" id="">
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
              <button className="rounded-[10px] py-5 text-xl px-10 border-[1px] border-white border-solid">Reset</button>
              <button className="rounded-[10px] py-5 text-xl px-10 bg-[#00C600]">Apply filter</button>
            </div>
          </form>
        </div>
        
        {/* Right screen */}
        <div className={`${filter_toggle ? 'hidden' : ''} md:block px-5 py-20`}>
          <p className="text-[#A5A5A9]">Luxury Cars for Rent in Dubai / Hire the latest supercar</p>

          {/* Cars */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
            
            {/* Car Card */}
            <div className={`${style.car_card} bg-[#2D2E35] p-3 rounded-[10px] border-solid border-[1px] border-zinc-500`}>
              <div className="border-solid border-b-[1px] border-zinc-500">
                <img className="my-10" src="https://picsum.photos/seed/picsum/300/200" alt="" />
                <span className="text-xl">Kia Seltos</span>
              </div>
              <p className="font-semibold text-xl">AED 300/$90</p>
              <p className="mt-2">per day</p>
              <div className="flex justify-between mt-20">
                <a href="https://api.whatsapp.com/send/?phone=971558462124&text&type=phone_number&app_absent=0" target="_blank">
                  <button className="bg-[#00C600] rounded-[10px] p-2 text-xl font-semibold flex">
                    <img src={whatsapp} alt="whatsapp" width={25}/>
                    <span className="ml-1">Whatsup</span>
                  </button>
                </a>
                <a href="https://t.me/+971558462124" target="_blank">
                  <button className="bg-[#2727E0] rounded-[10px] p-2 text-xl font-semibold flex">
                    <img src={telegram} alt="telegram" width={25}/>
                    <span className="ml-1">Telegram</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
