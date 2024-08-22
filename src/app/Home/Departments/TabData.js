"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DepartmentImg1 from "../../../../public/img/event/documents.jpg";
import DepartmentImg2 from "../../../../public/img/event/passport.jpg";
import DepartmentImg3 from "../../../../public/img/event/consult.jpg";

const departments = [
  {
    id: 1,
    icon: "icofont-law-document",
    title: "Documents Package",
    secondTitle: "Kkuljaem Education",
    Quote:
      "“South Korea, with its world-class pop culture, mouth-watering culinary delights and stunning natural panoramas, is a dream destination for many tourists. ",
    content:
      "However, to make this trip to the land of ginseng possible, you need a Korean visa. For those of you who are planning a holiday to Korea, here is complete information about making a Korean visa:",
    listItems: ["Documents Preparation", "Apostille", "Translate"],

    image: DepartmentImg1,
  },
  {
    id: 2,
    icon: "icofont-visa",
    title: "Visa Package",
    secondTitle: "Kkuljaem Education",
    Quote:
      "“South Korea, with its world-class pop culture, mouth-watering culinary delights and stunning natural panoramas, is a dream destination for many tourists. ",
    content:
      "However, to make this trip to the land of ginseng possible, you need a Korean visa. For those of you who are planning a holiday to Korea, here is complete information about making a Korean visa:",
    listItems: ["Visa Processing", "Visa Fee", "Visa"],
    image: DepartmentImg2,
  },
  {
    id: 3,
    icon: "icofont-package",
    title: "Consutation Package",
    secondTitle: "Kkuljaem Education",
    Quote:
      "“South Korea, with its world-class pop culture, mouth-watering culinary delights and stunning natural panoramas, is a dream destination for many tourists. ",
    content:
      "However, to make this trip to the land of ginseng possible, you need a Korean visa. For those of you who are planning a holiday to Korea, here is complete information about making a Korean visa:",
    listItems: [
      "University and Major Consultation",
      "Online Application",
      "Contact with University",
      "Contact that related to other legal documents",
    ],
    image: DepartmentImg3,
  },
  // {
  //   id: 4,
  //   icon: "icofont-heart-beat",
  //   title: "Gastroenterology",
  //   secondTitle: "Lorem Sit",
  //   Quote:
  //     "“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo.",
  //   listItems: [
  //     "Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id.",
  //     "Maecenas pharetra ante vel est lobortis.",
  //     "Lorem ipsum dolor sit amet, consectetur.",
  //   ],
  //   image: DepartmentImg1,
  // },
  // {
  //   id: 5,
  //   icon: "icofont-bone",
  //   title: "Orthopedagogy",
  //   secondTitle: "Lorem Sit",
  //   Quote:
  //     "“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo.",
  //   listItems: [
  //     "Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id.",
  //     "Maecenas pharetra ante vel est lobortis.",
  //     "Lorem ipsum dolor sit amet, consectetur.",
  //   ],
  //   image: DepartmentImg1,
  // },
];

export default function TabData() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Tabs className="department-tab">
        <TabList id="myTab" className="nav nav-tabs">
          {departments.map((department) => (
            <Tab
              key={department.id}
              onClick={() => handleTabClick(departments.indexOf(department))}
            >
              <i className={department.icon}></i>
              <span className="first">{department.title}</span>
              <span className="second">{department.secondTitle}</span>
            </Tab>
          ))}
        </TabList>
        <div className="tab-content" id="myTabContent">
          {departments.map((department, index) => (
            <TabPanel
              key={department.id}
              className={selectedTab === index ? "active show" : ""}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="department-left">
                    <h3>{department.title}</h3>
                    <p className="p1">{department.Quote}</p>
                    <p>{department.content}</p>
                    <ul className="list">
                      {department.listItems?.map((listItem) => (
                        <li key={listItem}>
                          <i className="fa fa-check"></i> {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="department-right">
                    <Image
                      src={department.image}
                      alt="#"
                      width={571}
                      height={370}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
}
