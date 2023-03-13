import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { FormControl, FormLabel, Input, Button, FormHelperText} from '@chakra-ui/react'

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <FormControl isRequired
                borderColor='gray.100'
                borderWidth='2px'
                padding='4'
                borderRadius='lg'
                width='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems='stretch'
                marginLeft='auto'
                marginRight='auto'
            >
            <FormLabel color='orange.500' mt='4'>Username</FormLabel>
            <Input type="text" name="name" placeholder='Your name'  />
            <FormLabel color='orange.500' mt='8'>Email</FormLabel>
            <Input type="email" name="email" placeholder='your_email@mail.com'  />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel color='orange.500' mt='8'>Password</FormLabel>
            <Input type="password" name="password" />
            <Button type="submit"
                    colorScheme="orange" px="20" mt='18'>
                    Register</Button>
        </FormControl>

        </form>

    );
};
