"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import faqData from "@/utils/faq.json";

export default function FaqMain() {
  const [expandedItems, setExpandedItems] = useState(["1"]);

  const handleAccordionChange = (newExpandedItems) => {
    setExpandedItems(newExpandedItems);
  };

  return (
    <>
      <section className="faq-area section">
        <div className="container">
          {faqData.map((category) => (
            <div className="row faq-wrap" key={category.category}>
              <div className="col-lg-12">
                <div className="faq-head">
                  <h2>{category.category}</h2>
                </div>
                <div className="faq-item">
                  <Accordion
                    className="panel-group"
                    preExpanded={expandedItems}
                    onChange={handleAccordionChange}
                  >
                    {category.questions.map((question) => (
                      <AccordionItem
                        className="panel panel-default"
                        key={question.id}
                        uuid={question.id}
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            {question.question}
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p
                            style={{
                              color: "var(--primary-color)",
                              fontWeight: "500",
                            }}
                          >
                            {question.answer}
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
