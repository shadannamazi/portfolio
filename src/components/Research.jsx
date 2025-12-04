import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { research } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ResearchCard = ({ researchItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#334155",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={researchItem.date}
      iconStyle={{ background: researchItem.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={researchItem.icon}
            alt={researchItem.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {researchItem.link ? (
            <a 
              href={researchItem.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition-colors"
            >
              {researchItem.title}
            </a>
          ) : (
            researchItem.title
          )}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {researchItem.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {researchItem.points.map((point, index) => (
          <li
            key={`research-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My research contributions
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Research Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {research.map((researchItem, index) => (
            <ResearchCard
              key={`research-${index}`}
              researchItem={researchItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");

