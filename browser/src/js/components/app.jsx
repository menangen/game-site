import { h, app } from "hyperapp"

const node = document.getElementsByTagName("app")[0]

export default app({
    init: 0,
    view: state =>
        <app>
            <h1>Hyperapp: { state }</h1>
            <button onClick={ state => state + 1 } >+</button>
            <button onClick={ state => state - 1 } >-</button>
        </app>,
    node
})