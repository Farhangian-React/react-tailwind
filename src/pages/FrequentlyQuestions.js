
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-4 w-4 hover:bg-orange-500 hover:text-white hover:scale-125  rounded-full transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function FrequentlyQuestions() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    
<div className='relative flex mx-auto w-full md:w-[95%] h-[600px] my-20  '>
        <div className= 'flex flex-col  justify-center   bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 w-full h-full mt-10 rounded-t-3xl  mx-auto  z-2'>
        <div dir="rtl" className="mx-1 md:mx-10 my-10">
  
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg mb-2 mt-5 "  open={open === 1}
   icon={<Icon id={1} open={open}  />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(1)}>مدت زمان تحویل سفارش تهران به چه صورت است؟</AccordionHeader>
    <AccordionBody>
    ⏱️زمان ارسال سفارشات تهران : 👇🏻
(توجه داشته باشید که به دلیل حجم بالای سفارش‌ها در زمان تخفیفات ، ارسال سفارش بین 3 تا
7 روز کاری زمان می برد و تحویل فوری نداریم)

    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 2} icon={<Icon id={2} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(2)}>
    مدت زمان تحویل سفارش شهرستان به چه صورت است؟
    </AccordionHeader>
    <AccordionBody>
    زمان ارسال سفارشات شهرستان : 👇🏼

(توجه داشته باشید که به دلیل حجم بالای سفارش‌ها در زمان تخفیفات ، ارسال سفارش بین ۱۰ تا
۱۲ روز کاری زمان می برد)

به شما اطمینان میدیم که در تلاشیم تا سریع‌ترین و بهترین سرویس رو به شما ارائه بدیم.

🚚ارسال سفارش های شهرستان با پست پیشتاز انجام می شود.


    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 3} icon={<Icon id={3} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(3)}>
    آدرس جهت خرید حضوری هم دارید؟
    </AccordionHeader>
    <AccordionBody>
    آدرس جهت خرید حضوری :

📍شعبه صبامال :
پایین تر از میدان حر،خ کارگر جنوبی،
مجتمع صبا، طبقه اول واحد ۵۰.

☎️ : 021-65829250



📍شعبه هدیش مال :
پاسداران، میدان هروی ،خ موسوی روبه‌روی خ شمشاد،
هدیش مال، ط همکف دوم، واحد ۵

☎️ : 021-91312119



📍شعبه پاساژ نصر :
خ گیشا ،پاساژ نصر ، طبقه اول، پلاک ۳۵۰.

☎️ : 021-88286873
⏱ساعت کاری هر سه شعبه : هر روز از ۱۰ صبح تا ۱۰ شب
    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 4} icon={<Icon id={4} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(4)}>
    آیا برای خرید لازم است از قبل در وبسایت ثبت‌نام کرده باشم؟
    </AccordionHeader>
    <AccordionBody>
    خیر، شما با انتخاب و اضافه کردن محصولات به سبد خریدتان می‌توانید اطلاعات فردی و ارسالتان را کامل کنید و پرداخت را انجام دهید.
    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 5} icon={<Icon id={5} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(5)}>
    چطور هزینه سفارش را پرداخت کنم؟
    </AccordionHeader>
    <AccordionBody>
    تمامی کاربران می‌توانند از طریق درگاه بانکی با تمام کارت‌های عضو شتاب هزینه سفارش را به صورت اینترنتی پرداخت نمایند.
    </AccordionBody>
  </Accordion>
  </div>
</div> 
        <div className='boxx flex flex-col  justify-center  absolute w-full  mx-auto  z-1  '>
            <div className=' bordershadow flex flex-col justify-center items-center mx-auto my-5 w-[250px] '  >
  <p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '> سوالات پر تکرار</p>
      </div>
        </div>
        </div>
    
    </>
  );
}


