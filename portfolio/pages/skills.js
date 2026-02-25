import Head from 'next/head';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

const mlSkills = [
  'Multi-Modal Machine Learning',
  'Deep Learning Architectures',
  'Computer Vision',
  'Image Processing',
  'Transformer-based Models',
  'Temporal & Video Understanding (TimeSformer)',
  'Zero-Shot & Self-Supervised Learning',
  'Anomaly Detection',
  'Unsupervised & Clustering Methods',
  'Feature Engineering & Data Preprocessing',
];

const techSkills = [
  'Python',
  'C / C++',
  'Java (Basic)',
  'SQL (MySQL)',
  'NumPy, Pandas, Matplotlib',
  'OpenCV, Scikit-learn',
  'TensorFlow, PyTorch',
  'CLIP, DPC-RNN, Hugging Face Transformers',
  'Git, GitHub',
  'Jupyter Notebook, VS Code, PyCharm',
  'Google Cloud (Compute Engine, Colab)',
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — Skills</title>
      </Head>
      <div className="page">
        <FadeIn>
          <h1 className="page-title">Skills</h1>
          <div className="page-divider" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="skills-grid">
            <div className="skills-col">
              <h3>Research & ML</h3>
              <ul className="skill-list">
                {mlSkills.map(s => (
                  <li key={s} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-col">
              <h3>Programming & Tools</h3>
              <ul className="skill-list">
                {techSkills.map(s => (
                  <li key={s} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <Connect />
        </FadeIn>
      </div>
    </>
  );
}
