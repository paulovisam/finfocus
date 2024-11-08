import { SignInButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/")
  }
  return (
    <div className="grid h-full grid-cols-3">
      <div className="flex h-full flex-col justify-center p-4">
        <h1 className="text-4xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground">
          Platafora que centraliza suas finanças.
        </p>
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
