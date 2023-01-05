import Link from "next/link";

const SLink = ({ href, light, children }) => {
  return (
    <Link
      className="relative hover:before:bottom-0 hover:before:h-full before:absolute before:bg-sblue before:left-[0] before:bottom-1 before:w-full before:h-2 before:-z-[1] before:transition-all before:ease-in-out"
      href={href}
    >
      {children}
    </Link>
  );
};

export default SLink;