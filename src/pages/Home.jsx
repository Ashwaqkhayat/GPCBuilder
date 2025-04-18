import {Nav, Hero, Intro, Faqs, Footer} from "../components";
import ellipse from '../assets/images/Ellipse.png';

function Home() {
  return (
    <main className="bg-Dark-Blue w-full relative flex flex-col gap-20 overflow-hidden">
      <Nav/>
      <div className="absolute top-[-18rem] right-[-10rem]">
          <img src={ellipse} alt=""/>
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
    </main>
  )
}

export default Home
