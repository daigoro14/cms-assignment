import {useState} from 'react'
import './style.css'

function App() {

  const [posts, setPosts] = useState([])

const fetchData = () => {
  fetch("http://localhost/wp-json/wp/v2/posts")
  .then(response => {
    return response.json()
  })
  .then(data => {
    setPosts(data)
  })
}

useState(() => {
  fetchData()
}, [])


  return (
    <div>
      <h1>CMS ASSIGNMENT</h1><br></br>
      {posts.length > 0 && (
        <>
            {posts.map(post => (
            <div className="postDiv" key={post.id}>
                <h1>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
