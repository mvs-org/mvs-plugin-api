var Lightwallet = (function() {
    var Lightwallet = function() {
        this.tasks = {};
        if (window.parent == window) throw 'Plugin must be child of lightwallet';
        else
            window.onmessage = (e) => {
                if(e.source == window) return;
                if (typeof this.tasks[e.data.id] !== 'undefined') {
                    this.tasks[e.data.id](e.data);
                    delete this.tasks[e.data.id];
                }
            };
    };
    Lightwallet.prototype.send = function(data, target) {
        if (typeof target === 'undefined')
            target = '*';
        var id = new Date() * 1;
        data.id = id;
        window.parent.postMessage(data, target);
        var resolver = (resolve) => {
            this.tasks[id] = function(data) {
                resolve(data);
            };
        };
        return new Promise(resolver);
    };

    Lightwallet.prototype.getAvatars = function() {
        return this.send({
            query: 'avatars'
        }).then(response=>response.value);
    };

    Lightwallet.prototype.getPermissions = function() {
        return this.send({
            query: 'permissions'
        });
    };
    return Lightwallet;
})();


module.exports = Lightwallet;
