import React from "react";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Common/ContactForm";
import Navbar from "../components/_App/Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Frequently asked questions" />

      <div className="faq-area ptb-80">
        <div className="container">
          <div className="faq-accordion">
            <Accordion preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. incididunt ut labore et dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
