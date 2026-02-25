import Head from 'next/head';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

const projects = [
  {
    id: 'cse400',
    badge: 'CSE 400 — Final Year Thesis',
    title: 'Context-Aware Zero-Shot Anomaly Detection in Surveillance Using Contrastive and Predictive Spatiotemporal Modeling',
    supervisor: 'Supervisors: Prof. Dr. Md. Ashraful Alam, Md Tanzim Reza',
    tags: ['Zero-Shot Learning', 'Video Anomaly Detection', 'Computer Vision', 'Contrastive Learning', 'Transformer Architecture'],
    image: '/400img.jpg',
    description: 'Developed a novel zero-shot anomaly detection framework that identifies abnormal events in surveillance footage without requiring any anomaly examples during training. The system combines spatiotemporal transformers with vision-language understanding to detect previously unseen threats in real-time.',
    highlights: [
      { label: 'Key Innovation', text: 'Introduced a dual-stream architecture integrating TimeSformer for spatiotemporal feature extraction, DPC-RNN for predictive temporal modeling, and CLIP for semantic context alignment—enabling true zero-shot detection with context awareness.' },
      { label: 'Technical Approach', text: 'Jointly trained the model using InfoNCE and Contrastive Predictive Coding (CPC) losses to learn normal behavior patterns. A context-gating mechanism modulates predictions based on scene-specific cues, reducing false alarms by adapting to different surveillance environments.' },
      { label: 'Results', text: 'Achieved 84.5% ROC-AUC and 72.3% PR-AUC on the UCF-Crime dataset, outperforming state-of-the-art zero-shot methods including AnomalyCLIP (82.4%) while maintaining competitive detection latency of 0.45 seconds.' },
      { label: 'Tech Stack', text: 'Python, PyTorch, Hugging Face Transformers, TimeSformer, CLIP, DPC-RNN, OpenCV, UCF-Crime dataset' },
    ],
    links: [
      { href: 'https://arxiv.org/pdf/2508.18463', label: 'Paper' },
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-400-FINAL-YEAR-THESIS', label: 'GitHub' },
    ],
  },
  {
    id: 'cse424',
    badge: 'CSE 424 — Pattern Recognition',
    title: 'Blue-Light Blocking Glasses Using Machine Learning',
    supervisor: 'Instructors: Annajiat Alim Rasel, Sadiul Arefin Rafi',
    tags: ['Machine Learning', 'Regression Models', 'Spectrophotometry', 'Health Informatics', 'Data Analysis'],
    image: '/424img.jpg',
    description: 'Developed machine learning models to predict and analyze the spectrophotometric properties of commercial blue-light blocking lenses, evaluating their effectiveness in filtering circadian-proficient wavelengths (455-560nm) while preserving visual clarity across diverse lighting conditions.',
    highlights: [
      { label: 'Research Methodology', text: 'Tested 50 commercial blue-blocking lenses under 5 distinct light sources (sunlight, fluorescent, incandescent, LED, and tablet displays), measuring absolute irradiance across the visible spectrum (380-780nm).' },
      { label: 'Model Performance', text: 'Implemented KNN, SVM, and Linear Regression. The KNN model achieved superior performance with 91.4% R² score, 5.921 RMSE, and 3.844 MAE, significantly outperforming SVM (48.3% R²) and Linear Regression (79.7% R²).' },
      { label: 'Key Findings', text: 'Red-tinted lenses transmitted the least circadian-efficient light, while orange-tinted glasses demonstrated the highest transmission specificity for blocking physiologically active light in daylight conditions.' },
      { label: 'Tech Stack', text: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, OpenRefine, SVM, KNN, Linear Regression, Spectrophotometric Data Analysis' },
    ],
    links: [
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-424-PATTERN-RECOGNITION/blob/main/CSE%20424%20Project%20Paper%20IEEE.pdf', label: 'Paper' },
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-424-PATTERN-RECOGNITION', label: 'GitHub' },
    ],
  },
  {
    id: 'cse425',
    badge: 'CSE 425 — Neural Networks',
    title: 'Comparative Evaluation of Clustering Algorithms on the Wine Dataset with Stability Analysis',
    supervisor: 'Instructor: Moin Mostakim',
    tags: ['Unsupervised Learning', 'Variational Autoencoders', 'Clustering Analysis', 'Uncertainty Quantification', 'Neural Networks'],
    image: '/425img.png',
    description: 'Developed a novel Stochastic Clustering Neural Network (SCNN) inspired by Variational Autoencoders to perform uncertainty-aware clustering on the Wine dataset, incorporating probabilistic latent representations to quantify cluster assignment confidence.',
    highlights: [
      { label: 'Novel Architecture', text: 'Designed a VAE-inspired stochastic neural network featuring an encoder-decoder structure with reparameterization trick, enabling gradient-based optimization through stochastic sampling while learning meaningful latent representations.' },
      { label: 'Comparative Analysis', text: 'Conducted comprehensive evaluation against classical baselines (K-Means, GMM, SOM) using Silhouette Score, Adjusted Rand Index (ARI), and Normalized Mutual Information (NMI). Introduced stability analysis across multiple random seeds.' },
      { label: 'Key Findings', text: 'While GMM achieved highest accuracy (78.44% ARI), the SCNN provided unique uncertainty quantification capabilities with 0.4885 stability variance. SOM demonstrated extreme instability (974.89), highlighting sensitivity to initialization.' },
      { label: 'Tech Stack', text: 'Python, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, Wine Dataset' },
    ],
    links: [
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-425-NEURAL-NETWORKS/blob/main/CSE425_Project_Report.pdf', label: 'Report' },
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-425-NEURAL-NETWORKS', label: 'GitHub' },
    ],
  },
  {
    id: 'cse427',
    badge: 'CSE 427 — Machine Learning',
    title: 'Loan Eligibility Prediction Using Machine Learning Models with SMOTE for Class Imbalance',
    supervisor: 'Instructor: Prof. Dr. Chowdhury Mofizur Rahman',
    tags: ['Machine Learning', 'Ensemble Methods', 'Class Imbalance', 'SMOTE', 'Financial ML'],
    image: '/427img.png',
    description: 'Built an automated loan eligibility prediction system for Dream Housing Finance Company using machine learning classifiers to streamline the approval process based on applicant demographics, financial data, and credit history.',
    highlights: [
      { label: 'Data Preprocessing', text: 'Implemented comprehensive preprocessing including median/mode imputation for missing values, one-hot encoding, feature scaling, and SMOTE to address severe class imbalance in loan approval data.' },
      { label: 'Model Comparison', text: 'Evaluated five ML algorithms—Random Forest, Logistic Regression, AdaBoost, KNN, and MLP—using accuracy, precision, recall, and F1-score metrics. Random Forest and MLP achieved highest accuracy (89.29%), with MLP demonstrating exceptional recall (96%).' },
      { label: 'Key Insights', text: 'Correlation analysis revealed ApplicantIncome (0.57 with LoanAmount), CreditHistory, and LoanAmount as strongest predictors. However, all models struggled with False class prediction, indicating need for advanced imbalance handling.' },
      { label: 'Tech Stack', text: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Imbalanced-learn (SMOTE), ensemble methods' },
    ],
    links: [
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-427-MACHINE-LEARNING/blob/main/CSE%20427%20Project%20Report.pdf', label: 'Report' },
      { href: 'https://github.com/tareqaziz825/BRACU-CSE-427-MACHINE-LEARNING', label: 'GitHub' },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — Projects</title>
      </Head>
      <div className="page">
        <FadeIn>
          <h1 className="page-title">Projects</h1>
          <div className="page-divider" />
        </FadeIn>

        <div className="projects-list">
          {projects.map((proj, i) => (
            <FadeIn key={proj.id} delay={i * 80}>
              <div className="project-card">
                <div>
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={400}
                    height={300}
                    className="project-img"
                  />
                </div>
                <div>
                  <div className="project-meta">{proj.badge}</div>
                  <h2 className="project-title">{proj.title}</h2>
                  <p className="project-supervisor">{proj.supervisor}</p>
                  <div className="tags">
                    {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <p className="project-desc">{proj.description}</p>
                  {proj.highlights.map(h => (
                    <p key={h.label} className="project-highlight">
                      <strong>{h.label}:</strong> {h.text}
                    </p>
                  ))}
                  <div className="project-links">
                    {proj.links.map(l => (
                      <a key={l.label} href={l.href} className="proj-link" target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <Connect />
        </FadeIn>
      </div>
    </>
  );
}
