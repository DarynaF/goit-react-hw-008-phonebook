import { Heading , Textarea} from '@chakra-ui/react';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
       <Heading
          mt='15'
        mb='8'
        padding="20px"
        fontWeight='extrabold'
        size='3xl'
        bgGradient='linear(to-r, gray.500, orange.300, pink.300)'
        bgClip='text'>  Welcome to PhoneBook
<Textarea marginTop='20px' fontSize='sm' height='220px' bgColor='non' placeholder='Here you can easily search for and find contact information for individuals and businesses in your community.
Our database is constantly updated to ensure you have the most accurate information. Save your favorite contacts for quick access, and add new listings to keep your phonebook current'   />

      </Heading>

    </div>
  );
}
