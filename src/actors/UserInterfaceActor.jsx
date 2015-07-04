import Rx from "rx"
import React from "react"
import ReactDOM from "react-dom"
import FastClick from "fastclick"
import Application from "../components/Application"


// React.initializeTouchEvents(true)
FastClick.attach(document.body)


export default function UserInterfaceActor(Actions, Replayables) {
  Rx.Observable.combineLatest(
    Replayables.Navigation,
    (route) => ({route})
  )
    .subscribe(state => {
      try {
        ReactDOM.render(
          <Application Actions={Actions} {...state} />,
          document.getElementById('react-app')
        )
      }
      catch(e) {
        console.error(e)
      }
    })
}
