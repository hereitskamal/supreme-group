import React from "react";
import ContactForm from "./_components/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <div className="w-full bg-[#006ABC]">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-12 rounded-xl p-4 py-12 lg:py-20 2xl:py-36">
          <div className="col-span-12 md:col-span-10 md:col-start-2 2xl:col-span-10 2xl:col-start-2">
            <div className="grid gap-12 md:grid-cols-2 md:gap-6 text-white">
              
              <div className="space-y-9">
                <div>
                  <h2 className="text-3xl font-semibold leading-tight lg:text-4xl 2xl:text-5xl">
                    Get in touch
                  </h2>
                  <div className="mt-4 h-0.5 w-12 bg-white lg:mt-6 2xl:mt-8" />
                </div>

                <div className="md:hidden">
                  <ContactForm />
                </div>

                <div className="space-y-6">
                  <p className="text-lg font-normal 2xl:text-2xl">
                    For general enquiries
                  </p>

                  <div className="space-y-6 2xl:space-y-8">
                    
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium xl:text-xl">
                        Address:
                      </h3>
                      <p className="text-sm text-white/90 md:text-base 2xl:text-xl">
                        110, 16th Road, Chembur,<br className="xl:hidden" />
                        Mumbai - 400071
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-medium xl:text-xl">
                        Phone:
                      </h3>
                      <a
                        href="tel:+912225208822"
                        className="inline-block text-sm text-white/90 underline-offset-4 transition-all duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none md:text-base 2xl:text-xl"
                      >
                        +91 22 25208822
                      </a>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-medium xl:text-xl">
                        Email:
                      </h3>
                      <a
                        href="mailto:info@supremegroup.co.in"
                        className="inline-block text-sm text-white/90 underline-offset-4 transition-all duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none md:text-base 2xl:text-xl"
                      >
                        info@supremegroup.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;