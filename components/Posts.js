import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'basilmaben',
        userImg: 'https://links.papareact.com/owc',
        img: 'https://links.papareact.com/owc',
        caption:'HEy littt',
    },
    {
        id: '12',
        username: 'basilmaben',
        userImg: 'https://links.papareact.com/owc',
        img: 'https://links.papareact.com/ocw',
        caption:'HEy littt',
    },
]


function Posts() {
    return (
        <div>
            {posts.map((post)=>(
                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
