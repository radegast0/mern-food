import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const UserNameMenu = () => {
  const { user, logout } = useAuth0();
  console.log("user", user?.email);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none flex items-center gap-2 px-3 font-bold hover:text-slate">
        <CircleUserRound className="text-slate" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-slate">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 bg-slate font-bold"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
