document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const displayInfo = document.getElementById('display-info');
    const copyBtn = document.getElementById('copy-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        displayFormData();
    });

    copyBtn.addEventListener('click', function() {
        copyToClipboard(displayInfo.innerText);
    });

    function displayFormData() {
        const cameraShot = document.getElementById('camera-shot').value;
        const briefDescription = document.getElementById('brief-box').value;
        const objectDescription = document.getElementById('object-box').value;
        const actionDescription = document.getElementById('action-box').value;
        const surroundingDescription = document.getElementById('surrounding-box').value;
        const vibeDescription = document.getElementById('vibe-box').value;
        const stylingOptions = getCheckedOptions('styling-options');
        const lightingOptions = document.getElementById('lighting-options').value;
        const parameters = document.getElementById('parameters-box').value;

        const info = `
            <p>${cameraShot}.</p>
            <p>${briefDescription}</p>
            <p>${objectDescription}</p>
            <p>${actionDescription}</p>
            <p>${surroundingDescription}</p>
            <p>${vibeDescription}</p>
            <p>${stylingOptions.join('. ')}</p>
            <p>${lightingOptions}.</p>
            <p>${parameters}</p>
        `;

        displayInfo.innerHTML = info;
    }

    function getCheckedOptions(id) {
        const options = document.querySelectorAll(`#${id} input[type="checkbox"]:checked`);
        return Array.from(options).map(option => option.value);
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
