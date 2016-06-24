  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQOOXiRb13u9o8ZWZt7yi_sk8ebmqX1fY",
    authDomain: "vuejs-firebase-18ca2.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-18ca2.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


var chatComponent = Vue.extend({
	template:`
	<style type="text/css" scoped>
		.chat{
			padding: 0;
		}
		.chat li{
			margin-bottom: 10px;
			padding-bottom: 10px;
		}
		.chat li.left .chat-body{
			margin-left: 70px;
		}
		.chat li.right .chat-body{
			margin-right: 70px;
			text-align: right;
		}
		.panel-body{
			overflow-y: scroll;
			height: 400px;
		}
	</style>
	<div class="panel panel-primary">
		<div class="panel-heading">Chat</div>
		<div class="panel-body">
			<ul class="chat list-unstyled">
				<li class="clearfix" v-bind:class="{'left': !isUser(o.email), 'right': isUser(o.email)}" v-for="o in chat.messages">
					<span v-bind:class="{'pull-left': !isUser(o.email), 'pull-right': isUser(o.email)}">
						<img v-bind:src="o.photo" alt="" class="img-circle" />
					</span>
					<div class="chat-body">
						<p>{{o.text}}</p>
					</div>
				</li>
			</ul>							
		</div>
	</div>
	`,
	data: function(){
		return {
			user: {
				email: 'pedro@pedroweb.com.br',
				name: 'Pedro Wallauschek'
			},
			chat: {
				messages: [
					{
						email: "fulano@gmail.com",
						text: "Olá eu sou o Fulano, tudo bem?",
						name: "Fulano",
						photo: "http://placehold.it/50/000FFF/fff&text=FULANO"
					},
					{
						email: "pedro@pedroweb.com.br",
						text: "Tudo!",
						name: "Pedro Wallauschek",
						photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
					},
					{
						email: "pedro@pedroweb.com.br",
						text: "Não te conheço...",
						name: "Pedro Wallauschek",
						photo: "http://placehold.it/50/FFFFFF/fff&text=EU"
					}
				]
			}
		};
	},
	methods: {
		isUser: function(email){
			return this.user.email == email;
		}
	}
});

var appComponent = Vue.extend({});


Vue.component('my-chat',chatComponent);

var router = new VueRouter();

router.map({
	'/chat':{
		component: chatComponent
	}
});

router.start(appComponent, "#app");