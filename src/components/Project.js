import { FaGithub, FaLink } from "react-icons/fa";
import SubHeader from "./SubHeader";
import IconCover from "./IconCover";
import ImageSlider from "./ImageSlider";
import ReactPlayer from "react-player";
import NotAvailable from "./NotAvailable";

const Project = () => {
  const project1 = [
    {
      url: "/Saurabh_portfolio/assets/insta_image.jpg",
    },
    {
      url: "/Saurabh_portfolio/assets/insta_image_installation.jpg",
    },
    {
      url: "/Saurabh_portfolio/assets/insta_image_video.jpg",
    },
    // {
    //   url: "/assets/twitter_4.png",
    // },
    // {
    //   url: "/assets/twitter_5.png",
    // },
  ];
  const project2 = [
    {
      url: "/Saurabh_portfolio/assets/e-com/ecom_1.png",
    },
    {
      url: "/Saurabh_portfolio/assets/e-com/ecom_2.png",
    },
    {
      url: "/Saurabh_portfolio/assets/e-com/ecom_3.png",
    },
    {
      url: "/Saurabh_portfolio/assets/e-com/ecom_4.png",
    },
    {
      url: "/Saurabh_portfolio/assets/e-com/ecom_5.png",
    },
  ];
  const project3 = [
    {
      url: "/Saurabh_portfolio/assets/netflix/netflix_1.png",
    },
    {
      url: "/Saurabh_portfolio/assets/netflix/netflix_2.png",
    },
    {
      url: "/Saurabh_portfolio/assets/netflix/netflix_3.png",
    },
    {
      url: "/Saurabh_portfolio/assets/netflix/netflix_4.png",
    },
  ];

  return (
    <div className="w-full bg-backgroundDark-0" id="projects">
      {/* section */}
      <div className="w-[80%] m-auto py-10">
        {/* Projects header */}
        <SubHeader name="Projects" />
        {/* List */}
        {/* Mini Twitter */}
        <div className="rounded-lg flex flex-col md:flex-row border-2 border-dark2 mt-10 p-4">
          {/* Image and Links */}
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <div className="flex justify-start">
              <h1 className="font-montserrat font-bold text-3xl text-gray-100">
                Insta Image
              </h1>
              <div className="flex gap-x-3 ml-6">
                <IconCover
                  icon={<FaLink />}
                  link=""
                />
                <IconCover
                  icon={<FaGithub />}
                  link="https://github.com/Saurabh4325/Insta_image"
                />
              </div>
            </div>
            {/* ImageSlider */}
            <div className="flex justify-center md:justify-start p-2 my-4">
              <ImageSlider images={project1} />
            </div>
            <div>
              <h1 className="text-sm text-gray-300">Technologies used:</h1>
              <div className="flex flex-wrap gap-2 p-2">
                {/* Tech used */}
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  HTML5
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  CSS3
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Javascript
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ReactJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  TailwindCSS
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Redux
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  NodeJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ExpressJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  MongoDB
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Python
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/2 aspect-video flex justify-center">
            <div className="h-fit rounded-md overflow-hidden border border-dark p-0 ">
              <ReactPlayer
                // url="https://res.cloudinary.com/dryvdqck7/video/upload/v1719984453/videos/Mini_Twitter_dgzbnf.mp4"
                url="/Saurabh_portfolio/insta_image_video.mp4"
                controls={true}
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Proshop*/}
        <div className="rounded-lg flex flex-col md:flex-row border-2 border-dark2 mt-10 p-4">
          {/* Image and Links */}
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <div className="flex justify-start">
              <h1 className="font-montserrat font-bold text-3xl text-gray-100">
                Proshop: Ecommerce
              </h1>
              <div>
                <div className="flex gap-x-3 ml-6">
                  <IconCover
                    icon={<FaLink />}
                    link=""
                  />
                  <IconCover
                    icon={<FaGithub />}
                    link="https://github.com/Saurabh4325/e-com-proshop"
                  />
                </div>
              </div>
            </div>
            {/* ImageSlider */}
            <div className="flex justify-center md:justify-start p-2 my-4">
              <ImageSlider images={project2} />
            </div>
            <div>
              <h1 className="text-sm text-gray-300">Technologies used:</h1>
              <div className="flex flex-wrap gap-2 p-2">
                {/* Tech used */}
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  HTML5
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  CSS3
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Javascript
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ReactJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Redux
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  NodeJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ExpressJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/2 aspect-video flex justify-center">
            <div className="h-fit rounded-md overflow-hidden border border-dark p-0 ">
              <ReactPlayer
                url="https://res.cloudinary.com/dryvdqck7/video/upload/v1719984507/videos/Proshop_agcsdg.mp4"
                controls={true}
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Project-3*/}
        <div className="rounded-lg flex flex-col md:flex-row border-2 border-dark2 mt-10 p-4">
          {/* Image and Links */}
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <div className="flex justify-start">
              <h1 className="font-montserrat font-bold text-3xl text-gray-100">
                Netflix Clone
              </h1>
              <div className="flex gap-x-3 ml-6">
                <IconCover icon={<FaLink className="" />} link="" />
                <IconCover
                  icon={<FaGithub />}
                  link="https://github.com/Saurabh4325/Netflix_clone"
                />
              </div>
            </div>
            {/* ImageSlider */}
            <div className="flex justify-center md:justify-start p-2 my-4">
              <ImageSlider images={project3} />
            </div>
            <div>
              <h1 className="text-sm text-gray-300">Technologies used:</h1>
              <div className="flex flex-wrap gap-2 p-2">
                {/* Tech used */}
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  HTML5
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  CSS3
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Javascript
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ReactJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Firebase
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/2">
            <NotAvailable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
