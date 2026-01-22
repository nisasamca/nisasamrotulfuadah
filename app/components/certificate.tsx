// app/certification/page.tsx
"use client";
import CertificationCard from "./certicard"

export default function CertificationPage() {
  const certifications = [
    {
      image: "/certificate/logo_bnsp.png",
      file: "/certificate/bnsp.pdf",
      title: "BNSP",
      description: "Sertifikasi Junior Web Developer",
    },
    {
      image: "/certificate/TelkomDigiUp.jpeg",
      title: "UI/UX Designer",
      file:  "/certificate/TelkomDigiUp.jpeg",
      description: "Fullstack Web Development Program",
    },
    {
      image: "/certificate/bdpw.png",
      file: "/certificate/bdpw.pdf",
      title: "Belajar Dasar Pemrograman Web",
      description: "Sertifikasi dari Dicoding Indonesia",
    },
    {
      image: "/certificate/bmfw.png",
      file: "/certificate/bmfw.pdf",
      title: "Belajar Membuat Front-End Web",
      description: "Sertifikasi dari Dicoding Indonesia",
    },
    {
      image: "/certificate/mpdj.png",
      file: "/certificate/mpdj.pdf",
      title: "Membangun Pemrograman dengan Java",
      description: "Sertifikasi dari Dicoding Indonesia",
    },
    {
      image: "/certificate/uep.png",
      file: "/certificate/uep.pdf",
      title: "Unity Essential Pathway",
      description: "Sertifikasi dari Unity ",
    },
    {
      image: "/certificate/intern.png",
      file: "/certificate/intern.png",
      title: "Internship In Shibly Teknologi Solusi",
      description: "Sertifikasi Magang Front-End Web Developer january-june 2025",
    },
  ]

  return (
    <section className="min-h-screen px-8 py-20 bg-gradient-to-b from-purple-100 to-white" id="certificate">
        <h2 className="text-4xl font-bold mb-6 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((item, index) => (
          <CertificationCard
            key={index}
            image={item.image}
            file={item.file}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
