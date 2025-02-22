interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
    image: "/images/haseeb.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Marketing Head",
    image: "/images/junaid.jpeg",
  },
  {
    name: "Muhammad Nabeel Khan",
    position: "Creative Director",
    image: "/images/nabeel_img.jpeg",
  },
];

const TeamSec: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-primary">
      <div className=" mx-auto max-w-7xl ">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] font-orbitron md:text-4xl">
            Meet Our <span className="text-yellow">Team</span>
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group rounded-lg  overflow-hidden">
              <div className="bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-80 object-cover cursor-pointer ease-linear group-hover:mix-blend-normal mix-blend-luminosity transition-all duration-300"
                />
              </div>
              <div className="py-3 text-center">
                <h3 className="text-lg text-white font-orbitron">{member.name}</h3>
                <p className="text-yellow font-semibold">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSec;