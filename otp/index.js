function generateOtp(){
    const digits = "03303222";
    let otp = "";

    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random()* digits.length);
        otp += digits[randomIndex];
    }
    return otp;
}
const otp = generateOtp();
console.log(`your otp is ${otp}`)