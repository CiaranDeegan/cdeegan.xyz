<template>
	<div class="contact">
		<div class="card">
			<section class="buttons is-centered">
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
			</section>
			<section>
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

					<button type="submit" class="button is-primary">Send Message</button>
				</form>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				email: '',
				message: ''
			}
		}
	},
	methods: {
		submitForm: function() {
			console.log(this.form);
			this.form = {
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
	button {
		width: 100%;
	}
</style>
