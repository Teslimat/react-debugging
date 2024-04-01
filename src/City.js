import React from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function (props) {
  function displayWeather(response) {
    // alert(
    //   `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    // );
  }

  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "green", "blue", "yellow", "orange", "purple"]}
    />
  );
}
