import ModuleList from "../Modules/ModuleList";
import TopBar from "../Modules/TopBar";
import RightPanel from "./RightPanel";
function Home() {
  return (
    <>
      <div class="col-xl-7 col-lg-9 col-md-8 col-sm-12">
        <TopBar />
        <hr className="mt-5"></hr>
        <ModuleList />
      </div>
      <RightPanel />
    </>
  );
}
export default Home;
