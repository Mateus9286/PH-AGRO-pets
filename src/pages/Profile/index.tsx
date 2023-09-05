import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Global } from "../Home/styles";
import { ChangePasswordContainer, Title, Label, Input, Button } from "./styles";
import { Footer } from "../../components/Footer";
import { UserContext } from "../../Providers/UserContext";
import { MenuModal } from "../../components/ModalMenu";

const schema = z.object({
  password: z.string().min(6).max(255).nonempty("Nova Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { pathPassword } = useContext(UserContext);

  const handlePasswordChange: SubmitHandler<FormData> = (data) => {
    pathPassword(data);
    reset();
  };

  return (
    <Global>
      <HeaderAdmin />
      <ChangePasswordContainer>
        <Title>Alteração de Senha</Title>
        <form onSubmit={handleSubmit(handlePasswordChange)}>
          <Label htmlFor="currentPassword">Senha Atual</Label>
          <Input type="password" />
          <Label htmlFor="newPassword">Nova Senha</Label>
          <Input type="password" id="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
          <Button type="submit">Alterar Senha</Button>
        </form>
      </ChangePasswordContainer>
      <MenuModal />
      <Footer />
    </Global>
  );
};
