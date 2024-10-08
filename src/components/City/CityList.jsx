import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CityItem from "./CityItem";
import { useCities } from "../../../contexts/citiescontext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by selecting the one on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
