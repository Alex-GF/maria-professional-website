import SnapChild from "../../sections/snapChild";

const AboutMeMobile = () => {

  function getBrowserInfo() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    
    console.log(M.join(' '));

    return M.join(' ');
};

  return (
    <SnapChild mobile>
      <div className="flex md:flex-row flex-col-reverse h-full w-full items-center justify-center">
        <div className="flex h-2/6 md:h-3/4 md:w-2/4 w-3/4 flex-col items-start justify-center">
          <h3 className="font-mono text-4xl text-primary md:block hidden">1. About me</h3>
          <div className="h-px w-full bg-primary mb-10 md:block hidden"></div>
          <p className="font-mono text-body text-justify sm:text-md text-xs sm:pb-0 pb-20">
          I am a dedicated professional who thrives in team environments, thanks to my problem-solving skills, 
          ability to foster effective communication, and strong stress management. Outside of work, I enjoy 
          puzzles and basketball, activities that challenge my mind and keep me open to new perspectives 
          every day.
          </p>
        </div>
        <div className={`sm:h-3/4 md:grow-0 md:w-1/3 sm:w-2/4 w-3/4 ${getBrowserInfo().includes("Safari") ? 'h-[60%]' : 'h-3/4'} border-b-2 border-b-primary`}>
          <img src={require('../../static/images/profile-pic.png')} className="w-full h-full"></img>
        </div>
      </div>
    </SnapChild>
  );
};

export default AboutMeMobile;
