import React from 'react'
import { VerticalTimeline,VerticalTimelineElement  } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFillCircleFill} from 'react-icons/bs'

export default function Timeline() {
  return (
    <div className="container">
        <div className="container" id='time'>

            <div className="row">
                <div className="col-md-12">

           
    <div className='line  '>
        <VerticalTimeline lineColor='#ff7a06'>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#ff7a06',color:'#fff'}}
                icon={<BsFillCircleFill/>}
              >
                <h3>Phase 1</h3>
                <li>Team Expansion</li>
                <li>
                Social Media and Community
                </li>
                <li>
                Contract Creation
                </li>
                <li>
                Website Deployment
                </li>
            

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#ff7a06',color:'#fff'}}
                icon={<BsFillCircleFill/>}
                >
                <h3>Phase 2</h3>
                <li>Team Expansion</li>
                <li>
                Social Media and Community
                </li>
                <li>
                Contract Creation
                </li>
                <li>
                Website Deployment
                </li>
            

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#ff7a06',color:'#fff'}}
                icon={<BsFillCircleFill/>}
               >
                <h3>Phase 3</h3>
                <li>Team Expansion</li>
                <li>
                Social Media and Community
                </li>
                <li>
                Contract Creation
                </li>
                <li>
                Website Deployment
                </li>
            

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#ff7a06',color:'#fff'}}
                icon={<BsFillCircleFill/>}
              >
                <h3>Phase 4</h3>
                <li>Team Expansion</li>
                <li>
                Social Media and Community
                </li>
                <li>
                Contract Creation
                </li>
                <li>
                Website Deployment
                </li>
            

            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#ff7a06',color:'#fff'}}
                icon={<BsFillCircleFill/>}
                >
                <h3>Phase 5</h3>
                <li>Team Expansion</li>
                <li>
                Social Media and Community
                </li>
                <li>
                Contract Creation
                </li>
                <li>
                Website Deployment
                </li>
            

            </VerticalTimelineElement>
        </VerticalTimeline>
        
      
    </div>
    </div>
    </div>
        </div>
    </div>
  )
}
