import Routr from "routr"

const router = new Routr({
  'about': {path: "/", method: "get"},
  'buttons': {path: "/buttons", method: "get"},
  'demo': {path: "/demo", method: "get"},
})

export default router
