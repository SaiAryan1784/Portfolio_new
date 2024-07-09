import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import experiences from "../data/constants";

const Experience = () => {
  return (
    <div className='mt-12 flex'>
      <VerticalTimeline className='font-Teko'>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key = {experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                    src = {experience.icon}
                    alt = {experience.company_name}
                    className='w-[100%] h-[100%] rounded-full object-contain'
                    />
                  </div>}

                  iconStyle={{background: experience.iconBg}}

                  contentStyle={
                    {
                      borderBottom : '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none'
                    }
                  }
                >
                  <div>
                    <h3 className='text-black text-3xl font-semibold'>
                      {experience.title}
                    </h3>
                    <h1 className='text-black-500 text-xl font-semibold' style={{margin: 0}}>
                      {experience.company_name}
                    </h1>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2 font-medium'>
                    {experience.points.map((point,index) => (
                      <li  
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal  pl-1 text-md'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
  )
}

export default Experience