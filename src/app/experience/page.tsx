const experiences = [
  {
    id: 1,
    title: "Product Design",
    company: "American NewYork Software Development (ANSD) Inc",
    duration: "2022 - 2024",
    description:
      "I am one of the member from products design team, I create a product design based on customers request, with some of newest technology such us Photoshop, CorelDraw, Figma and Adobe Ilustrator",
  },
  {
    id: 2,
    title: "Leader OF QC",
    company: "USG",
    duration: "2019-2020",
    description:
      "I am a leader of Quality Control Engineer for German Company, I make decisions about the quaility of the product and corperate with the team",
  },
  {
    id: 3,
    title: "Product Planning Engineer",
    company: "Alovera Drink Company Corporation",
    duration: "2017-2018",
    description:
      "I make a planning for product and my responsibility is to make a formula, planning schedule for production and also take decision about the ingredients, tools and also pacakging .",
  },
  {
    id: 4,
    title: "Mentor of Psychological in Faculty of Psychology ",
    company: "UII",
    duration: "2016 - 2018",
    description:
      "I am work for Faculty of Social and Psychology Departement as a mentor for student who want to talk about their problem and it can be said i am as short psikolog.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <h3 className="text-3xl font-bold mb-6 md:mt-6">EXPERIENCE</h3>

      {/* Experience List */}
      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 border border-gray-200"
          >
            {/* Bullet Point */}
            <div className="w-3 h-3 bg-black rounded-full mt-2"></div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <p className="italic text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
