import { useState } from 'react';
import FiturePost from "@components/FeaturePost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import Head from "next/head";
import CardPost from "@components/CardPost";
import Footer from '@components/Footer';

export default function Home() {
  const [posts, setPosts] = useState([
    {
    id: '01',
    thumbnail: '/thumbnail-2.png',
    category: 'INTERNET',
    date: 'June 28, 2021',
    title: 'How to design a product that can grow itself 10x in year',
    shortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
    authorAvatar: '/author-2.png',
    authorName: 'Jenny Wilson',
    authorJob: 'Product Designer'
  },
  {
    id: '02',
    thumbnail: '/thumbnail-3.png',
    category: '9 TO 5',
    date: 'June 22, 2021',
    title: 'The More Important the Work, the More Important the Rest',
    shortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
    authorAvatar: '/author-3.png',
    authorName: 'Esther Howard',
    authorJob: 'Entrepreneur'
  },
  {
    id: '03',
    thumbnail: '/thumbnail-4.png',
    category: 'INSPIRATIONS',
    date: 'June 18, 2021',
    title: 'Email Love - Email Inspiration, Templates and Discovery',
    shortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
    authorAvatar: '/author-4.png',
    authorName: 'Robert Fox',
    authorJob: 'Front-end Engineer'
  },
  {
    id: '04',
    thumbnail: '/thumbnail-5.png',
    category: '9 TO 5',
    date: 'June 22, 2021',
    title: 'The More Important the Work, the More Important the Rest',
    shortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
    authorAvatar: '/author-5.png',
    authorName: 'Esther Howard',
    authorJob: 'Entrepreneur'
  },
  {
    id: '05',
    thumbnail: '/thumbnail-6.png',
    category: 'INSPIRATIONS',
    date: 'June 18, 2021',
    title: 'Email Love - Email Inspiration, Templates and Discovery',
    shortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
    authorAvatar: '/author-6.png',
    authorName: 'Robert Fox',
    authorJob: 'Front-end Engineer'
  },
  {
    id: '06',
    thumbnail: '/thumbnail-7.png',
    category: 'INTERNET',
    date: 'June 28, 2021',
    title: 'How to design a product that can grow itself 10x in year',
    shortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
    authorAvatar: '/author-7.png',
    authorName: 'Jenny Wilson',
    authorJob: 'Product Designer'
  },
]);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
      <FiturePost />
      <div className="flex flex-wrap -mx-4 mt-14 w-full">
        {posts.map((post) => (
          <div key={post.id} className='md:w-4/12 w-full px-4 py-6'>
            <CardPost {...post}/>
          </div>
        ))}
      </div>
      <Footer />
      </Container>
    </Layout>
  );
}
