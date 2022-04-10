import Container from "./Container";
import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob }) {
  return (
    <Container>
    <div className='space-y-3'>
    <PostMetaTitle category={category} date={date} title={title}/>
      <div className='flex-row space-y-3'>
        <p className='text-tcontent leading-7'>{shortDescription}</p>
        <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob}/>
      </div>
    </div>
    </Container>
  );
}
