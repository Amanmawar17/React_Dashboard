import Menu from "./Menu";
import Navbar from "./Navbar";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <>
      <section>
        <Navbar />
        <Menu />
        <Chart/>
      </section>
    </>
  );
}
