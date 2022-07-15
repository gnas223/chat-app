import Button from "@mui/material/Button";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppLogo from "../assets/images/whatsapplogo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;
const Login = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <StyledContainer>
      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image
            src={WhatsAppLogo}
            alt="whatsapp"
            height="200px"
            width="200px"
          ></Image>
        </StyledImageWrapper>
        <Button variant="outlined" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

export default Login;
