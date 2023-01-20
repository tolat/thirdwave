import CentralSection from "../../components/UI/CentralSection";
import styles from "./FAQ.module.css";
import { responsive } from "../../utils";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

const faqData = [
  {
    key: "faq1",
    q: "Is it sunny enough in Vancouver and BC generally for solar to be worth it?",
    a: "Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specifically Vancouver and Victoria. In fact, BC receives the same amount of annual energy from the sun as Germany, a global leader in solar energy.",
  },
  {
    key: "faq2",
    q: "How much does a typical system cost, and how long will it take to pay itself off?",
    a: "In BC, the average cost of a solar system to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is highly dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years (standard system lifespan is 25-35 years).",
  },
  {
    key: "faq3",
    q: "What are the product warranties and who will be around in 10 years to replace equipment if it malfuncitons?",
    a: "We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will be there down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty.",
  },
  {
    key: "faq4",
    q: "How long will it take to install solar on my home?",
    a: "Despite the actual installation of solar panels taking only 2-4 days typically, solar projects have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come when a building permit is required, which can alone take anywhere from 1 to 8 weeks depending on the municipality. We make sure to give realistic timelines based on a region's permit requirements.",
  },
  {
    key: "faq5",
    q: "What are the product warranties and who will be around in 10 years to replace equipment if it malfuncitons?",
    a: "We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will be there down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty.",
  },
  {
    key: "faq6",
    q: "How long will it take to install solar on my home?",
    a: "Despite the actual installation of solar panels taking only 2-4 days typically, solar projects have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come when a building permit is required, which can alone take anywhere from 1 to 8 weeks depending on the municipality. We make sure to give realistic timelines based on a region's permit requirements.",
  },
  {
    key: "faq7",
    q: "Is it sunny enough in Vancouver and BC generally for solar to be worth it?",
    a: "Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specifically Vancouver and Victoria. In fact, BC receives the same amount of annual energy from the sun as Germany, a global leader in solar energy.",
  },
  {
    key: "faq8",
    q: "How much does a typical system cost, and how long will it take to pay itself off?",
    a: "In BC, the average cost of a solar system to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is highly dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years (standard system lifespan is 25-35 years).",
  },
];

const FAQ = (props) => {
  const w = props.viewportWidth;

  const [filteredData, setFilteredData] = useState(faqData);
  const [nothingFoundDisplay, setNothingFoundDisplay] = useState("none");
  const padding = responsive(w, "1rem");

  const handleFilter = (e) => {
    const searchValue = e.target.value;
    if (searchValue) {
      const newData = faqData.filter(
        (d) =>
          d.q.toUpperCase().includes(searchValue.toUpperCase()) ||
          d.a.toUpperCase().includes(searchValue.toUpperCase())
      );
      if (!newData[0]) {
        setNothingFoundDisplay("flex");
        setFilteredData(newData);
      } else {
        setNothingFoundDisplay("none");
        setFilteredData(newData);
      }
    } else {
      setNothingFoundDisplay("none");
      setFilteredData(faqData);
    }
  };

  const templateCols = responsive(w, "100%", "100%", "50% 50%", "50% 50%");
  return (
    <div className={styles.container}>
      <div className={styles.mainHeaderContainer}>
        <div className={styles.mainHeader}>FAQ</div>
      </div>
      <div className={styles.filterContainer}>
        <input
          placeholder="Filter FAQs.."
          className={styles.filter}
          onChange={handleFilter}
        />
      </div>

      <CentralSection>
        <div
          className={styles.faqContainer}
          style={{ gridTemplateColumns: templateCols }}>
          {filteredData.map((item) => (
            <div
              key={item.key}
              style={{ padding: padding }}
              className={styles.qnaContainer}>
              <QnaCard question={item.q} answer={item.a} />
            </div>
          ))}
        </div>
        <div
          style={{ display: nothingFoundDisplay }}
          className={styles.nothingFound}>
          No FAQs matched your search!
        </div>
      </CentralSection>
    </div>
  );
};

const QnaCard = (props) => {
  const { width } = useWindowSize();
  const fontSize = responsive(width, "1rem");
  return (
    <div className={styles.qOutercontainer} style={props.style}>
      <div className={styles.qContainer}>
        {/* <div className={styles.q}>Q:</div> */}
        <div style={{ fontSize: fontSize }} className={styles.question}>
          {props.question}
        </div>
      </div>
      <div className={styles.aContainer}>
       {/*  <div className={styles.a}>A:</div> */}
        <div style={{ fontSize: fontSize }} className={styles.answer}>
          {props.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
