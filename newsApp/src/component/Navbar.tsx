import React from "react";

const Navbar: React.FC<NavbarProps> = ({ brandName, navItems }) => {
  return (
    <nav>
      <div>
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
      </div>
      <ul className="navbar-nav">
        <div>
          {navItems.map((item) => (
            <li key={item.href} className="nav-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

// how to create a component:
// initiate component variable
//  create component props  with name format " COMPONENT-NAME: REACT.FC<nameProps> = ({ props1, props2})
