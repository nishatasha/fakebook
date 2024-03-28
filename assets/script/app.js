'use strict';

import { User, Subscriber } from './classes.js';
import { toggleModal } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const userModal = document.querySelector('#userModal');
    const postForm = document.querySelector('.postForm');
    const closeBtn = document.querySelector('.close');
    const postsSection = document.querySelector('.postsSection');
    const image = document.querySelector('.image');

    // Check if modal and close button exist
    if (!userModal || !closeBtn) {
        console.error('Modal or close button not found');
        return;
    }

    // Create a new Subscriber using the User instance
    const subscriber = new Subscriber(
        '0123',
        'Nish Ash',
        'nish04',
        'nishash@example.com',
        ['Group 1', 'Group 2'],
        ['Page 1', 'Page 2'],
        true
    );

    // Populate the user modal with user info
    if (userModal && subscriber) {
        userModal.innerHTML = subscriber.getInfo();
    } else {
        console.error('User modal or subscriber not found');
    }

    // Handle form submission
    if (postForm) {
        postForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(postForm);
            const postContent = formData.get('postContent');
            const imageFile = formData.get('image');

            // Reset the file input
            postForm.querySelector('input[type="file"]').value = '';

            postForm.reset();

            // Simulate posting delay 
            await new Promise(resolve => setTimeout(resolve, 500));

            // Create a new post with the data
            createPost(postContent, imageFile);
        });
    } else {
        console.error('Post form not found');
    }

    // Toggle modal when clicking on the image
    if (image) {
        image.addEventListener('click', () => {
            toggleModal('#userModal');
        });
    } else {
        console.error('Image element not found');
    }

    // Close modal when clicking on the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toggleModal('#userModal');
        });
    } else {
        console.error('close button  not found');
    }

    // Close modal when clicking on the modal backdrop
    closeBtn.addEventListener('click', (event) => {
        if (event.target === userModal) {
            toggleModal();
        }
    });

    function createPost(content, image) {
        // Create a container for the post
        const postContainer = document.createElement('div');
        postContainer.classList.add('post-container');

        // Create the post element
        const post = document.createElement('div');
        post.classList.add('post');

        // Profile picture
        const profilePic = document.createElement('img');
        profilePic.classList.add('profile-pic');
        profilePic.src = './assets/image/user.jpg';
        profilePic.style.width = '50px'; // Set the width
        profilePic.style.height = '50px'; // Set the height
        profilePic.style.borderRadius = '50%';
        profilePic.style.display = 'inline-block';
        profilePic.style.border = '1px solid rgba(0 0 0 / 0.1)';
        post.appendChild(profilePic);

        // User information container
        const userInfoContainer = document.createElement('div');
        userInfoContainer.classList.add('user-info-container');

        // User name
        const userName = document.createElement('div');
        userName.classList.add('user-name');
        userName.textContent = 'Nishat Asha';
        userName.style.fontSize = '18px';
        userName.style.fontWeight = '600';
        userName.style.lineHeight = '50px'; // Center the text vertically
        userName.style.display = 'inline-block'; // Ensure inline-block display
        userName.style.verticalAlign = 'top';
        userName.style.marginLeft = '10px';
        post.appendChild(userName);

        // Post date
        const postDate = document.createElement('div');
        postDate.classList.add('post-date');

        // Get the current date
        const currentDate = new Date();

        // Define options for formatting the date
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        // Format the date using the options
        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        // Set the formatted date as the text content
        postDate.textContent = formattedDate;

        // Apply CSS styles
        postDate.style.display = 'inline-block'; // Ensure inline-block display
        postDate.style.verticalAlign = 'top';
        postDate.style.float = 'right';
        postDate.style.color = '#0f0f0f'; // Corrected color value

        // Append the post date to the post
        post.appendChild(postDate);


        // Append the user information container to the post
        post.appendChild(userInfoContainer);

        // Post content
        const postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.style.fontSize = '17px';
        postContent.textContent = content;
        post.appendChild(postContent);



        if (image && image.type && image.type.startsWith('image/')) {
            const imageElement = document.createElement('img');
            imageElement.classList.add('post-image');
            imageElement.src = URL.createObjectURL(image);
            post.appendChild(imageElement);
        }


        // Append the post to the post container
        postContainer.appendChild(post);

        // Append the post container to the posts section
        postsSection.appendChild(postContainer);

        // Make the posts section visible
        postsSection.style.display = 'block';
    }
});
