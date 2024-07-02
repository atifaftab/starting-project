import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css'

function PostList(){
  return(
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post author='Atif' body='Full Stack developer'/>
      <Post author='Resume' body='The details about the Candidate'/>
    </ul>
    </>
  );
}
export default PostList