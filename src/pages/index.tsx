import type { NextPage } from 'next'
import Head from 'next/head'
import PostList from '../components/PostList/PostList'
import useIndex from '../data/hooks/pages/useIndex.page'


const Home: NextPage = () => {
  const  { posts } = useIndex();

  return (
    <div>
        <Head>
          <title>TreinaBlog</title>
        </Head>

        <main>
          <PostList posts={posts} />
        </main>
    </div>
  )
}

export default Home
