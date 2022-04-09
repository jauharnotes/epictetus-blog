import { useState } from 'react';
import FiturePost from '@components/FeaturePost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import Head from 'next/head';
import CardPost from '@components/CardPost';
import Footer from '@components/Footer';
import mockPosts from '../utils/posts.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FiturePost />
        <div className='flex flex-wrap -mx-4 mt-14 w-full'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='lg:w-4/12 md:w-4/12 md:pr-3 w-full lg:px-4 py-6 '
            >
              <CardPost {...post} />
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </Container>
    </Layout>
  );
}
