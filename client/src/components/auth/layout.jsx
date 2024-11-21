import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Doto&display=swap');`}
            {`@import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');`}
          </style>
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span style={{ fontFamily: 'Doto, cursive' }}>IphoneTech</span><br />
            <span style={{ fontFamily: 'Dongle, static', fontSize: '2.5rem' }}>
              An Apple Product Management System
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
