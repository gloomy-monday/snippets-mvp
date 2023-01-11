import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard } from '../components';
import { Owner } from '../components';
import { Banner } from '../components';
import { Buttons } from '../components';


const dummyPosts = [
  {
    title: "Interview",
    featuredImage: {
      url: "https://ocdn.eu/pulscms-transforms/1/iciktkpTURBXy85Nzc1ZjEwMWI4NGIzZDUzYTY1NmU3OTFiMmFiODE1ZC5qcGeSlQMAzFPNAoDNAWiTBc0CgM0BQA"
    },
    snipped: `What are your shoes saying about you?
They're suggesting some sort of scoundrel. A cad. They were bought in Corsica. Would you trust a man who wore shoes like this? Absolutely not!
`,
    snippedAuth: 'Details Mag',
    slug: "the-sting",
    author: {
      name: "NME",
    },
    comment: "I think there's been an unfortunate trend against this teetering around in the last few years. It's caused me a lot of grief. As I walk down the streets of our major cities and see only chunky boots, I shake my head sadly and think about what the world has come to.",

  },

  {
    title: "Vanessa Paradis Interview",
    featuredImage: {
      url: "https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg"
    },
    snipped:  `I do sometimes strongly hope that in a past life, my most recent life before this, I was absolutely horrible, evil, hideous. Because otherwise – well, hell, to even things up next time around, I'm going to have to pay for this one, am I not?
`,
    snippedAuth: 'The Guardian',
    slug: "vanessa-paradis",
    author: {
      name: "NME",
    },
    comment: "Personally, I'm with her here: never quite understood why when someone makes a film or sings a song they become public property.",

  },
]

const dummyOwner = {
  name: 'DummyDum',
  bio: "I'm blue da bu dee da bu die Da bu dee da bu die Da bu dee da bu die Da bu dee da bu die",
  interests: [ "music", "films", "anime", "sumerios"],
  photo: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Brian_Eno_-_TopPop_1974_04.png/220px-Brian_Eno_-_TopPop_1974_04.png'
  },
  banner: {
    url: 'https://img.freepik.com/vector-gratis/fondo-vaporwave-vintage-realista_23-2148887268.jpg?w=2000',
  },
  blog: {
    title: 'My snippets blog',
    desc: 'Desc desc desc'
  }
}

const Home = () => {

  const [posts, setPosts] = useState(dummyPosts);
  const [owner, setOwner] = useState(dummyOwner);

  return (
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>Snippets MVP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1 mt-20">
            <Banner owner={owner} />
            {/*<Buttons />*/}
              {posts.map((post, index) => (
                <PostCard post={post} key={index} />))}
            </div>
            <div className="lg:col-span-4 col-span-1 mt-20">
                <div className="lg:sticky relative top-20">
                  <Owner owner={owner} />
                </div>
            </div>
      </div>


    </div>
  )
}

export default Home
