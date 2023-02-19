// Mark All as Read
const markAllReadLink = document.querySelector(".markAllRead__link");
markAllReadLink.addEventListener("click", markAllRead);

function markAllRead() {
    //Remove Unread background
    const notificationsUnread = document.querySelectorAll(".notification--unread");
    notificationsUnread.forEach(removeClass, "notification--unread");
    //Remove Unread flag
    const unreadFlags = document.querySelectorAll(".notification__flag");
    unreadFlags.forEach(removeClass, "notification__flag");
    //Reset counter
    resetCounter();
}

function resetCounter() {
    const unreadCounter = document.querySelector(".unread__counter");
    unreadCounter.innerHTML = "0"
}

function removeClass(item) {
    item.classList.remove(this);
}