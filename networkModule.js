function network()=>{
   console.log(os.networkInterfaces()) ;

}


export  default network();
// os.networkInterfaces() Returns an object containing network interfaces that have been assigned a
// network address.

//Each key on the returned object identifies a network interface. The associated value is an array
// of objects that each describe an assigned network address.

//The properties available on the assigned network address object include:

//address <string> The assigned IPv4 or IPv6 address
//netmask <string> The IPv4 or IPv6 network mask
//family <string> Either IPv4 or IPv6
//mac <string> The MAC address of the network interface
//internal <boolean> true if the network interface is a loopback or similar interface that is
// not remotely accessible; otherwise false
//scopeid <number> The numeric IPv6 scope ID (only specified when family is IPv6)
//cidr <string> The assigned IPv4 or IPv6 address with the routing prefix in CIDR notation. 
//If the netmask is invalid, this property is set to null.