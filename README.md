<p align="center">
  <a href="https://mvs.org/">
    <img src="https://mvs.org/images/metaverselogo.png" alt="">
  </a>
  <br>
  <a href="https://travis-ci.org/canguruhh/mvs-plugin-api">
     <img src="https://travis-ci.org/canguruhh/mvs-plugin-api.png?branch=master" alt="Build status">
  </a>
  <br>
  Plugin API for the Metaverse Blockchain lightwallet
</p>

# Installation
Install using npm:
``` bash
npm install mvs-lightwallet
```

# Setup
``` javascript
<script src="node_modules/mvs-lightwallet/dist/lightwallet.min.js"></script>

or

<script src="https://api.myetpwallet.com/lightwallet.js"></script>
```

If you want to build the API from source you can use grunt.

# Usage

## Get list of Avatars

Required permissions: avatars

``` javascript
var lightwallet = new Lightwallet();

lightwallet.getAvatars()
  .then(avatars=>avatars.forEach(console.log))
  .catch(console.error);
```

## Broadcast raw transaction

Required permissions: broadcast

``` javascript
var lightwallet = new Lightwallet();

lightwallet.broadcast(tx)
  .then(console.log)
  .catch(console.error);
```

## Create MIT registration transaction

Required permissions: create-mit

``` javascript
var lightwallet = new Lightwallet();

var avatar = "canguruhh"; //Avatar that should be the issuer and recipient of the MIT
var symbol = "new-mit"; //New MIT symbol
var content = "some content for the new MIT";
var getraw = true; //Get transaction hex encoded (false will return signed transaction object)

lightwallet.createMIT(avatar, symbol, content, getraw)
  .then(console.log)
  .catch(console.error);
```

## List permissions

No permissions required

``` javascript
var lightwallet = new Lightwallet();


lightwallet.getPermissions()
  .then(permissions=>permissions.forEach(console.log))
  .catch(console.error);
```

# Licence

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
