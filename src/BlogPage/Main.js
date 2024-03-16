import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Main(props) {
  const { posts, title } = props;
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <br />

      {posts.map((post, i) => (
        <div className="apiPost" key={i}>
          <span style={{padding: '20px 10px', width: '45%'}}>{post.description}</span>
          {post.img.length>0?<img style={{display:'inline-block', width: '40%', height: '30%', maxWidth: '600px', maxHeight: '400px'}} src={post.img} alt="catimg"/>: ''}
        </div>
      ))}
    </Grid>
  );
}

export default Main;