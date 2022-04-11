import Image from 'next/image';
import Link from 'next/link';
import InfoPost from './InfoPost';

export default function FiturePost() {
  return (
    <article>
      <div className='w-full lg:flex justify-betwee'>
          <div className='lg:w-8/12 mr-7'>
            <Link href='./detail'>
              <a href='#'>
                <Image
                  src='/author-1.png'
                  width={710}
                  height={389}
                  alt='fiture image'
                  className='rounded-lg'
                />
              </a>
            </Link>
          </div>
          <div className='lg:w-4/12 pb-11'>
            <InfoPost
              category='IU DESIGN'
              date='July 2, 2021'
              title='Understanding color theory: the color wheel and finding complementary colors'
              shortDescription=' Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.'
              authorAvatar='/author-img01.png'
              authorName='Leslie Alexander'
              authorJob='UI Designer'
            />
          </div>
      </div>
      <hr className='h-[0.2px] bg-tcontent md:hidden'/>
    </article>
  );
}
