const newMessage = {
    id: 'Pablo Malave',
    avatar: 'assets/imagesPng/avatar-mark-webber.png',
    mainMessage: '<strong>Pablo Malave</strong> reacted to your recent post <a class="link" href="#">My first tournament today!</a>',
    date: '1m ago',
    picture: '',
    privateMessage: '',
    unread: true
};

// Proyecto en VUE.JS
const app = Vue.createApp({
    //Root Component Options
    data(){
        return{
            title: "Prueba de VUE.JS",
            unreadCounter: null,
            isUnread: null,
            messages: new Map()
        };//end return
    },//end data
    created(){
        this.unreadCounter = 4;
        this.isUnread = true;
        this.messages.set(newMessage.id, newMessage);
    },//end created
    methods:{
        markAllRead(){
            this.isUnread = false;
            this.resetCounter();
        },//end markAllRead
        resetCounter(){
            this.unreadCounter = 0;
        }//end resetCounter
    },//end methods
    computed:{
        allMessages(){
            return Array.from(this.messages.values());
        }//end allMessages
    }//end computed
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