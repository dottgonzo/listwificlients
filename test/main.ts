import wificlientlist from "../index"
import * as chai from "chai"

const expect=chai.expect


wificlientlist('wlp3s0').then((a) => {
console.log(a)
}).catch((err) => {
    console.log(err)
})