import { createWebHistory, createRouter } from "vue-router";
import HomePageSeven from "../components/Pages/HomePageSeven";
import BuyHouse from "../components/Pages/BuyHouse";
import Leads from "../components/Pages/Leads";
import Thanks from "../components/Pages/Thanks";
import Redirect from "../components/Pages/Redirect";
import AboutUs from "../components/Pages/AboutUs";
import LoanOptions from "../components/Pages/LoanOptions";
import Refinance from "../components/Pages/Refinance"
import Learn from "../components/Pages/Learn"
import Calculator from "../components/Pages/Calculator"
import ContactUs from "../components/Pages/ContactUs"

const routes = [
  { path: "/", name: "HomePageOne", component: HomePageSeven },
  { path: "/buy-house", name: "BuyHouse", component: BuyHouse },
  { path: "/leads", name: "Leads", component: Leads },
  { path: "/thanks", name: "Thanks", component: Thanks },
  { path: "/redirect", name: "Redirect", component: Redirect },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/loan-options", name: "LoanOptions", component: LoanOptions },
  { path: "/learning-center", name: "Learn", component: Learn },
  { path: "/calculator", name: "Calculator", component: Calculator },
  { path: "/refinance", name: "Refinance", component: Refinance },
  { path: "/contact-us", name: "ContactUs", component: ContactUs},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
