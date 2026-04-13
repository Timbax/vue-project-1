import axios from "axios";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=10.3997&longitude=-75.5144&current=temperature_2m&timezone=auto&forecast_days=1";

export const getTemperatura = async () => {
  const res = await axios.get(API_URL);
  const nuevaTemperatura = res.data.current.temperature_2m;

  return nuevaTemperatura;
};
