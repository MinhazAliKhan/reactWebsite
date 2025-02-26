import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&/all?fields=name,population,region,capital,flags`
  );
};
