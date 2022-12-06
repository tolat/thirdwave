import styles from "./UsedBusSales.module.css";
import sectionStyles from "./ServiceSection.module.css";
import { DataGrid } from "@mui/x-data-grid";

import tag from "../../images/icons/tag.svg";
import ServiceSection from "./ServiceSection";
import { toggleModal } from "../../utils";

const sampleBusData = [
  {
    id: Math.random(),
    title: "bluebird 2300",
    make: "Dodge",
    model: "b2300-us",
    capacity: "45",
    weight: "2500",
    horsepower: "300",
    torque: "250",
  },
  {
    id: Math.random(),
    title: "bluebird 2300",
    make: "Dodge",
    model: "b2300-us",
    capacity: "45",
    weight: "2500",
    horsepower: "300",
    torque: "250",
  },
  {
    id: Math.random(),
    title: "bluebird 2300",
    make: "Dodge",
    model: "b2300-us",
    capacity: "45",
    weight: "2500",
    horsepower: "300",
    torque: "250",
  },
  {
    id: Math.random(),
    title: "bluebird 2300",
    make: "Dodge",
    model: "b2300-us",
    capacity: "45",
    weight: "2500",
    horsepower: "300",
    torque: "250",
  },
  {
    id: Math.random(),
    title: "bluebird 2300",
    make: "Dodge",
    model: "b2300-us",
    capacity: "45",
    weight: "2500",
    horsepower: "300",
    torque: "250",
  },
];

const UsedBusSales = (props) => {
  const width = props.viewportWidth;

  const rows = sampleBusData;
  const columns = [
    { field: "title", headerName: "Title", width: 150 },
    { field: "make", headerName: "Make", width: 150 },
    { field: "model", headerName: "Model", width: 150 },
    { field: "capacity", headerName: "Capacity (Adults)", width: 150 },
    { field: "horsepower", headerName: "Horsepower", width: 150 },
    { field: "torque", headerName: "Torque (ft/lb)", width: 150 },
    { field: "weight", headerName: "Weight (kg)", width: 150 },
    { field: "inquireButton", headerName: "", width: 150 },
  ];

  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "Used Bus Sales");
  };

  return (
    <ServiceSection
      id="UsedBusSales"
      icon={tag}
      iconAlt="bus sales icon"
      headerText="Used Bus Sales"
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div className={styles.container}>
        <div className={sectionStyles.textContainer}>
          <div className={sectionStyles.text}>
            See our available stock below.
          </div>
          <div className={sectionStyles.contactInfo}>
            <b>Main Contact:</b> Murray Nicholl - murrayn@thirdwavebus.com{" "}
          </div>
        </div>
        <div className={styles.gridContainer}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </ServiceSection>
  );
};

export default UsedBusSales;
