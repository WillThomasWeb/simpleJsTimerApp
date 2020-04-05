const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart() {
        console.log(this, "started");
    },
    onTick() {
        console.log('timer ticked down');
    },
    onComplete() {
        console.log('timer ended');
    }
});

