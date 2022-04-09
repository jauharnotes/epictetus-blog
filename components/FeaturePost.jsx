import Image from "next/image";
import InfoPost from "./InfoPost";

export default function FiturePost() {
  return (
    <article>
      <div className='w-full lg:flex justify-between'>
        <div className='lg:w-8/12 mr-7'>
          <a href='#'>
            <Image src='/author-1.png' width={710} height={389} alt='fiture image' className="rounded-lg"/>
          </a>
        </div>
        <div className="lg:w-4/12">
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
    </article>
  );
}
