import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { UserNameMenu } from "./UserNameMenu";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UserNameMenu />
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:bg-white hover:text-slate"
        >
          Log In
        </Button>
      )}
    </span>
  );
}
