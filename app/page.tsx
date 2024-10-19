import Image from "next/image";
import { socialLinks } from "./config";

function ExperienceSection({ title, imageSrc, imageAlt, points, description, link }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={250}
        height={300}
        className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
      />
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {points && (
          <ul className="list-disc list-inside space-y-2 mb-4">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {description && <p className="mb-4">{description}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    // <section>
    //   <a href={socialLinks.github} target="_blank">
    //     <Image
    //       src="/profile.png"
    //       alt="Profile photo"
    //       // className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
    //       className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"

    //       unoptimized
    //       width={160}
    //       height={160}
    //       priority
    //     />
    //   </a>

    //   <h1 className="mb-8 text-2xl font-medium tracking-tight">
    //     I work with models!
    //   </h1>

    //   <div className="prose prose-neutral dark:prose-invert">
    //     <p>
    //       My interests extend to robotics, artificial intelligence, autonomous racing, control, open-source, and open research.
    //     </p>
    //     <p>
    //       I'm one of the founders of {" "}
    //       <a
    //         target="_blank"
    //         href="https://argorobot.it/"
    //       >
    //         Argo Robot
    //       </a>
    //       {" "}a robotics company that develops autonomous home companion robots dedicated to entertainment, education, and security.
    //     </p>
        
    //   </div>
    // </section>
//     <section className="max-w-2xl mx-auto">
      
        
//         <a href={socialLinks.github} target="_blank">
//           <Image
//             src="/profile.png"
//             alt="Profile photo"
//             className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
//             width={160}
//             height={160}
//             priority
//           />
//         </a>

//       <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
//           Autonomous Racing Software Engineer
//       </h2>

//       <div className="prose prose-neutral dark:prose-invert max-w-none">
//         <p className="text-lg">
//           I'm passionate about pushing the boundaries of autonomous systems, with a focus on robotics, AI, and racing technology.
//         </p>
//         <p>
//           My experience in autonomous racing includes work with PoliMove, where I:
//         </p>
//         <ul>
//           <li>Developed advanced software for autonomous racing vehicles EAV-24 (Super Formula)</li>
//           <li>Focused on improving trajectory planning for head-to-head racing scenarios</li>
//           <li>Worked on the estimate of overtake zone on road-courses</li>

//         </ul>
//         <p>
//           I also served as the Team Leader of the Driverless Department and Chief Autonomous Racing Engineer at Dynamis PRC, Politecnico di Milano's Formula Student team. In this role, I:
//         </p>
//         <ul>
//           <li>Led a team of 12 engineers in developing software and hardware systems for an autonomous race car</li>
//           <li>Oversaw the development of perception, localization, mapping, trajectory planning, and control systems</li>
//           <li>Coordinated cross-functional efforts to ensure peak performance in competitive racing conditions</li>
//           <li>Gained hands-on experience in autonomous vehicle technology within a high-pressure, competitive environment</li>
//         </ul>
//         <p>
//           In addition to my work in autonomous racing, I'm proud to be a co-founder of{" "}
//           <a href="https://argorobot.it/" target="_blank" rel="noopener noreferrer">
//             Argo Robot
//           </a>
//           , where we're developing innovative home companion robots for entertainment, education, and security.
//         </p>
//         <p>
//           My expertise spans across perception, localization, mapping, trajectory planning, and control systems. I'm always eager to tackle new challenges in the world of autonomous technologies.
//         </p>
//       </div>

//       {/* <div className="mt-8 flex space-x-4">
//         <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
//           <Github size={24} />
//         </a>
//         <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
//           <Linkedin size={24} />
//         </a>
//         <a href={`mailto:${socialLinks.email}`} className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
//           <Mail size={24} />
//         </a>
//       </div> */}
//     </section>
//   );
// }
<section className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 mb-6 md:mb-0 md:mr-8"
          width={200}
          height={200}
          priority
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Federico Sarrocco</h1>
          <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
            Autonomous Racing Software Engineer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Pushing the boundaries of autonomous systems, with a focus on robotics, AI, and racing technology.
          </p>
        </div>
      </div>

      <div className="space-y-12 pt-12">
        <ExperienceSection
          title="PoliMove Experience"
          imageSrc="/a2rl.png"
          imageAlt="PoliMove racing car"
          points={[
            "Developed advanced software for autonomous racing vehicles EAV-24 (Super Formula)",
            "Focused on improving trajectory planning for head-to-head racing scenarios",
            "Worked on the estimate of overtake zone on road-courses"
          ]} description={undefined} link={undefined}        />

        <ExperienceSection
          title="Dynamis PRC - Formula Student Team"
          imageSrc="/dynamis_car.png"
          imageAlt="Dynamis PRC Formula Student car"
          points={[
            "Led a team of 12 engineers in developing software and hardware systems for an autonomous race car",
            "Oversaw the development of perception, localization, mapping, trajectory planning, and control systems",
            "Coordinated cross-functional efforts to ensure peak performance in competitive racing conditions",
            "Gained hands-on experience in autonomous vehicle technology within a high-pressure, competitive environment"
          ]} 
          description={undefined} 
          link={undefined}        />

        <ExperienceSection
          title="Argo Robot Co-Founder"
          imageSrc="/argo.png"
          imageAlt="Argo Robot prototype"
          description="Developing innovative home companion robots for entertainment, education, and security."
          link="https://argorobot.it/" 
          points={undefined}        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {["Perception", "Localization", "Mapping", "Trajectory Planning", "Control Systems", "Mathematical Optimization"].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


