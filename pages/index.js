"use client"
import Head from "next/head";
import Link from 'next/link';
import { AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import deved from "../public/me_portfolio.jpeg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/cypress-rrs.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import web7 from "../public/light-prism.png";
import styled, { keyframes } from 'styled-components';


const PageContainer = styled.div`
  position: relative;
`;

const AnimatedOverlay = styled.div`
  position: absolute;
  top: -100px;
  right: -20px;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSpinning, setIsSpinning] = useState(true);

  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const SpinningImage = styled(Image)`
    animation: ${isSpinning ? rotate : 'none'} 2s linear infinite;
  `;
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>idncod. portfolio</title>
        <meta name="description" content="idncod" />
        <link rel="icon" href="/favicon_36x36.png" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Viola L
            </h2>
            <PageContainer>
              <AnimatedOverlay>
            <SpinningImage src={web7} alt="Spinning Image" width={100} height={100} />
            </AnimatedOverlay>
            </PageContainer>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              SOFTWARE ENGINEER
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">

            Architecting advanced E-commerce platforms, optimizing conversions, and maximizing revenue streams through innovative web solutions.            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/violettalykova/" rel="noreferrer">
              <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About me & my work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer, I've created cross-industry websites for different-sized businesses. This gives a better idea as to what is best for your website and industry, coming from my experience.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer business-tailored E-commerce web development. This essentially means that you own the code you get from me, instead of trusting with your data to platforms, like Wordpress or Wix. Plus, I only charge a one-off fee for the development!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2  ">
              Strategic System Design
              </h3>
              <p className="py-2">

              Implementing serverless architecture with AWS Lambda, orchestrating data flow using Apache Kafka, and integrating GraphQL subscriptions for real-time communication. Leveraging Docker and Kubernetes for containerization and orchestration, alongside Istio for service mesh management, ensuring seamless scaling, load balancing, and security in distributed microservices ecosystems. Applying advanced algorithms for data processing and AI-driven insights, optimizing performance and enhancing user experiences in intricate, data-intensive applications.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">
              Collaborative Ideation and Execution</h3>
              <p className="py-2">
              Embarking on the journey of translating your ideas into digital masterpieces, I engage in a comprehensive process that spans from strategic design to seamless deployment. Beginning with strategic design, I meticulously craft intuitive interfaces that prioritize user experiences. Following this, each iteration undergoes a rigorous review, ensuring precision and catching errors before they surface. Expert coding techniques are then employed, implementing robust solutions using cutting-edge technologies. This process is not linear; it's a constant loop of iterative refinement, where your feedback shapes the ongoing enhancements. Finally, the result is a seamless deployment, bringing your project to life with precision, passion, and a commitment to excellence.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">Strategic Iterative Feedback</h3>
              <p className="py-2">
              In the realm of web development, attention to detail is paramount. Throughout the entire process, I provide strategic iterative feedback, ensuring that your project stays on the cutting edge. My meticulous review process is designed not just to catch errors but to unearth every opportunity for improvement. By scrutinizing each element, we save valuable time, detecting and rectifying potential issues while they're still in their infancy. Real-time refinements are made, fostering continuous enhancement and paving the way for seamless integration of additional innovative ideas as your project evolves. This dynamic feedback loop guarantees that your project not only meets but exceeds your expectations, resulting in a web experience that is both flawless and innovative.</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Featured work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            With over six years of seasoned expertise, my commitment extends to sculpting code that endures the sands of digital evolution. This journey simplifies the rigors of maintenance for fellow developers and offers strategic financial efficiencies for businesses. A meticulously crafted website, far from an expenditure, emerges as a strategic investment, weaving a tale of operational finesse and seamless adaptability, setting the stage for featured works ahead.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <Link href="https://cypress-event-rrs.netlify.app/">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt=""
              />
              </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
            <Link href="https://github.com/idncod/ipmatcher_csharp">
              <a target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
              </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://beautybe.uk">
              <a target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
              </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
