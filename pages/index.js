import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

function Home() {

  return (
    <div>
      <CssBaseline />
        <Container maxWidth="lg">
        <Header/>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Article />
        </Grid>
        <Footer/>
      </Container>
    </div>
  )
}

export default Home;
