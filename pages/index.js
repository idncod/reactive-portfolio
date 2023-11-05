import Head from "next/head";
import Link from 'next/link';
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/me_portfolio.jpeg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>idncod. portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_36x36.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <a href="#">
            <h1 className="font-burtons text-xl">idncod.</h1>
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                {/* <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href=""
                >
                  CV
                </a> */}
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="mailto:idncod@protonmail.com"
                >
                  Email me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Viola L
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              SOFTWARE ENGINEER
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Developing E-commerce websites that drive sales to your business!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/violettalykova/" rel="noreferrer">
              <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
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
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2  ">
              Strategic System Design
              </h3>
              <p className="py-2">

              Implementing serverless architecture with AWS Lambda, orchestrating data flow using Apache Kafka, and integrating GraphQL subscriptions for real-time communication. Leveraging Docker and Kubernetes for containerization and orchestration, alongside Istio for service mesh management, ensuring seamless scaling, load balancing, and security in distributed microservices ecosystems. Applying advanced algorithms for data processing and AI-driven insights, optimizing performance and enhancing user experiences in intricate, data-intensive applications.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">
                You say - I code.
              </h3>
              <p className="py-2">
                Have a website in mind? Let's make it real!
              </p>
              <h4 className="py-4 text-teal-600">My process in 5 simple steps:</h4>
              <p className="text-gray-800 py-1">Design</p>
              <p className="text-gray-800 py-1">Review</p>
              <p className="text-gray-800 py-1">Code</p>
              <p className="text-gray-800 py-1">Review</p>
              <p className="text-gray-800 py-1">Publish</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium font-bold pt-8 pb-2 ">Reviews on each step</h3>
              <p className="py-2">
                Stay on top of the things while having your project developed. My review process is designed to catch any irrelevancies while developing your website!
              </p>
              <h4 className="py-4 text-teal-600">What reviews do?</h4>
              <p className="text-gray-800 py-1">Save your time</p>
              <p className="text-gray-800 py-1">Allow to catch errors whilst they're tiny</p>
              <p className="text-gray-800 py-1">Improvements in real time</p>
              <p className="text-gray-800 py-1">Some further ideas can be implemented as we go along the development</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Featured work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ever since I started as web developer over 6 years ago, I made a promise to myself - to always produce quality code that would be reusable in a few years' time, and I kept the promise.
              This lets me and any other developer to maintain my websites efficiently which is beneficial and less money for businesses. A well-programmed website is always cheaper than one that isn't.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Take a look at some of my projects I'm most proud of!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/idncod/ipmatcher_csharp">
              <a target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
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
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
