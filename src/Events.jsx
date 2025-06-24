export default function Events() {
  return (
    <section className="bg-green-50 min-h-auto flex flex-col items-center justify-center p-8">
      
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-cairo font-bold text-green-800">
          Upcoming Events
        </h1>

        <p className="text-gray-700 text-lg">
          Stay connected with the latest events and gatherings at Vallavilai Masjid.
        </p>

        {/* Events List */}
        <div className="mt-8 space-y-6 w-full">
          
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <h2 className="text-2xl font-bold text-green-800">Friday Jummah Khutbah</h2>
            <p className="text-gray-600">Every Friday | 12:30 PM - 1:30 PM</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <h2 className="text-2xl font-bold text-green-800">Weekly Quran Recitation</h2>
            <p className="text-gray-600">Every Sunday | After Maghrib</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <h2 className="text-2xl font-bold text-green-800">Special Community Iftar</h2>
            <p className="text-gray-600">15th Ramadan | 6:30 PM</p>
          </div>

        </div>
      </div>

    </section>
  );
}
