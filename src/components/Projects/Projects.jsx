import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Slider from "react-slick";
import SampleCard from './Card'

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  console.log('test2:')
  console.log(projects)

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);



  const settings = {
    interval: 5000,
    nextIcon: null,
    prevIcon: null
  };

  return (
    <section id="projects">
      <Container>
      <Fade bottom duration={1000} delay={500} distance="30px">
        <div className="project-wrapper">
          <Title title="Projects" />
          <Carousel {...settings}>
            {projects.map((project) => {
              const { title, info, info2, url, repo, img, id } = project;
              return (
                <Carousel.Item key={id} >
                  <SampleCard  img={img} title={title} info={info} repo={repo} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
        </Fade>
      </Container>
    </section>
  );
};
//   return (
//     <section id="projects">
//       <Container>
//         <div className="project-wrapper">
//           <Title title="Testimonials" />
//           {projects.map((project) => {
//             const { title, info, info2, url, repo, img, id } = project;

//             return (
//               <Row key={id}>
//                 <Col lg={4} sm={12}>
//                   <Fade
//                     left={isDesktop}
//                     bottom={isMobile}
//                     duration={1000}
//                     delay={500}
//                     distance="30px"
//                   >
//                     <div className="project-wrapper__text">
//                       <h3 className="project-wrapper__text-title">{title || 'Testimonial Title'}</h3>
//                       <div>
//                         <p>
//                           {info ||
//                             'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
//                         </p>
//                         <p className="mb-4">{info2 || ''}</p>
//                       </div>
//                       <a
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="cta-btn cta-btn--hero"
//                         href={url || '#!'}
//                       >
//                         See Live
//                       </a>

//                       {repo && (
//                         <a
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="cta-btn text-color-main"
//                           href={repo}
//                         >
//                           Source Code
//                         </a>
//                       )}
//                     </div>
//                   </Fade>
//                 </Col>
//                 <Col lg={8} sm={12}>
//                   <Fade
//                     right={isDesktop}
//                     bottom={isMobile}
//                     duration={1000}
//                     delay={1000}
//                     distance="30px"
//                   >
//                     <div className="project-wrapper__image">
//                       <a
//                         href={url || '#!'}
//                         target="_blank"
//                         aria-label="Project Link"
//                         rel="noopener noreferrer"
//                       >
//                         <Tilt
//                           options={{
//                             reverse: false,
//                             max: 8,
//                             perspective: 1000,
//                             scale: 1,
//                             speed: 300,
//                             transition: true,
//                             axis: null,
//                             reset: true,
//                             easing: 'cubic-bezier(.03,.98,.52,.99)',
//                           }}
//                         >
//                           <div data-tilt className="thumbnail rounded">
//                             <ProjectImg alt={title} filename={img} />
//                           </div>
//                         </Tilt>
//                       </a>
//                     </div>
//                   </Fade>
//                 </Col>
//               </Row>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// };

export default Projects;
