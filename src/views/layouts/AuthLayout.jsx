import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-3 pb-20 lg:flex-row lg:p-0">
      <div className="p-6 flex flex-col items-center justify-center lg:w-1/2">
        <img
          src="https://res.cloudinary.com/duokspzx0/image/upload/v1681295194/todolist/listkeeper-low-resolution-logo-color-on-transparent-background_1_grabns.png"
          alt="logo"
          className="w-36 mt-4 mb-8 lg:w-72 lg:m-0"
        />
      </div>
      <Outlet />
    </div>
  );
};
