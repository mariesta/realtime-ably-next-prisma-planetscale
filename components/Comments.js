import React, { useState } from 'react';
import { useAbly } from '../hooks/ably';

import Typography from '@mui/material/Typography';

import CommentsList from './CommentsList';
import AddCommentSection from './AddCommentSection';

export default function Comments() {
  const [comments, setComments] = useState([]);

   const [channel] = useAbly("comment-channel", (message) => {
     setComments([...comments, message.data])
   });

  const submitComment = (username, comment) => {
    channel.publish({
      name: "comment",
      data: {
        username,
        comment
      }
    });
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comments ({comments.length})
      </Typography>
      <CommentsList comments={comments} />
      <AddCommentSection submitComment={submitComment} />
    </React.Fragment>
  )
}
