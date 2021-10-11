import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import TollReport from "../../components/tollReport/TollReport";

export default function Home() {
  return (
    <div className="home">
      <Topbar/>
      <FeaturedInfo />
      <TollReport />
    </div>
  );
}
