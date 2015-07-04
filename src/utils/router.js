import Routr from "routr"

const router = new Routr({
  'about': {path: "/", method: "get"},
  'buttons': {path: "/buttons", method: "get"},
})

export default router
