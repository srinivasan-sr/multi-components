import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
export default function Root() {
  return (
    <>
   <Header />
    <div className="flex">
      <div className="w-full h-full justify-self">
        <Outlet />
      </div>
    </div>
    </>
  );
}
