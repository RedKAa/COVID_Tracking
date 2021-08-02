import { CountrySelector, Highlight, Summary } from "./components";
import { getCountries, getReportByCountry } from "./apis";
import { useEffect, useState } from "react";
import { sortBy } from "lodash";
import "@fontsource/roboto";
import moment from "moment";
import "moment/locale/vi";
import { Container, Typography, makeStyles } from "@material-ui/core";

moment.locale("vi");

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  time: {
    textAlign: "center",
  },
  selector: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("VN");
  const [report, setReport] = useState([]);
  const styles = useStyles();

  const handleOnSelectorChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, "Country");
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      const { Slug } = countries.find(
        (country) => country.ISO2 === selectedCountry
      );
      getReportByCountry(Slug).then((res) => {
        // res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountry]);

  return (
    <Container>
      <Typography variant="h2" component="h2" className={styles.title}>
        Thống kê COVID-19
      </Typography>
      <Typography className={styles.time}>{moment().format("LLLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnSelectorChange}
        value={selectedCountry}
        className={styles.selector}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountry={selectedCountry} />
    </Container>
  );
};

export default App;
