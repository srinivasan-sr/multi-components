import { NavLink } from "react-router-dom";
import { links } from "../../constants/navlinks";

type NavbarProps = {
  onCloseHandle: () => void,
}
export const Navbar = ({onCloseHandle}: NavbarProps) => {
  const content = links.map((item) => {
    if (!item.hidden)
      return (
        <div key={item.id} className="text-lg py-1">
          <NavLink role="navigation" aria-label={item.aria_label} key={item.id} to={item.path} onClick={onCloseHandle} className={({isActive, isPending}) => 
            isActive ? `border-l-4 pl-1 border-blue-600` : isPending ? `border-l-2 border-gray-500` : ``}>
            {item.title}
          </NavLink>
        </div>
        
      );
  });
  return <div className="pl-1">
        {content}
    </div>;
};
