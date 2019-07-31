import { h, app } from "hyperapp"

export default app({
    init: 0,
    view: state => <h1>Hyperapp</h1>,
    node: document.getElementsByTagName("app")[0]
})