import qrcode

url = "https://ethics-ai-hpc.github.io/Ethics-AI-HPC/"

qr = qrcode.QRCode(
    version=20,  
    error_correction=qrcode.constants.ERROR_CORRECT_L,  
    box_size=10,  
    border=4,  
)

qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill='black', back_color='white')
img.save("../assets/qr_code.png")
