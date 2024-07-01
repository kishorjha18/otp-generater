function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  
  document.getElementById("generateBtn").addEventListener("click", function() {
    var otp = generateOTP();
    document.getElementById("otpInput").value = otp;
  });
  
  document.getElementById("validateBtn").addEventListener("click", function() {
    var enteredOTP = document.getElementById("otpInput").value;
    var generatedOTP = document.getElementById("otpInput").getAttribute("value");
    if (enteredOTP === generatedOTP) {
      document.getElementById("status").textContent = "OTP is valid!";
    } else {
      document.getElementById("status").textContent = "Invalid OTP! Please try again.";
    }
  });
  