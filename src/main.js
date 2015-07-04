import {initialize} from "maxim";
import Rx from "rx"


Rx.config.longStackSupport = true


const app = initialize({
  controls: {
    Navigation: require('./controls/NavigationControl'),
  },
  models: {
    Navigation: require('./models/NavigationModel'),
  },
  actors: [
    require('./actors/UserInterfaceActor'),
  ],
});
