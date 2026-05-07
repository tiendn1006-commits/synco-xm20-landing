const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blue-print-grid pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="relative z-10 text-center px-gutter max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-600/50 text-red-500 font-label-caps mb-8">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          SYNCO x KINGCOM PRESENTS
        </div>
        <h1 className="font-display-xl text-white mb-6 tracking-tighter leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          XTALK MASTER XM20 <br/>
          <span className="text-red-600">BEYOND THE STAGE</span>
        </h1>
        <p className="font-body-lg text-secondary max-w-2xl mx-auto mb-10 opacity-80 text-sm sm:text-base px-4">
          Một sân khấu hoàn hảo không bắt đầu từ ánh đèn, mà được tạo nên từ những gì diễn ra phía sau. Hãy cùng bước ra phía sau sân khấu, để khám phá điều làm nên sân khấu.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a className="w-full md:w-auto bg-red-600 text-black font-label-caps px-10 py-4 hover:bg-white transition-all duration-300 active:scale-95 animate-bounce-slow hover:animate-none" href="#register">
            ĐĂNG KÝ THAM GIA
          </a>
          <a className="w-full md:w-auto border border-white/20 text-white font-label-caps px-10 py-4 hover:border-red-600 hover:text-red-600 transition-all duration-300" href="#about">
            XEM CHI TIẾT
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="font-label-caps text-[10px]">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
