import { Helmet } from 'react-helmet';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm/LoginForm';


export default function LoginPage() {
  return (
    <div className='container'>
      <Helmet>
      <title>Login</title></Helmet>
      <Heading
       mt='15'
        mb='8'
        fontWeight='extrabold'
        textAlign='center'
        size='2xl'
        bgGradient='linear(to-r, gray.500, orange.300, pink.300)'
        bgClip='text'> Login Page</Heading>
        <LoginForm />
    </div>
  )
}
