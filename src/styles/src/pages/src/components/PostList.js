// src/components/PostList.js
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
// src/components/PostItem.js
const PostItem = ({ post }) => {
    return (
      <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-600">{post.content}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">Posted by {post.author}</span>
        </div>
      </div>
    );
  };
  
  export default PostItem;
  // src/pages/index.js
import PostList from '../components/PostList';

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Forum</h1>
      <PostList posts={posts} />
    </div>
  );
};

// Mock data for posts
export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', author: 'User1' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', author: 'User2' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.', author: 'User3' },
  ];

  return {
    props: {
      posts,
    },
  };
}

export default Home;