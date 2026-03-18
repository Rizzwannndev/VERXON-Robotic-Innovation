import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';
import gsap from 'gsap'
import CurvedLoop from '../components/CurvedLoop';
import ScrollVelocity from '../components/ScrollVelocity';
import Socials from '../components/Socials';
import TiltedCard from '../components/TiltedCard';
import CountUp from '../components/CountUp';

const Home = () => {
useEffect(() => {
  gsap.fromTo(
    ".appear-animation",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 4,
      ease: "power2.out"
    }
  );
}, []);

  return (
    <>
    {/* Hero Section */}
      <div className="h-screen w-full">
          <Spline scene="https://prod.spline.design/2nVp2Oks6bWTqZLP/scene.splinecode" />
      </div>
      <div className="relative">
        <div className="absolute bottom-5 right-3 w-[150px] h-[50px] bg-black"></div>
        {/* Socials */}
        <div className="absolute bottom-5 right-3 appear-animation">
            <Socials />
        </div>
        {/* Gradient */}
        <div className="h-15 absolute bottom-0 w-full bg-linear-to-t from-black to-transparent"></div>
        <h1 className='appear-animation absolute bottom-6 left-10 text-2xl scroll-indicator'>Scroll ↓</h1>
      </div>

      <div className="w-full bg-black h-auto mb-10">
        <CurvedLoop 
          marqueeText="Robotics ✦ Humanoid ✦ Cybernetics ✦ AI ✦ Automation ✦ Robotics ✦ Humanoid ✦ Cybernetics ✦ AI ✦ Automation ✦ Robotics ✦ Humanoid ✦ Cybernetics ✦ AI ✦ Automation ✦"
          speed={3}
          curveAmount={360}
          direction="right"
          interactive
          className="custom-text-style"
        />
      </div>

    {/*Section 02*/}
    <div className="h-screen w-full">
      <div className="flex h-full w-full">
        
        {/* LEFT SIDE (Text) */}
        <div className="w-[60%] h-full flex items-center justify-center">
          <div className="flex flex-col px-12">
            <h1 className='main-head cursor-pointer text-3xl grad'>The Future of Intelligent Interaction</h1>
            <span className="h-px w-100 bg-white left-0 mt-5"></span>
            <p className="mt-5 text-xl/7 grad">
              Experience a new era where design meets intelligence.
              VORXEN blends advanced AI with immersive 3D environments to create interfaces that don’t just respond — they anticipate, adapt, and evolve with you.
            </p>
            <div className="flex gap-15 mt-10">
              <button className="btn-white-outline">Get Started</button>
              <button className="btn-white-outline">Learn More</button>
            </div>

            <div className="w-[75%] h-20 flex items-center gap-25 mt-10 ml-5">
              <div className="flex flex-col justify-center items-center text-center">
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting
                />
                <p className='text-xl'>Units</p>
              </div>
              {/* <div className="self-stretch w-px bg-white/20"></div> */}
              <div className="flex flex-col justify-center items-center text-center">
                <span className='flex gap-2'>
                  <CountUp
                    from={0}
                    to={99}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting
                  />
                  <p className=''>%</p>
                </span>
                <p className='text-xl'>Accuracy</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <span className='flex gap-2'>
                  <CountUp
                    from={0}
                    to={1000}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting
                  />
                  <p className=''>+</p>
                </span>
                <p className='text-xl'>Neurons</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Spline) */}
        <div className="w-[40%] h-full relative">
          <Spline scene="https://prod.spline.design/Y4RqcMmjEct4KzBX/scene.splinecode" />
          {/* Overlay box */}
          <div className="absolute bottom-5 right-3 w-[150px] h-[50px] bg-black"></div>
        </div>

      </div>
    </div>

    <div className="main-head w-full bg-black h-auto mb-30 pb-0">
      <ScrollVelocity
        texts={[
          "Intelligent Interfaces ✦ Immersive 3D ✦",
          "Adaptive AI ✦ VORXEN ✦"
        ]}
        velocity={110}
        className="custom-scroll-text"
      />
    </div>

    <div className="flex items-center justify-center gap-12 w-full py-10 px-10 ">
        <TiltedCard
          imageSrc="img1.png"
          altText="Neural Core"
          captionText="Neural Core"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
            <p className="tilted-card-demo-text">
              Neural Core
            </p>
          }
        />
        <TiltedCard
          imageSrc="img2.png"
          altText="Cyber Interface"
          captionText="Cyber Interface"
          containerHeight="300px"
          containerWidth="500px"
          imageHeight="300px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
            <p className="tilted-card-demo-text">
              Cyber Interface
            </p>
          }
        />
        <TiltedCard
          imageSrc="img4.png"
          altText="Synth Systems"
          captionText="Synth Systems"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
            <p className="tilted-card-demo-text">
              Synth Systems
            </p>
          }
        />
    </div>
    </>

  )
}

export default Home