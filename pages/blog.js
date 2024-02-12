
import { useEffect, useState } from 'react';
import { firestore } from './firebase';

const BlogPost = ({ title, content, date }) => {
  console.log('Rendering BlogPost with props:', title, content, date);
  const postDate = date.toDate();

  return (
    <div className="blog-post-container">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{postDate.toLocaleDateString()}</p>
    </div>
  );
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const blogPostsSnapshot = await firestore.collection('blogPosts').get();
        const fetchedBlogPosts = blogPostsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(fetchedBlogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-page">
      <h1 className="text-center">Blog Page</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
