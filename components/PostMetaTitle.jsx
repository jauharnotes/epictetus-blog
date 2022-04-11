import Link from "next/link";


export default function PostMetaTitle({ category, date, title, center}) {
  return (
    <>
      <div className='flex-row'>
        <div className={`flex mt-4 space-x-2 ${center && 'justify-center'}`}>
        <p className='text-sm text-tcontent'>{category}</p>
        <p className='text-sm text-tcontent'>{date}</p>
        </div>
        <span className='w-2 h-2 rounded-full bg-tcontent'></span>
        <h2 className={`text-2xl text-theading leading-9 ${center && 'text-center my-3'}`}>
          <Link href="/detail">
            <a>{title}</a>
          </Link>
        </h2>
      </div>
    </>
  );
}
