const qrCodeContainer = document.getElementById("qrcode");
const ErrorMsg = document.getElementById("errorMsg");
qrCodeContainer.innerHTML = '';
const text = document.getElementById("text");

function clickkk() {
    alert(text.value);
}

function generateQRCode() {
    qrCodeContainer.innerHTML = '';
    if (text.value.length == 0) {
        text.classList.add('error');
        ErrorMsg.style.display = 'block';
        qrCodeContainer.style.display = 'none';
        setTimeout(() => {
            text.classList.remove('error');
        }, 1000);
        return;
    }

    qrCodeContainer.style.display = "block";
    ErrorMsg.style.display = 'none';

    const qrcode = new QRCode(qrCodeContainer, {
        text: text.value + " is invited",
        width: 200,
        height: 200,
    });
}
