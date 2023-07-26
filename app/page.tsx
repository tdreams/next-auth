import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex justify-center align-middle h-[70vh]">
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
};

export default Home;
