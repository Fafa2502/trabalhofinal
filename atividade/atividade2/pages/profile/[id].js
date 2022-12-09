import axios from "axios";
function Profile({user = {}}){
    return <div>
        <p>{user.id}</p>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
    </div>
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + context.params.id
    );

    const user = await response.data;

    return {
        props: {user},
    }
}

export async function getStaticPaths() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
    );

    const users = await response.data;
    const paths = users.map{(user) => {
        return {params: {id: String(user.id)}}
    }};

    return {
        paths,
        fallback: true,
    };
}

export default profile;