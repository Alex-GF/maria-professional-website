import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import CV from "../static/pdf/CV.pdf";
import logo from "../static/icons/logo.webp";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute z-10 w-screen">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <motion.div
          initial={
            sessionStorage.getItem("showedMainAnimation") === null
              ? { opacity: 0, y: -300 }
              : { opacity: 1, y: 0 }
          }
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 0.5 },
          }}
          className="flex lg:flex-1"
        >
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">María Espinar Mora</span>
            <img
              src={logo}
              alt="María Espinar Mora logo"
              className="h-10 w-10 lg:h-20 lg:w-20"
            />
          </Link>
        </motion.div>
        {!mobileMenuOpen && (
          <motion.div
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, y: -300 }
                : { opacity: 1, y: 0 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
            className="flex lg:hidden"
          >
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3BottomRight
                className="h-6 w-6 fill-primary"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        )}
        <div className="hidden lg:flex lg:gap-x-12">
          <motion.div
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, y: -300 }
                : { opacity: 1, y: 0 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.5 },
            }}
          >
            <Link to="/" className="text-sm font-semibold leading-6 text-body hover:text-primary">
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, y: -300 }
                : { opacity: 1, y: 0 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
          >
            <Link
              to="/career"
              className="text-sm font-semibold leading-6 text-body hover:text-primary"
            >
              Professional Career
            </Link>
          </motion.div>
          <motion.div
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, y: -300 }
                : { opacity: 1, y: 0 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
          >
            <Link
              to="mailto:espinarmora@gmail.com"
              className="text-sm font-semibold leading-6 text-body hover:text-primary"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, y: -300 }
                : { opacity: 1, y: 0 }
            }
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            className="cursor-pointer rounded-lg border-2 border-primary px-3 py-2 text-primary transition-all hover:bg-primary hover:text-background1 hover:shadow hover:shadow-primary"
            onClick={() => window.open(CV)}
          >
            Resume
          </motion.div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="from-bakground1 to-bakground1 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-tr via-background2 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">María Espinar Mora</span>
              <img
                src={logo}
                alt="María Espinar Mora logo"
                className="h-10 w-10 lg:h-20 lg:w-20"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-primary/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-body hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/career"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-body hover:text-primary"
                >
                  Professional Career
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-body hover:text-primary"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <div
                  className="hover:text-bakground1 cursor-pointer rounded-lg border-2 border-primary px-3 py-2 text-primary transition-all hover:bg-primary hover:text-background1 hover:shadow hover:shadow-primary"
                  onClick={() => window.open(CV)}
                >
                  Resume
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
