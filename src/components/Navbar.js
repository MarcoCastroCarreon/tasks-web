import React from "react";
import {
  NavButton,
  Header,
  Dialog,
  DialogButton
} from "../index.styles";
import logo from "../img/white-thunder.png";
import CustomDialog from "./Dialog";

const Navbar = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const itemsList = [
    {
      id: '1',
      url: "https://www.github.com/MarcoCastroCarreon",
      name: "Github"
    },
    {
      id: '2',
      url: "https://www.linkedin.com/in/marco-antonio-castro-carreon-10274a1a5/",
      name: "LinkedIn"
    }
  ]

  return (
    <Header>
      <div>
        <Dialog>
          <DialogButton focusColor="#71d468" onClick={() => setOpen(!open)}>Social Media</DialogButton>
        </Dialog>
        <NavButton
          focusColor="#71d468"
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/marco-antonio-castro-carreon-10274a1a5/"
            )
          }
        >
          Marco Castro
        </NavButton>
      </div>
      <div>
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
          style={{ float: "left", marginLeft: "3px", marginTop: "8px" }}
        />
        <span style={{ float: "left", padding: "14px 7px", color: "white" }}>
          Fast Tasks
        </span>
      </div>
      <CustomDialog onClose={handleClose} open={open} title="Social Media" itemsList={itemsList}/>
    </Header>
  );
};

export default Navbar;
