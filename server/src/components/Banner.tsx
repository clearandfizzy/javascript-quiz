import React from "react";
import Link from "next/link";

const links = [
    {name: "React", href: "https://copilot.microsoft.com/?q=React"},
    {name: "Next.js", href: "https://copilot.microsoft.com/?q=Next.js"},
    {name: "TypeScript", href: "https://copilot.microsoft.com/?q=TypeScript"},
    {name: "Tailwind CSS", href: "https://copilot.microsoft.com/?q=Tailwind%20CSS"},
];

const methodologies = [
    {name: "Component-based Architecture", href: "https://copilot.microsoft.com/?q=Component-based%20Architecture"},
    {name: "Context API", href: "https://copilot.microsoft.com/?q=Context%20API"},
];

const personalLinks = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/garethpricelondon/"},
];

const Banner = () => {
    return (
        <div className="fixed bottom-0 w-full bg-green-100 text-center p-2 shadow-md">
            <p>
                Technologies:{" "}
                {links.map((link, index) => (
                    <span key={index}>
                        <Link
                            key={index}
                            target={"_blank"}
                            href={link.href}
                            className="text-blue-500 hover:underline"
                        >
                            {link.name}
                        </Link>
                        {index < links.length - 1 && ", "}
                    </span>
                ))}
                {" | "}Methodologies:{" "}
                {methodologies.map((methodology, index) => (
                    <span key={index}>
                        <Link
                            key={index}
                            target={"_blank"}
                            href={methodology.href}
                            className="text-blue-500 hover:underline"
                        >
                            {methodology.name}
                        </Link>
                        {index < methodologies.length - 1 && ", "}
                    </span>
                ))}
                {" | "}Connect:{" "}
                {personalLinks.map((link, index) => (
                    <span key={index}>
                        <Link
                            key={index}
                            target={"_blank"}
                            href={link.href}
                            className="text-blue-500 hover:underline"
                        >
                            {link.name}
                        </Link>
                        {index < personalLinks.length - 1 && ", "}
                    </span>
                ))};
            </p>
        </div>
    );
};

export default Banner;
