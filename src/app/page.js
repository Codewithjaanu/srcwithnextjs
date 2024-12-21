import { Contant } from "./Components/Contant";
import { DigitalAgencies } from "./Components/DigitalAgencies";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Increase } from "./Components/Increase";
import { Plans } from "./Components/Plans";
import { SearchInsights } from "./Components/SearchInsights";

export default function Home() {
  return (
    <>
      <Header />
      <Contant />
      <SearchInsights />
      <DigitalAgencies />
      <Plans/>
      <Increase/>
      <Footer/>
    </>
  );
}
