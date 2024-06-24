import { Searchbar } from "./Searchbar";
import { SignIn } from "./SignIn";

export const Navbar = () => {
  return (
    <div className="flex justify-between pt-2">
      <div>Youtube</div>
      <div>
        <div>
          <Searchbar />
        </div>
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
};
