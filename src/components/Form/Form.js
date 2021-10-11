import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Test from "./Test";

import "./styles.css";

const Form = (props) => {

    const [selectedLocation, setSelectedLocation] = useState([]);
    const [cityMode, setCityMode] = useState(false);
    const [placeName, setPlaceName] = useState("");
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [polygonIndex, setPolygonIndex] = useState(0);

    const methods = useForm();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        // setPolygonIndex(Math.random().toString(36).substr(2, 5))
        setPolygonIndex(polygonIndex + 1)
        props.onAddLocation([...props.coordinates, [data.latitude, data.longitude]])
    };

    const handleInputMode = (value) => {
        console.log('cityMode: ', value);
        setPlaceName(placeName)
        setCityMode(!value);
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Coordinates form:</h1>
                <div className="search-type">
                    <input
                        type="radio"
                        {...register("cityMode")}
                        value={cityMode}
                        checked={!cityMode}
                        onClick={() => handleInputMode(cityMode)}
                    />
                    <label htmlFor="cityMode">Add by Coords</label>
                </div>
                <div className="search-type">
                    <input
                        type="radio"
                        {...register("city")}
                        value={cityMode}
                        checked={cityMode}
                        onClick={() => handleInputMode(cityMode)}
                    />
                    <label htmlFor="city">Add by City</label>
                </div>

                {cityMode ?
                    <div>
                        <label htmlFor="placeName">Place Name</label>
                        <input {...register("placeName")} placeholder={`${placeName ? placeName : 'Place Name'}`} /* defaultValue={placeName} */ />
                    </div>
                    :
                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <input {...register("latitude")} placeholder="Enter Latitude" />

                        <label htmlFor="longitude">Longitude</label>
                        <input {...register("longitude")} placeholder="Enter Longitude" />
                    </div>

                }
                {/* <label>Nested Input</label>
                <Test /> */}
                <input type="submit" value="Add Coords"
                    onClick={() =>
                        setValue("Add Coords", "true", {
                            shouldValidate: true,
                            shouldDirty: true
                        })
                    } />
            </form>
        </FormProvider>
    );
}
export default Form;
const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
