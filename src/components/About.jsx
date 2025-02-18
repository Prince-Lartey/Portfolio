
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I’m Prince Lartey, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a passionate Frontend Developer with a strong focus on building intuitive, user-friendly, and responsive web applications. My journey into web development started with a deep curiosity for how websites work, and over time, it has grown into a full-fledged career where I create seamless digital experiences.<br/>

              With expertise in React, Tailwind CSS, and modern web technologies, I specialize in designing and developing fast, efficient, and visually appealing interfaces. I enjoy transforming ideas into reality through clean, structured, and scalable code.<br/>

              When I’m not coding, I’m constantly learning new technologies, experimenting with design trends, or collaborating on exciting projects. My goal is to build web applications that not only function well but also provide great user experiences.<br/>

              Currently, I’m focused on improving my full-stack development skills and working on innovative solutions that make an impact.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
