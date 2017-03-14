var closeModal = function(event){
    var targetElement =  event.currentTarget;
    var modal = targetElement.parentElement;
    removeModal(modal);
};

var removeModal = function(modal) {
    removeElement(modal, ["md-closed","hiding"], 1000);
};

var removeElement = function (element, classname, timeOut, callback){
    if(arguments.length == 1) {
        if (typeof arguments[0] === "object") {
            element.remove();
        }
    }
    else if (arguments.length == 2) {
        if (typeof arguments[0] === "object" && (typeof arguments[1] === "string" || arguments[1].constructor === Array)) {
            removeElementAfterAddClass(element,classname);
        }
        else if (typeof arguments[0] === "object" && typeof arguments[1] === "number") {
            removeElementAfter(element,arguments[1]);
        }
        else if (typeof arguments[0] === "object" && typeof arguments[1] === "function") {
            element.remove();
            arguments[1]();
        }
    }
    else if (arguments.length == 3) {
        if (typeof arguments[0] === "object" && (typeof arguments[1] === "string" || arguments[1].constructor === Array) && typeof arguments[2] === "number") {
            removeElementAfterAddClass(element,classname,timeOut);
        }
        else if (typeof arguments[0] === "object" &&(typeof arguments[1] === "string" || arguments[1].constructor === Array) && typeof arguments[2] === "function") {
            removeElementAfterAddClass(element,classname);
        }
        else if (typeof arguments[0] === "object" && typeof arguments[1] === "number" && typeof arguments[2] === "function") {
            removeElementAfter(element,arguments[1]);
            arguments[2]();
        }
    }
    else {
        removeElementAfterAddClass(element,classname,timeOut);
        if(typeof callback === "function"){
            callback();
        }
    }
};

var removeElementAfter = function(element, timeOut) {
    timeOut = (typeof timeOut !== 'number') ?  0 : timeOut;
    setTimeout(function(){
        element.remove();
    },timeOut);
};

var removeElementAfterAddClass =  function (element, classname, timeOut){
    if (classname.constructor === Array) {
        for (var i = 0; i < classname.length; i++){
            element.classList.toggle(classname[i]);
        }
    }
    else {
        element.classList.toggle(classname);
    }
    removeElementAfter(element, timeOut);
};