export default function PrayerTimings() {
  return (
    <section className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-8">
      
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-cairo font-bold text-green-800">
          Prayer Timings
        </h1>

        <table className="w-full mt-8 border border-green-300 text-lg text-green-800">
          <thead className="bg-green-200">
            <tr>
              <th className="p-2">Prayer</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Fajr</td>
              <td className="p-2">5:00 AM</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Dhuhr</td>
              <td className="p-2">12:30 PM</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Asr</td>
              <td className="p-2">4:00 PM</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Maghrib</td>
              <td className="p-2">6:45 PM</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Isha</td>
              <td className="p-2">8:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}
