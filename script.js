const controlPanel = document.getElementById('control-center');

// Simulate the split notification/control swipe
document.querySelector('.status-bar').addEventListener('click', (e) => {
  const width = e.currentTarget.offsetWidth;
  if (e.clientX > width / 2) {
    // Top Right: Open Control Center
    controlPanel.style.top = '0';
  } else {
    // Top Left: Open Notifications (Logic for notification panel here)
    alert("Notification Tray Opened");
  }
});

// Close panel on click inside
controlPanel.addEventListener('click', () => {
  controlPanel.style.top = '-100%';
});
