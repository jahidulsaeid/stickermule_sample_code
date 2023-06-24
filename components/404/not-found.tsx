import cn from "classnames";
import noResult from "@/assets/images/not-found.svg"
import Image from "next/image";

interface Props {
  text?: string;
  className?: string;
}

const NotFound: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={noResult}
          alt={text ? text : "No result found"}
          className="w-full h-full object-contain"
        />
      </div>
      {text && (
        <h3 className="w-full text-center text-lg lg:text-xl font-semibold text-heading my-7">
          {text}
        </h3>
      )}
    </div>
  );
};

export default NotFound;
