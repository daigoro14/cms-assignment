import {useState} from 'react'
import './style.css'

function App() {

  const [posts, setPosts] = useState([])

//fetches data from our CMS wordpress backend
const fetchData = () => {
  fetch("https://public-api.wordpress.com/rest/v1.1/sites/nackademin689930809.wordpress.com/posts")
  .then(response => {
    return response.json()
  })
  .then(data => {
    setPosts(data.posts)
    console.log(data.posts)
  })
}

useState(() => {
  fetchData()
}, [])


  return (
    <div>
      {posts.length > 0 && (
        <>
            {posts.map(post => (
            <div className="postDiv" key={post.id}>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html:post.content}}></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
