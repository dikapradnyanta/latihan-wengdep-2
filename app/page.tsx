import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="text-white min-vh-100" style={{ backgroundColor: "#0a1128" }}>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom border-secondary" style={{ backgroundColor: "rgba(10, 17, 40, 0.9)", backdropFilter: "blur(10px)" }}>
        <div className="container py-2">
          <a className="navbar-brand fw-bold fs-4" href="#">Dika<span className="text-success">.</span></a>
          <ul className="navbar-nav ms-auto flex-row gap-4">
            <li className="nav-item"><a className="nav-link text-light" href="#about">About Me</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#experience">Experience</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO / ABOUT */}
      <section id="about" className="d-flex align-items-center min-vh-100 pt-5" style={{ background: "radial-gradient(circle at top left, rgba(34, 197, 94, 0.05), transparent 50%)" }}>
        <div className="container py-5 mt-5">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-7 mt-5 mt-md-0 text-center text-md-start">
              <p className="text-success fw-bold text-uppercase tracking-wide mb-2" style={{ letterSpacing: "2px" }}>Hello, I am</p>
              <h1 className="display-4 fw-bold mb-3 text-white">I Komang Dika Pradnyanta</h1>
              <p className="fs-4 text-success fw-medium mb-4">3D Artist (Low Poly Game Asset)</p>

              <p className="text-secondary fs-5 mb-5 mx-auto mx-md-0" style={{ maxWidth: "600px" }}>
                Saya adalah 3D Artist yang fokus pada modeling & texturing asset low-poly untuk game.
                Saat ini magang di Palm Studio dan aktif di bidang desain serta multimedia.
              </p>

              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="https://github.com/dikapradnyanta" target="_blank" className="btn btn-success px-4 py-2 fw-bold" rel="noreferrer">GitHub</a>
                <a href="https://www.instagram.com/dika.pradnyanta/" target="_blank" className="btn btn-outline-success px-4 py-2 fw-bold" rel="noreferrer">Instagram</a>
              </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
              <div className="position-relative" style={{ width: "100%", maxWidth: "400px", aspectRatio: "4/5" }}>
                <Image src="/images/profile.png" alt="Foto Dika" fill className="rounded-4 object-fit-cover shadow-lg" style={{ border: "2px solid rgba(255, 255, 255, 0.05)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-5" style={{ backgroundColor: "#0f172a" }}>
        <div className="container py-5 my-md-5">
          <div className="text-center mb-5 pb-3">
            <p className="text-success fw-bold mb-2 text-uppercase" style={{ letterSpacing: "2px" }}>MY EXPERTISE</p>
            <h2 className="display-5 fw-bold text-white">Skills</h2>
          </div>

          <div className="row g-4 justify-content-center mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="col-md-6">
              <div className="p-4 p-md-5 rounded-4 border border-secondary h-100" style={{ backgroundColor: "#141b33" }}>
                <h3 className="fs-4 text-success border-bottom border-secondary pb-3 mb-4">Hard Skills</h3>
                <ul className="list-unstyled text-secondary fs-5 m-0 p-0">
                  <li className="mb-3"><span className="text-success">▹</span> Blender (Modeling & Texturing)</li>
                  <li className="mb-3"><span className="text-success">▹</span> Figma (UI/UX Design)</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe Photoshop</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe After Effects</li>
                  <li className="mb-3"><span className="text-success">▹</span> DaVinci Resolve</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe Premiere Pro</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 p-md-5 rounded-4 border border-secondary h-100" style={{ backgroundColor: "#141b33" }}>
                <h3 className="fs-4 text-success border-bottom border-secondary pb-3 mb-4">Soft Skills</h3>
                <ul className="list-unstyled text-secondary fs-5 m-0 p-0">
                  <li className="mb-3"><span className="text-success">▹</span> Problem Solving</li>
                  <li className="mb-3"><span className="text-success">▹</span> Manajemen Waktu</li>
                  <li className="mb-3"><span className="text-success">▹</span> Kerja Tim</li>
                  <li className="mb-3"><span className="text-success">▹</span> Komunikasi Visual</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-5" style={{ backgroundColor: "#0a1128" }}>
        <div className="container py-5 my-md-5">
          <div className="text-center mb-5 pb-3">
            <p className="text-success fw-bold mb-2 text-uppercase" style={{ letterSpacing: "2px" }}>MY JOURNEY</p>
            <h2 className="display-5 fw-bold text-white">Pengalaman</h2>
          </div>

          <div className="row g-4 mx-auto" style={{ maxWidth: "1200px" }}>
            <div className="col-md-4">
              <div className="p-4 rounded-4 border border-secondary h-100 shadow-sm" style={{ backgroundColor: "#141b33" }}>
                <h3 className="fs-5 text-white mb-1">Magang - Palm Studio</h3>
                <span className="d-block text-success mb-3 fs-6">(2024 - Sekarang)</span>
                <p className="text-secondary mb-0">Membuat asset 3D low-poly untuk game Roblox menggunakan Blender.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border border-secondary h-100 shadow-sm" style={{ backgroundColor: "#141b33" }}>
                <h3 className="fs-5 text-white mb-1">HIMA Informatika - Divisi Kominfo</h3>
                <span className="d-block text-success mb-3 fs-6">(2025)</span>
                <p className="text-secondary mb-0">Membuat lebih dari 30 konten publikasi dan dokumentasi.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border border-secondary h-100 shadow-sm" style={{ backgroundColor: "#141b33" }}>
                <h3 className="fs-5 text-white mb-1">Bali Start Up Camp - Pubdok</h3>
                <span className="d-block text-success mb-3 fs-6">(2024 dan 2025)</span>
                <p className="text-secondary mb-0">Bertanggung jawab atas dokumentasi dan publikasi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
