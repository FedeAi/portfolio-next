import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";

// function ExperienceSection({ title, imageSrc, imageAlt, points, description, link }) {
//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start">
//       <Image
//         src={imageSrc}
//         alt={imageAlt}
//         width={250}
//         height={300}
//         className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
//       />
//       <div>
//         <h3 className="text-2xl font-bold mb-4">{title}</h3>
//         {points && (
//           <ul className="list-disc list-inside space-y-2 mb-4">
//             {points.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         )}
//         {description && <p className="mb-4">{description}</p>}
//         {link && (
//           <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//             Learn More
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function ExperienceSection({ title, imageSrc, imageAlt, points, description, link }) {
  let blogLink = `/blog/${slugify(title)}`;
  if (link) {
    blogLink = link;
  }

  return (
    <Link href={blogLink} className="block">
      <div className="flex flex-col md:flex-row items-center md:items-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 p-4 rounded-lg cursor-pointer">
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
    </Link>
  );
}

export default function Page() {
  return (
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


