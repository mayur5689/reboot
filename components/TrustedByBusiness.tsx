import { services } from '@/lib/services'
import {
  Activity,
  Waves,
  Dumbbell,
  ThermometerSnowflake,
  Hand,
  Zap,
  Brain,
  MessageCircle,
  Stethoscope
} from 'lucide-react'

// Map icons to services with high-quality related icons
const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('physio')) return <Stethoscope className="w-5 h-5" />;
  if (t.includes('hydro')) return <Waves className="w-5 h-5" />;
  if (t.includes('pilates')) return <Dumbbell className="w-5 h-5" />;
  if (t.includes('contrast')) return <ThermometerSnowflake className="w-5 h-5" />;
  if (t.includes('sports massage')) return <Hand className="w-5 h-5" />;
  if (t.includes('deep tissue')) return <Zap className="w-5 h-5" />;
  if (t.includes('psychology')) return <Brain className="w-5 h-5" />;
  if (t.includes('counselling')) return <MessageCircle className="w-5 h-5" />;
  return <Activity className="w-5 h-5" />;
}

export default function TrustedByBusiness() {
  // Duplicate for seamless scroll
  const scrollList = [...services, ...services];

  return (
    <section className="py-12 bg-white dark:bg-[#0A0A0A] overflow-hidden border-b border-gray-100/50 dark:border-white/5 transition-colors duration-500">
      <div className="relative flex overflow-hidden">
        {/* Rolling container */}
        <div className="flex gap-8 animate-marquee py-6 whitespace-nowrap min-w-full">
          {scrollList.map((service, index) => (
            <div
              key={index}
              className="flex-none bg-[#F3F0FF] dark:bg-[#1A1A1A] px-12 py-8 rounded-2xl flex items-center justify-center gap-5 transition-all duration-300 hover:bg-[#513394] hover:text-white dark:hover:bg-[#513394] group border border-[#513394]/10 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-[#513394] group-hover:text-white transition-colors">
                {getIcon(service.title)}
              </div>
              <span className="text-[13px] font-black uppercase tracking-[0.15em] text-gray-900 dark:text-white group-hover:text-white transition-colors">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
