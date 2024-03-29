const createProfile = async (name, needed_funding, description) => {
  try {
    const response = await fetch(`/api/profiles`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      throw new Error('Failed to create profile');
    }
  } catch (error) {
    console.error('Error creating profile:', error.message);
    alert('Failed to create profile');
  }
};

const deleteProfile = async (id) => {
  try {
    const response = await fetch(`/api/profiles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      throw new Error('Failed to delete profile');
    }
  } catch (error) {
    console.error('Error deleting profile:', error.message);
    alert('Failed to delete profile');
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-name').value.trim();
  const needed_funding = parseFloat(document.querySelector('#user-funding').value.trim());
  const description = document.querySelector('#user-desc').value.trim();

  if (name && needed_funding && description) {
    await createProfile(name, needed_funding, description);
  } else {
    alert('Please fill out all fields');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    await deleteProfile(id);
  }
};

document
  .querySelector('.new-profile-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.profile-list')
  .addEventListener('click', delButtonHandler);