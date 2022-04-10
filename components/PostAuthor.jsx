import Image from "next/image";

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
    return(
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
    )
}