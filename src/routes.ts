import VueRouter, { RawLocation, RouteRecord, RouteRecordPublic } from "vue-router";

import Home from "./pages/Home.vue";
import ConnectWalletPage from "./pages/ConnectWalletPage.vue";
import { Position, PositionResult, Route, RouteConfigSingleView } from "vue-router/types/router";

const routes: RouteConfigSingleView[] = [
  {
    path: "/",
    component: Home,
  },
  { path: "/connect-wallet", component: ConnectWalletPage, meta: { scrollToTop: true } },
];

const scrollBehavior = (
  to: Route,
  from: Route,
  savedPosition: Position | void
): PositionResult | Promise<PositionResult> | undefined | null => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position: PositionResult | Promise<PositionResult> = { selector: "", offset: { x: 0, y: 0 } };
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
      console.log(to);
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.offset = { x: 0, y: 0 };
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
  }
};

const router: VueRouter = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior,
});

export default router;
