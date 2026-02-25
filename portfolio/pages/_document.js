// import { Html, Head, Main, NextScript } from 'next/document';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         <meta name="description" content="Academic Researcher and Educator in Computer Science, focusing on Multi-Modal Machine Learning, and Deep Learning" />
//         <meta property="og:title" content="Mohammod Tareq Aziz — Portfolio" />
//         <meta property="og:description" content="CS graduate from BRAC University. Focused on deep learning, machine learning, and computer vision." />
//         <meta property="og:image" content="/profile.jpg" />
//         <meta property="og:type" content="website" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Academic Researcher and Educator in Computer Science, focusing on Multi-Modal Machine Learning, and Deep Learning" />
        <meta property="og:title" content="Mohammod Tareq Aziz — Portfolio" />
        <meta property="og:description" content="CS graduate from BRAC University. Focused on deep learning, computer vision, and anomaly detection." />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
