import { Home } from "../Pages/Home";
import { CatalogSingle } from "../Pages/Catalog-Single/Catalgo.single";
import { ProductDetail } from "../Pages/Product-Dedail/Product-detail";
import { NoteFaund } from "../Pages/Note-faund/note-faund";

export const routes = [
  {
    component: Home,
    path: "/",
  },
  {
    component: CatalogSingle,
    path: "/catalog-single/:name",
  },
  {
    component: ProductDetail,
    path: "/product-detail/:id",
  },
 
  {
    component: NoteFaund,
    path: "*",
  },
];
