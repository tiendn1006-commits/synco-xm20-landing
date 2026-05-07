import { useScrollAnimation } from '../hooks/useScrollAnimation'

const EventInfo = () => {
  const [refLeft, visibleLeft] = useScrollAnimation()
  const [refRight, visibleRight] = useScrollAnimation()

  return (
    <section className="py-xxl bg-black border-y border-white/5" id="about">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div ref={refLeft} className={`anim-left ${visibleLeft ? 'anim-visible' : ''}`}>
            <span className="text-red-600 font-label-caps tracking-widest text-xs block mb-3">CHI TIẾT SỰ KIỆN</span>
            <h2 className="font-display-lg text-white mb-8 leading-tight text-3xl md:text-5xl">Xtalk Master XM20<br />Launch Event</h2>

            <div className="space-y-4">
              <div className="glass-panel p-5 border border-red-600/30">
                <div className="flex items-center gap-2 text-red-500 font-label-caps text-xs mb-2">
                  <span className="material-symbols-outlined text-sm">list_alt</span>
                  NỘI DUNG CHÍNH
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Reveal chính thức Synco Xtalk Master XM20 – hệ thống liên lạc nội bộ không dây. Demo thực tế, chia sẻ hậu trường từ D.O.P Trần Quốc Vương và trải nghiệm trực tiếp sản phẩm.
                </p>
              </div>

              <div className="glass-panel p-5 border border-red-600/30">
                <div className="flex items-center gap-2 text-red-500 font-label-caps text-xs mb-2">
                  <span className="material-symbols-outlined text-sm">redeem</span>
                  QUÀ TẶNG
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Cơ hội giành giải thưởng hấp dẫn qua Mini Game – bao gồm màn hình phụ cho điện thoại SYNCO XView M4, voucher mua hàng và các gói quà độc quyền từ Synco x KingCom.
                </p>
              </div>

              <div className="glass-panel p-5 border border-red-600/30">
                <div className="flex items-center gap-2 text-red-500 font-label-caps text-xs mb-2">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  VỀ KINGCOM
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  KingCom là đơn vị phân phối chính thức của Synco tại Việt Nam, đồng hành cùng thương hiệu trong hành trình mang công nghệ âm thanh chuyên nghiệp đến gần hơn với cộng đồng sáng tạo.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={refRight} className={`anim-right ${visibleRight ? 'anim-visible' : ''} space-y-4`}>
            <div className="glass-panel p-8 border border-red-600/40 rounded-xl">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-red-500 text-lg md:text-xl">calendar_today</span>
                </div>
                <div>
                  <p className="text-white/40 font-label-caps text-[10px] mb-1">NGÀY TỔ CHỨC</p>
                  <p className="text-white font-bold text-lg md:text-xl">27 tháng 05, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-red-500 text-lg md:text-xl">schedule</span>
                </div>
                <div>
                  <p className="text-white/40 font-label-caps text-[10px] mb-1">THỜI GIAN</p>
                  <p className="text-white font-bold text-lg md:text-xl">14:00 – 17:00</p>
                  <p className="text-secondary text-xs mt-1">Kéo dài 3 giờ</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-red-500 text-lg md:text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-white/40 font-label-caps text-[10px] mb-1">ĐỊA ĐIỂM</p>
                  <p className="text-white font-bold text-base md:text-lg">ANNA HOUSE</p>
                  <p className="text-secondary text-xs mt-1">37 Đường Bế Văn Cấm, Phường Tân Hưng, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-red-500 text-lg md:text-xl">mic</span>
                </div>
                <div>
                  <p className="text-white/40 font-label-caps text-[10px] mb-1">KHÁCH MỜI HOST</p>
                  <p className="text-white font-bold text-base md:text-lg">D.O.P Trần Quốc Vương</p>
                  <p className="text-secondary text-xs mt-1">Director of Photography – Trần Film</p>
                </div>
              </div>
              <div className="glass-panel p-6 border border-white/10 rounded-xl">
                <p className="text-white/40 font-label-caps text-[10px] mb-3">TÌNH TRẠNG ĐĂNG KÝ</p>
                <p className="text-white text-sm font-bold">ĐANG MỞ</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}

export default EventInfo
