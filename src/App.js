import React, { useState, useEffect } from "react";
// import BingMapsReact from "bingmaps-react";
import { ReactBingmaps } from 'react-bingmaps';

import Form from "./components/Form/Form"

const App = () => {

  const homeLocationPoly = [{
    "center": [35.321542, -80.757],
    "radius": 5,
    "points": 3,
    "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
  }, {
    "center": [32.321254, -85.75724],
    "radius": 5,
    "points": 3,
    "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
  }, {
    "center": [27.321, -80.757],
    "radius": 5,
    "points": 3,
    "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
  }]

  const [coordinates, setCoordinates] = useState([]);
  const [locations, setLocations] = useState(homeLocationPoly);
  const [markedLocation, setMarkedLocation] = useState([]);
  useEffect(() => {
    console.log('locations: ', locations)
    setLocations(locations);
  }, [locations])

  const appendLocationHandler = async (locationNode) => {
    setCoordinates(locationNode);
    locations.push({
      center: locationNode,
      radius: 5, points: 3,
      option: { fillColor: "#ffdae8", strokeThickness: 2 }
    })
  }

  const AddPushPinOnClick = (marked) => {
    setMarkedLocation(marked)
    // setLocations([...locations, [markedLocation.latitude, markedLocation.longitude]])
    locations.push({
      center: [markedLocation.latitude, markedLocation.longitude],
      radius: 5, points: 3,
      option: { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
    })
    console.log('location: ', marked)
    console.log('locations: ', locations)
  }


  return (
    <div className="container">
      <Form className="form"
        coordinates={coordinates}
        onAddLocation={appendLocationHandler}
      />
      <ReactBingmaps
        bingmapKey="Au_s6stObqYe5mrDRVJvSf1lJ3bfuiHC1V_xKVGlq1vyHFuREUOuay9fesgsSfTb"
        // center={[32.090, 34.801]}
        center={[35.321, -80.757]}
        height="80%"
        width="60%"
        zoom={13.5}
        getLocation={
          { addHandler: "click", callback: AddPushPinOnClick }
        }
        regularPolygons={locations}
      />
    </div>
  );
}

export default App;
