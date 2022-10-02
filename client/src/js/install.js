const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Added an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
  //Implemented a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
      event.prompt();
      installBtn.setAttribute('disabled', true);
      installBtn.textContent = 'Installed!';
    });
});




// Added an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
  });