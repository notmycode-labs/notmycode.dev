---
date: 2025-02-03
title: proof of concept because why not
author: bluestar
desc: 'cool firewall'
tags:
  - poc
---

# PoC: CSNE Firewall Blocking External IPs After Attack Detection

I just conducted some tests to validate the CSNE firewall's behavior when under attack. Below are the results:

#### 1. Test from Singapore Server (External IP - 51.79.141.162):

I attempted to connect to the target server (103.253.75.229:25565) using `nc`.

The connection attempt failed, with the message:
```
103.253.75.229: inverse host lookup failed: Unknown host
```
This suggests that the firewall is rejecting connections from external IPs, possibly due to attack detection.

#### 2. Test from Thai Server (IP - 223.24.191.17):

I attempted to connect to the same target server (103.253.75.229:25565) using `nc`.

The connection was successful, as shown by:
```
Connection to 103.253.75.229 25565 port [tcp/*] succeeded!
```
#### 3. Verbose Ping Test from Thailand Server:

I ran the ping command with verbose mode to check connectivity to 103.253.75.229:
```
ping -v 103.253.75.229
```
The result showed 100% packet loss, with the following statistics indicating the ping was blocked:
```
--- 103.253.75.229 ping statistics --- 12 packets transmitted, 0 received, 100% packet loss, time 11262ms
```
This confirms that the ping packet was blocked, likely by the firewall.

#### 4. Verbose Ping Test from Singapore Server:

I ran the ping command from the Singapore server to the target:
```
ping -v 103.253.75.229
```
The result showed 100% packet loss, with the following error messages:

```
ping: sock4.fd: 3 (socktype: SOCK_RAW), sock6.fd: 4 (socktype: SOCK_RAW), hints.ai_family: AF_UNSPEC ai->ai_family: AF_INET, ai->ai_canonname: '103.253.75.229' PING 103.253.75.229 (103.253.75.229) 56(84) bytes of data. --- 103.253.75.229 ping statistics --- 28 packets transmitted, 0 received, 100% packet loss, time 27609ms
```

The ping failed with 100% packet loss, suggesting the firewall is blocking connections from external IPs.

#### Summary:
This firewall effectively blocks outside IPs after detecting an attack.
