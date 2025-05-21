const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendOTP = async (email, otp) => {
    try {
        const mailOptions = {
            from: `SuperSport - ${process.env.SMTP_USER}`,
            to: email,
            subject: 'Xác thực mã OTP',
            text: `Mã OTP của bạn là: ${otp}. Đừng chia sẻ mã này với bất kỳ ai.`,
            html: `<p>Mã OTP của bạn là: <strong>${otp}</strong></p><p>Đừng chia sẻ mã này với bất kỳ ai.</p>`,
        };
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully');
    } catch (error) {
        console.error('Error sending OTP:', error);
    }
}

module.exports = sendOTP;