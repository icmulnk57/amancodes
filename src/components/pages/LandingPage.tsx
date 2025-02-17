"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BorderBeam } from "../ui/border-beam";
import { TextAnimate } from "../ui/text-animate";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RainbowButton } from "../ui/rainbow-button";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const LandingPage = () => {
  const { theme } = useTheme();
  return (
    //i want ot add a log in right end of the page
  
    <div className="lg:px-[150px] lg:pt-[100px] md:px-[50px] md:pt-[100px] pt-[50px] px-[10px] pb-[150px]">
      {/* //THIS IS MY LOGGO */}
      <div className="fixed right-0 top-0 p-5 ">
      <Image src="/logoP2.png" alt="Logo" width={50} height={50}></Image>
    </div>



   
    
     


      <div className="w-full flex lg:flex-row flex-col  relative gap-[50px] min-h-screen">
        {/* Sidebar (Sticky Profile Section) */}
        <div className="lg:min-w-[400px] w-full max-w-[400px] lg:sticky static top-[50px] h-full flex flex-col gap-[10px] items-center">
          <Avatar className="w-[250px] h-[250px] shadow-2xl">
            <BorderBeam borderWidth={3} size={400} />
            <AvatarImage src="/profile.png" loading="lazy" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-center">Hi, I'm Aman👋</h1>
          <h2 className="scroll-m-20 text-2xl font-[500] tracking-tight lg:text-2xl text-center">Full-Stack Developer</h2>
          <TextAnimate duration={0.2} animation="blurInUp" by="character" className="leading-7 [&:not(:first-child)]:mt-6 text-center">
            I’m Aman Mandal, a passionate Full-Stack Developer with over 3 years of experience in building scalable and efficient web applications. With expertise in React, Node.js, MySQL, and
            MongoDB, I specialize in creating seamless user experiences while ensuring robust backend performance.
          </TextAnimate>
        </div>
        

        {/* Main Content Section */}
        <div className="w-full px-[20px]">
          {/* What I Do Section */}
          <div className="my-[30px]">
            <h2 className="text-3xl font-bold tracking-tight">What I Do</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
              <Card>
                <CardHeader>
                  <CardTitle>🚀 Full-Stack Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>React.js, Node.js, MySQL, MongoDB</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📦 Scalable Backend Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>API Development, Authentication, Microservices</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🎨 UI/UX Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Responsive & User-Friendly Interfaces</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🛠 Tech Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Payment Gateways, Third-Party APIs</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Work Experience */}
          <div className="my-[30px]">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>

            {/* MsCorpres Automation Private Limited */}
            <div className="my-[20px]">
              <div className="lg:flex lg:flex-row flex-col justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">MsCorpres Automation Private Limited</h3>
                      <AnimatedGradientText>
                        <span
                          className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[12px]`)}
                        >
                          Software Engineer
                        </span>
                      </AnimatedGradientText>
                    </div>
                    <p className="text-sm">Noida</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">June 2024 – Present</div>
              </div>
              <ul className="list-disc pl-[20px]">
                <li>Worked on HRMS (Human Resource Management System), ESS (Employee Self-Service), and IMS (Inventory Management System) for clients like Vans Electronics and Spigen India.</li>
                <li>Developed and maintained responsive web applications using React.js and Node.js.</li>
                <li>Implemented UI components with Material-UI, ensuring a consistent and modern user interface.</li>
              </ul>
            </div>

            {/* Ast Consulting */}
            <div className="my-[20px]">
              <div className="lg:flex lg:flex-row flex-col justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" />
                    <AvatarFallback>AST</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">Ast Consulting</h3>
                      <AnimatedGradientText>
                        <span
                          className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[12px]`)}
                        >
                          Software Engineer
                        </span>
                      </AnimatedGradientText>
                    </div>
                    <p className="text-sm">Noida</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">January 2024 – June 2024</div>
              </div>
              <ul className="list-disc pl-[20px]">
                <li>Led the development of the Prabhat Khabar website and mobile app, significantly improving its digital presence.</li>
                <li>Spearheaded the creation of an admin panel and customer app for an e-waste management project, streamlining operations.</li>
                <li>Conducted weekly status meetings, ensuring clear communication and fostering a cooperative team environment.</li>
              </ul>
            </div>
            {/* use lazy loading for images */}

            {/* webMOBI */}
            <div className="my-[20px]">
              <div className="lg:flex lg:flex-row flex-col justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" loading="lazy"  />
                    <AvatarFallback>WM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">webMOBI</h3>
                      <AnimatedGradientText>
                        <span
                          className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[12px]`)}
                        >
                          Full Stack Developer
                        </span>
                      </AnimatedGradientText>
                    </div>
                    <p className="text-sm">California, US (Remote)</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">May 2023 – October 2023</div>
              </div>
              <ul className="list-disc pl-[20px]">
                <li>Co-developed a responsive community software, resulting in a 30% increase in user satisfaction.</li>
                <li>Designed and implemented web pages using HTML, CSS, JavaScript, and Bootstrap.</li>
                <li>Played a key role in developing the official website for webMOBI, enhancing the company’s online presence.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <div>
              {/* BTech in Computer Science */}
              <div className="lg:flex justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" />
                    <AvatarFallback>PTU</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">Punjab Technical University</h3>
                    </div>
                    <p className="text-sm">Bachelor of Technology (BTech) in Computer Science</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">2020 – 2024</div>
              </div>

              {/* HSC */}
              <div className="lg:flex justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" />

                    <AvatarFallback>HSC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">Maharashtra State Board of Secondary & Higher Secondary Education</h3>
                    </div>
                    <p className="text-sm">Higher Secondary Certificate (HSC)</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">2018 – 2020</div>
              </div>

              {/* SSC */}
              <div className="lg:flex justify-between items-center">
                <div className="flex gap-[10px] py-[20px]">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src="" />
                    <AvatarFallback>SSC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex gap-[20px] items-center">
                      <h3 className="font-[600]">Maharashtra State Board of Secondary & Higher Secondary Education</h3>
                    </div>
                    <p className="text-sm">Secondary School Certificate (SSC)</p>
                  </div>
                </div>
                <div className="text-gray-500 dark:text-gray-200">2018</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <div className="my-[20px] flex flex-wrap gap-[5px]">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Material UI</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express.js</Badge>
              <Badge>MongoDB</Badge>
              <Badge>MySQL</Badge>
              <Badge>RESTful APIs</Badge>
              <Badge>GraphQL</Badge>
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Java</Badge>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Check out my latest Projects</h2>
            <div className="my-[20px] py-[20px]">
              <div className={"grid lg:grid-cols-2 grid-cols-1 gap-[20px]"}>
                {/* Pax Freight – Courier Management System */}
                <MagicCard className="cursor-pointer flex-col items-center justify-center p-[10px]" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden">
                   <Image src="/pax_freight.png" alt="Pax Freight" width={800} height={600} className="w-full" />
                  </div>
                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Pax Freight – Courier Management System</h3>
                    <p className="text-sm">
                      Developed a full-stack courier web application with customer and admin panels. Implemented features like order tracking, multi-box orders, manifests, wallet, rate calculator, and
                      document management.
                    </p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Node.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">MySQL</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Material-UI</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://github.com/icmulnk57/paxfreight_courier" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://paxfreight.com" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>

                {/* Daily Hunts Blog App */}
                <MagicCard className="cursor-pointer flex-col items-center justify-center p-[10px]" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden">
                    <Image src={"/dailyhunts.png"} alt="" width={800} height={600} className="w-full" />
                  </div>
                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Daily Hunts Blog App</h3>
                    <p className="text-sm">
                      Created a full-stack blog application for writing and managing daily posts. Developed the frontend using React.js and the backend using Node.js and Express.js.
                    </p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">React</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Node.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Express.js</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">MongoDB</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://github.com/icmulnk57" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://dailyhunts.netlify.app" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>

                {/* Prabahat khabbar */}

                <MagicCard className="cursor-pointer flex-col items-center justify-center p-[10px]" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden">
                    <Image src={"/pk.png"} alt="Prabhat Khabar Project" width={800} height={600} className="w-full" />
                  </div>
                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">Prabhat Khabar – News Platform</h3>
                    <p className="text-sm">
                      Worked on a full-stack news platform for Prabhat Khabar under the guidance of Ast Consulting, a leading newspaper in Bihar and Jharkhand. The platform includes a responsive
                      website and mobile app, enabling users to access news, articles, and updates seamlessly.
                    </p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Html</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Javascript</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Php</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Tailwind CSS</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton disabled className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://github.com/icmulnk57/prabhat-khabar" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://prabhatkhabar.com" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
                <MagicCard className="cursor-pointer flex-col items-center justify-center p-[10px]" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <div className="bg-red-200 rounded-md overflow-hidden">
                    <Image src={"/wm.png"} alt="webMOBI Business Portfolio" width={800} height={600} className="w-full" />
                  </div>
                  <div className="py-[20px]">
                    <h3 className="text-[18px] font-[600]">webMOBI – Business Portfolio</h3>
                    <p className="text-sm">
                      Designed and developed a responsive business portfolio website for webMOBI, showcasing their services, expertise, and client success stories. Built with HTML, CSS, and Bootstrap
                      for a clean and modern user experience.
                    </p>
                    <div className="flex gap-[5px] flex-wrap mt-[10px]">
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">HTML</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">CSS</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">Bootstrap</Badge>
                      <Badge className="bg-gray-200 text-slate-700 hover:bg-gray-200 dark:bg-neutral-600 dark:text-white">JavaScript</Badge>
                    </div>
                    <div className="mt-[20px] flex items-center gap-[10px]">
                      <RainbowButton disabled className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://github.com/icmulnk57/webmobi-portfolio" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </RainbowButton>
                      <RainbowButton className="p-0 h-[30px] rounded-md text-sm px-[10px] flex items-center gap-[5px]">
                        <SquareArrowOutUpRight size={15} />
                        <a href="https://www.webmobi.com" target="_blank" rel="noopener noreferrer">
                          Live Website
                        </a>
                      </RainbowButton>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-[10px]">
              I am always open to new challenges and opportunities. If you’re looking for a developer who can bring ideas to life, let’s connect! Feel free to reach out to me at{" "}
              <a href="mailto:mandalamankumar.786@gmail.com" className="text-cyan-600 hover:underline dark:text-cyan-300">
                mandalamankumar.786@gmail.com
              </a>{" "}
              or via{" "}
              <a href="https://www.linkedin.com/in/aman-mandal-7bb7491b5/" target="_blank" className="text-cyan-600 hover:underline dark:text-cyan-300">
                direct message on LinkedIn!
              </a>{" "}
              I'll get back to you as soon as I can. Please note, I don't respond to unsolicited messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
