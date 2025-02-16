import { LoginOutlined } from '@ant-design/icons/lib/icons';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from 'components/ContactForm/ContactForm.Styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHendler = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FormStyled onSubmit={submitHendler}>
      <LabelStyled htmlFor="email">
        <span>Email:</span>
        <InputStyled
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.currentTarget.value);
          }}
        ></InputStyled>
      </LabelStyled>
      <LabelStyled htmlFor="password">
        <span>Password:</span>
        <InputStyled
          type="password"
          name="password"
          value={password}
          onChange={e => {
            setPassword(e.currentTarget.value);
          }}
        ></InputStyled>
      </LabelStyled>
      <ButtonStyled type="submit">
        <LoginOutlined />
        Login
      </ButtonStyled>
    </FormStyled>
  );
};
export default Login;