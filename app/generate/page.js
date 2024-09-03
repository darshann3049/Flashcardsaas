import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { signedIn, SignedOut, Signedout, UserButton} from '@clerk/nextjs'
import { AppBar, Typography } from '@mui/material'


export default function Home() {

  return(
    <container maxWidth='lg'>
      <Head>
        <title>Flashcard SaaS</title>
        <meta Name='description' content='create flashcard from your text'/>
        <Head>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant = 'h6'>Flashcard SaaS</Typography>
              <SignedOut>
                <Button>Log in</Button>
                <Button>Sign Up</Button>
              </SignedOut>
              <signedIn>
                <UserButton/>
              </signedIn>
            </Toolbar>
          </AppBar>

        </Head>

      </Head>
    </container>
  )
}

