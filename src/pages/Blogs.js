import React from 'react';
import { Link } from 'react-router-dom';
// import './layout.css';
import App from '../App.js'


const Blog = () => {
  const posts = [
    {
      title: 'Understanding React Basics',
      content: 'React is a powerful library for building user interfaces...',
      date: 'September 20, 2024',
    },
    {
      title: 'Getting Started with React Router',
      content: 'React Router helps you manage navigation in a React app...',
      date: 'September 18, 2024',
    },
    {
      title: 'State Management in React',
      content: 'Managing state efficiently is a key skill for React developers...',
      date: 'September 15, 2024',
    }
  ];

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
