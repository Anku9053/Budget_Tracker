import React from "react";
import ReactDOM from "react-dom";

import Burger from "./Burger";
import Menu from "./BurgerMenu";

// import "./styles.css";

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const AppBurger = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <section>
{/*         
        <img
          src="https://image.flaticon.com/icons/svg/2016/2016012.svg"
          alt="burger icon"
        /> */}
        {/* <small>
          Icon made by <a href="https://www.freepik.com/home">Freepik</a> from{" "}
          <a href="https://www.flaticon.com">www.flaticon.com</a>
        </small> */}
      </section>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default AppBurger
