import ProgressBar from "../progressBar";

const SkillProgressBar = ({ technology }) => {
  return (
    <>
      <div className="mb-2 mt-4 flex w-full items-center justify-between">
        <span className="ml-16">
          {technology.icon}
        </span>
        <span className="text-2xl font-extrabold text-primary mr-16">
          {technology.progress}%
        </span>
      </div>
      <ProgressBar progress={technology.progress} />
    </>
  );
};

export default SkillProgressBar;
