import { Container, Typography } from "@mui/material"
import { DocumentTitle } from "../components/DocumentTitle"





const HomePage = () => {
  return (
   <> 
   
   <DocumentTitle>Home</DocumentTitle>
   <Container sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
   }} >
   <Typography variant='body1'>Our application is a simple and convenient way to organize your contacts and keep all necessary information in one place. Whether youre running a business or simply want to keep track of friends and family contacts, our app will become your reliable assistant.</Typography>
   </Container>
   </>
  )
}

export default HomePage