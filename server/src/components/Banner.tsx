import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="fixed bottom-0 w-full bg-green-100 text-center p-2 shadow-md">
            <p>
                Technologies:{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=React"
                    className="text-blue-500 hover:underline"
                >
                    React
                </Link>
                ,{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=Next.js"
                    className="text-blue-500 hover:underline"
                >
                    Next.js
                </Link>
                ,{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=TypeScript"
                    className="text-blue-500 hover:underline"
                >
                    TypeScript
                </Link>
                ,{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=Tailwind%20CSS"
                    className="text-blue-500 hover:underline"
                >
                    Tailwind CSS
                </Link>{" "}
                | Methodologies:{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=Component-based%20Architecture"
                    className="text-blue-500 hover:underline"
                >
                    Component-based Architecture
                </Link>
                ,{" "}
                <Link
                    target={"_blank"}
                    href="https://copilot.microsoft.com/?q=Context%20API"
                    className="text-blue-500 hover:underline"
                >
                    Context API
                </Link>
            </p>
        </div>
    );
};

export default Banner;
