var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    keyPath : './certs/private.pem.key',
    certPath : './certs/certificate.pem.crt',
    caPath : './certs/AmazonRootCA1.pem',
    clientId: 'swanhtetaung',
        host : 'aeejowedc1a5m-ats.iot.us-east-1.amazonaws.com'
});


var current = new Date();

device.on('connect', function(){
    console.log('connect');
    device.subscribe('BeeHiveData');
    device.publish('BeeHiveData', JSON.stringify({timeStamp: current, bee_hive_id: 12, temperature: "35°C", humidity: "50%", acousticSensor: "150Hz",imageSensor:"No Object Detected" }));
})

device.on('message', function(topic, payload){
    console.log('message', topic, payload.toString())
})