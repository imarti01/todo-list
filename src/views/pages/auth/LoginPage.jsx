import { FormLogin, LinkRedirect, TitleForm } from "../../components/authPages";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-start py-6 border border-icon bg-purple-100 w-11/12 sm:w-9/12 md:w-7/12 lg:w-1/2 lg:h-full lg:px-7 lg:py-32 xl:px-20">
      <TitleForm title="LOGIN" />
      <FormLogin />
      <LinkRedirect
        pageLink={{
          message: "Don't have an account?",
          navLink: "/register",
          textLink: "Sign up",
        }}
      />
    </div>
  );
};
