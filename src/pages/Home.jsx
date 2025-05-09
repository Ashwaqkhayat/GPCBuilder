import { Nav, Hero, Intro, Faqs, Footer } from "../components";
import ellipse from '../assets/images/Ellipse.png';

function Home() {
  return (
    <main className="bg-Dark-Blue w-full relative flex flex-col gap-20 overflow-hidden">
      <Nav />
      <div className="absolute top-[-18rem] right-[-10rem]">
        <img src={ellipse} alt="" />
      </div>
      <section>
        <Hero />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Faqs />
      </section>
      <Footer />
      <div className="absolute z-0 bottom-[-110px] sm:bottom-[-300px] left-0 sm:left-[50%] sm:translate-x-[-50%] w-auto h-auto">
        <img src={ellipse} alt="" />
      </div>
    </main>
  )
}

export default Home
