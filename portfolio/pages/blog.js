// {
//   id: 'your-post-slug',           // becomes the URL: /blog/your-post-slug
//   category: 'Machine Learning',
//   date: 'March 10, 2026',
//   title: 'Your Post Title',
//   summary: 'A short description shown on the listing page.',
//   tags: ['Tag1', 'Tag2'],
//   readTime: '4 min read',
// },

import Head from 'next/head';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import Connect from '../components/Connect';

export const posts = [
  {
    id: 'getting-started-with-zero-shot-learning',
    category: 'Deep Learning',
    date: 'February 26, 2026',
    title: 'Getting Started with Zero-Shot Learning',
    summary: 'An introduction to zero-shot learning — what it is, why it matters, and how modern vision-language models like CLIP make it possible to recognize things a model has never explicitly been trained on.',
    tags: ['Zero-Shot Learning', 'CLIP', 'Deep Learning'],
    readTime: '5 min read',
  },
  // Add more posts here following the same structure
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Mohammod Tareq Aziz — Blog</title>
      </Head>
      <div className="page">
        <FadeIn>
          <h1 className="page-title">Blog</h1>
          <div className="page-divider" />
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn delay={100}>
            <p className="experience-empty">Posts coming soon.</p>
          </FadeIn>
        ) : (
          <div className="projects-list">
            {posts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 80}>
                <div className="blog-card">
                  <div className="blog-card-left">
                    <div className="project-meta">{post.category}</div>
                    <div className="blog-date">{post.date}</div>
                    <div className="blog-readtime">{post.readTime}</div>
                  </div>
                  <div className="blog-card-right">
                    <h2 className="project-title">
                      <Link href={`/blog/${post.id}`} className="blog-title-link">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="project-desc">{post.summary}</p>
                    <div className="tags">
                      {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="project-links" style={{ marginTop: '1.2rem' }}>
                      <Link href={`/blog/${post.id}`} className="proj-link">
                        Read Post →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn>
          <Connect />
        </FadeIn>
      </div>
    </>
  );
}