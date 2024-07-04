let bgmusic = new Audio('bgmusic.mp3');
let gameover_sound = new Audio('game-over.mp3');
let foodeating_sound = new Audio('coin.mp3');


let score = 0;
const scoreElement = document.getElementById("score");


function Mymove() {
   
    let id = null;
    const box1 = document.getElementById("box1");
    let id1 = null;
    const box2 = document.getElementById("box2");

    let tpos = 0;
    let lpos = 0;
    let keystate = 0;
    let tpos2 = 0;
    let lpos2 = 0;

    function changeposition() {
        lpos2 = Math.floor(Math.random() * (500 - 50));
        tpos2 = Math.floor(Math.random() * (500 - 50));
        box2.style.left = lpos2 + "px";
        box2.style.top = tpos2 + "px";
    }
    function gameover() {
        clearInterval(id);
        bgmusic.pause();
        alert("game-over");
    }

    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        bgmusic.play();
        document.onkeydown = function (event) {
            switch (event.keyCode) {
                case 37:
                    keystate = 1;
                    break;
                case 38:
                    keystate = 3;
                    break;
                case 39:
                    keystate = 2;
                    break;
                case 40:
                    keystate = 4;
                    break;
            }
        };

        if (keystate == 1) {
            lpos--;
            box1.style.backgroundImage = "url(pac-man2.gif)";
            if (lpos < 0) {
                lpos = 0;
                gameover_sound.play();
                gameover();
            }
            box1.style.left = lpos + "px";
            if (
                lpos2 <= lpos + 25 &&
                lpos <= lpos2 + 25 &&
                tpos <= tpos2 + 25 &&
                tpos2 <= tpos + 25
            ) {
                foodeating_sound.play();
                changeposition();
                score++;
                scoreElement.textContent = `Score: ${score}`;
            }
        } else if (keystate == 2) {
            lpos++;
            box1.style.backgroundImage = "url(pac-man.gif)";
            if (lpos > 450) {
                lpos = 450;
                gameover_sound.play();
                gameover();
            }
            box1.style.left = lpos + "px";
            if (
                lpos2 <= lpos + 25 &&
                lpos <= lpos2 + 25 &&
                tpos <= tpos2 + 25 &&
                tpos2 <= tpos + 25
            ) {
                foodeating_sound.play();
                changeposition();
                score++;
                scoreElement.textContent = `Score: ${score}`;
            }
        } else if (keystate == 3) {
            tpos--;
            box1.style.backgroundImage = "url(pac-man3.gif)";
            if (tpos < 0) {
                tpos = 0;
                gameover_sound.play();
                gameover();
            }
            box1.style.top = tpos + "px";
            if (
                lpos2 <= lpos + 25 &&
                lpos <= lpos2 + 25 &&
                tpos <= tpos2 + 25 &&
                tpos2 <= tpos + 25
            ) {
                foodeating_sound.play();
                changeposition();
                score++;
                scoreElement.textContent = `Score: ${score}`;
            }
        } else if (keystate == 4) {
            tpos++;
            box1.style.backgroundImage = "url(pac-man4.gif)";
            if (tpos > 450) {
                tpos = 450;
                gameover_sound.play();
                gameover();
            }
            box1.style.top = tpos + "px";
            if (
                lpos2 <= lpos + 25 &&
                lpos <= lpos2 + 25 &&
                tpos <= tpos2 + 25 &&
                tpos2 <= tpos + 25
            ) {
                foodeating_sound.play();
                changeposition();
                score++;
                scoreElement.textContent = `Score: ${score}`;
            }
        }
    }

    changeposition();
}
