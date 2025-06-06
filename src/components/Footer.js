import Connect from "./Connect";

const Footer = () => {
  return (
    <div
      className="w-full bg-backgroundDark-0 border-t border-dark py-4"
      id="footer"
    >
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-between font-Rubik justify-center px-8">
        <div className="font-Montagu text-xl text-white">
          {"<"} Saurabh {"/>"}
        </div>
        <div className="text-sm text-gray-300 font-montserrat">
          Made with ❤️ by Saurabh Kumar
        </div>
        <div>
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default Footer;
