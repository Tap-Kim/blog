import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-extralight tracking-tighter my-4" >{postData.title}</h1>
        <div className="text-zinc-500">
          <Date dateString={postData.date} />
        </div>
        <div className="my-3 tracking-tighter">
          <h2 className="text-2xl font-extralight"><strong>Tech Spec</strong></h2>
          <ul className="my-4">
            <li className="my-3">
              <strong>Front End</strong>
              <div>
                <p>JavaScript</p>
                <p>React</p>
                <p>ReactNative</p>
              </div>
            </li>
            <li className="my-3">
              <strong>Back End</strong>
              <div>
                <p>Java Spring</p>
              </div>
            </li>
            <li className="my-3">
              <strong>Training</strong>
              <div>
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Test Code</p>
              </div>
            </li>
            <li className="my-3">
              <strong>Database</strong>
              <div>
                <p>PostgreSQL</p>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="text-xl font-extralight" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
