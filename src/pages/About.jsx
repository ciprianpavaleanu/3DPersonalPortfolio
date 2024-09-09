import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ciprian
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          {" "}
          Aspiring and highly motivated Junior Frontend Developer, based in
          Romania, with a strong foundation in HTML, CSS, JavaScript and React.
          Passionate about continuous learning and eager to contribute to
          innovative projects in a dynamic team environment.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 mx-auto md:mx-2"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  title={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
