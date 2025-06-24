import About from "./About"
import Contact from "./Contact";
import Events from "./Events";
import PrayerTimings from "./Prayer";

export default function Hero() {
  return (
    <>
     <div className="flex flex-row items-center justify-center text-center p-8 bg-white shadow space-x-10">
        <p className="text-3xl md:text-4xl font-bold leading-relaxed text-green-800 font-NotoSansArabic">
          رَّبِّ زِدْنِي عِلْمًا
        </p>
        <p className="text-gray-700 italic mt-2 font-Lora">
          "My Lord, increase me in knowledge." - [Surah Taha 20:114]
        </p>
      </div>
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-green-50 min-h-auto">
      
      {/* Top Arabic Quote */}
     
      
      {/* Text Content */}
      <div className="md:w-1/2  md:text-left space-y-6 ">

        {/* Arabic Quote */}
        <p className="text-xl font-bold leading-relaxed text-green-800 font-NotoSansArabic text-center">
          ﷽ <br />
          إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ<br />
          <p className="text-lg">
          "Indeed, the believers are but brothers." - [Surah Al-Hujurat 49:10]
          </p>
        </p>

        <h1 className="text-4xl md:text-5xl font-Cairo   text-green-800 uppercase ">
          Welcome to Vallavilai <span className="bg-green-800 text-amber-100 line-clamp-none">Masjid</span>
        </h1>
        <p className="text-gray-700 text-lg font-NotoSansArabic">
          A place of peace, prayer, and community.
        </p>
      </div>


      {/* Masjid Image */}
      <div className="md:w-1/2 mt-4 md:mt-0 ">
        <img 
          src="src\images\masjid.jpg" 
          alt="Vallavilai Masjid" 
          className="  rounded-lg shadow-lg "
        />
      </div>
    </section>
    <About/>
    <PrayerTimings/>
    <Events/>
    <Contact/>
    
    </>
  );
}
