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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLGFBQWEsV0FBTSxlQUUvQixDQUFDLENBRjZDO0FBRTlDLElBQVksT0FBTyxXQUFNLFVBRXpCLENBQUMsQ0FGa0M7QUFFbkMsa0JBQWlDLE1BQWM7SUFDM0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLGVBQWUsRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUVsRixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsQ0FBQztRQUdMLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDO0FBakJEOzBCQWlCQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiXG5cbmltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHdpZmkoZGV2aWNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaGlsZF9wcm9jZXNzLmV4ZWMoJ2l3IGRldiAnICsgZGV2aWNlICsgJyBzdGF0aW9uIGR1bXAnLCBmdW5jdGlvbiAoZXJyLCBzdGRvdXQsIHN0ZGVycikge1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzdGRvdXQpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuXG4gICAgfSlcblxuXG5cbn1cbiJdfQ==
