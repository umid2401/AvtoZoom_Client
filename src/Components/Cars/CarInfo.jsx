import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Carousel } from "antd";

// Style
import style from "./Cars.module.css";

// Icons of contact
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import phone from "../../assets/phone.svg";

// Icons of car technical properties
import calendar from "./InfoIcons/calendar.svg";
import car from "./InfoIcons/car.svg";
import clock from "./InfoIcons/clock.svg";
import color from "./InfoIcons/color.svg";
import engine from "./InfoIcons/engine.svg";
import gear from "./InfoIcons/gear.svg";
import person from "./InfoIcons/person.svg";
import petrol from "./InfoIcons/petrol.svg";
import speed from "./InfoIcons/speed.svg";
import wheel from "./InfoIcons/wheel.svg";
import { text } from "@fortawesome/fontawesome-svg-core";

function CarInfo({setLoader}) {
  const { id } = useParams();
  
  const carInfoUrl = "https://realauto.limsa.uz/api/cars/" + id;
  const urlImage =
    "https://realauto.limsa.uz/api/uploads/images/";
  const contentStyle = {
    margin: 0,
    height: "300px",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const [carInfo, setCarInfo] = useState(null);
  const [similarCarsInfo, setSimilarCarsInfo] = useState(null);

  useEffect(() => {
    fetch(carInfoUrl)
      .then((res) => res.json())
      .then((info) => {
        setCarInfo(info.data);
        setLoader(false)
        fetch(
          `https://realauto.limsa.uz/api/cars?brand_id=${info.data.brand_id}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSimilarCarsInfo(data.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  //   Sending message form
  const sendMessage = (e) => {
    e.preventDefault();
    const token = "7445647385:AAG2Cds7gH5PC0fOh6s0x-DoP7tp5zMvKNw";
    const chat_id = "1777311435";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("input_name").value;
    const phone = document.getElementById("input_phone").value;
    const period = document.getElementById("input_period").value;
    const details = document.getElementById("input_details").value;
    const message = `Hi, you have a new message!!!\n\nName: ${name}\nPhone: ${phone}\nPeriod: ${period}\nDetails: ${details}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    });

    document.getElementById("contact_form").reset();
  };

  return (
    <div className="bg-[#272933] text-white section">
      {carInfo && (
        <div className=" 2xl:w-[1300px] xl:w-[1250px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto ">
          <h2 className="text-2xl md:text-3xl lg:text-5xl !block font-regular basis-full py-5">
            {carInfo.brand.title} {carInfo.model.name}{" "}
            {`(${carInfo.color.toUpperCase()})`}
          </h2>

          {/* Left side */}
          <div className="flex flex-wrap">
          <div className="w-full lg:w-[50%]">
            {/* Carousel */}
            <div className="flex">
              {/* Left side of carousel */}
              <div className="md:flex flex-col basis-1/4 hidden">
                {carInfo.car_images.map((image, i) => {
                  return (
                    <img
                      key={i}
                      className="my-1"
                      src={`https://realauto.limsa.uz/api/uploads/images/${image.image.src}`}
                      alt="image"
                    />
                  );
                })}
              </div>

              {/* Right side of carousel */}
              <div className="basis-3/4">
                <Carousel
                  arrows
                  dots={false}
                  afterChange={onChange}
                  className="w-[280px] h-[280px]  md:w-[400px] md:h-[400px] mx-auto">
                  {carInfo.car_images.map((image, i) => {
                    return (
                      <div key={i} className="">
                        <img
                          className=""
                          src={`https://realauto.limsa.uz/api/uploads/images/${image.image.src}`}
                          alt="image"
                          style={contentStyle}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>

            {/* Information under carousel */}
            <div className="">
              <h3 className="text-2xl md:text-3xl font-regular mt-7 md:mt-10">
                Go to know about {carInfo.brand.title} {carInfo.model.name}{" "}
                {`(${carInfo.color.toUpperCase()})`}
              </h3>
              <p className="text-xs text-gray-400 mt-10">
                Kilometrage limit perday
              </p>
              <h4 className="text-xl font-semibold">
                {carInfo.limitperday}{" "}
                {`Km (Every extra km will be charged 20 AED/km)`}
              </h4>
              <p className="text-xs text-gray-400 mt-5">
                Car rental deposit amount
              </p>
              <h4 className="text-xl font-semibold">
                The deposit is refunded within 28 days
              </h4>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[50%]">
            <div className="flex">
              <div className="basis-2/5">
                <h4 className="font-semibold">
                  {`AED${carInfo.price_in_aed}`} / {`$${carInfo.price_in_usd}`}
                </h4>
                <p className="text-gray-400">per day</p>
                <h4 className="font-semibold">AED / $</h4>
              </div>
              <div className="basis-3/5">
                <div className="flex">
                  <div className="basis-2/5">
                    <p className="text-xs">Deposit</p>
                  </div>
                  <div className="basis-3/5 ml-5">
                    <h4 className="font-semibold">AED {carInfo.deposit}</h4>
                    <p className="text-gray-400">
                      AED {carInfo.deposit} for credit cards payment
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="basis-2/5">
                    <p className="text-xs">Premium protection</p>
                  </div>
                  <div className="basis-3/5 ml-5">
                    <h4 className="font-semibold">
                      AED {carInfo.premium_protection}
                    </h4>
                    <p className="text-gray-400">
                      AED {carInfo.premium_protection} price for 1 day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap border-y-[1px] border-neutral-400 border-solid py-5 mt-5">
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={calendar} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.year}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={clock} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.seconds}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={speed} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.max_speed}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={person} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.max_people}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={color} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.color}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={engine} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.motor}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={gear} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.transmission}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={wheel} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.drive_side}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={petrol} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.petrol}</p>
              </div>
              <div className="basis-1/5 text-center my-3 h-[60px] flex flex-col justify-between">
                <img src={car} alt="calendar" className="mx-auto mb-1" />
                <p className="text-xl">{carInfo.deposit}</p>
              </div>
            </div>

            <div className="my-10 w-full flex justify-center">
              <span className="bg-green-500 rounded-[10px] mx-2 px-5 py-3">
                <img src={whatsapp} alt="whatsapp" width={30} />
              </span>
              <span className="bg-blue-500 rounded-[10px] mx-2 px-5 py-3">
                <img src={telegram} alt="telegram" width={30} />
              </span>
              <span className="bg-orange-500 rounded-[10px] mx-2 px-5 py-3">
                <img src={phone} alt="phone" width={30} />
              </span>
            </div>

            <div className="w-full">
              <form
                id="contact_form"
                className={`${style.form_car_info} flex flex-col`}
                onSubmit={sendMessage}>
                <input
                  id="input_name"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  id="input_phone"
                  type="tel"
                  placeholder="Phone"
                  required
                />
                <input id="input_period" type="text" placeholder="Period" />
                <input id="input_details" type="text" placeholder="Details" />

                <button type="submit">Send</button>
              </form>
            </div>

            <div className="my-20">
              <p>The price doesn't include additional 5% VAT.</p>
              <p>
                There is a 3% transaction fee when paying by credit/debit card.
              </p>
              <p>
                There is a 7% transaction fee when paying with American Express.
              </p>
            </div>
          </div>
          </div>
         
        </div>
      )}

      {similarCarsInfo && (
        <div className="w-[80%] mx-auto">
          <h2 className="text-4xl font-regular my-5">Similar Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {similarCarsInfo.map((similarCar, i) => {
              return (
                <Link to={`${similarCar.id}`} key={i}>
                  <div
                    className={`${style.car_card} bg-[#2D2E35] p-3 rounded-[10px] border-solid border-[1px] border-zinc-500 mb-10`}
                    onClick={() => {
                      document.getElementById("search").value = "";
                    }}>
                    <div className="border-solid border-b-[1px] border-zinc-500">
                      <img
                        className="my-10"
                        src={`${urlImage}${similarCar.car_images[0].image.src}`}
                        alt={similarCar.brand.title}
                      />
                      <span className="text-xl">
                        {similarCar.brand.title} {similarCar.model.name}
                      </span>
                    </div>

                    <p className="font-semibold text-xl">
                      {`AED${similarCar.price_in_aed}`} /{" "}
                      {`$${similarCar.price_in_usd}`}
                    </p>
                    <p className="mt-2">per day</p>

                    <div className="flex justify-between mt-10">
                      <a
                        href="https://api.whatsapp.com/send/?phone=971558462124&text&type=phone_number&app_absent=0"
                        target="_blank">
                        <button className="bg-[#00C600] rounded-[10px] p-2 text-xl flex">
                          <img src={whatsapp} alt="whatsapp" width={25} />
                          <span className="ml-1">Whatsup</span>
                        </button>
                      </a>
                      <a href="https://t.me/+971558462124" target="_blank">
                        <button className="bg-[#2727E0] rounded-[10px] p-2 text-xl flex">
                          <img src={telegram} alt="telegram" width={25} />
                          <span className="ml-1">Telegram</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarInfo;