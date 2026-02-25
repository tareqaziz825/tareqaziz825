import Head from 'next/head';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { posts } from '../blog';

// Full post content lives here — add body to each post
const postContent = {
  'getting-started-with-zero-shot-learning': {
    body: `
Zero-shot learning (ZSL) is one of the most fascinating challenges in modern machine learning. The core idea is simple but profound: can a model recognize or classify something it has never seen during training?

**Why it matters**

Traditional supervised learning requires labeled examples for every class you want to recognize. This is expensive, time-consuming, and often impossible — especially for rare events like unusual crimes in surveillance footage, rare diseases in medical imaging, or novel objects in robotics.

Zero-shot learning sidesteps this by transferring knowledge from seen classes to unseen ones using auxiliary information — typically semantic descriptions, attributes, or embeddings.

**How CLIP changed everything**

OpenAI's CLIP (Contrastive Language-Image Pretraining) marked a turning point. By training on 400 million image-text pairs from the internet, CLIP learned a shared embedding space where images and their natural language descriptions are close together.

This means you can classify an image into any category — even one never seen during training — simply by comparing its embedding to the text embedding of the category name.

**A simple example**

Suppose you want to detect "a person climbing a fence" in a surveillance video. With a traditional model, you'd need hundreds of labeled examples of that exact behavior. With a CLIP-based zero-shot approach, you just pass the text prompt and compare it against video frame embeddings. No labeled anomaly data required.

**What's next**

The frontier is now context-aware zero-shot learning — making models sensitive not just to what is happening, but where and under what circumstances. A person running is normal on a track but suspicious in a bank vault. This is the problem my thesis addresses.

If you're interested in exploring ZSL further, I recommend starting with the original CLIP paper by Radford et al. (2021) and the survey by Wang et al. on generalized zero-shot learning.
    `.trim(),
  },
};

export async function getStaticPaths() {
  return {
    paths: posts.map(p => ({ params: { slug: p.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.id === params.slug);
  const content = postContent[params.slug] || { body: '' };
  return { props: { post, content } };
}

function renderBody(text) {
  return text.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h3 key={i} style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--text)',
          margin: '2rem 0 0.75rem',
          letterSpacing: '0.02em',
        }}>
          {para.replace(/\*\*/g, '')}
        </h3>
      );
    }
    // Handle inline bold within paragraphs
    const parts = para.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} style={{
        fontSize: '0.95rem',
        lineHeight: 1.9,
        color: 'var(--text-muted)',
        marginBottom: '1.2rem',
      }}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} style={{ color: 'var(--text)', fontWeight: 600 }}>{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function BlogPost({ post, content }) {
  return (
    <>
      <Head>
        <title>{post.title} — Mohammod Tareq Aziz</title>
        <meta name="description" content={post.summary} />
      </Head>
      <div className="page" style={{ maxWidth: '740px' }}>
        <FadeIn>
          <Link href="/blog" className="proj-link" style={{ display: 'inline-block', marginBottom: '2.5rem' }}>
            ← Back to Blog
          </Link>

          <div className="project-meta" style={{ marginBottom: '0.75rem' }}>{post.category}</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: 'var(--text)',
          }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'center' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
              {post.date}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: 'var(--accent2)', letterSpacing: '0.04em' }}>
              {post.readTime}
            </span>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginBottom: '2.5rem' }}>
            {renderBody(content.body)}
          </div>

          <div className="tags" style={{ marginBottom: '3rem' }}>
            {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </FadeIn>
      </div>
    </>
  );
}