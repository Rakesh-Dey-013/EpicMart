const threeDotsButton = document.querySelector('.nav-bar-three-dots');
const threeDotsSidebar = document.querySelector('.nav-bar-three-dots-sidebar');
const threeDotsSidebarClose = document.querySelector('.nav-bar-three-dots-sidebar-close');

threeDotsButton.addEventListener('click', () => {
    threeDotsSidebar.classList.toggle('show');
});

threeDotsSidebarClose.addEventListener('click', () => {
    threeDotsSidebar.classList.remove('show');
});




document.addEventListener('DOMContentLoaded', () => {
    // Array of container IDs
    const containerIds = [
      'container1', 'container2', 'container3', 'container4',
      'container5', 'container6'
    ];
  
    // Function to create a love button
    const createLoveButton = (id) => {
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
  
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = `favorite-${id}`;
      input.name = 'favorite-checkbox';
      input.value = `favorite-button-${id}`;
  
      const label = document.createElement('label');
      label.htmlFor = `favorite-${id}`;
      label.className = 'container';
  
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.classList.add('feather', 'feather-heart');
  
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
      
      svg.appendChild(path);
      label.appendChild(svg);
      buttonContainer.appendChild(input);
      buttonContainer.appendChild(label);
  
      return buttonContainer;
    };
  
    // Function to add love button to a specific container
    const addButtonToContainer = (containerId, buttonId) => {
      const container = document.getElementById(containerId);
      if (container) {
        container.appendChild(createLoveButton(buttonId));
      }
    };
  
    // Create love buttons in each container
    containerIds.forEach((containerId, index) => {
      addButtonToContainer(containerId, index + 1);
    });
  });
  