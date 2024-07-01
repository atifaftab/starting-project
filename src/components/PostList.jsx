import Post from './Post';

function PostList(){
  return(
    <ul>
      <Post author='Atif' body='Full Stack developer'/>
      <Post author='Resume' body='The details about the Candidate'/>
    </ul>
  );
}
export default PostList