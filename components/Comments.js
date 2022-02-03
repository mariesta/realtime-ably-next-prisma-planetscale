import React, { useState } from 'react';
import { useAbly } from '../hooks/ably';

import Typography from '@mui/material/Typography';

import CommentsList from './CommentsList';
import AddCommentSection from './AddCommentSection';

export default function Comments({initialComments = []}) {
  const [comments, setComments] = useState(initialComments);

   const [channel] = useAbly("comment-channel", (message) => {
     setComments([...comments, message.data])
   });

  const submitComment = async (username, comment) => {
    try {
      const body = { username, comment }
      await fetch(`http://localhost:3000/api/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      // Upon creation, send the message to update other views
      channel.publish({
        name: "comment",
        data: {
          username,
          comment
        }
      });
    } catch (error) {
      console.error("An error occurred creating a comment: ", error)
    }

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
