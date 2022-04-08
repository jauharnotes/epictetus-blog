import Image from "next/image";
import InfoPost from '@components/InfoPost';

export default function CardPost({thumbnail, ...infoPost}) {
  return (
   <article>
       <div className="mb-4">
        <Image src={thumbnail} alt='image thumnail' width={340} height={213} className='rounded-lg'/>
       </div>
       <InfoPost
        {...infoPost}
      />
   </article>
  );
}
