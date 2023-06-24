import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
	icon: string;
	title: string;
	description: string;
	link: string;
}

interface Props {
	className?: string;
	item: ItemProps;
}

const TextInformation: React.FC<Props> = ({ item, className }) => {
	return (
		<Link href={item.link}>
		<div
			className={classNames(
				`text-center border-gray-300 xl:border-l xl:first:border-s-0 px-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12`,
				className
			)}
		>
			<div className="mb-3.5 md:mb-5 xl:mb-3.5 2xl:mb-5 w-14 md:w-auto mx-auto">
				<Image
					src={item.icon}
					alt={item.title}
					width={78}
					height={78}
					className="mx-auto w-[78px] h-[78px]"
				/>
			</div>
			<div className="-mb-1">
				<h3 className="text-heading text-base md:text-lg font-semibold mb-1.5 md:mb-2">
					{item.title}
				</h3>
				<p className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{item.description}
				</p>
			</div>
		</div>
		</Link>
	);
};

export default TextInformation;
