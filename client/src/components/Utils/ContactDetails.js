import styles from "./ContactDetails.module.css"
const ContactDetails = props =>{

    return(
    <div className={styles.container} style={props.containerStyle}>
        <div className={styles.text} style={props.textStyle}>
          <b>
            Dispatch
          </b>
          <br />
          dispatch@thirdwavebus.com
          <br />
          <br />
          <b>
            Lower Mainland
          </b>
          <br />
          <b>Office:</b> (604) 247-1221 <br />
          <b>Shop:</b> (604) 247-1253 <br />
          <b>Emergency:</b> (604)-768-3787
          <br />
          <div style={{ marginTop: "0.5rem" }}>
            <i>120 - 13551 VERDUN PLACE, RICHMOND BC V6V 1W5</i>
          </div>
          <br />
          <b>
            Sunshine Coast
          </b>
          <br />
          <b>Office:</b> (604) 855-1260 <br />
          <b>Manager: </b>Randy Gould <br /> (604) 989-9670 <br />
          <div style={{ marginTop: "0.5rem" }}>
            <i>4373 SOLAR RD, SECHELT, BC V0N 3A1</i>
          </div>
          <br />
          <b>
            Victoria
          </b>
          <br />
          <b>Office:</b> 1 (250) 382-4333
          <br />
          <b>Manager: </b>Dave Davenport <br />
          victoriamanager@thirdwavebus.com
          <div style={{ marginTop: "0.5rem" }}>
            <i>482 CECELIA RD, VICTORIA, BC V8T 4T5</i>
          </div>
          <br />
        </div>
      </div>)
}

export default ContactDetails