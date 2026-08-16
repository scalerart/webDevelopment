import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/post/postsSlice';

function Posts() {
  const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <h1 className="text-5xl text-red-500 text-center">Loading Posts...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No posts found!</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul className="flex flex-wrap flex-col gap-3 cursor-default">
        {posts.map((post) => (
          <li
            key={post.id}
            className="block rounded py-4 px-3 shadow hover:scale-101 transition-all bg-gray-100 "
          >
            {post.title}
          </li>
        ))}
      </ul>
    );
  }
  return <div>{content}</div>;
}

export default Posts;
