const newMessage = {
    avatar: 'assets/imagesPng/avatar-mark-webber.png',
    mainMessage: '<strong>Mark Webber</strong> reacted to your recent post <a class="link" href="#">My first tournament today!</a> <span class="notification__flag"> </span>',
    date: '1m ago',
    status:'unread'
};

// Proyecto en VUE.JS
const app = Vue.createApp({
    //Root Component Options
    data(){
        return{
            title: "Prueba de VUE.JS",
            unreadCounter: null,
            isUnread: null
        };//end return
    },//end data
    created(){
        this.unreadCounter = 4;
        this.isUnread = true;
    },//end created
    methods:{
        markAllRead(){
            this.isUnread = false;
            this.resetCounter();
        },//end markAllRead
        resetCounter(){
            this.unreadCounter = 0;
        }//end resetCounter
    }//end methods
});// end createApp

app.mount('#app');


// Proyecto Anterior en Vanilla JS
// Mark All as Read
// const markAllReadLink = document.querySelector(".markAllRead__link");
// markAllReadLink.addEventListener("click", markAllRead);

// function markAllRead() {
//     //Remove Unread background
//     const notificationsUnread = document.querySelectorAll(".notification--unread");
//     notificationsUnread.forEach(removeClass, "notification--unread");
//     //Remove Unread flag
//     const unreadFlags = document.querySelectorAll(".notification__flag");
//     unreadFlags.forEach(removeClass, "notification__flag");
//     //Reset counter
//     resetCounter();
// }

// function resetCounter() {
//     const unreadCounter = document.querySelector(".unread__counter");
//     unreadCounter.innerHTML = "0"
// }

// function removeClass(item) {
//     item.classList.remove(this);
// }