import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import BlurImage from "./BlurImage";

type Props = {
  bgColor: string;
  textColor: string;
  logo: string;
  hamburgerColor: string;
  navbarOpen: boolean;
  setNavbarOpen: (navbarOpen: boolean) => void;
};

const Navbar = ({
  bgColor,
  textColor,
  logo,
  hamburgerColor,
  navbarOpen,
  setNavbarOpen,
}: Props) => {
  return (
    <section className={`relative w-full flex justify-center z-50 ${bgColor}`}>
      <nav className="w-3/4 flex items-center md:mx-auto flex-row">
        <a
          className="mr-auto md:ml-0 md:hidden md:mr-0"
          onClick={() => setNavbarOpen(true)}
          href="#"
        >
          {" "}
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            className={`block fill-${hamburgerColor}`}
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </a>

        <Link href="/" passHref>
          <a href="#">
            {" "}
            <BlurImage
              className=""
              src={logo === "alt" ? `/logo-alt.svg` : `/logo.svg`}
              alt="3H Logo"
              width={150}
              height={150}
            />
          </a>
        </Link>
        <ul className="items-center hidden h-12 mx-auto space-x-10 font-bold text-primary-50 md:flex">
          <li>
            {" "}
            <Link href="/about" passHref>
              <a className={`${textColor}`} href="#">
                ABOUT US
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/projects" passHref>
              <a className={`${textColor}`} href="#">
                PROJECTS
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/blog" passHref>
              <a className={`${textColor}`} href="#">
                BLOG
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/join" passHref>
              <a className={`${textColor}`} href="#">
                JOIN US
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/contact" passHref>
              <a className={`${textColor}`} href="#">
                CONTACT US
              </a>
            </Link>
          </li>
        </ul>
        <a
          className={`font-bold md:ml-0 ml-auto ${textColor}`}
          href="#"
          onClick={() => {
            console.log("Language changed");
          }}
        >
          TR/ENG
        </a>
      </nav>
      <Transition
        show={true}
        as={Fragment}
        enter="transition-all duration-500"
        enterFrom={navbarOpen ? "-left-80" : "left-0"}
        enterTo={"left-0"}
      >
        <div
          className={`fixed top-0 bottom-0 left-0 z-50 w-5/6 max-w-sm navbar-menu ${
            !navbarOpen && "hidden"
          }`}
        >
          <div
            className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"
            onClick={() => setNavbarOpen(false)}
          ></div>
          <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r rounded-r-xl">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-3xl font-bold leading-none"
                href="#"
                onClick={() => setNavbarOpen(false)}
              >
                <BlurImage
                  className="h-10"
                  src={"/logo.svg"}
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <button
                className="navbar-close"
                onClick={() => setNavbarOpen(false)}
              >
                {/* <svg
                  className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg> */}
                <BlurImage src={`/back.svg`} width={30} height={30} />
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="/" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/about" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/projects" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      Projects
                    </a>
                  </Link>
                </li>{" "}
                <li className="mb-1">
                  <Link href="/blog" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      Blog
                    </a>
                  </Link>
                </li>{" "}
                <li className="mb-1">
                  <Link href="/join" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      Join Us
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/contact" passHref>
                    <a
                      className="block p-4 text-sm rounded hover:bg-gray-50 hover:text-primary-500"
                      onClick={() => setNavbarOpen(false)}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <p className="my-4 text-xs text-center text-gray-400">
                {/* <span>© 2022</span> */}
              </p>
              <div className="text-center">
                {/*/ Facebook */}
                <a
                  className="inline-block px-1"
                  href="https://www.facebook.com/3hhareketi/"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7464 2.85352C6.2228 2.85352 2.55518 6.52114 2.55518 11.0448C2.55518 15.1513 5.58047 18.5425 9.52183 19.135V13.2154H7.49518V11.0625H9.52183V9.62972C9.52183 7.25767 10.6775 6.2167 12.6488 6.2167C13.5929 6.2167 14.0925 6.28701 14.3287 6.31841V8.19762H12.984C12.1471 8.19762 11.855 8.99149 11.855 9.8857V11.0625H14.3076L13.9751 13.2154H11.855V19.152C15.853 18.6101 18.9377 15.1916 18.9377 11.0448C18.9377 6.52114 15.27 2.85352 10.7464 2.85352Z"
                      fill="#1BC3D4"
                    />
                  </svg>
                </a>
                {/*/ Instagram */}
                <a
                  className="inline-block px-1"
                  href="https://www.instagram.com/3hhareketi/"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5931 2.06055C5.70018 2.06055 1.71924 6.04149 1.71924 10.9344C1.71924 15.8273 5.70018 19.8082 10.5931 19.8082C15.486 19.8082 19.4669 15.8273 19.4669 10.9344C19.4669 6.04149 15.486 2.06055 10.5931 2.06055ZM8.31729 4.79096H12.8675C15.0007 4.79096 16.7365 6.52615 16.7365 8.6586V13.2088C16.7365 15.342 15.0013 17.0778 12.8689 17.0778H8.31863C6.18549 17.0778 4.44965 15.3426 4.44965 13.2102V8.65994C4.44965 6.5268 6.18484 4.79096 8.31729 4.79096ZM8.31729 6.15617C6.93775 6.15617 5.81486 7.27971 5.81486 8.65994V13.2102C5.81486 14.5897 6.9384 15.7126 8.31863 15.7126H12.8689C14.2484 15.7126 15.3713 14.5891 15.3713 13.2088V8.6586C15.3713 7.27906 14.2478 6.15617 12.8675 6.15617H8.31729ZM13.7795 7.2934C14.0307 7.2934 14.2341 7.49682 14.2341 7.74802C14.2341 7.99922 14.0307 8.20398 13.7795 8.20398C13.5283 8.20398 13.3235 7.99922 13.3235 7.74802C13.3235 7.49682 13.5283 7.2934 13.7795 7.2934ZM10.5931 7.52137C12.475 7.52137 14.0061 9.05245 14.0061 10.9344C14.0061 12.8163 12.475 14.3474 10.5931 14.3474C8.71114 14.3474 7.18007 12.8163 7.18007 10.9344C7.18007 9.05245 8.71114 7.52137 10.5931 7.52137ZM10.5931 8.88658C10.05 8.88658 9.5291 9.10233 9.14506 9.48637C8.76102 9.87041 8.54527 10.3913 8.54527 10.9344C8.54527 11.4775 8.76102 11.9984 9.14506 12.3824C9.5291 12.7665 10.05 12.9822 10.5931 12.9822C11.1362 12.9822 11.6571 12.7665 12.0411 12.3824C12.4251 11.9984 12.6409 11.4775 12.6409 10.9344C12.6409 10.3913 12.4251 9.87041 12.0411 9.48637C11.6571 9.10233 11.1362 8.88658 10.5931 8.88658Z"
                      fill="#1BC3D4"
                    />
                  </svg>
                </a>
                {/*/ Twitter */}
                <a
                  className="inline-block px-1"
                  href="https://twitter.com/3hhareketi"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1698 2.85352C6.64614 2.85352 2.97852 6.52114 2.97852 11.0448C2.97852 15.5684 6.64614 19.236 11.1698 19.236C15.6934 19.236 19.361 15.5684 19.361 11.0448C19.361 6.52114 15.6934 2.85352 11.1698 2.85352ZM15.5821 9.36214C15.5862 9.45293 15.5882 9.54303 15.5882 9.63313C15.5882 12.41 13.4756 15.61 9.61137 15.61C8.42433 15.61 7.32056 15.2626 6.39153 14.666C6.55604 14.6858 6.72328 14.6946 6.89325 14.6946C7.87824 14.6946 8.78337 14.3595 9.50147 13.795C8.58201 13.7779 7.80589 13.1704 7.53899 12.3362C7.66732 12.3608 7.79906 12.3738 7.93422 12.3738C8.12603 12.3738 8.31238 12.3478 8.48781 12.3001C7.5267 12.1076 6.80246 11.2584 6.80246 10.2406C6.80246 10.2318 6.80246 10.2229 6.80246 10.214C7.08574 10.3717 7.40929 10.4659 7.75401 10.4768C7.19086 10.1007 6.81953 9.45702 6.81953 8.72868C6.81953 8.34301 6.9226 7.98192 7.10349 7.6727C8.13968 8.9437 9.68782 9.78058 11.4332 9.86795C11.3977 9.71436 11.3793 9.55395 11.3793 9.38944C11.3793 8.2297 12.3199 7.28839 13.4797 7.28839C14.0838 7.28839 14.6299 7.54368 15.0128 7.95188C15.4913 7.857 15.9412 7.68293 16.3473 7.44198C16.1903 7.93277 15.8572 8.3437 15.4231 8.60445C15.8476 8.55394 16.2524 8.44131 16.6299 8.27407C16.3494 8.69592 15.9937 9.06521 15.5821 9.36214Z"
                      fill="#1BC3D4"
                    />
                  </svg>
                </a>
                {/*/ Youtube */}
                <a
                  className="inline-block px-1"
                  href="https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ"
                >
                  <svg
                    width="28"
                    height="35"
                    viewBox="0 0 34 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3246 0.273438H17.5076C19.1978 0.27992 27.7616 0.344743 30.0706 0.997295C30.7686 1.19645 31.4047 1.58464 31.9153 2.12307C32.4258 2.6615 32.793 3.33132 32.98 4.06558C33.1877 4.88667 33.3337 5.97354 33.4324 7.09498L33.4529 7.3197L33.4982 7.8815L33.5146 8.10622C33.6483 10.0812 33.6647 11.9308 33.6668 12.3348V12.4969C33.6647 12.9161 33.6462 14.891 33.4982 16.9481L33.4817 17.175L33.4632 17.3997C33.3604 18.6356 33.2082 19.8629 32.98 20.7661C32.7935 21.5007 32.4266 22.1708 31.9159 22.7094C31.4053 23.2479 30.7689 23.6359 30.0706 23.8344C27.6855 24.5086 18.62 24.5561 17.3637 24.5583H17.0717C16.4364 24.5583 13.8087 24.5453 11.0535 24.4459L10.7039 24.433L10.525 24.4243L10.1734 24.4092L9.82183 24.3941C7.53953 24.2882 5.3662 24.1175 4.36487 23.8323C3.66679 23.6339 3.03057 23.2462 2.51995 22.7081C2.00933 22.17 1.64224 21.5003 1.45544 20.7661C1.22721 19.8651 1.07506 18.6356 0.972253 17.3997L0.955804 17.1728L0.939355 16.9481C0.83788 15.4839 0.781649 14.0167 0.770752 12.5488L0.770752 12.283C0.774864 11.8184 0.791313 10.213 0.902344 8.44113L0.916737 8.21858L0.922906 8.10622L0.939355 7.8815L0.984589 7.3197L1.00515 7.09498C1.10384 5.97354 1.24983 4.88451 1.4575 4.06558C1.64398 3.33102 2.01093 2.66089 2.52157 2.12237C3.03221 1.58384 3.6686 1.19585 4.36692 0.997295C5.36826 0.716395 7.54158 0.543533 9.82389 0.435495L10.1734 0.42037L10.5271 0.407405L10.7039 0.400923L11.0555 0.385798C13.0123 0.319623 14.97 0.282886 16.9278 0.275598H17.3246V0.273438ZM13.93 7.2095V17.6201L22.4773 12.4169L13.93 7.2095Z"
                      fill="#1BC3D4"
                    />
                  </svg>
                </a>
                {/*/ Linkedin */}
                <a
                  className="inline-block px-1"
                  href="https://www.linkedin.com/company/the-3h-movement/"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4657 2.74316C5.94204 2.74316 2.27441 6.41079 2.27441 10.9344C2.27441 15.458 5.94204 19.1256 10.4657 19.1256C14.9893 19.1256 18.6569 15.458 18.6569 10.9344C18.6569 6.41079 14.9893 2.74316 10.4657 2.74316ZM7.39121 6.43127C7.96596 6.43127 8.3489 6.81421 8.3489 7.3248C8.3489 7.83538 7.96596 8.21833 7.32773 8.21833C6.75297 8.21901 6.37003 7.83538 6.37003 7.3248C6.37003 6.81421 6.75297 6.43127 7.39121 6.43127ZM8.41784 14.3474H6.37003V8.88659H8.41784V14.3474ZM15.2439 14.3474H13.3162V11.3631C13.3162 10.5378 12.8022 10.3474 12.6097 10.3474C12.4172 10.3474 11.7742 10.4743 11.7742 11.3631C11.7742 11.49 11.7742 14.3474 11.7742 14.3474H9.78305V8.88659H11.7749V9.64838C12.0315 9.204 12.5455 8.88659 13.5094 8.88659C14.4732 8.88659 15.2439 9.64838 15.2439 11.3631V14.3474Z"
                      fill="#1BC3D4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </Transition>
    </section>
  );
};

export default Navbar;
