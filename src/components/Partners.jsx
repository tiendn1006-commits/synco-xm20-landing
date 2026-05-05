import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Partners = () => {
  const [ref, visible] = useScrollAnimation()
  const [hovered, setHovered] = useState(null)

  const partners = [
    {
      name: 'KINGCOM',
      logo: '/src/kingcom logo.png',
      delay: 'anim-delay-1'
    },
    {
      name: 'NANLITE',
      logo: '/src/nanlite1.png',
      delay: 'anim-delay-2'
    },
  ]

  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className={`text-center text-2xl md:text-3xl font-semibold tracking-wide text-white mb-16 anim-hidden ${visible ? 'anim-visible' : ''}`}>
          ĐƠN VỊ ĐỒNG HÀNH
        </h2>
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-8 md:gap-16">

          {partners.map((partner) => (
            <div 
              key={partner.name}
              className={`anim-hidden ${partner.delay} ${visible ? 'anim-visible' : ''}`}
              onMouseEnter={() => setHovered(partner.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`bg-white rounded-lg p-6 md:p-8 transition-all duration-300 ${
                hovered === partner.name ? 'scale-110 shadow-2xl' : 'scale-100'
              }`}>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Partners
