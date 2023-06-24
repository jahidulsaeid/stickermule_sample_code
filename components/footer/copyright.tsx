const year = new Date().getFullYear();
const Copyright: React.FC = () => {
  return (
    <div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
      <div className="flex flex-col-reverse md:flex-row text-center md:justify-between container mx-auto">
        <p className="text-body text-xs md:text-[13px] lg:text-sm leading-6 mb-0 mx-auto">
          Copyright &copy; {year}&nbsp;
          <a
            className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
            href="https://giordanobd.com/"
            target="_blank"
          >
            GIORDANO BANGLADESH
          </a>
          &nbsp; All rights reserved
        </p>

        {/* <p className="text-body text-xs md:text-[13px] lg:text-sm leading-6">
          Technology Partner&nbsp;
          <a
            className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
            href="https://cistechltd.com/"
            target="_blank"
          >
            CIS Tech LTD.
          </a>
        </p> */}

    
      </div>
    </div>
  );
};

export default Copyright;
