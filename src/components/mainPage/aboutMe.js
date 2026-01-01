import SnapChild from "../../sections/snapChild";

const AboutMeMobile = () => {
  function getBrowserInfo() {
    var ua = navigator.userAgent,
      tem,
      M =
        ua.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

    console.log(M.join(" "));

    return M.join(" ");
  }

  return (
    <SnapChild mobile>
      <div className="flex h-full w-full flex-col-reverse items-center justify-center md:flex-row">
        <div className="flex h-2/6 w-3/4 flex-col items-start justify-center md:h-3/4 md:w-2/4">
          <h3 className="hidden font-mono text-4xl text-primary md:block">
            1. Sobre mí
          </h3>
          <div className="mb-10 hidden h-px w-full bg-primary md:block"></div>
          <p className="sm:text-md pb-20 text-justify font-mono text-xs text-body sm:pb-0">
            Soy una persona motivada y comprometida, con una gran vocación por
            la química y la organización de proyectos. Me caracterizo por ser
            una persona cercana, empática y proactiva; con una fuerte motivación
            por el crecimiento personal y profesional. Adoro afrontar nuevos
            retos y buscar oportunidades de mejora a diario.
          </p>
        </div>
        <div
          className={`w-3/4 sm:h-3/4 sm:w-2/4 md:w-1/3 md:grow-0 ${
            getBrowserInfo().includes("Safari") ? "h-[60%]" : "h-3/4"
          } border-b-2 border-b-primary`}
        >
          <img
            src={require("../../static/images/profile-pic.webp")}
            className="h-full w-full"
            alt="Foto de perfil"
          />
        </div>
      </div>
    </SnapChild>
  );
};

export default AboutMeMobile;
