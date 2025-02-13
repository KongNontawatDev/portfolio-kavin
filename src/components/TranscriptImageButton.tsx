"use client";

import { useState } from "react";
import { Image } from "antd";

const imageSrc = "/transcript.webp"; // ใช้รูปเดียว

export default function TranscriptImageButton() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="btn btn-block lg:btn-wide btn-lg btn-primary"
      >
        View Transcript
      </button>

      <Image
        width={200} // ปรับขนาดภาพให้เล็กเพื่อซ่อน
        height={200}
        style={{ display: "none" }}
        src={imageSrc}
        preview={{
          visible,
          src: imageSrc,
          onVisibleChange: (value) => setVisible(value),
        }}
      />
    </>
  );
}