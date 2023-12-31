import React from "react";
import "./Gym.css";

export default class Gym extends React.Component {
  render() {
    return (
      <>
        <div className="bg"></div>

        <h1 className="head">TEMPLES OF GREAT INDIA</h1>
        <div className="content">
          A temple (from the Latin templum) is a building reserved for spiritual
          rituals and activities such as prayer and sacrifice. Religions which
          erect temples include Christianity (whose temples are typically called
          churches), Hinduism (whose temples are called Mandir or Kovil),
          Buddhism, Sikhism (whose temples are called gurudwara), Jainism (whose
          temples are sometimes called derasar), Islam (whose temples are called
          mosques), Judaism (whose temples are called synagogues),
          Zoroastrianism (whose temples are sometimes called Agiary), the Baha'i
          Faith (which are often simply referred to as Baha'i House of Worship),
          Taoism (which are sometimes called Daoguan), Shinto (which are
          sometimes called Jinja), Confucianism (which are sometimes called the
          Temple of Confucius), and ancient religions such as the Ancient
          Egyptian religion and the Ancient Greek religion.
        </div>

        <div className="content2">
          The form and function of temples are thus very variable, though they
          are often considered by believers to be, in some sense, the "house" of
          one or more deities. Typically, offerings of some sort are made to the
          deity, and other rituals are enacted, and a special group of clergy
          maintain and operate the temple. The degree to which the whole
          population of believers can access the building varies significantly;
          often parts, or even the whole main building, can only be accessed by
          the clergy. Temples typically have a main building and a larger
          precinct, which may contain many other buildings or may be a
          dome-shaped structure, much like an igloo.
        </div>
      </>
    );
  }
}
