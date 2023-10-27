import React from "react";
import { Typography } from "@mui/material";
import { Button, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import GoogleMapReact from "google-map-react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Map.css";
export default class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      latitude: 30.73827,
      longitude: 76.765144,
      gyms: [],
      selectedGymId: null,
      searchText: "",
      distance: 400
    };
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          gyms: gymData
        });
      },
      (error) => {
        console.log("Error Getting Location: " + error.message);
      }
    );
  };

  header = () => {
    const getDistanceFromLatLon = (lat1, lon1, lat2, lon2) => {
      const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
      };
      var R = 6371;
      var dLat = deg2rad(lat2 - lat1);
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    };

    const handleSearch = () => {
      let filteredGym = gymData.filter(
        (g) =>
          g.name.toLowerCase().includes(this.state.searchText.toLowerCase()) &&
          getDistanceFromLatLon(
            this.state.latitude,
            this.state.longitude,
            g.latitude,
            g.longitude
          ) < this.state.distance
      );
      this.setState({
        gyms: filteredGym
      });
    };

    const ResetAll = () => {
      this.setState({
        gyms: gymData,
        distance: 400,
        searchText: ""
      });
    };
    return (
      <div style={{ marginBottom: 25 }}>
        <Typography variant="h3" style={{ textAlign: "center", color: "gray" }}>
          T I R T H A
        </Typography>
        <div class="searchPlace">
          <TextField
            label="Search for a place"
            variant="outlined"
            value={this.state.searchText}
            style={{ width: "100%" }}
            onChange={(event) => {
              this.setState({ searchText: event.target.value });
            }}
          />
        </div>
        <div class="slider">
          <Typography>Distance:</Typography>

          <Slider
            style={{ width: "90%" }}
            value={this.state.distance}
            valueLabelDisplay="auto"
            step={20}
            marks
            min={0}
            max={2000}
            onChange={(event, value) => {
              this.setState({ distance: value });
            }}
          />
        </div>

        <div class="reset">
          <Button
            variant="outlined"
            onClick={ResetAll}
            style={{ width: "25%" }}
          >
            <RotateLeftRoundedIcon />
            Reset
          </Button>
          <div class="search">
            <Button
              variant="conained"
              onClick={handleSearch}
              style={{ width: "25%" }}
            >
              <SearchIcon />
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  };

  map = () => {
    const handleGymClick = (gym) => {
      const url = "/gym/" + gym.id;
      window.open(url, "_blank");
    };
    return (
      <div style={{ height: "70vh" }}>
        <GoogleMapReact
          onClick={() => {
            this.setState({ selectedGymId: null });
          }}
          // bootstrapURLKeys={{ key: "http://api.ipapi.com/2401:4900:1f33:bcaa:951c:e0ea:dd49:155d?access_key=f1803b25ed44601c70fe75711e4a1ded"}}
          defaultCenter={{ lat: 28.6448, lng: 77.16721 }}
          defaultZoom={10}
          center={{ lat: this.state.latitude, lng: this.state.longitude }}
        >
          {this.state.gyms.map((gym) => {
            return (
              <LocationOnIcon
                color={"secondary"}
                lat={gym.latitude}
                lng={gym.longitude}
                onClick={() => {
                  this.setState({ selectedGymId: gym.id });
                }}
              />
            );
          })}
          {this.state.gyms.map((gym) => {
            if (this.state.selectedGymId === gym.id) {
              return (
                <div
                  lat={gym.latitude}
                  lng={gym.longitude}
                  onClick={() => {
                    handleGymClick(gym);
                  }}
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    padding: 10,
                    borderRadius: 20
                  }}
                >
                  <Typography style={{ textAlign: "center", fontSize: 13 }}>
                    {gym.name}
                  </Typography>
                </div>
              );
            } else {
              return null;
            }
          })}
          <MyLocationIcon
            color={"primary"}
            lat={this.state.latitude}
            lng={this.state.longitude}
          />
        </GoogleMapReact>
      </div>
    );
  };
  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        {this.header()}
        {this.map()}
      </div>
    );
  }
}

let gymData = [
  {
    id: "1",
    name: "Vaishnu Devi",
    latitude: 22.23599,
    longitude: 84.86257
  },
  {
    id: "2",
    name: "Golden Temple",
    latitude: 31.61998,
    longitude: 74.876488
  },
  {
    id: "3",
    name: "Rameshwaram Temple",
    latitude: 12.95888,
    longitude: 77.570732
  },
  {
    id: "4",
    name: "Chandi Mandir",
    latitude: 30.7285,
    longitude: 76.8923
  },
  {
    id: "5",
    name: "Dwarkadish Temple",
    latitude: 22.2376,
    longitude: 68.9674
  },
  {
    id: "6",
    name: "Amarnath Temple",
    latitude: 34.2157,
    longitude: 75.5041
  },
  {
    id: "7",
    name: "Jagannath Temple",
    latitude: 19.8049,
    longitude: 85.8179
  },
  {
    id: "8",
    name: "Kedarnath Temple",
    latitude: 30.7346,
    longitude: 79.0669
  },
  {
    id: "9",
    name: "Badrinath Temple",
    latitude: 30.7433,
    longitude: 79.4938
  }
];
