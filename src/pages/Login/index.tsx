import { useContext } from "react";
import {
  Button,
  Container,
  Form,
  FormContainer,
  Input,
  Label,
  Title,
} from "./styles";
import { Global } from "../Home/styles";
import Logo from "../../assets/PH-PETS.png";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/UserContext";

export const schema = z.object({
  name: z.string(),
  password: z.string(),
});

export type Data = z.infer<typeof schema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: zodResolver(schema),
  });

  const { UserLogin } = useContext(UserContext);

  const onSubmit = (data: Data) => {
    UserLogin(data);
  };

  return (
    <Global>
      <Container>
        <picture>
          <img src={Logo}></img>
        </picture>
        <FormContainer>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Name:</Label>
            <Input type="text" {...register("name")} required />
            {errors.name && <span>{errors.name.message} </span>}

            <Label>Senha:</Label>
            <Input type="password" {...register("password")} required />
            {errors.password && <span>{errors.password.message} </span>}
            <Button type="submit">Entrar</Button>
          </Form>
        </FormContainer>
      </Container>
    </Global>
  );
};
