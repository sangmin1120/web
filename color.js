
var Body = {
    setcolor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setbackgroundcolor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var links = {
    setcolor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
function nightdayhandle(self) {
    var target = document.querySelector('body');
    if (self.value == 'night') {
        Body.setbackgroundcolor('black');
        Body.setcolor('white');
        self.value = 'day';

        links.setcolor('powderblue');
    }

    else {
        Body.setbackgroundcolor('white');
        Body.setcolor('black');
        self.value = 'night';

        links.setcolor('blue');
    }
    document.querySelector('.tog').value = self.value
}
