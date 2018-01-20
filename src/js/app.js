import '../css/main.css';
import '../css/input-element.css';
import {secretButton, secretParagraph} from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toogleSecretState);

updateSecretParagraph();

function toogleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContext = 'Hide the secret';
    } else {
        secretButton.textContext = 'Show the secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}
