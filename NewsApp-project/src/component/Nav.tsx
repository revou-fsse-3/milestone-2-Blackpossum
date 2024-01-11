import Navbar from "./Navbar";

interface navigation {
  brand: { name: string; to: string };
  links: [
  { name: string; to: string },
  { name: string, to: string },
  { name: string, to: string }];
}

const Nav = () => {
  const Navigation: navigation = {
    brand: {
      name: "AfterLunch",
      to: "/",
    },
    links: [
      { name: "login", to: "/login" },
      { name: "signup", to:"/signup"},
      { name: "dashboard", to: "/Dashboard"},
    ],
  };

  const {brand,links} = Navigation

  return (
    <div>
      <Navbar brand={brand} links={links}/>
    </div>
  );
};

export default Nav;
