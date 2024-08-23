"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FaqMain() {
  const [expandedItems, setExpandedItems] = useState(["1"]);

  const handleAccordionChange = (newExpandedItems) => {
    setExpandedItems(newExpandedItems);
  };

  // Define FAQ data
  const faqData = [
    {
      category: "Kkuljaem",
      questions: [
        {
          id: "1",
          question: "What is Kkuljaem?",
          answer:
            "Kkuljaem Korean adalah les Bahasa Korea online yang didirikan oleh Bandung Oppa (Han Jongdae). Kkuljaem Korean sudah memiliki lebih dari 2000 murid semenjak awal berdiri dan sudah meluluskan sekitar 400 murid. Dengan konsep belajar menyenangkan dan fleksibel, Kkuljaem Korean memiliki visi untuk menjadi les bahasa Korea online terbaik bagi seluruh kalangan. Untuk menjadi yang terbaik, Kkuljaem Korean menyediakan beragam kelas dan jasa mengajar yang berkualitas dengan harga terjangkau..",
        },
        {
          id: "2",
          question: "How do I create an account on Kkuljaem?",
          answer:
            "You can create an account by visiting the Kkuljaem homepage and clicking on the 'Sign Up' button or by clicking on the 'Sign Up' button at the top navigation bar. You can sign up using your email address.",
        },
        {
          id: "3",
          question: "How is this different from the other Edu Tech?",
          answer:
            "There is no need for any karma points or something. You can get started just by signing up! Plus, you won't get banned or restricted without any reason. If you do get banned (which we hope not), we will tell you the reason.",
        },
        {
          id: "4",
          question: "Is there any minimum points required to post on Kkuljaem?",
          answer:
            "No. There are no points required for you to post and interact on Kkuljaem.",
        },
        {
          id: "5",
          question: "Who moderates Kkuljaem?",
          answer:
            "There are no moderators. You have the liberty to engage on Kkuljaem.",
        },
      ],
    },
    {
      category: "Kkuljaem Education",
      questions: [
        {
          id: "6",
          question: "What is Kkuljaem?",
          answer:
            "Kkuljaem Korean adalah les Bahasa Korea online yang didirikan oleh Bandung Oppa (Han Jongdae). Kkuljaem Korean sudah memiliki lebih dari 2000 murid semenjak awal berdiri dan sudah meluluskan sekitar 400 murid. Dengan konsep belajar menyenangkan dan fleksibel, Kkuljaem Korean memiliki visi untuk menjadi les bahasa Korea online terbaik bagi seluruh kalangan. Untuk menjadi yang terbaik, Kkuljaem Korean menyediakan beragam kelas dan jasa mengajar yang berkualitas dengan harga terjangkau..",
        },
        {
          id: "7",
          question: "How do I create an account on Kkuljaem?",
          answer:
            "You can create an account by visiting the Kkuljaem homepage and clicking on the 'Sign Up' button or by clicking on the 'Sign Up' button at the top navigation bar. You can sign up using your email address.",
        },
        {
          id: "8",
          question: "How is this different from the other Edu Tech?",
          answer:
            "There is no need for any karma points or something. You can get started just by signing up! Plus, you won't get banned or restricted without any reason. If you do get banned (which we hope not), we will tell you the reason.",
        },
        {
          id: "9",
          question: "Is there any minimum points required to post on Kkuljaem?",
          answer:
            "No. There are no points required for you to post and interact on Kkuljaem.",
        },
        {
          id: "10",
          question: "Who moderates Kkuljaem?",
          answer:
            "There are no moderators. You have the liberty to engage on Kkuljaem.",
        },
      ],
    },
    // {
    //   category: "Diagnosis",
    //   questions: [
    //     {
    //       id: "11",
    //       question: "What do we know about diagnostic error?",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3",
    //     },
    //     {
    //       id: "12",
    //       question: "How often does it happen?",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3",
    //     },
    //     {
    //       id: "13",
    //       question: "What is the cause of diagnostic error?",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3",
    //     },
    //     {
    //       id: "14",
    //       question: "What are the obstacles to accurate diagnosis?",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3",
    //     },
    //     {
    //       id: "15",
    //       question: "When is a formal diagnosis necessary?",
    //       answer:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3",
    //     },
    //   ],
    // },
  ];

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
                          <p>{question.answer}</p>
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
