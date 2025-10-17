"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page5() {
  const cam1Ref = useRef<HTMLVideoElement>(null);
  const cam2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (cam1Ref.current) cam1Ref.current.srcObject = stream;
        if (cam2Ref.current) cam2Ref.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera access error:", err));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", padding: "24px", backgroundColor: "black", gap: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>photoshoot 📸</h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%", maxWidth: "400px" }}>
        <div style={{ position: "relative", width: "256px", height: "256px" }}>
          <Image src="/camera1.png" alt="Camera1" width={256} height={256} style={{ borderRadius: "16px", objectFit: "cover" }} />
          <video
            ref={cam1Ref}
            autoPlay
            muted
            style={{
              position: "absolute",
              top: "30%",
              left: "30%",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              transform: "translate(-35%, -32%)",
              objectFit: "cover",
              zIndex: 20
            }}
          />
          <div style={{ position: "absolute", top: "30%", left: "-80px", width: "80px", height: "80px", zIndex: 10 }}>
            <Image src="/react.jpeg" alt="React" width={80} height={80} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
        </div>

        <div style={{ position: "relative", width: "256px", height: "256px" }}>
          <Image src="/camera2.png" alt="Camera2" width={256} height={256} style={{ borderRadius: "16px", objectFit: "cover" }} />
          <video
            ref={cam2Ref}
            autoPlay
            muted
            style={{
              position: "absolute",
              top: "30%",
              left: "30%",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              transform: "translate(40%, -140%)",
              objectFit: "cover",
              zIndex: 20
            }}
          />
        </div>
      </div>

      <Link href="/page5">
        <button style={{ marginTop: "24px", padding: "12px 24px", borderRadius: "12px", fontWeight: "600", cursor: "pointer", border: "none" }}>
          Next
        </button>
      </Link>
    </div>
  );
}
