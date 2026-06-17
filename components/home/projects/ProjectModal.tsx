import { useEffect, ReactElement } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: ReactElement;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed left-0 right-0 top-0 z-[100000000] flex h-screen cursor-pointer justify-center overflow-y-scroll bg-bg-opaque px-[1.2rem] py-[4.8rem] backdrop-blur-md"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute right-[1.2rem] top-[1.2rem] cursor-pointer border-none bg-none text-md text-text">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-full max-w-[700px] cursor-auto overflow-hidden rounded-[1.2rem] bg-background-light shadow-[0px_5px_15px_rgba(0,0,0,0.1)]"
      >
        <Image
          height={400}
          width={700}
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-[2.4rem]">
          <h4 className="text-lg">{title}</h4>
          <div className="mb-[2.4rem] mt-[0.2rem] flex flex-wrap gap-[1.2rem] text-xs text-brand">
            {tech.join(" - ")}
          </div>

          <div className="flex flex-col gap-[1.2rem] text-xs">
            {modalContent}
          </div>

          <div className="mt-[2.4rem]">
            <p className="mb-[0.8rem] text-md font-bold">
              Project Links<span className="text-brand">.</span>
            </p>
            <div className="flex items-center gap-[1.2rem] [&_a:hover]:underline [&_a]:flex [&_a]:items-center [&_a]:gap-[0.4rem] [&_a]:text-xs [&_a]:text-brand">
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub /> source code
              </Link>
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
