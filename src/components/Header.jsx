import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(255,0,0,0.15)]">
      <nav className="flex items-center justify-between px-6 md:px-12 h-20 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/src/synco.png" alt="SYNCO x KingCom" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] uppercase tracking-widest font-bold text-[12px] flex-1 justify-center">
          <a className="text-white/70 hover:text-white transition-colors" href="#about">SỰ KIỆN</a>
          <a className="text-white/70 hover:text-white transition-colors" href="#timeline">LỊCH TRÌNH</a>
          <a className="text-white/70 hover:text-white transition-colors" href="#dop">DIỄN GIẢ</a>
        </div>
        <div className="hidden md:flex flex-shrink-0">
          <a className="bg-red-600 text-black px-6 py-2 font-['Space_Grotesk'] uppercase tracking-widest font-bold text-[12px] animate-pulse hover:animate-none hover:bg-white transition-all duration-300 active:scale-95" href="#register">REGISTER</a>
        </div>
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4">
          <a className="block py-2 text-white/70 hover:text-white" href="#about">SỰ KIỆN</a>
          <a className="block py-2 text-white/70 hover:text-white" href="#timeline">LỊCH TRÌNH</a>
          <a className="block py-2 text-white/70 hover:text-white" href="#dop">DIỄN GIẢ</a>
          <a className="block py-4 mt-4 bg-red-600 text-black font-bold text-center" href="#register">REGISTER</a>
        </div>
      )}
    </header>
  )
}

export default Header
