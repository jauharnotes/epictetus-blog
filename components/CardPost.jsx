import Image from "next/image";
import InfoPost from '@components/InfoPost';
import Link from "next/link";

export default function CardPost({thumbnail, ...infoPost}) {
  return (
   <article>
       <div className="mb-4 ml-7 lg:m-0">
         <Link href='./detail'>
            <a><Image src={thumbnail} alt='image thumnail'  width="100%" height="60%" layout="responsive" objectFit="cover" className='rounded-lg sm:w-full'/></a>
         </Link>
       </div>
       <InfoPost
        {...infoPost}
      />
   </article>
  );
}
