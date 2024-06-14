(function checkForButton() {

    function findButton() {

        const buttonSpan = document.querySelector('.general-button.button-primary.join-button .general-box.box-primary .box-inner span');
        

        if (buttonSpan && buttonSpan.textContent === 'JOIN') {

            const button = buttonSpan.closest('.general-button.button-primary.join-button');
            const buttonVisible = button && button.offsetParent !== null;
            return buttonVisible ? button : null;
        }
        return null;
    }

    const button = findButton();
    if (button) {
        console.log('Button found and visible! Clicking the button...');
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        
        button.dispatchEvent(event);
    } else {
        console.log('Button not found or not visible, retrying...');
    }

    setTimeout(checkForButton, 10000); 
})();
