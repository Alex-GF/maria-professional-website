const SnapChild = (props) => {
  return (
    <div className={`h-full w-full snap-start snap-always ${props.mobile ? "lg:hidden" : ""} ${props.desktop ? "lg:block hidden" : ""}`}>{props.children}</div>
  );
};

export default SnapChild;
