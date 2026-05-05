import { useScrollAnimation } from '../hooks/useScrollAnimation'
import conceptImg from '../Xtalk-Master.jpg'

const Concept = () => {
  const [refLeft, visibleLeft] = useScrollAnimation()
  const [refRight, visibleRight] = useScrollAnimation()

  return (
    <section className="py-xxl bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div ref={refLeft} className={`anim-left ${visibleLeft ? 'anim-visible' : ''}`}>
          <span className="text-red-600 font-label-caps tracking-widest block mb-4 text-xs">NỘI DUNG SỰ KIỆN</span>
          <h2 className="font-display-lg text-white mb-6 text-3xl md:text-5xl">MASTER XM20 –<br/><span className="italic text-red-600">BEYOND THE STAGE</span></h2>
          <p className="text-secondary mb-5 leading-relaxed text-sm md:text-base">
            Một sân khấu hoàn hảo không bắt đầu từ ánh đèn, mà được tạo nên từ những gì diễn ra phía sau. Sự kiện ra mắt Synco Master XM20 là nơi hé lộ toàn bộ câu chuyện hậu trường – nơi công nghệ, con người và sáng tạo kết nối để tạo nên những khoảnh khắc đáng nhớ trên sân khấu.
          </p>
          <p className="text-secondary mb-8 leading-relaxed text-sm md:text-base">
            Tại đây, Master XM20 không chỉ là một thiết bị – mà là "trái tim" đứng sau mỗi khung hình, mỗi sân khấu, mỗi câu chuyện được kể.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-white font-bold mb-1 text-sm md:text-base">PRECISION</h4>
              <p className="text-secondary text-xs md:text-sm">Giao tiếp linh hoạt, ổn định cho ekip sản xuất</p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-white font-bold mb-1 text-sm md:text-base">PROFESSIONAL</h4>
              <p className="text-secondary text-xs md:text-sm">Dành cho sân khấu và sự kiện chuyên nghiệp</p>
            </div>
          </div>
        </div>
        <div ref={refRight} className={`relative anim-right ${visibleRight ? 'anim-visible' : ''} mt-8 lg:mt-0`}>
          <div className="absolute -inset-2 md:-inset-4 border border-red-600/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
          <div className="relative z-10 w-full overflow-hidden rounded-lg">
            <img src={conceptImg} alt="Master XM20 Beyond The Stage" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Concept
