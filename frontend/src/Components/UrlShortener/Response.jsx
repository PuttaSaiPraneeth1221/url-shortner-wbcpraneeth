import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function Response({ response }) {

  const shortUrl =
    import.meta.env.VITE_DEV_PROXY + "/api/s/" + response.shortCode

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code")

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")

    let downloadLink = document.createElement("a")

    downloadLink.href = pngUrl
    downloadLink.download = "qr-code.png"
    downloadLink.click()
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >

      <a href={shortUrl} target="_blank">
        {shortUrl}
      </a>

      <QRCodeCanvas
        id="qr-code"
        value={shortUrl}
        size={220}          
      />

      <button onClick={downloadQR}>
        Download QR
      </button>

    </div>
  )
}