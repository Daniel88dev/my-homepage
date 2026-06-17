import { Reveal } from "@/components/utils/Reveal";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="mx-auto max-w-[700px] rounded-[1.2rem]">
        <Reveal width="100%">
          <h4 className="text-center text-2xl font-black leading-none max-md:text-xl">
            Contact<span className="text-brand">.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className="my-[2.4rem] text-center font-extralight [&_a:hover]:underline [&_a]:text-brand">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/daniel-hrynusiw"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.facebook.com/danielhrynusiw/"
              target="_blank"
              rel="nofollow"
            >
              Facebook
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:daniel.hrynusiw@gmail.com">
            <div className="mx-auto flex w-fit items-center justify-center gap-[0.8rem] text-md transition-colors duration-[250ms] hover:text-brand">
              <AiFillMail size="2.4rem" />
              <span>daniel.hrynusiw@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
