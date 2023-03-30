import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/ronak-patil-a381331b1/',
      name: 'Ronak Patil',
      role: 'Software Developer at Aress Software and Education Technology Pvt. Ltd.',
      test: 'Harshada and I worked on the same team for 6 months. I was new to the team and she helped me pick up the phase of the project. It was an amazing experience to work with her.Harshada was the subject matter expert for the project as she was associated with it for over 2 years. Harshada is a very good team player and also strikes a very good balance between handling multiple projects at the same time. She is well aware of the architecture of the project, and always adheres to the project timelines. I really appreciate her work and efforts, done for the team and project.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/rohan-borse-075a10a4/',
      name: 'Rohan Borse',
      role: 'Front End/UI Developer | Angular | Wordpress | JavaScript',
      test: "Harshada is a highly determined individual with a practical approach to overcome any obstacle that she may face. She single handedly managed the project for over an year which proves her drive and passion to get things done. She makes sure all the deadlines are met, and whatever project she is working on meets the highest standards. She showcased her great leadership and interpersonal communication skills in daily quality meetings/training. I know that she will continue to be an asset to any future team she is a part of, and I highly recommend her based on her rigorous work ethic and her continuous drive for improvement.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/vaishali-shahane-a09b4285/',
      name: 'Vaishali Shahane',
      role: 'Manual Testing|Automation QA|API testing POSTMAN|Web Testing |mobile application testing|Performance Testing jMeter',
      test: 'I have worked with Harshada for more than a year as a QA on the same project. Harshada is someone who gets it done each and every time. She is knowledgeable, driven, enthusiastic and passionate about her work . She is a skilled coder with good problem solving skills. She understands the root cause of the problem and then approaches the solution. She is reliable and it was fun working with her. She has successfully managed multiple tasks with no compromise on the quality of the output. She has always maintained a positive attitude towards work and was an integral part of our team.All the best for your future endeavours.',
    },

   
  ];
  return (
    <section id="testmonials">
      <h2>Feedback from my peers</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials