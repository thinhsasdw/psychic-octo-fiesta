import { BlogPage } from "../pages/blogPage/BlogPage";
import { DoctorPage } from "../pages/DoctorPage/DoctorPage";
import { HealthyPage } from "../pages/HealthyisyourPage/HealthyPage";
import Pagehome from "../pages/homePage/Pagehome";
import pagenotFind from "../pages/NotfindPage/pagenotFind";
import { RoutinePage } from "../pages/RoutinesPage/RoutinePage";

export const routes = [
  {
    path: "/",
    page: Pagehome,
    isShowHeader: true,
  },
  {
    path: "/healthy",
    page: HealthyPage,
    isShowHeader: true,
  },
  {
    path: "/blog",
    page: BlogPage,
    isShowHeader: true,
  },
  {
    path: "/routine",
    page: RoutinePage,
    isShowHeader: true,
  },
  {
    path: "/doctor",
    page: DoctorPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: pagenotFind,
  },
];
