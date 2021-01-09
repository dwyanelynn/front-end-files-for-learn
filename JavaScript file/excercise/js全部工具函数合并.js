function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
        obj.addEventListener(eventStr, callback, false);
    }else {
        obj.attachEvent(`on${eventStr}`, function() {
            callback.call(obj);
        });
    }
}

function getStyle(obj, name) {
    if (window.getComputedStyle) {     
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

function randomNum(maxNum, minNum, decimalNum) {
    let max = 0,
        min = 0;
    minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);
    switch (arguments.length) {
        case 1:
            return Math.floor(Math.random() * (max + 1));
            break;
        case 2:
            return Math.floor(Math.random() * (max - min + 1) + min);
            break;
        case 3:
            return (Math.random() * (max - min) + min).toFixed(decimalNum);
            break;
        default:
            return Math.random();
            break;
    }
}

function boxMove(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current >= target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
        obj.style[attr]= newValue + 'px';
        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 20)
}

function drag (obj) {
    obj.onmousedown = function(event) {
        obj.setCapture && obj.setCapture();
    
        event = event || window.event;
        let ol = event.clientX - obj.offsetLeft;
        let ot = event.clientY - obj.offsetTop;
    
        document.onmousemove = function (event) {
            event = event || window.event;
            let a = event.clientX - ol;
            let b = event.clientY - ot;
            obj.style.left = `${a}px`;
            obj.style.top = `${b}px`;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            obj.releaseCapture && obj.releaseCapture();
        }
        return false;
    }
}

function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

function hasClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');

    return reg.test(obj.className);
}

function removeClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    obj.className = obj.className.replace(reg, "");
}

function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    }else {
        addClass(obj, cn);
    }
}