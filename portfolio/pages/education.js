import Head from 'next/head';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

const education = [
  {
    logo: '/BRACU.svg',
    degree: 'Bachelor of Science (B.Sc.) in Computer Science',
    // year: 'Fall 2025',
    institution: 'BRAC University, Dhaka',
    details: ['Focus Area: Deep Learning, Machine Learning', 'Thesis: Context-Aware Zero-Shot Anomaly Detection in Surveillance'],
    courses: ['Machine Learning', 'Deep Leaning', 'TimeSformer', 'Transformer', 'CLIP'],
  },
  {
    logo: '/MMCollege.png',
    degree: 'Higher Secondary School (HSC)',
    // year: '2018',
    institution: 'Government Michael Madhusudan College, Jashore',
    details: ['Education Board: Jashore', 'Major: Science'],
    courses: [],
  },
  {
    logo: '/DPSchool.png',
    degree: 'Secondary School (SSC)',
    // year: '2016',
    institution: 'Daud Public School and College, Jashore',
    details: ['Education Board: Jashore', 'Major: Science'],
    courses: [],
  },
  {
    logo: '/DPSchool.png',
    degree: 'Junior School (JSC)',
    // year: '2013',
    institution: 'Daud Public School and College, Jashore',
    details: ['Education Board: Jashore', 'Major: General'],
    courses: [],
  },
    {
    logo: '/JESCollege.png',
    degree: 'Primary School (PSC)',
    // year: '2013',
    institution: 'Jashore English School & College, Jashore',
    details: ['Education Board: Jashore', 'Major: General'],
    courses: [],
  },
];

export default function Education() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — Education</title>
      </Head>
      <div className="page">
        <FadeIn>
          <h1 className="page-title">Education</h1>
          <div className="page-divider" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div key={i} className="edu-card">
                <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                {/* <div className="edu-year">{edu.year}</div> */}
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                {edu.details.map(d => (
                  <div key={d} className="edu-detail">{d}</div>
                ))}
                {edu.courses.length > 0 && (
                  <div className="course-chips">
                    {edu.courses.map(c => <span key={c} className="course-chip">{c}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <Connect />
        </FadeIn>
      </div>
    </>
  );
}
