import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import AuthService from "../../utils/auth";

import { AccountContext } from "../../components/accountBox/AccountContext";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  InputContainer,
  Input,
  MutedLink,
  ButtonContainer,
  SubmitButton,
} from "../accountBox/Common";

export function SignupForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(`This is the formstate: ${formState}`);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      AuthService.login(data.addUser.token);
      console.log(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  //
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer id="signup-container" onSubmit={handleFormSubmit}>
        <InputContainer>
          <Input
            id="signup-input1"
            type="text"
            placeholder="Username"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id="signup-input2"
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            id="signup-input3"
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </InputContainer>
        <ButtonContainer>
          <SubmitButton id="signup-button" type="submit">
            Sign Up
          </SubmitButton>
        </ButtonContainer>
        <MutedLink id="muted-link" href="#">
          Already have an account?
          <BoldLink id="bold" href="#" onClick={switchToSignin}>
            Sign In{" "}
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}
