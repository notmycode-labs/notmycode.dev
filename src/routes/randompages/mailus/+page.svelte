<script>
	let name = '';
	let email = '';
	let message = '';
	let isSubmitting = false;
	let successMessage = '';

	let errors = {
        name: '',
        email: '',
        message: ''
    };

	const blacklistRegexes = [
        new RegExp("@\\s*e\\s*v\\s*e\\s*r\\s*y\\s*o\\s*n\\s*e", "i"),
        new RegExp("@\\s*h\\s*e\\s*r\\s*e", "i")
    ];
	const patterns = {
		name: /^[a-zA-Z\s]{2,50}$/,
		email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		message: /^[\s\S]{10,500}$/
	};

	const errorMessages = {
		name: 'Name must be 2-50 characters long and contain only letters',
		email: 'Please enter a valid email address',
		message: 'Message must be between 10 and 500 characters'
	};

	function validateField(field, value) {
        if (field === 'email', 'name', 'message') {
            for (const regex of blacklistRegexes) {
                if (regex.test(value)) {
                    errors[field] = 'Your content contains blacklisted words';
                    return false;
                }
            }
        }

        if (!patterns[field].test(value)) {
            errors[field] = errorMessages[field];
            return false;
        }
        
        errors[field] = '';
        return true;
    }

	const submitForm = async () => {
		const isNameValid = validateField('name', name);
		const isEmailValid = validateField('email', email);
		const isMessageValid = validateField('message', message);

		if (!isNameValid || !isEmailValid || !isMessageValid) {
			return;
		}
		isSubmitting = true;

		const payload = {
			content: `# New Contact Form Submission\n\n🔔 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`
		};

		try {
			const res = await fetch('https://webhook-handler.takemypic5121.workers.dev', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!res.ok) throw new Error('Failed to send webhook');
			successMessage = 'Submitted successfully!';

			name = '';
			email = '';
			message = '';
		} catch (error) {
			successMessage = 'Submission failed!';
			console.error(error);
		} finally {
			isSubmitting = false;
		}
	};
</script>

<div class="flex justify-center items-center min-h-screen">
  <div class="max-w-md w-full p-6">
    <h1 class="text-2xl font-bold mb-4">Contact Us</h1>
    <form on:submit|preventDefault={submitForm}>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          on:blur={() => validateField('name', name)}
          class="w-full px-3 py-2 rounded-md bg-gray-700/50"
          placeholder="Enter your name"
          required
        />
        {#if errors.name}
          <p class="text-red-500 text-sm mt-1">{errors.name}</p>
        {/if}
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          on:blur={() => validateField('email', email)}
          class="w-full px-3 py-2 rounded-md bg-gray-700/50"
          placeholder="Enter your email"
          required
        />
        {#if errors.email}
          <p class="text-red-500 text-sm mt-1">{errors.email}</p>
        {/if}
      </div>

      <div class="mb-4">
        <label for="message" class="block text-sm font-medium mb-2">Your Message</label>
        <textarea
          id="message"
          bind:value={message}
          on:blur={() => validateField('message', message)}
          class="w-full px-3 py-2 rounded-md bg-gray-700/50"
          placeholder="Enter your message"
          rows="4"
          required
        ></textarea>
        {#if errors.message}
          <p class="text-red-500 text-sm mt-1">{errors.message}</p>
        {/if}
      </div>

      {#if successMessage}
        <div class="mb-4 text-green-600">{successMessage}</div>
      {/if}

      <div class="mb-4">
        <button 
          type="submit" 
          class="w-full button px-4 py-2 rounded-md" 
          disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
        >
          {#if isSubmitting}
            Submitting...
          {:else}
            Submit
          {/if}
        </button>
      </div>
    </form>
  </div>
</div>