import { useRoute } from "./router";
import { Layout } from "./components/Layout";
import { TodayPage } from "./pages/Today";
import { MonthsPage } from "./pages/Months";
import { MonthDetailPage } from "./pages/MonthDetail";
import { PlayPage } from "./pages/Play";
import { SourcesPage } from "./pages/Sources";

export default function App() {
  const route = useRoute();

  let page = <TodayPage />;
  let key = "today";

  if (route.name === "months") {
    page = <MonthsPage />;
    key = "months";
  } else if (route.name === "month") {
    page = <MonthDetailPage month={route.month} anchor={route.anchor} />;
    key = `month-${route.month}`;
  } else if (route.name === "play") {
    page = <PlayPage />;
    key = "play";
  } else if (route.name === "sources") {
    page = <SourcesPage />;
    key = "sources";
  }

  return (
    <Layout route={route}>
      <div className="animate-fade-in" key={key}>
        {page}
      </div>
    </Layout>
  );
}
