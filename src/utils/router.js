import Routr from "routr"

const router = new Routr({
  'about': {path: "/", method: "get"},
  'buttons': {path: "/buttons", method: "get"},
  'inputs': {path: "/inputs", method: "get"},
  'demo': {path: "/demo", method: "get"},
})

export default router
