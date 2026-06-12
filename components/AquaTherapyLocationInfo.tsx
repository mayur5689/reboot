export default function AquaTherapyLocationInfo() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            FIND US //
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-10">
            R3BOOT Dadar - <span className="text-[#513394] dark:text-[#8B5CF6]">Location &amp; Hours</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Google Map */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.333831776953!2d72.8433525!3d19.0165524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf87519edaa5%3A0x36815ea9da0ca28c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R3BOOT Recovery Center Dadar Mumbai location map"
              />
            </div>

            {/* NAP + Hours */}
            <div className="space-y-8">
              <address className="not-italic bg-white dark:bg-white/5 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <p className="text-xs font-black tracking-[0.2em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4">ADDRESS</p>
                <p className="text-gray-900 dark:text-white font-bold text-base leading-relaxed mb-1">
                  R3BOOT | Integrated Recovery Center
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  203, Palai Plaza, Swami Gyan Jivandas Marg<br />
                  Opp Pritam Hotel, Dadar East<br />
                  Mumbai - 400 014, Maharashtra
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10 space-y-2">
                  <p className="text-sm">
                    <span className="font-bold text-gray-900 dark:text-white">Phone: </span>
                    <a href="tel:+919702368612" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                      +91 97023 68612
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-bold text-gray-900 dark:text-white">Email: </span>
                    <a href="mailto:info.r3boot@gmail.com" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                      info.r3boot@gmail.com
                    </a>
                  </p>
                </div>
              </address>

              <div className="bg-white dark:bg-white/5 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <p className="text-xs font-black tracking-[0.2em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4">OPENING HOURS</p>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100 dark:divide-white/10">
                    {[
                      { days: 'Mon, Tue, Thu, Fri, Sat', hours: '8:00 AM - 9:00 PM' },
                      { days: 'Wednesday', hours: '8:00 AM - 4:00 PM' },
                      { days: 'Sunday', hours: '2:00 PM - 9:00 PM' },
                    ].map(({ days, hours }) => (
                      <tr key={days}>
                        <td className="py-3 font-medium text-gray-900 dark:text-white pr-4">{days}</td>
                        <td className="py-3 text-gray-500 dark:text-gray-400 text-right">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
