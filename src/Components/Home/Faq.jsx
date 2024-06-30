import { Collapse } from "antd";

const texts = [
  {
    label: "What is the minimum age requirements to rent a car in Dubai ?",
    text: `
Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.
`,
  },
  {
    label: `What do you need for a luxury car rental in Dubai ?`,
    text: `Drivers shall be required to have a valid driver's license and Passport copy.`,
  },
  {
    label: `How much is the Insurance limit on luxury car rental Dubai?`,
    text: `Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.`,
  },
  {
    label: `What are the driving licenses that can be used in Arab countries ?`,
    text: `Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.`,
  },
  {
    label: `Can anyone else drive the car i rent?`,
    text: `
The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.
`,
  },
];

const items = texts.map((text, index) => ({
  key: (index + 1).toString(),
  label: (
    <p className="text-white lg:text-[20px] text-[16px] font-lato">{text.label}</p>
  ),
  children: <p className="text-white lg:text-[16px] text-[14px] font-lato">{text.text}</p>,
  
}));
export default function Faq() {
  return (
    <section className="faq bg-[rgb(30,31,39)]  ">
      <div className="faq-container 2xl:w-[1300px] xl:w-[1120px] lg:w-[950px] md:w-[750px] sm:w-[540px] custom:w-[380px] w-[300px]  mx-auto">
      <h2 className="text-white md:text-3xl text-2xl py-2 font-lato uppercase">Faq</h2>
      <Collapse
      className="custom-collapse pt-4 pb-8"
      ghost
      items={items}
      
    />
      </div>
    </section>
  );
}
