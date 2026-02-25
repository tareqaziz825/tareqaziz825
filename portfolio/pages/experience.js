import Head from 'next/head';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — Experience</title>
      </Head>
      <div className="page">
        <FadeIn>
          <h1 className="page-title">Experience</h1>
          <div className="page-divider" />
        </FadeIn>

        <FadeIn delay={100}>
          <p className="experience-empty">
            Experience entries coming soon.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <Connect />
        </FadeIn>
      </div>
    </>
  );
}
