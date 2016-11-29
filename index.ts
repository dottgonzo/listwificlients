import * as child_process from "child_process"

import * as Promise from "bluebird"



export default function listwifi(device: string) {
    return new Promise((resolve, reject) => {
        child_process.exec('iw dev ' + device + ' station dump', function (err, stdout, stderr) {

            if (err) {
                reject(err)
            } else {
                resolve(stdout)
            }


        })

    })



}
