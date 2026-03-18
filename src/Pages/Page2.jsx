import Galaxy from '../components/Galaxy';

const Page2 = () => {
  return (
    <>
        <div className="h-screen w-full flex justify-center items-center text-9xl">
            <Galaxy 
                mouseRepulsion
                mouseInteraction
                density={1}
                glowIntensity={0.3}
                saturation={0}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={0}
                starSpeed={0.5}
                speed={1}
            />
        </div>
    </>
  )
}

export default Page2