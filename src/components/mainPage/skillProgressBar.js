import ProgressBar from "../progressBar";

const SkillProgressBar = ({ technology }) => {
  return (
    <>
      <div className="mb-2 mt-4 flex w-full items-center justify-evenly">
        <a
          target="_blank"
          rel="noreferrer"
          href={technology.url}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-10 backdrop-blur-md hover:bg-opacity-30"
          title={technology.name}
        >
          {technology.icon}
        </a>
        <span className="text-2xl font-extrabold text-primary">
          {technology.progress}%
        </span>
      </div>
      <ProgressBar progress={technology.progress} />
    </>
  );
};

export default SkillProgressBar;
