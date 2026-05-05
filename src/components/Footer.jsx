const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 py-10 md:py-16 max-w-7xl mx-auto">
        <div>
          <h3 className="text-lg font-black text-white italic mb-6 font-['Space_Grotesk']">SYNCO x KingCom</h3>
          <p className="font-['Space_Grotesk'] text-[12px] tracking-[0.2em] uppercase text-white/50 max-w-sm">
            © 2026 SYNCO X KINGCOM MASTER XM20. BEYOND THE STAGE. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-red-600 font-black font-['Space_Grotesk'] text-[12px] tracking-[0.2em] uppercase">MENU</h4>
            <ul className="space-y-2">
              <li><a className="font-['Space_Grotesk'] text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-red-500 transition-colors" href="#timeline">SCHEDULE</a></li>
              <li><a className="font-['Space_Grotesk'] text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-red-500 transition-colors" href="#dop">SPEAKERS</a></li>
              <li><a className="font-['Space_Grotesk'] text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-red-500 transition-colors" href="#register">REGISTER</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
