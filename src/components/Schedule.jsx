import { useScrollAnimation } from '../hooks/useScrollAnimation'

const scheduleItems = [
  {
    time: '14:00 – 14:30', side: 'right',
    title: 'Check-in & Trải nghiệm',
    desc: 'Đón khách, check-in. Tham quan khu setup demo / behind the scenes. Chill networking + quay chụp nhẹ.'
  },
  {
    time: '14:30 – 14:40', side: 'left',
    title: 'Opening',
    desc: 'MC mở màn. Giới thiệu chủ đề "Beyond The Stage".'
  },
  {
    time: '14:40 – 15:25', side: 'right',
    title: 'Brand Story – XM20 Launch',
    desc: 'Giới thiệu hành trình thương hiệu SYNCO. Reveal chính thức sản phẩm Master XM20.',
    highlight: true
  },
  {
    time: '15:25 – 15:50', side: 'left',
    title: 'Guest Sharing – D.O.P Trần Quốc Vương',
    desc: 'Chia sẻ thực tế hậu trường. Cách XM20 hỗ trợ ekip: "2 Thế Giới Hậu Trường: Có & Không Có Intercom".'
  },
  {
    time: '15:50 – 16:10', side: 'right',
    title: 'Live Demo / Mini Performance',
    desc: 'Dựng 1 tình huống sân khấu thật: communication – vận hành – âm thanh.'
  },
  {
    time: '16:10 – 16:30', side: 'left',
    title: 'Q&A + Mini Game',
    desc: 'Hỏi đáp tương tác, tặng quà cho khán giả.'
  },
  {
    time: '16:30 – 17:00', side: 'right',
    title: 'Networking & Trải nghiệm tự do',
    desc: 'Khách test sản phẩm trực tiếp. Kết nối đối tác, KOL.'
  }
]

const ScheduleItem = ({ item }) => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 })
  const animClass = item.side === 'left' ? 'anim-left' : 'anim-right'

  return (
    <div ref={ref} className="relative flex items-start md:items-center">
      <div className="w-1/2 pr-6 md:pr-12 flex justify-end">
        {item.side === 'left' ? (
          <div className={`glass-panel p-4 md:p-6 max-w-xs w-full border ${item.highlight ? 'border-red-600/40 bg-red-600/5' : 'border-white/10'} ${animClass} ${visible ? 'anim-visible' : ''}`}>
            <h4 className="text-white font-bold text-sm md:text-base uppercase mb-1">{item.title}</h4>
            <p className="text-secondary text-xs md:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ) : (
          <span className={`font-bold text-xs md:text-base text-right ${item.highlight ? 'text-red-600' : 'text-red-500'} anim-right ${visible ? 'anim-visible' : ''}`}>{item.time}</span>
        )}
      </div>

      <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600 border-2 border-black z-10 shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-transform duration-500 ${visible ? 'scale-100' : 'scale-0'}`}></div>

      <div className="w-1/2 pl-6 md:pl-12 flex justify-start">
        {item.side === 'right' ? (
          <div className={`glass-panel p-4 md:p-6 max-w-xs w-full border ${item.highlight ? 'border-red-600/40 bg-red-600/5' : 'border-white/10'} ${animClass} ${visible ? 'anim-visible' : ''}`}>
            <h4 className="text-white font-bold text-sm md:text-base uppercase mb-1">{item.title}</h4>
            <p className="text-secondary text-xs md:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ) : (
          <span className={`font-bold text-xs md:text-base ${item.highlight ? 'text-red-600' : 'text-red-500'} anim-left ${visible ? 'anim-visible' : ''}`}>{item.time}</span>
        )}
      </div>
    </div>
  )
}

const Schedule = () => {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section className="py-xxl bg-black" id="timeline">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={titleRef} className={`text-center mb-xl anim-hidden ${titleVisible ? 'anim-visible' : ''}`}>
          <h2 className="font-display-lg text-white mb-4 uppercase text-3xl md:text-5xl">LỊCH TRÌNH SỰ KIỆN</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Desktop zigzag */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/80 via-red-600/40 to-red-600/10"></div>
          <div className="space-y-16">
            {scheduleItems.map((item, i) => <ScheduleItem key={i} item={item} />)}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden relative max-w-lg mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/80 via-red-600/40 to-red-600/10"></div>
          <div className="space-y-6">
            {scheduleItems.map((item, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-[13px] top-4 w-3 h-3 rounded-full bg-red-600 border-2 border-black shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                <span className={`font-label-caps text-xs block mb-1 ${item.highlight ? 'text-red-600' : 'text-red-500'}`}>{item.time}</span>
                <div className={`glass-panel p-4 border ${item.highlight ? 'border-red-600/40 bg-red-600/5' : 'border-white/10'}`}>
                  <h4 className="text-white font-bold text-sm uppercase mb-1">{item.title}</h4>
                  <p className="text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
