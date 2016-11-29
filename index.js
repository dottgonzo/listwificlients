"use strict";
var child_process = require("child_process");
var Promise = require("bluebird");
function listwifi(device) {
    return new Promise(function (resolve, reject) {
        child_process.exec('iw dev ' + device + ' station dump', function (err, stdout, stderr) {
            if (err) {
                reject(err);
            }
            else {
                resolve(stdout);
            }
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = listwifi;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLGFBQWEsV0FBTSxlQUUvQixDQUFDLENBRjZDO0FBRTlDLElBQVksT0FBTyxXQUFNLFVBSXpCLENBQUMsQ0FKa0M7QUFJbkMsa0JBQWlDLE1BQWM7SUFDM0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLGVBQWUsRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUVsRixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsQ0FBQztRQUdMLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDO0FBakJEOzBCQWlCQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiXG5cbmltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3R3aWZpKGRldmljZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hpbGRfcHJvY2Vzcy5leGVjKCdpdyBkZXYgJyArIGRldmljZSArICcgc3RhdGlvbiBkdW1wJywgZnVuY3Rpb24gKGVyciwgc3Rkb3V0LCBzdGRlcnIpIHtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3Rkb3V0KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcblxuICAgIH0pXG5cblxuXG59XG4iXX0=
