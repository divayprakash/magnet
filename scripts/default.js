var field = "";
var getButton = "";
var copyButton = "";
var openButton = "";

function makeLink(){
    var hash = field.value;
    hash = hash.trim();
    if (hash == '') {
        window.alert('Hash cannot be empty!');
        return;
    }
    if (hash.length < 40) {
        window.alert('Incorrect hash!');
        return;
    }
    var data = 'magnet:?xt=urn:btih:' + hash;
    field.value = data;
    getButton.style.display = 'none';
    copyButton.style.display = 'inline';
    openButton.style.display = 'inline';
}

document.addEventListener('DOMContentLoaded', function(){
    field = document.getElementById('hash');
    getButton = document.getElementById('getlink');
    copyButton = document.getElementById('copylink');
    openButton = document.getElementById('openlink');
    getButton.addEventListener('click', makeLink);
    copyButton.addEventListener('click', function(){
        field.select();
        document.execCommand('copy');
    });
    openButton.addEventListener('click', function(){
        data = field.value;
        window.location.href = data;
    });
});
