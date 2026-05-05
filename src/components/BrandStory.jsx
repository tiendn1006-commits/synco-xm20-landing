import { useScrollAnimation } from '../hooks/useScrollAnimation'

const milestones = [
  { year: '2017', title: 'KHỞI ĐẦU', desc: 'SYNCO ra đời tại Quảng Châu, định hướng trở thành "audio master" – nơi hội tụ nghiên cứu, thiết kế và sản xuất các giải pháp âm thanh cho nhà sáng tạo.' },
  { year: '2019', title: 'MICROPHONE D2', desc: 'SYNCO ra mắt microphone shotgun đầu tiên – D2, đánh dấu bước tiến ra thị trường quốc tế.' },
  { year: '2020–2023', title: 'G1 / G2 / G3 PRO', desc: 'Bứt phá với các dòng micro không dây G1, G2, G3 Pro – không ngừng cải tiến từ thiết bị chuyên nghiệp đến giải pháp cho smartphone.' },
  { year: '2024', title: 'XTALK ECOSYSTEM', desc: 'SYNCO mở rộng sang hệ sinh thái liên lạc không dây Xtalk, đưa âm thanh từ ghi nhận sang kết nối thời gian thực.' },
  { year: '2025', title: 'ÂM THANH & HÌNH ẢNH', desc: 'Tiếp tục đa dạng hóa với các sản phẩm kết hợp âm thanh và hình ảnh, hỗ trợ nhà sáng tạo kể câu chuyện tốt hơn.' },
  { year: '2026', title: 'MASTER XM20', desc: 'SYNCO mở ra chương mới với Synco Master XM20 – hệ thống liên lạc nội bộ không dây, mang đến giải pháp giao tiếp linh hoạt, ổn định cho ekip sản xuất, sân khấu và sự kiện chuyên nghiệp.', highlight: true },
]

const MilestoneItem = ({ item, index }) => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative">
      {/* Desktop */}
      <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className={`text-5xl font-black leading-none mb-3 ${item.highlight ? 'text-red-600 drop-shadow-[0_0_16px_rgba(220,38,38,0.9)]' : 'text-red-600'}`}>
            {item.year}
          </h3>
          <p className="text-white font-bold text-2xl mb-4">{item.title}</p>
          <p className="text-secondary text-base leading-relaxed">{item.desc}</p>
        </div>
        <div className="w-2/12 flex justify-center">
          <div className={`${item.highlight ? 'w-8 h-8 shadow-[0_0_24px_#ff0000]' : 'w-6 h-6'} bg-red-600 rounded-full border-4 border-black z-10 transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        </div>
        <div className="w-5/12"></div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-start gap-6">
        <div className="flex flex-col items-center pt-2">
          <div className={`${item.highlight ? 'w-7 h-7 shadow-[0_0_20px_#ff0000]' : 'w-6 h-6'} bg-red-600 rounded-full border-4 border-black z-10 transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        </div>
        <div className={`flex-1 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <h3 className={`text-3xl font-black leading-none mb-2 ${item.highlight ? 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.9)]' : 'text-red-600'}`}>
            {item.year}
          </h3>
          <p className="text-white font-bold text-lg mb-3">{item.title}</p>
          <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

const BrandStory = () => {
  const [titleRef, titleVisible] = useScrollAnimation()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-black" id="brand">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div ref={titleRef} className={`mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display-lg text-white mb-4 text-3xl md:text-5xl">
            CÂU CHUYỆN <span className="text-red-600">THƯƠNG HIỆU</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-secondary text-sm md:text-base max-w-3xl leading-relaxed">
            SYNCO – Hành trình kiến tạo kết nối bằng âm thanh. Với hơn 5 triệu người dùng tại gần 80 quốc gia, SYNCO không chỉ là thương hiệu âm thanh mà còn là hệ sinh thái công nghệ hướng đến một mục tiêu: <span className="text-white italic">"Sound Syncs Everywhere"</span> – kết nối âm thanh, kết nối mọi khoảnh khắc.
          </p>
        </div>

        {/* Desktop Timeline with Curved Path */}
        <div className="hidden md:block relative" style={{ minHeight: '1680px' }}>
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600/20 via-red-600/50 to-red-600/20 -translate-x-1/2" style={{ zIndex: 0 }}></div>
          
          <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.7)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M 50% 50 Q 30% 230 50% 330 Q 70% 430 50% 610 Q 30% 790 50% 890 Q 70% 990 50% 1170 Q 30% 1350 50% 1450 Q 70% 1550 50% 1630"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative space-y-0" style={{ zIndex: 1 }}>
            {milestones.map((item, i) => (
              <div key={i} style={{ minHeight: i === milestones.length - 1 ? 'auto' : '280px' }}>
                <MilestoneItem item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline with Curved Path */}
        <div className="md:hidden relative" style={{ minHeight: '1400px' }}>
          <svg className="absolute left-0 top-0 w-16 h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.7)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M 28 40 Q 18 180, 28 240 Q 38 300, 28 460 Q 18 620, 28 680 Q 38 740, 28 900 Q 18 1060, 28 1120 Q 38 1180, 28 1360"
              stroke="url(#pathGradientMobile)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative space-y-12" style={{ zIndex: 1 }}>
            {milestones.map((item, i) => (
              <MilestoneItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
