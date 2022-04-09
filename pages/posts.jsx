import CardPost from '@components/CardPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import mockPosts from '../utils/posts.json';
import { useState } from 'react';
import SectionHeader from '@components/SectionHeader';

export default function Posts() {
    const [posts, setPosts] = useState([]);

  return (
    <Layout>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
           {!posts.length ? (
               <div className='space-y-3 max-w-lg mx-auto'>
                   <h2 className='text-theading text-6xl text-center'>No result 😥</h2>
                   <p className='text-theading text-xl text-center'>We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
               </div>
           ):
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
           }
        {/* <Footer /> */}
      </Container>
    </Layout>
  );
}
