import Image from "next/image";
import Container from "./Container";

export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob }) {
  return (
    <Container>
    <div className='space-y-3'>
      <div className='flex items-center space-x-2'>
        <p className='text-sm text-tcontent'>{category}</p>
        <span className='w-2 h-2 rounded-full bg-tcontent'></span>
        <p className='text-sm text-tcontent'>{date}</p>
      </div>

      <div className='flex-row space-y-3'>
        <h2 className='text-2xl text-theading leading-9'>{title}</h2>
        <p className='text-tcontent leading-7'>{shortDescription}</p>
        <div className='flex space-x-2'>
          <Image
            src={authorAvatar}
            alt='photo author'
            width={48}
            height={48}
            className='w-12 rounded-full'
          />
          <div className='flex-row'>
            <p className='text-theading text-base'>{authorName}</p>
            <p className='text-tcontent text-sm'>{authorJob}</p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}
