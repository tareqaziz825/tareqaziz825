import Head from 'next/head';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — About</title>
      </Head>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 2rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="hero-eyebrow">CS Graduate · BRAC University · Dhaka</div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Mohammod<br />
          Tareq Aziz<br />
          <em style={{ color: 'var(--accent2)', fontStyle: 'normal' }}>Justice</em>
        </h1>
        <p className="hero-sub">
          Machine Learning & Deep Learning enthusiast. Exploring the frontiers of spatiotemporal modeling, zero-shot learning, and computer vision to solve complex real-world problems.
        </p>
        <div className="hero-actions">
          <a href="https://drive.google.com/file/d/11sc1MD383cGChF9JH3LyAaxuaAGIY8ej/view?usp=sharing" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
          <a href="/projects" className="btn-outline">View Projects →</a>
        </div>
      </section>

      {/* About */}
      <div className="page" style={{ paddingTop: '2rem' }}>
        <FadeIn>
          <div className="about-grid">
            <div className="profile-wrap">
              <Image
                src="/profile.jpg"
                alt="Mohammod Tareq Aziz"
                width={400}
                height={500}
                className="profile-img"
                priority
              />
              <div className="profile-meta">
                <span className="profile-meta-item">📍 Merul Badda, Dhaka</span>
                <span className="profile-meta-item">🎓 B.Sc. Computer Science</span>
                <span className="profile-meta-item">🏛 BRAC University, Dhaka</span>
              </div>
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am a Computer Science graduate from BRAC University, Dhaka, with a strong research-driven interest in Machine Learning, Deep Learning, and Computer Vision. My academic and project work focuses on developing intelligent, data-driven systems, particularly in areas such as video understanding, anomaly detection, and applied machine learning.
              </p>
              <p>
                My academic training in Computer Science, combined with hands-on experience in research-oriented projects, has naturally drawn me toward exploring the intersection of deep learning architectures, representation learning, and real-world problem solving. My primary research interests span Zero-Shot and Self-Supervised Learning, Vision Transformers, Spatiotemporal Modeling, and Multi-Modal Learning, with applications in surveillance, human behavior analysis, and data-driven diagnostics.
              </p>
              <p>
                My undergraduate thesis centers on context-aware zero-shot anomaly detection in surveillance videos, where I designed a dual-stream framework leveraging spatiotemporal transformers, predictive modeling, and vision-language alignment to detect unseen anomalous events without requiring labeled anomaly data.
              </p>
              <p>
                In addition to deep learning research, I have worked on applied machine learning projects involving spectrophotometric data analysis and classical ML models, strengthening my understanding of data preprocessing, feature engineering, and experimental evaluation. I am proficient in Python-based ML and deep learning ecosystems, including PyTorch, TensorFlow, and common scientific computing libraries.
              </p>

              <Connect />
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
