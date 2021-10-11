import React, { useState, useEffect } from "react";
import BingMapsReact from "bingmaps-react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import Form from "./components/Form/Form"

function App() {

  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    console.log('coordinates: ', coordinates)
  }, [coordinates])

  // window.Microsoft = window.Microsoft || {};
  const map = document.getElementById('myMap', {});
  console.log('map: ', map)


  const appendLocationHandler = async (locationNode) => {
    setCoordinates(locationNode);
  }

  return (
    <div className="container">
      <Form className="form"
        coordinates={coordinates}
        onAddLocation={appendLocationHandler}
      />
      <BingMap className="map" />
    </div>
  );
}

function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="Au_s6stObqYe5mrDRVJvSf1lJ3bfuiHC1V_xKVGlq1vyHFuREUOuay9fesgsSfTb"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="60%"
      viewOptions={{
        center: { latitude: 32.321, longitude: -80.757 },
        zoom: 4
        // mapTypeId: "grayscale",

      }}
    />
  );
}

export default App;
