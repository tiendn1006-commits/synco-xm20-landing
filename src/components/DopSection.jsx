import { useScrollAnimation } from '../hooks/useScrollAnimation'
import dopImage from '../z7789611784976_1c12659516af75c1f807c19abaa84fe3.jpg'

const DopSection = () => {
  const [refImg, visibleImg] = useScrollAnimation()
  const [refText, visibleText] = useScrollAnimation()

  return (
    <section className="py-xxl" id="dop">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 bg-white/5 p-8 md:p-16 relative">
        <div className="absolute top-0 right-0 p-8">
          <span className="text-white/10 font-black text-8xl select-none">15YRS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <div ref={refImg} className={`w-full max-w-sm mx-auto md:max-w-none aspect-square glass-panel p-2 rounded-lg overflow-hidden anim-left ${visibleImg ? 'anim-visible' : ''}`}>
            <img
              src={dopImage}
              alt="D.O.P Trần Quốc Vương"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div ref={refText} className={`anim-right ${visibleText ? 'anim-visible' : ''}`}>
            <h2 className="font-display-lg text-white mb-2 text-3xl md:text-5xl">D.O.P<br/>TRẦN QUỐC VƯƠNG</h2>
            <span className="text-red-600 font-label-caps block mb-6 text-xs">KEYNOTE SPEAKER – TRẦN FILM</span>
            <p className="text-secondary mb-5 leading-relaxed text-sm md:text-base">
              Với hơn 15 năm kinh nghiệm quay dựng và chỉ đạo hình ảnh, Trần Quốc Vương từng tham gia hàng loạt chương trình đình đám: <span className="text-white">Miss Grand Vietnam, Miss Universe Vietnam, Anh trai vượt ngàn chông gai, Chị đẹp đạp gió rẽ sóng.</span>
            </p>
            <p className="text-secondary mb-6 leading-relaxed text-sm md:text-base">
              Anh được biết đến với khả năng lựa chọn góc máy tinh tế, nắm bắt khoảnh khắc vàng và truyền tải trọn vẹn cảm xúc từ sân khấu đến khán giả qua màn ảnh.
            </p>
            <blockquote className="border-l-4 border-red-600 pl-4 md:pl-6 italic text-white text-base md:text-xl mb-8">
              "Trong thế giới ghi hình sân khấu, đây là một game 1 mạng – không có cơ hội thứ hai để sửa sai."
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-2 border border-red-600/30 text-[10px] text-red-500 font-label-caps">DIRECTOR OF PHOTOGRAPHY</div>
              <div className="px-3 py-2 border border-red-600/30 text-[10px] text-red-500 font-label-caps">XM20 AMBASSADOR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DopSection
