<template>
	<div class="contact">
		<div class="card">
			<div class="buttons is-centered">
				<a class="button is-large is-info" href="https://linkedin.com/in/ciarandeegan" target="_blank">
					<span class="icon is-large">
						<b-icon pack="fab" icon="linkedin"/>
					</span>
				</a>
				<a class="button is-large" href="https://github.com/CiaranDeegan" target="_blank">
					<span class="icon is-large">
						<b-icon pack="fab" icon="github"/>
					</span>
				</a>
				<a class="button is-large" href="mailto:ciaran@cdeegan.xyz" target="_blank">
					<span class="icon is-large">
						<b-icon icon="email"/>
					</span>
				</a>
			</div>
			<div>
				<form id="contact-form" @submit.prevent="submitForm">
					<h1 class="title is-5">Send me a message</h1>
					<p class="subtitle is-italic is-size-7">messages will be sent to ciaran@cdeegan.xyz</p>
					<b-field grouped>
						<b-field label="Name" expanded>
							<b-input v-model="form.name" name="name" placeholder="Name"/>
						</b-field>
						<b-field label="Email" expanded>
							<b-input v-model="form.email" name="email" placeholder="Email Address"/>
						</b-field>
					</b-field>

					<b-field label="Message">
						<b-input v-model="form.message" type="textarea"/>
					</b-field>

					<button type="submit" class="button is-primary is-fullwidth">Send Message</button>
				</form>
				<b-loading :active.sync="loading" :is-full-page="false"/>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import APIKey from '../assets/json/sendgrid_api_key';

export default {
	data() {
		return {
			form: {
				name: '',
				email: '',
				message: ''
			},
			loading: false,
			sendgridURL: 'https://api.sendgrid.com/v3/mail/send'
		}
	},
	methods: {
		submitForm: function() {
			this.loading = true;
			const payload = this.buildPayload(this.form);
			const headers = this.buildHeaders(APIKey.key);
			axios.post(this.sendgridURL, payload, headers).then(() => {
				this.$toast.open({
					message: 'Message successfully sent!',
					type: 'is-success'
				});
				this.form = this.resetForm();
				this.loading = false;
			}).catch(() => {
				this.$toast.open({
					message: 'Message failed to send! Please try again later.',
					type: 'is-danger'
				});
				this.form = this.resetForm();
				this.loading = false;
			});

		},
		buildHeaders: function(key) {
			return { 
				headers: {'Authorization':  'Bearer ' + key }
			}
		},
		buildPayload: function(form) {
			return {
				'personalizations': [{
					'to': [{'email': 'ciarandee@gmail.com' }],
					'subject': 'cdeegan.xyz Contact Form'		
				}],
				'from': { 'email': form.email },
				'content': [{
					'type': 'text/plain',
					'value': form.message
				}]
			}
		},
		resetForm() {
			return {
				name: '',
				email: '',
				message: ''
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.card {
		padding: 2em;
	}
</style>
