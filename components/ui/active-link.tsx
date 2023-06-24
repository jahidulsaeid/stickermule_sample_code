"use client";
// import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, activeClassName, href, ...props }: any) => {
	const pathname = usePathname();
	// const child = React.Children.only(children);
	// console.log("🚀 ~ file: active-link.tsx:10 ~ ActiveLink ~ child:", child)
	// const childClassName = child.props.className || "";

	// const className =
	// 	pathname === href
	// 		? `${childClassName} ${activeClassName}`.trim()
	// 		: childClassName;

	// return (
	// 	<Link href={href} {...props}>
	// 		{React.cloneElement(child, {
	// 			className: className || null,
	// 		})}
	// 	</Link>
	// );
	return <></>
};

export default ActiveLink;
