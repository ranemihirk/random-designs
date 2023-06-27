import { Outlet } from "react-router";

type MainBodyProps = {
  isLargeScreen: boolean;
};

export default function SideDrawer({
  isLargeScreen,
}: MainBodyProps): JSX.Element {
  return (
    <div className="border-2 border-orange-600 w-full">
        Side Drawer
    </div>
  );
}
