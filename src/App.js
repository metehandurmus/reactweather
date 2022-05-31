import React from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

class App extends React.Component {

  state = {
    days: [],
  }

  onSubmit = async (city) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e37ac72e5e0e4580a65141739223105&q=${city}&days=10&aqi=no&alerts=no&lang=tr`)
    this.setState({
      days: response.data.forecast.forecastday
    })
    console.log(response)
  }

  render() {
    return(
      <div>
        <SearchInput onSubmit={this.onSubmit} />
        <div className="container my-5">
          <WeatherCard days={this.state.days} />
        </div>
      </div>
    )
  }
}

export default App;
