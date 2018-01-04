// ==UserScript==
// @name         CNT Boton de Pagos Kill Killer KeyDown/RigthClick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Elimina el bloqueo de teclas como el control, shift, f5 y Click Derecho
// @author       You
// @match        http://201.219.1.74/atphpplanillaagrupado/formulario.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.oncontextmenu = function(){ return true; };
    document.onkeydown = function(){
        return true;
    };

})();
