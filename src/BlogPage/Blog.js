import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import bilkent1 from '../image/1.jpg'
import bilkent2 from '../image/2.jpg'
import bilkent3 from '../image/3.jpg'
import big_background from '../image/bigImg2.jpg'
import img_wroclaw from '../image/wroclaw.jpg'
import MediaCard from './MediaCard';
import { LinkedIn } from '@material-ui/icons';

import '../App.css'

const bilkentImgs = [bilkent1,bilkent2,bilkent3]

const mainFeaturedPost = {
  title: 'Throwing shade on those renderers',
  description: "Web application development with integrated backend and frontend. Small scale game development for pc and mobile, data analysis projects, and more...",
  image: big_background,
  imageText: 'background_img',
};

const featuredPosts = [
  {
    title: 'Student life in Poland',
    date: 'Nov 12',
    description:
      'Poland represents a great mix of quality education and affordable costs. International students can choose from over 400 universities where programmes are taught in Polish and English. The main advantage of choosing a Polish-taught degree is that you won’t have to pay any tuition fees. Polish people are known for their hospitality and specific sense of humour, which means you’ll have a lot of fun interacting with locals, making friends, and exploring your surroundings. When you’re not in classes, feel free to travel around, visit the beautiful castles, or go skiing in the Tatra Mountains (during the winter).',
    image: img_wroclaw,
    imageLabel: 'Image Text',
  },
  {
    title: 'Studying in Bilkent University',
    date: 'Nov 11',
    description:
      'Turkey is a culturally rich country that attracts international students from all over the world. Ankara is the grey capital of the country. A growing number of English-taught Bachelors and Masters, and the numerous scholarships that cover tuition fees, accommodation, healthcare, and even travel expenses. While living here, you’ll find yourself at the beautiful contrast of European and Asian cultures. It’s a unique blend of traditions, festivals, and cuisines...',
    image: bilkentImgs[1],
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  
  title: 'Droppings',

  description:`\nWe shall not cease from exploration\n
  And the end of all our exploring\n
  Will be to arrive where we started\n
  And know the place for the first time.\n
  Through the unknown, remembered gate\n
  When the last of earth left to discover\n
  Is that which was the beginning;\n
  At the source of the longest river\n
  The voice of the hidden waterfall\n
  And the children in the apple-tree\n
  Not known, because not looked for\n
  But heard, half-heard, in the stillness\n
  Between two waves of the sea.\n
  \n—T.S. Eliot, Four Quartets`,

  social: [
    { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/UmizDemud" },
    { name: 'Twitter', icon: TwitterIcon, link: "https://twitter.com/d3mut170891" },
    { name: 'LinkedIn', icon: LinkedIn, link: "https://www.linkedin.com/in/umut-deniz-darendeli-a7317115b/" },
  ],
};


export default function Blog() {
  
  const [fetchedText, setFetchedText] = useState({})
  const [fetchedImgUrl, setFetchedImgUrl] = useState([])
  const [postCount, setPostCount] = useState(0)
  const [appState, setappState] = useState({
    loading: true,
    nasa: false,
    posts: [],
    nasaPost: {},
  })

  useEffect(() => {
    const getCatData = () => {
      fetch( 'https://meowfacts.herokuapp.com/', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            setFetchedText(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      fetch( 'https://api.thecatapi.com/v1/images/search', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            setFetchedImgUrl(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
    if (postCount < 3) {
      getCatData()
    }

    if(!appState.nasa)
      fetch( 'https://api.nasa.gov/planetary/apod?api_key=pzAD3SAeRbwy0B0ubuEfXybSIS1aUF3ug6T8LcPk', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            setappState({
              loading: appState.loading,
              nasa: true,
              posts: appState.posts,
              nasaPost: {img: data.hdurl, description: data.explanation},
            })
        })
        .catch((error) => {
            console.error('Error: (nasa api)', error);
        });

    if(fetchedImgUrl.length && "data" in fetchedText) {
      var posts = [...appState.posts]
      posts.push({img: fetchedImgUrl[0].url, description: fetchedText.data[0]})
      setFetchedImgUrl([])
      setFetchedText({})
      setappState({
        loading: false,
        nasa: appState.nasa,
        posts: posts,
        nasaPost: appState.nasaPost,
      })
      setPostCount(postCount+1)
    }
    
  }, [fetchedText, appState])

  
  return (
    <div className="bg-dark">
      <CssBaseline />
      <Container maxWidth="xl">

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post,i) => (
              <FeaturedPost key={post.title} post={post} wide={i===0?true:false}/>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={appState.posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              card={appState.nasa?<MediaCard sx={{margin: '0 auto'}} props={{
                img: appState.nasaPost.img,
                description: appState.nasaPost.description,
                date: Date().toString(),
                title: 'Daily Nasa',
                imageLabel: 'Daily Nasa'}}/>:<></>}
            />
          </Grid>
        </main>
      </Container>
        <br />
        <Footer
          title="DeepB - Dev Blog"
          description="Personal Website for Recruitment Purposes"
        />
    </div>
  );
}