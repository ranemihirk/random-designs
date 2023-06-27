import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import MainBody from "./MainBody";
import SideDrawer from "./SideDrawer";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export default function Layout(): JSX.Element {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-screen h-screen flex">
      <Button onClick={toggleDrawer} className="min-w-min p-4 rounded-full fixed top-2 left-2 z-10">
        {open ? (
          <FontAwesomeIcon icon={faAngleLeft} />
        ) : (
          <FontAwesomeIcon icon={faAngleRight} />
        )}
      </Button>
      <motion.div
        initial={{
          width: "0%",
          minWidth: "0%",
          display: "none",
        }}
        animate={{
          width: open ? "22.5%" : "0%",
          minWidth: open ? "22.5%" : "0%",
          display: open ? "flex" : "none",
        }}
      >
        <SideDrawer isLargeScreen={isLargeScreen} />
      </motion.div>
      <motion.div className="shadow-inner w-full h-full">
        <MainBody isLargeScreen={isLargeScreen} />
      </motion.div>
    </div>
  );
}
