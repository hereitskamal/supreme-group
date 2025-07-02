import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-200 to-white text-black relative">
      <div className="container  max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-26">
        <div
          className="absolute bottom-0 right-0 w-92 h-92 bg-no-repeat  bg-cover"
          style={{
            backgroundImage: `url("/images/Group.svg")`,
          }}
        />

        <div className='mb-16'>
          <div>
            <Link href="/">
              <Image
                width={400}
                height={200}
                src={'/images/Supreme_logo.svg'}
                className="h-10 md:h-12 w-40 object-fit"
                alt="Supreme logo"
                title="logo"
              />
            </Link>
          </div>

          <div className="md:flex hidden md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-black/90">
                Applications
              </li>
              <li>
                <Link href="/applications/apparel">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Apparel
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/automotive">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Automotive
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/filtration">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Filtration
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/customised-nonwoven">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Customised Nonwoven
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate uppercase font-bold">Company</li>
              <li>
                <Link href="/who-we-are">
                  <button className="text-black hover:text-black/80">Who We Are</button>
                </Link>
              </li>
              <li>
                <Link href="/global-competency">
                  <button className="text-black hover:text-black/80">Global Compentency</button>
                </Link>
              </li>
              <li>
                <Link href="/innovation">
                  <button className="text-black hover:text-black/80">Innovation</button>
                </Link>
              </li>
              <li>
                <Link href="/esg-impact">
                  <button className="text-black hover:text-black/80">ESG Impact</button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-black/90">
                MORE
              </li>
              <li>
                <Link href="/contact-us">
                  <button className="text-black hover:text-black/80">Contact Us</button>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-black/90">
                Follow Us
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/supreme-group-company/">
                  <button
                    className="block text-black/70 hover:text-black whitespace-nowrap"
                   
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className=" font-semibold uppercase text-black/90">
                Applications
              </li>
              <li>
                <Link href="/applications/apparel">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Apparel
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/automotive">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Automotive
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/filtration">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Filtration
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/applications/customised-nonwoven">
                  <button className="block whitespace-nowrap text-black hover:text-black/80">
                    Customized Nonwoven
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="uppercase font-bold">Company</li>
              <li>
                <Link href="/who-we-are">
                  <button className="text-black hover:text-black/80">Who we are</button>
                </Link>
              </li>
              <li>
                <Link href="/global-competency">
                  <button className="text-black hover:text-black/80">Global Compentency</button>
                </Link>
              </li>
              <li>
                <Link href="/innovation">
                  <button className="text-black hover:text-black/80">Innovation</button>
                </Link>
              </li>
              <li>
                <Link href="/esg-impact">
                  <button className="text-black hover:text-black/80">ESG Impact</button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-black/90">MORE</li>
              <li>
                <Link href="/contact-us">
                  <button className="text-black hover:text-black/80">Contact Us</button>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <button
                    className="block whitespace-nowrap text-black hover:text-black/80"
                   
                  >
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-black/90">
                Follow Us
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/supreme-group-company/">
                  <button
                    className="block text-black/70 hover:text-black whitespace-nowrap"
                   
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-3 md:flex-row flex-col  justify-between items-center blade-top-padding-xl">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>

          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  )
}
