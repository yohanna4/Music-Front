import background from "../assets/image/background.jpg";
import note from "../assets/image/note.png";
import stat from "../assets/image/stat.png";
import music from "../assets/image/music.png";

type Service = {
  label: string;
  body: string;
  source: string;
};

const services: Service[] = [
  {
    label: "Music Collection",
    body: "There is a thoughtfully assembled selection of music, offering a listening journey to a variety of chosen tracks.",
    source: note,
  },
  {
    label: "Statistics",
    body: "There is a comprehensive look at music data. Users can delve into specifics such as an the number of songs and albums an artist has.",
    source: stat,
  },
  {
    label: "Background Music",
    body: "We also provide relaxing music right below. You can Listen by clicking play.",
    source: music,
  },
];

export const Hero = () => {
  return (
    <div>
      <div>
        <section className="relative bg-blueGray-50">
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-96">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover opacity-40"
              style={{
                backgroundImage: `url(${background})`,
              }}
            ></div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 mx-auto px-4 flex flex-col justify-center items-center text-center">
                  <div className="">
                    <h1 className="text-black font-bold text-5xl">
                      {" "}
                      Welcome to Music Library
                    </h1>
                    <p className="mt-4 text-lg mb-4 font-bold  text-grey-400">
                      Create a music collection here: Start by saving songs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
          <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div
                          className={`text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full  `}
                        >
                          <img src={service.source} alt={service.label} />
                        </div>
                        <h6 className="text-xl font-semibold">{service.label}</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          {service.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
