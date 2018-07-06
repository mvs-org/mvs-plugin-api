function Lightwallet() {
    this.nonce = Math.floor(new Date()*1000);
    this.tasks = {};
    if (window.parent == window) throw 'Plugin must be child of lightwallet';
    else
        window.onmessage = (e) => {
            if (e.source == window) return;
            if (typeof this.tasks[e.data.nonce] !== 'undefined') {
                if (e.data.topic == 'error')
                    this.tasks[e.data.nonce](e.data.value, e.data);
                else
                    this.tasks[e.data.nonce](false, e.data);
                delete this.tasks[e.data.nonce];
            }
        };
};
Lightwallet.prototype.send = function(data, target) {
    if (typeof target === 'undefined')
        target = 'http://localhost:8100';
    data.nonce = this.nonce++;
    window.parent.postMessage(data, target);
    return new Promise((resolve, reject) => {
        this.tasks[data.nonce] = function(error, data) {
            if (error)
                reject(Error(error));
            else
                resolve(data);
        };
    });
};

Lightwallet.prototype.createMIT = function(avatar, symbol, content, raw) {
    if(typeof raw === 'undefined')
        raw=false;

    return this.send({
        query: 'create-mit',
        params: {
            symbol: symbol,
            content: content,
            avatar: avatar,
            raw: raw
        }
    }).then(response => response.value);
};

Lightwallet.prototype.getAddresses = function() {
    return this.send({
        query: 'addresses'
    }).then(response => response.value);
};

Lightwallet.prototype.getAvatars = function() {
    return this.send({
        query: 'avatars'
    }).then(response => response.value);
};

Lightwallet.prototype.broadcast = function(tx) {
    return this.send({
        query: 'broadcast',
        params: {
            tx: tx
        }
    }).then(response => response.value);
};

Lightwallet.prototype.getPermissions = function() {
    return this.send({
        query: 'permissions'
    });
};

module.exports = Lightwallet;
