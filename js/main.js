//Array de Mensajes para cargar
const newMessages = [
    {
        id: 'mark-webber',
        avatar: 'assets/imagesPng/avatar-mark-webber.png',
        mainMessage: '<strong>Mark Webber</strong> reacted to your recent post <a class="link" href="#">My first tournament today!</a>',
        date: '1m ago',
        picture: '',
        privateMessage: '',
        unread: true
    },
    {
        id: 'angela-gray',
        avatar: 'assets/imagesPng/avatar-angela-gray.png',
        mainMessage: '<strong>Angela Gray</strong> followed you',
        date: '5m ago',
        picture: '',
        privateMessage: '',
        unread: true
    },
    {
        id: 'jacob-thompson',
        avatar: 'assets/imagesPng/avatar-jacob-thompson.png',
        mainMessage: '<strong>Jacob Thompson</strong> has joined your group <a class="link link__group" href="#">Chess Club</a>',
        date: '1 day ago',
        picture: '',
        privateMessage: '',
        unread: true
    },
    {
        id: 'rizky-hasanuddin',
        avatar: 'assets/imagesPng/avatar-rizky-hasanuddin.png',
        mainMessage: '<strong>Rizky Hasanuddin</strong> sent you a private message',
        date: '5 day ago',
        picture: "",
        privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        unread: true
    },
    {
        id: 'kimberly-smith',
        avatar: 'assets/imagesPng/avatar-kimberly-smith.png',
        mainMessage: '<strong>Kimberly Smith</strong> commented on your picture',
        date: '1 week ago',
        picture: 'assets/imagesPng/image-chess.png',
        privateMessage: '',
        unread: true
    },
    {
        id: 'nathan-peterson',
        avatar: 'assets/imagesPng/avatar-nathan-peterson.png',
        mainMessage: '<strong>Nathan Peterson</strong> reacted to your recent post <a class="link" href="#">5 end-game strategies to increase your win rate</a>',
        date: '2 weeks ago',
        picture: '',
        privateMessage: '',
        unread: true
    },
    {
        id: 'anna-kim',
        avatar: 'assets/imagesPng/avatar-anna-kim.png',
        mainMessage: '<strong>Anna Kim</strong> followed you',
        date: '2 weeks ago',
        picture: '',
        privateMessage: '',
        unread: true
    }
];

// Proyecto en VUE.JS
const app = Vue.createApp({
    //Root Component Options
    data(){
        return{
            title: "Prueba de VUE.JS",
            unreadCounter: null,
            readCounter: null,
            isUnread: null,
            unreadMessages: new Map(),
            readMessages: new Map()
        };//end return
    },//end data
    created(){
        const messages = new Map(newMessages.map(message => [message.id, message]));
        this.unreadMessages = messages;
        this.unreadCounter = this.unreadMessages.size;
    },//end created
    methods:{
        markAllRead(){
            this.unreadMessages.forEach(this.moveToReadList);
        },//end markAllRead
        resetCounter(){
            this.unreadCounter = 0;
        },//end resetCounter
        moveToReadList(message){
            console.log("Se llamó al Metodo moveToReadList");
            console.log(message);
            console.log(message.id);
            this.readMessages.set(message.id, message);
            this.readCounter = this.readMessages.size;
            this.unreadMessages.delete(message.id);
            this.unreadCounter = this.unreadMessages.size;
        }
    },//end methods
    computed:{
        allUnreadMessages(){
            return Array.from(this.unreadMessages.values());
        },//end allUnreadMessages
        allReadMessages(){
            return Array.from(this.readMessages.values());
        }//end alleadMessages
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