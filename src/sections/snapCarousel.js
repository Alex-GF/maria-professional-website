const SnapCarrousel = (props) => {
  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-scroll">
      {props.children}
    </div>
  );
};

export default SnapCarrousel;
