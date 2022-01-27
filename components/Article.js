import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import Comments from './Comments';
import Content from './Content';

export default function Article() {

  return (
    <Grid
      item
      xs={12}
      sx={{
        py: 3,
      }}
    >
      <Content />
      <Divider variant="middle" sx={{
        my: 3,
      }}/>
      <Comments />
    </Grid>
  );
}
