import { useRouter } from "next/router";
const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug) {
  const result = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());
  return result.posts[0];
}

async function getAllPosts() {
  const result = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());
  return result.posts;
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  );
};

export default Post;
