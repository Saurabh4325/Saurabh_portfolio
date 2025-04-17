import IconCover from "./IconCover";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Connect = () => {
  return (
    <div className="flex gap-x-4">
      <IconCover
        icon={<FaGithub className="" />}
        link="https://github.com/Saurabh4325"
      />
      <IconCover
        icon={<FaLinkedin className="" />}
        link="https://www.linkedin.com/in/saurabh4325/"
      />
      {/* <IconCover
        icon={<FaTwitter className="" />}
        link="https://x.com/GautamSingh9955?t=Rmu750d5FoU_iPGlISVyMQ&s=09"
      /> */}
      {/* <IconCover
        icon={<SiLeetcode className="" />}
        link="https://leetcode.com/u/vishwas__/"
      /> */}
    </div>
  );
};

export default Connect;
