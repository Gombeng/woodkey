import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Main.tsx"),
  route("about", "routes/About.tsx"),
  route("works", "routes/Work.tsx"),
  route("contacts", "routes/Contact.tsx"),
  route("admin", "routes/Admin.tsx"),
] satisfies RouteConfig;
