import CentralSection from "../../components/UI/CentralSection";
import styles from "./FAQ.module.css";
import { responsive } from "../../utils";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import React from "react";

const faqData = [
  {
    key: "faq1",
    q: "Why do some buses not have seat belts? ",
    a: "Buses are typically larger and heavier than other automobiles, which makes them less likely to sustain damage in a collision. In addition, seats in a bus are typically installed equidistant from each other, which creates “compartments” that help to absorb the impact of a collision or sudden stop.",
  },
  {
    key: "faq2",
    q: "What do I need to book a bus?",
    a: "In BC, the average cost of a solar system to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is highly dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years (standard system lifespan is 25-35 years).",
  },
  {
    key: "faq3",
    q: "What size buses are available to book?",
    a: "A regular bus has a capacity of 46 adults, or 70 small children. We also have large and small buses in limited availability. A large bus holds up to 54 adults, or 84 small children. A small bus holds 20 adults or 29 small children.",
  },
  {
    key: "faq4",
    q: "Can I get a quote online?",
    a: `Yes! Thirdwave now has a quote form on our website. You can get a quote by clicking clickforquote`,
  },
  {
    key: "faq5",
    q: "Will I be charged if I cancel my booking?",
    a: "We understand plans can change based on weather or other unforeseen circumstances. We kindly ask that you give us 48 hours notice before canceling your trip to avoid any charges. If you cancel with only 24 hours notice we will charge a driver callout fee, and If you cancel the day of your trip we will charge for the full price of the booking.",
  },
  {
    key: "faq6",
    q: "Are there additional fees?",
    a: "Booking prices will fluctuate based on the time, and day of the trip. With the current price of fuel, there is a small fuel surcharge to all bookings. ",
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
      {/* <div className={styles.filterContainer}>
        <input
          placeholder="Filter FAQs.."
          className={styles.filter}
          onChange={handleFilter}
        />
      </div> */}

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

  const insertQuoteLink = (str) =>{
    const linkIndex = str.indexOf("clickforquote")

    const clickQuoteButton = ()=>{
      document.getElementById("quoteButton").click()
    }

    if(linkIndex > -1){
      return(<React.Fragment>
        {str.slice(0,linkIndex)} <span className={styles.link} onClick={clickQuoteButton}>here.</span>
       
      </React.Fragment>)
    } else{
      return(str)
    }
  }

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
         {insertQuoteLink(props.answer)}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
