import CardProjects from "../components/CardProject";

const data = [
  {
    title: "Graphic Design",
    techno: "Technology : Next Js, PostgreSQL, NodeJs, Figma",
    task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    situation:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    imageUrl: "/work-1.png",
  },
  {
    title: "Branding & Logo",
    techno: "Technology : Next Js, PostgreSQL, NodeJs, Figma",
    task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    situation:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    imageUrl: "/work-2.png",
  },
  {
    title: "UI & UX Design",
    techno: "Technology : Next Js, PostgreSQL, NodeJs, Figma",
    task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    situation:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    imageUrl: "/work-3.png",
  },
];

const Projects = () => {
  return (
    <section className="container m-auto mb-10 md:mb-20 px-4 py-16 md:py-24">
      <h1 className="mt-4 text-5xl font-semibold">My Projects</h1>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Card */}
        {/* {data.map((item, index) => {
            return (
              <CardExpertise
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })} */}
        {data.map((item, index) => (
          <CardProjects
            key={index}
            title={item.title}
            techno={item.techno}
            task={item.task}
            situation={item.situation}
            result={item.result}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
