// Service để gửi dữ liệu đăng ký vào Google Sheets
export const sendLeadToSheet = async (data) => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPlUI1XlFzPfHnr20xp_0CfjeO_GndtQsnCA1xMBAi4xFGfF1oBQhGJJaMaig_5UI3/exec';
  
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Quan trọng để tránh lỗi CORS với Google Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.fullName,
        job: data.occupation,
        phone: data.phoneNumber,
        email: data.emailAddress,
      }),
    });
    
    return true;
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu:", error);
    return false;
  }
};
