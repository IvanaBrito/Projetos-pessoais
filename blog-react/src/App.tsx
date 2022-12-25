import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      async function loadPosts() {
          const response = await fetch('https://blog.vineshop.com.br/wp-json/wp/v2/posts');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
  
          const posts = await response.json();
          console.log(posts)
          setPosts(posts);
      }
  
      loadPosts();
 }, [])
  return (
    <div className="App">
      {posts.map((post, index) => (
        <li key={index}>
          
        </li>
      ))}
    </div>
  );
}

export default App;