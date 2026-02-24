/**
 * SmartBiz Notification Logic
 * This file contains static data that can be easily swapped for an API call.
 */

const NOTIFICATIONS_DATA = [
  { id: 1, title: 'New Sale: RWF 45,000', time: '2 mins ago', icon: 'bi-cart-check', color: 'ni-green' },
  { id: 2, title: 'Low Stock Alert: HP Laptop', time: '1 hour ago', icon: 'bi-exclamation-triangle', color: 'ni-amber' },
  { id: 3, title: 'System Update: v2.4 Fixed', time: '4 hours ago', icon: 'bi-info-circle', color: 'ni-blue' },
  { id: 4, title: 'Expense reported: RWF 10,000', time: '6 hours ago', icon: 'bi-card-list', color: 'ni-amber' }
];

/**
 * Renders notifications into the dropdown list
 */
function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;

  if (NOTIFICATIONS_DATA.length === 0) {
    list.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--muted); font-size: 13px;">No new notifications</div>`;
    return;
  }

  list.innerHTML = NOTIFICATIONS_DATA.map(n => `
    <div class="notif-item">
      <div class="notif-icon ${n.color}"><i class="bi ${n.icon}"></i></div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>
  `).join('');
}

/**
 * Toggles the notification dropdown
 * @param {Event} e 
 */
function toggleNotifs(e) {
  if (e) e.stopPropagation();
  const drop = document.getElementById('notifDrop');
  const dot = document.getElementById('notifDot');
  if (!drop) return;
  
  const isOpening = !drop.classList.contains('show');
  
  // Close other dropdowns
  document.querySelectorAll('.notif-dropdown').forEach(d => d.classList.remove('show'));

  if (isOpening) {
    drop.classList.add('show');
    renderNotifications();
    if (dot) dot.style.display = 'none'; // Hide red dot once seen
  } else {
    drop.classList.remove('show');
  }
}

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  const drop = document.getElementById('notifDrop');
  if (drop && !drop.contains(e.target)) {
    drop.classList.remove('show');
  }
});

// Initial render attempt (if element exists)
document.addEventListener('DOMContentLoaded', renderNotifications);
