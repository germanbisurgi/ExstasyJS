var InputManager = function(game) {
    
    "use strict";
    var self = this;
    self.game = game;
    
    self.mouse = {
        x: null,
        y: null,
        left: {isPressed: false},
        right: {isPressed: false},
        middle: {isPressed: false},
        wheelDirection: null
    };

    self.touch = {
        x: null,
        y: null,
        touched: false,
    };

    self.keyboard = {
        Enter:      {isPressed: false, name: 'Enter'},
        Shift:      {isPressed: false, name: 'Shift'},
        Control:    {isPressed: false, name: 'Control'},
        Alt:        {isPressed: false, name: 'Alt'},
        Spacebar:   {isPressed: false, name: 'Spacebar'},
        ArrowLeft:  {isPressed: false, name: 'ArrowLeft'},
        ArrowUp:    {isPressed: false, name: 'ArrowUp'},
        ArrowRight: {isPressed: false, name: 'ArrowRight'},
        ArrowDown:  {isPressed: false, name: 'ArrowDown'},
        a:          {isPressed: false, name: 'a'},
        b:          {isPressed: false, name: 'b'},
        c:          {isPressed: false, name: 'c'},
        d:          {isPressed: false, name: 'd'},
        e:          {isPressed: false, name: 'e'},
        f:          {isPressed: false, name: 'f'},
        g:          {isPressed: false, name: 'g'},
        h:          {isPressed: false, name: 'h'},
        i:          {isPressed: false, name: 'i'},
        j:          {isPressed: false, name: 'j'},
        k:          {isPressed: false, name: 'k'},
        l:          {isPressed: false, name: 'l'},
        m:          {isPressed: false, name: 'm'},
        n:          {isPressed: false, name: 'n'},
        o:          {isPressed: false, name: 'o'},
        p:          {isPressed: false, name: 'p'},
        q:          {isPressed: false, name: 'q'},
        r:          {isPressed: false, name: 'r'},
        s:          {isPressed: false, name: 's'},
        t:          {isPressed: false, name: 't'},
        u:          {isPressed: false, name: 'u'},
        v:          {isPressed: false, name: 'v'},
        w:          {isPressed: false, name: 'w'},
        x:          {isPressed: false, name: 'x'},
        y:          {isPressed: false, name: 'y'},
        z:          {isPressed: false, name: 'z'},
        num0:       {isPressed: false, name: '0'},
        num1:       {isPressed: false, name: '1'},
        num2:       {isPressed: false, name: '2'},
        num3:       {isPressed: false, name: '3'},
        num4:       {isPressed: false, name: '4'},
        num5:       {isPressed: false, name: '5'},
        num6:       {isPressed: false, name: '6'},
        num7:       {isPressed: false, name: '7'},
        num8:       {isPressed: false, name: '8'},
        num9:       {isPressed: false, name: '9'},
    };

    var checkKey = function check(e) {
        var code = e.keyCode;
        var key;
        switch (code) {
            // case 3 : key = "break"; break;
            // case 8 : key = "backspace / delete"; break;
            // case 9 : key = "tab"; break;
            // case 12 : key = 'clear'; break;
            case 13 : key = "Enter"; break;
            case 16 : key = "Shift"; break;
            case 17 : key = "Control"; break;
            case 18 : key = "Alt"; break;
            // case 19 : key = "pause;/break"; break;
            // case 20 : key = "caps lock"; break;
            case 27 : key = "Escape"; break;
            case 32 : key = "Spacebar"; break;
            // case 33 : key = "page up"; break;
            // case 34 : key = "page down"; break;
            // case 35 : key = "end"; break;
            // case 36 : key = "home "; break;
            case 37 : key = "ArrowLeft"; break;
            case 38 : key = "ArrowUp"; break;
            case 39 : key = "ArrowRight"; break;
            case 40 : key = "ArrowDown"; break;
            // case 41 : key = "select"; break;
            // case 42 : key = "print"; break;
            // case 43 : key = "execute"; break;
            // case 44 : key = "Print Screen"; break;
            // case 45 : key = "insert "; break;
            // case 46 : key = "delete"; break;
            case 48 : key = "num0"; break;
            case 49 : key = "num1"; break;
            case 50 : key = "num2"; break;
            case 51 : key = "num3"; break;
            case 52 : key = "num4"; break;
            case 53 : key = "num5"; break;
            case 54 : key = "num6"; break;
            case 55 : key = "num7"; break;
            case 56 : key = "num8"; break;
            case 57 : key = "num9"; break;
            // case 58 : key = ":" ; break;
            // case 59 : key = "semicolon (firefox); break; equals"; break;
            // case 60 : key = "<"; break;
            // case 61 : key = "equals (firefox)"; break;
            // case 63 : key = "ß"; break;
            // case 64 : key = "@ (firefox)"; break;
            case 65 : key = "a"; break;
            case 66 : key = "b"; break;
            case 67 : key = "c"; break;
            case 68 : key = "d"; break;
            case 69 : key = "e"; break;
            case 70 : key = "f"; break;
            case 71 : key = "g"; break;
            case 72 : key = "h"; break;
            case 73 : key = "i"; break;
            case 74 : key = "j"; break;
            case 75 : key = "k"; break;
            case 76 : key = "l"; break;
            case 77 : key = "m"; break;
            case 78 : key = "n"; break;
            case 79 : key = "o"; break;
            case 80 : key = "p"; break;
            case 81 : key = "q"; break;
            case 82 : key = "r"; break;
            case 83 : key = "s"; break;
            case 84 : key = "t"; break;
            case 85 : key = "u"; break;
            case 86 : key = "v"; break;
            case 87 : key = "w"; break;
            case 88 : key = "x"; break;
            case 89 : key = "y"; break;
            case 90 : key = "z"; break;
            // case 91 : key = "Windows Key / Left ⌘ / Chromebook Search key"; break;
            // case 92 : key = "right window key "; break;
            // case 93 : key = "Windows Menu / Right ⌘"; break;
            case 96 : key = "0"; break;
            case 97 : key = "1"; break;
            case 98 : key = "2"; break;
            case 99 : key = "3"; break;
            case 100 : key = "4"; break;
            case 101 : key = "5"; break;
            case 102 : key = "6"; break;
            case 103 : key = "7"; break;
            case 104 : key = "8"; break;
            case 105 : key = "9"; break;
            // case 106 : key = "multiply "; break;
            // case 107 : key = "add"; break;
            // case 108 : key = "numpad period (firefox)"; break;
            // case 109 : key = "subtract "; break;
            // case 110 : key = "decimal point"; break;
            // case 111 : key = "divide "; break;
            // case 112 : key = "f1 "; break;
            // case 113 : key = "f2 "; break;
            // case 114 : key = "f3 "; break;
            // case 115 : key = "f4 "; break;
            // case 116 : key = "f5 "; break;
            // case 117 : key = "f6 "; break;
            // case 118 : key = "f7 "; break;
            // case 119 : key = "f8 "; break;
            // case 120 : key = "f9 "; break;
            // case 121 : key = "f10"; break;
            // case 122 : key = "f11"; break;
            // case 123 : key = "f12"; break;
            // case 124 : key = "f13"; break;
            // case 125 : key = "f14"; break;
            // case 126 : key = "f15"; break;
            // case 127 : key = "f16"; break;
            // case 128 : key = "f17"; break;
            // case 129 : key = "f18"; break;
            // case 130 : key = "f19"; break;
            // case 131 : key = "f20"; break;
            // case 132 : key = "f21"; break;
            // case 133 : key = "f22"; break;
            // case 134 : key = "f23"; break;
            // case 135 : key = "f24"; break;
            // case 144 : key = "num lock "; break;
            // case 145 : key = "scroll lock"; break;
            // case 160 : key = "^"; break;
            // case 161 : key = '!'; break;
            // case 163 : key = "#"; break;
            // case 164 : key = '$'; break;
            // case 165 : key = 'ù'; break;
            // case 166 : key = "page backward"; break;
            // case 167 : key = "page forward"; break;
            // case 169 : key = "closing paren (AZERTY)"; break;
            // case 170 : key = '*'; break;
            // case 171 : key = "~ + * key"; break;
            // case 173 : key = "minus (firefox); break; mute/unmute"; break;
            // case 174 : key = "decrease volume level"; break;
            // case 175 : key = "increase volume level"; break;
            // case 176 : key = "next"; break;
            // case 177 : key = "previous"; break;
            // case 178 : key = "stop"; break;
            // case 179 : key = "play/pause"; break;
            // case 180 : key = "e-mail"; break;
            // case 181 : key = "mute/unmute (firefox)"; break;
            // case 182 : key = "decrease volume level (firefox)"; break;
            // case 183 : key = "increase volume level (firefox)"; break;
            // case 186 : key = "semi-colon / ñ"; break;
            // case 187 : key = "equal sign "; break;
            // case 188 : key = "comma"; break;
            // case 189 : key = "dash "; break;
            // case 190 : key = "period "; break;
            // case 191 : key = "forward slash / ç"; break;
            // case 192 : key = "grave accent / ñ / æ"; break;
            // case 193 : key = "?; break; / or °"; break;
            // case 194 : key = "numpad period (chrome)"; break;
            // case 219 : key = "open bracket "; break;
            // case 220 : key = "back slash "; break;
            // case 221 : key = "close bracket / å"; break;
            // case 222 : key = "single quote / ø"; break;
            // case 223 : key = "`"; break;
            // case 224 : key = "left or right ⌘ key (firefox)"; break;
            // case 225 : key = "altgr"; break;
            // case 226 : key = "< /git >"; break;
            // case 230 : key = "GNOME Compose Key"; break;
            // case 231 : key = "ç"; break;
            // case 233 : key = "XF86Forward"; break;
            // case 234 : key = "XF86Back"; break;
            // case 255 : key = "toggle touchpad"; break;
        }
        return key;
    };

    document.onkeydown = function(event) {
        event.preventDefault();
        var keyboarKey = checkKey(event);
        if (keyboarKey) {
            self.keyboard[keyboarKey].isPressed = true;
        }
        
    };

    document.onkeyup = function(event) {
        event.preventDefault();
        var keyboarKey = checkKey(event);
        if (keyboarKey) {
            self.keyboard[keyboarKey].isPressed = false;
        }
    };

    document.onmousedown = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        if (keyCode === 1) {
            self.mouse.left.isPressed = true;
        }
        if (keyCode === 2) {
            self.mouse.middle.isPressed = true;
        }
        if (keyCode === 3) {
            self.mouse.right.isPressed = true;
        }
    };

    document.onmouseup = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        if (keyCode === 1) {
            self.mouse.left.isPressed = false;
        }
        if (keyCode === 2) {
            self.mouse.middle.isPressed = false;
        }
        if (keyCode === 3) {
            self.mouse.right.isPressed = false;
        }
    };

    document.onmousemove = function(event) {
        self.mouse.x = event.clientX;
        self.mouse.y = event.clientY;
    };

    document.onwheel = function(e) {
        e.preventDefault();
        var wDelta = e.wheelDelta < 0 ? self.mouse.wheelDirection = 'down' : self.mouse.wheelDirection = 'up';
    };

    document.addEventListener('touchstart', function(e) {
        self.touch.touched = true; 
        self.touch.x = Math.round(e.touches[0].clientX);
        self.touch.y = Math.round(e.touches[0].clientY);
    });

    document.addEventListener('touchend', function(e) {
        self.touch.touched = false;
    });

    document.addEventListener('touchmove', function(e) {
        self.touch.touched = true; 
        self.touch.x = Math.round(e.touches[0].clientX);
        self.touch.y = Math.round(e.touches[0].clientY);
    });

    document.addEventListener('touchcancel', function(e) {
        self.touch.touched = false; 
    });

};