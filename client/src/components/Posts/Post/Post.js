import React from 'react';
import { CardContent, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import {
  StyledCard,
  StyledMedia,
  Overlay,
  Overlay2,
  Details,
  Title,
  StyledCardActions
} from './PostStyles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledMedia image={post.selectedFile} title={post.title} />
      
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>
      
      <Overlay2>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>
      
      <Details>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      
      <Title gutterBottom variant="h5" component="h2">
        {post.title}
      </Title>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      
      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
