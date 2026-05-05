import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { sendLeadToSheet } from '../services/leadService'

const Register = () => {
  const [ref, visible] = useScrollAnimation()
  const [formData, setFormData] = useState({
    fullName: '',
    occupation: '',
    phoneNumber: '',
    emailAddress: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await sendLeadToSheet(formData)
      
      if (success) {
        setShowPopup(true)
        // Reset form
        setFormData({
          fullName: '',
          occupation: '',
          phoneNumber: '',
          emailAddress: ''
        })
        // Tự động đóng popup sau 3 giây
        setTimeout(() => {
          setShowPopup(false)
        }, 3000)
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại!')
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-xxl relative" id="register">
      <div className="absolute inset-0 bg-red-600/5 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`glass-panel p-6 md:p-12 relative overflow-hidden border-red-600/20 rounded-2xl anim-scale ${visible ? 'anim-visible' : ''}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
          <div className={`text-center mb-10 anim-hidden anim-delay-2 ${visible ? 'anim-visible' : ''}`}>
            <h2 className="font-display-lg text-white mb-4">ĐĂNG KÝ THAM GIA</h2>
            <p className="text-secondary max-w-lg mx-auto uppercase tracking-widest text-xs">Số lượng giới hạn cho chuyên gia ngành.</p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`space-y-6 anim-left anim-delay-3 ${visible ? 'anim-visible' : ''}`}>
              <div className="relative">
                <label className="text-red-600 font-label-caps text-[10px] mb-2 block">HỌ VÀ TÊN</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white p-2 focus:ring-0 focus:border-red-600 focus:bg-red-600/5 transition-all outline-none" 
                  placeholder="Nguyễn Văn A" 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="relative">
                <label className="text-red-600 font-label-caps text-[10px] mb-2 block">NGHỀ NGHIỆP</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white p-2 focus:ring-0 focus:border-red-600 focus:bg-red-600/5 transition-all outline-none" 
                  placeholder="Content Creator / Sound Engineer..." 
                  type="text" 
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className={`space-y-6 anim-right anim-delay-3 ${visible ? 'anim-visible' : ''}`}>
              <div className="relative">
                <label className="text-red-600 font-label-caps text-[10px] mb-2 block">SỐ ĐIỆN THOẠI</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white p-2 focus:ring-0 focus:border-red-600 focus:bg-red-600/5 transition-all outline-none" 
                  placeholder="+84 000 000 000" 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="relative">
                <label className="text-red-600 font-label-caps text-[10px] mb-2 block">EMAIL</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white p-2 focus:ring-0 focus:border-red-600 focus:bg-red-600/5 transition-all outline-none" 
                  placeholder="example@synco.com" 
                  type="email" 
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className={`md:col-span-2 pt-8 anim-hidden anim-delay-4 ${visible ? 'anim-visible' : ''}`}>
              <button 
                className="w-full bg-red-600 text-black font-black py-4 hover:bg-white transition-all active:scale-[0.98] tracking-[0.2em] uppercase text-lg disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'XÁC NHẬN ĐĂNG KÝ'}
              </button>
              <p className="text-center text-white/30 text-[10px] mt-4">Đồng ý điều khoản bảo mật SYNCO.</p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl shadow-2xl max-w-md w-full transform animate-scaleIn">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">ĐĂNG KÝ THÀNH CÔNG!</h3>
              <p className="text-white/90 text-sm">Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-6 px-8 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
              >
                ĐÓNG
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Register
