import React from 'react';
import useFetchData from './hock/useFetchData';

const App = () => {
    const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users", (data)=> data.map(item=>({id:item.id, name:item.name})));
    const posts = useFetchData("https://jsonplaceholder.typicode.com/posts", (data)=>data.slice(0,10));
    const comments = useFetchData("https://jsonplaceholder.typicode.com/comments", (data)=>data.slice(0,10))


    return (
        <div style={{ width: "1000px", display: "flex", gap: "1rem", justifyContent: "space-between", margin: "auto" }}>
            <div style={{ width: "200px" }}>
                <h1 style={{ textAlign: "center" }}>Users</h1>
                <hr />
                <ol>
                    {loading && <h4>Loading................</h4>}
                    {error && <h3>{error}</h3>}
                    {
                        data?.map(user => <li key={user.id}>{user.name}</li>)
                    }
                </ol>
            </div>
            <div style={{ width: "400px" }}>
                <h1 style={{ textAlign: "center" }}>Posts</h1>
                <hr />
               <ol>
               {loading && <h4>Loading................</h4>}
                {error && <h3>{error}</h3>}
                {
                    posts.data?.map(post => <li key={post.id}>{post.title}</li>)
                }
               </ol>
            </div>
            <div style={{ width: "400px" }}>
                <h1 style={{ textAlign: "center" }}>Comments</h1>
                <hr />
                <ol>
                    {
                        comments.data?.map(comment=> <li key={comment.id}>{comment.body}</li>)
                    }
                </ol>
            </div>
        </div>
    )
}

export default App;