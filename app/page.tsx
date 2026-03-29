import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="page-wrapper text-white min-vh-100">

      {/* NAVBAR */}
      <nav className="site-nav navbar navbar-expand-lg navbar-dark fixed-top">
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
      <section id="about" className="hero-section d-flex align-items-center min-vh-100 pt-5">
        <div className="container py-5 mt-5">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-7 mt-5 mt-md-0 text-center text-md-start">
              <p className="section-subtitle text-success fw-bold text-uppercase mb-2">Hello, I am</p>
              <h1 className="display-4 fw-bold mb-3 text-white">I Komang Dika Pradnyanta</h1>
              <p className="fs-4 text-success fw-medium mb-4">3D Artist (Low Poly Game Asset)</p>
              <p className="hero-desc text-secondary fs-5 mb-5 mx-auto mx-md-0">
                Saya adalah 3D Artist yang fokus pada modeling &amp; texturing asset low-poly untuk game.
                Saat ini magang di Palm Studio dan aktif di bidang desain serta multimedia.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="https://github.com/dikapradnyanta" target="_blank" className="btn btn-success px-4 py-2 fw-bold" rel="noreferrer">GitHub</a>
                <a href="https://www.instagram.com/dika.pradnyanta/" target="_blank" className="btn btn-outline-success px-4 py-2 fw-bold" rel="noreferrer">Instagram</a>
              </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
              <div className="profile-img-wrapper position-relative">
                <Image src="/images/profile.png" alt="Foto Dika" fill className="profile-img rounded-4 object-fit-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-skills py-5">
        <div className="container py-5 my-md-5">
          <div className="text-center mb-5 pb-3">
            <p className="section-subtitle text-success fw-bold mb-2 text-uppercase">MY EXPERTISE</p>
            <h2 className="display-5 fw-bold text-white">Skills</h2>
          </div>

          <div className="skills-row row g-4 justify-content-center mx-auto">
            <div className="col-md-6">
              <div className="skill-card p-4 p-md-5 rounded-4 h-100">
                <h3 className="skill-title fs-4 text-success pb-3 mb-4">Hard Skills</h3>
                <ul className="list-unstyled text-secondary fs-5 m-0 p-0">
                  <li className="mb-3"><span className="text-success">▹</span> Blender (Modeling &amp; Texturing)</li>
                  <li className="mb-3"><span className="text-success">▹</span> Figma (UI/UX Design)</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe Photoshop</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe After Effects</li>
                  <li className="mb-3"><span className="text-success">▹</span> DaVinci Resolve</li>
                  <li className="mb-3"><span className="text-success">▹</span> Adobe Premiere Pro</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-card p-4 p-md-5 rounded-4 h-100">
                <h3 className="skill-title fs-4 text-success pb-3 mb-4">Soft Skills</h3>
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
      <section id="experience" className="section-experience py-5">
        <div className="container py-5 my-md-5">
          <div className="text-center mb-5 pb-3">
            <p className="section-subtitle text-success fw-bold mb-2 text-uppercase">MY JOURNEY</p>
            <h2 className="display-5 fw-bold text-white">Pengalaman</h2>
          </div>

          <div className="exp-row">
            <div className="exp-card shadow-sm">
              <h3 className="fs-5 text-white mb-1">Magang - Palm Studio</h3>
              <span className="d-block text-success mb-3 fs-6">(2024 - Sekarang)</span>
              <p className="text-secondary mb-0">Membuat asset 3D low-poly untuk game Roblox menggunakan Blender.</p>
            </div>

            <div className="exp-card shadow-sm">
              <h3 className="fs-5 text-white mb-1">HIMA Informatika - Divisi Kominfo</h3>
              <span className="d-block text-success mb-3 fs-6">(2025)</span>
              <p className="text-secondary mb-0">Membuat lebih dari 30 konten publikasi dan dokumentasi.</p>
            </div>

            <div className="exp-card shadow-sm">
              <h3 className="fs-5 text-white mb-1">Bali Start Up Camp - Pubdok</h3>
              <span className="d-block text-success mb-3 fs-6">(2024 dan 2025)</span>
              <p className="text-secondary mb-0">Bertanggung jawab atas dokumentasi dan publikasi.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
