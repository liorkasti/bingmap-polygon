import React, { useState, useEffect } from "react";
// import BingMapsReact from "bingmaps-react";
import { ReactBingmaps } from 'react-bingmaps';

import Form from "./components/Form/Form"

const App = () => {

  const [locations, setLocations] = useState(homeLocationPoly);
  const [placeName, setPlaceName] = useState();

  useEffect(() => {
    console.log('locations: ', locations)
  }, [locations])

  useEffect(() => {
    console.log('placeName: ', placeName)

  }, [placeName])

  const appendPlacNameHandler = async (value) => {
    setPlaceName(value)
  }

  const appendCoordsHandler = async (marked) => {
    // console.log('locationNode: ', marked)
    locations.push({
      center: [marked.latitude, marked.longitude],
      radius: 1, points: 6,
      option: { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
    })
    setLocations(locations);
  }

  return (
    <div className="container">
      <Form className="form"
        onAddPlaceName={(value) => appendPlacNameHandler(value)}
        onAddCoords={appendCoordsHandler}
        placeName={placeName}
      />
      <ReactBingmaps
        bingmapKey="Au_s6stObqYe5mrDRVJvSf1lJ3bfuiHC1V_xKVGlq1vyHFuREUOuay9fesgsSfTb"
        center={[32.090, 34.801]}
        height="80%"
        width="60%"
        zoom={12}
        getLocation={
          { addHandler: "click", callback: appendCoordsHandler }
        }
        regularPolygons={locations}

        boundary={{
          "search": { placeName },
          "option": {
            entityType: 'PopulatedPlace'
          },
          "polygonStyle": {
            fillColor: 'rgba(161,224,255,0.4)',
            strokeColor: '#a495b2',
            strokeThickness: 2
          }
        }}

      />
    </div>
  );
}
const homeLocationPoly = [{
  "center": [32.090, 34.801],
  "radius": 1,
  "points": 5,
  "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
}, {
  "center": [32.090, 34.601],
  "radius": 1,
  "points": 4,
  "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
}, {
  "center": [32.390, 34.801],
  "radius": 1,
  "points": 6,
  "option": { fillColor: "#ffdae8b5", strokeThickness: 2, strokeColor: "#bf1650" }
}]

export default App;
