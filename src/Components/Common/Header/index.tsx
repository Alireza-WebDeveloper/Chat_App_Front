import CustomLink from "../Main/CustomLink";
import ToggleTheme from "../Main/ToggleTheme";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex p-4 bg-primary-200 items-center justify-around w-full flex-wrap">
      <div className="flex gap-10 flex-wrap">
        <ToggleTheme />
        <CustomLink to="/">home</CustomLink>{" "}
      </div>

      <div className="flex items-center gap-10"></div>
    </div>
  );
};

export default Header;
