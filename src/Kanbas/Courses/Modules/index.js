import ModuleList from "./ModuleList";
import TopBar from "./TopBar";
function Modules() {
  return (
    <div class="col-lg-9 col-md-8 col-sm-12">
      <TopBar />
      <hr className="mt-5"></hr>
      <ModuleList />
    </div>
  );
}
export default Modules;
