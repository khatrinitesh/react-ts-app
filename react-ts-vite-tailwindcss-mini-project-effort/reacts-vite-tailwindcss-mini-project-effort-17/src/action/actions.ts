import { redirect } from 'react-router-dom';

export async function action({ request }: { request: Request }) {
  const formData = new URLSearchParams(await request.text());

  const username = formData.get('username') || '';
  
  // Validate or process the form data here
  // For example, you could send the data to an API or save it somewhere

  // Simulate a validation error for demonstration purposes
  if (!username) {
    return {
      error: 'Username is required',
    };
  }

  console.log('Form Data:', { username });

  // Redirect to a thank you page after successful submission
  return redirect('/thank-you');
}