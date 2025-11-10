import "react-vertical-timeline-component/style.min.css";
import PageTemplate from "../sections/pageTemplate";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaStar } from "react-icons/fa";
import timelineData from "../data/timelineData";
import { theme } from "../static/theme/theme";

const timelineContentBoxStyle = {
  border: `solid 2px ${theme.colors.primary}`,
  color: "#fff",
  background: "transparent",
  boxShadow: "none",
};
const timelineArrowStyle = { borderRight: `7px solid  ${theme.colors.primary}` };
const finalIconStyle = {
  background: "white",
  boxShadow:
    `0 0 0 4px ${theme.colors.primary},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
};

const CareerPage = () => {
  return (
    <PageTemplate>
      <div className="h-full w-full overflow-y-scroll">
        <VerticalTimeline lineColor={theme.colors.primary}>
          {timelineData.map((item) => {
            return (
              <VerticalTimelineElement
                contentStyle={timelineContentBoxStyle}
                contentArrowStyle={timelineArrowStyle}
                date={item.date}
                dateClassName="text-primary"
                iconStyle={item.iconStyle}
                icon={item.icon}
              >
                <h3 className="font-extrabold underline underline-offset-2 text-primary">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-primary">
                  {item.subtitle}
                </h4>
                {item.text.map((element, index) => {
                  return <p className="text-primary" key={index}>{element}</p>;
                })}
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={finalIconStyle}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </PageTemplate>
  );
};

export default CareerPage;
