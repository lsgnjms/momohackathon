document.addEventListener("DOMContentLoaded", function() {
    const verifyButton = document.getElementById("verify-button");
    const voucherCodeInput = document.getElementById("voucher-code");
    const verificationResult = document.getElementById("verification-result");

    verifyButton.addEventListener("click", function() {
        // In a real application, you would make an AJAX request to a server to verify the voucher code.
        // For simplicity, we'll just check if the code is "VALID123" here.
        const voucherCode = voucherCodeInput.value.trim();
        if (voucherCode === "VALID123") {
            verificationResult.textContent = "Voucher is valid!";
        } else {
            verificationResult.textContent = "Voucher is not valid.";
        }
    });
});
