function createDialog(id, heading) {
    const dialog = document.createElement('dialog');
    dialog.id = id;

    const form = document.createElement('form');

    const formHeader = document.createElement('div');
    formHeader.classList.add('form-header');

    const dialogHeading = document.createElement('h2');
    dialogHeading.textContent = heading;

    const closeDialogButton = document.createElement('button');
    closeDialogButton.setAttribute('type', 'button');
    closeDialogButton.id = 'close-dialog';
    closeDialogButton.setAttribute('autofocus', '');

    const icon = document.createElement('img');
    icon.src = './images/close.svg';
    icon.alt = 'Close icon';
    closeDialogButton.append(icon);

    formHeader.append(dialogHeading, closeDialogButton);

    const formInputs = document.createElement('div');
    formInputs.classList.add('form-inputs');

    const formSubmit = document.createElement('div');
    formSubmit.classList.add('form-submit');
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.id = 'submit-btn';
    submitButton.textContent = 'Submit';
    formSubmit.append(submitButton);

    form.append(formHeader, formInputs, formSubmit);
    dialog.append(form);
    document.querySelector('body').append(dialog);

    dialog.showModal();
    
    closeDialogButton.addEventListener('click', () => {
        dialog.remove();
    });
    
    return dialog;
}

function createLabel(inputId, textContent) {
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = textContent;
    return label;
}

function createInput(type, id, name, value) {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.id = id;
    input.setAttribute('name', name);
    if (value) input.setAttribute('value', value);
    input.setAttribute('required', '');
    return input;
}

function createTextArea() {
    const textArea = document.createElement('textarea');
    textArea.id = 'description';
    textArea.setAttribute('name', 'description');
    textArea.setAttribute('rows', '2');
    textArea.setAttribute('required', '');
    return textArea;
}

function createPriorityContainer() {
    const fieldSet = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent= 'Priority';
    const ul = document.createElement('ul');

    const lowPriorityInput = createPriorityInput('low_priority', 
        'low', true);
    const mediumPriorityInput = createPriorityInput('medium_priority', 
        'medium', false);
    const highPriorityInput = createPriorityInput('high_priority', 
        'high', false);

    ul.append(lowPriorityInput, mediumPriorityInput, highPriorityInput);
    fieldSet.append(legend, ul);
    return fieldSet;
}

function createPriorityInput(id, value, isSelected) {
    const container = document.createElement('li');

    const input = createInput('radio', id, 'priority', value);
    if (isSelected) input.setAttribute('checked', '');
    
    const label = createLabel(id, 
        `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    );
    label.classList.add('radio-label');

    container.append(input, label);
    return container;
}

function createIcon(src, alt, height, width) {
    const icon = document.createElement('img');
    icon.src = src;
    icon.alt = alt;
    icon.height = height;
    icon.width = width;
    return icon;
}

export { 
    createDialog,
    createLabel,
    createInput,
    createTextArea,
    createPriorityContainer,
    createIcon, 
}