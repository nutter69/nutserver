import dgram from "node:dgram";
const sv = dgram.createSocket("udp4");
sv.on('connect' , () => {
    console.log("Nut Connected");
})
sv.on('message' , (m,c) => {
    console.log(`${c.address} : ${m}`);
})
