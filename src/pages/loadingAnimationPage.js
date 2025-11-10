import { ReactComponent as Logo } from "../static/icons/logo.svg";

const LoadingAnimationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-y-scroll bg-gradient-to-tr from-background1 via-background2 to-background1 pt-28">
      <Logo className="h-52 w-52 animate-bounce stroke-primary" />
    </div>
  );
};

export default LoadingAnimationPage;
