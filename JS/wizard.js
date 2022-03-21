function nextbutton() {
    var x = document.getElementById('blocktemp');
    var y = document.getElementById('blocktempt');
    var i = document.getElementById('smts');
    var a = document.getElementById('sst');
    var j = document.getElementById('firstCircle');
    var d = document.getElementById('stepCircle');
    var m = document.getElementById('secondCircle');

    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
        i.style.transform = 'translateY(100px)';
        a.style.height = '200px'
        j.style.color = 'rgba(240, 205, 122, 1)';
        d.style.display = 'block';
        m.style.display = 'none';
    }
    else {
        x.style.display = 'block';
        y.style.display = 'none';
        i.style.transform = 'translateY(0px)';
        a.style.height = '0px'
        j.style.color = 'rgba(112, 29, 201, 1)';
        d.style.display = 'none';
        m.style.display = 'block';

    }
}

function Backbutton() {
    var y = document.getElementById('blocktempt');
    var x = document.getElementById('blocktemp');
    var i = document.getElementById('smts');
    var a = document.getElementById('sst');
    var j = document.getElementById('firstCircle');
    var d = document.getElementById('stepCircle');
    var m = document.getElementById('secondCircle');
    if (y.style.display === 'block') {
        y.style.display = 'none';
        x.style.display = 'block';
        i.style.transform = 'translateY(0px)';
        a.style.height = '100px'
        j.style.color = 'rgba(112, 29, 201, 1)';
        d.style.display = 'none';
        m.style.display = 'block';
    }
    else {
        x.style.display = 'none';
        y.style.display = 'block';
        i.style.transform = 'translateY(100px)';
        a.style.height = '0px'
        j.style.color = 'rgba(240, 205, 122, 1)';
        d.style.display = 'block';
        m.style.display = 'none';
  
    }

}



function pre() {
    var b = document.getElementById('blocktemptsw');
    var y = document.getElementById('blocktempt');
    var i = document.getElementById('smts');
    var a = document.getElementById('sst');
    var t = document.getElementById('lastCircle');
    var p = document.getElementById('thirdCircle');
    var d = document.getElementById('stepCircle');
    if (b.style.display === 'none') {
        b.style.display = 'block';
        y.style.display = 'none';
        i.style.transform = 'translateY(200px)';
        a.style.height = '300px'
        t.style.display = 'block';
        p.style.display = 'none';
        d.style.color = 'rgba(240, 205, 122, 1)';
    }
    else {
        b.style.display = 'none';
        y.style.display = 'block';
        i.style.transform = 'translateY(0px)';
        a.style.height = '0px'
        t.style.display = 'none';
        p.style.display = 'block';
        d.style.color = 'rgba(112, 29, 201, 1)';
    }
}

function last() {
    var b = document.getElementById('blocktemptsw');
    var y = document.getElementById('blocktempt');
    var i = document.getElementById('smts');
    var a = document.getElementById('sst');
    var t = document.getElementById('lastCircle');
    var p = document.getElementById('thirdCircle');
    var d = document.getElementById('stepCircle');
    if (b.style.display === 'block') {
        b.style.display = 'none';
        y.style.display = 'block';
        i.style.transform = 'translateY(100px)';
        a.style.height = '200px'
        t.style.display = 'none';
        p.style.display = 'block';
        d.style.color = 'rgba(112, 29, 201, 1)';

    }
    else {
        b.style.display = 'block';
        y.style.display = 'none';
        i.style.transform = 'translateY(0px)';
        a.style.height = '0px'
        t.style.display = 'block';
        p.style.display = 'none';
        d.style.color = 'rgba(240, 205, 122, 1)';
    }
}