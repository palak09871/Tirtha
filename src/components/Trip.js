import "./TripStyles.css";
import TripData from "./TripData";
import goldentemple from "../assets/golden-1.webp";
import kedarnath from "../assets/kedarnath1.jpg";
import ramesh from "../assets/ramesh.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Our Destinations</h1>
      <p>
        You can see the distance of the destinations from your current location
        in the Map provided.
      </p>
      <div className="cards">
        <div className="tripcard">
          <TripData
            image={goldentemple}
            heading="Golden Temple"
            text="The Golden Temple also known as the Harimandir Sahib (lit.'abode of God'), is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib."
            url="/page1"
          />
        </div>
        <div className="tripcard">
          <TripData
            image={kedarnath}
            heading="Kedarnath"
            text="Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon)."
            url="/page2"
          />
        </div>
        <div className="tripcard">
          <TripData
            image={ramesh}
            heading="Rameshwarm"
            text="The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India, which is one of the destinations of Char Dham, a Hindu pilgrimage circuit. The main shrine of the five-storied building, supported by 72 pillars, is known as Jagat Mandir or Nija Mandir."
            url="/page3"
          />
        </div>
      </div>
    </div>
  );
}
export default Trip;
