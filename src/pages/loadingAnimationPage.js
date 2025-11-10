import logo from "../static/icons/logo.webp";

const LoadingAnimationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-y-scroll bg-gradient-to-tr from-background1 via-background2 to-background1 pt-28">
      <img
        src={logo}
        alt="María Espinar Mora logo"
        className="h-52 w-52 animate-bounce"
      />
    </div>
  );
};

export default LoadingAnimationPage;
