import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiOnlyoffice } from 'react-icons/si'

const Experience = () => {
  return (
    <div className='experience-container'>
      <div className="container">
        <h2>myWorkExperience&#40;&#41;  &#123;</h2>
        <div className="container">
          <VerticalTimeline 
          lineColor='#f3f3f3'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#151030', color: '#f3f3f3', borderRight: '2px solid  #aaa6c3' }}
              contentArrowStyle={{ borderRight: '10px solid  #aaa6c3' }}
              date="Sept 2022 - Present"
              iconStyle={{ background: '#100d25', color: '#fff' }}
              icon={<SiOnlyoffice />}
            >
              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">City & Talent</h4>
              <p>To create web pages and sections for websites and making them responsive.
                Managing website optimization.
                Performing website audits.
                To implement the changes received from client-side</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2022 - Sept 2022"
              contentStyle={{ background: '#151030', color: '#f3f3f3', borderLeft: '2px solid  #aaa6c3' }}
              contentArrowStyle={{ borderRight: '10px solid  #aaa6c3' }}
              iconStyle={{ background: '#100d25', color: '#fff' }}
              icon={<SiOnlyoffice />}
            >
              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Kushel Digi Solutions</h4>
              <p>
                Cooperate with web designers to match visual design intent.
                Integrating website with back-end services.
                Create website by using standard HTML/CSS practices.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2021 - Jan 2022"
              contentStyle={{ background: '#151030', color: '#f3f3f3', borderRight: '2px solid  #aaa6c3' }}
              contentArrowStyle={{ borderRight: '10px solid  #aaa6c3' }}
              iconStyle={{ background: '#100d25', color: '#fff' }}
              icon={<SiOnlyoffice />}
            >
              <h3 className="vertical-timeline-element-title">Flutter Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Catseye Systems & Solutions Pvt. Ltd.</h4>
              <p>Creating eye catching UI/UX.
                Building flutter applications and integrating with database.
                Testing apps across multiple devices across platforms.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <h2>&#125;</h2>

      </div>

    </div>
  )
}

export default Experience