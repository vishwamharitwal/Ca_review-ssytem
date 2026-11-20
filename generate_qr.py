import qrcode
from PIL import Image

def generate_permanent_qr(url: str, output_filename: str):
    """
    Generates a 100% permanent, static QR code that never expires.
    The URL is directly encoded into the QR matrix.
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # High error tolerance (up to 30%)
        box_size=15,  # High resolution for crisp printing
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(output_filename)
    print(f"Permanent QR Code saved successfully as '{output_filename}' for URL: {url}")

if __name__ == "__main__":
    # 1. Review Filter Web App URL (GitHub Pages)
    web_url = "https://vishwamharitwal.github.io/gram_review_system/"
    generate_permanent_qr(web_url, "qr_code_review_system.png")

    # 2. Direct Google Review URL
    google_url = "https://g.page/r/CbWJIMWUr9btEBM/review"
    generate_permanent_qr(google_url, "qr_code_google_direct.png")
