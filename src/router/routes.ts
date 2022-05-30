import Home from "../views/Home.vue";
import Login from '../views/Login.vue';
import AxiosExample from '../components/example/AxiosExample.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiredAuth: true,
    }
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login,
  // },
  // Other
  {
    path: "/AxiosExample",
    name: "AxiosExample",
    component: AxiosExample,
    meta: {
      requiredAuth: true,
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
]

export default routes;
