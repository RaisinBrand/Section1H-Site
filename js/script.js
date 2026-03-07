// ===================================
// Timeline Event Data
// ===================================

const timelineData = {
  1: {
    year: '1967',
    title: 'Vietnam Divestment',
    description: `
      
      <p>The Vietnam War had a drastic fiscal toll that began to cannibalize the funds available to support </p>
      `
  },
  2: {
    year: '1985',
    title: 'Cornell Anti-Apartheid',
    description: `
      <p>The media plays a crucial role in shaping public perception of student divestment campaigns, but the coverage of UC divestment campaigns over the years has vastly changed. During the Vietnam War and South African Apartheid, student activists were framed as heroic and intellectual changemakers. However, with the 2024 Palestine protests, students were depicted in the media as disruptive and antisemetic.</p>
    `
  },
  3: {
    year: '2012',
    title: 'Fossil Fuel UC Divestment',
    description: `
      <p>Starting 2012, UC students began organizing and formed Fossil Free UC
      In 2019, the UC Academic Senate voted overwhelmingly to formally appeal to the Board of Regents to divest
      On May 19, 2020, UC announced full divestment from fossil fuels
      </p>
    `
  },
  4: {
    year: '2017',
    title: 'Policy Changes',
    description: `
      <p>After years of sustained pressure, the University began implementing concrete policy changes related to investment practices. These changes represented a significant shift in how the UC system approached its investment portfolio.</p>
      <p>New policies included enhanced screening processes for investments, increased transparency in reporting, and in some cases, actual divestment from specific industries or companies identified as problematic.</p>
      <p>While activists celebrated these changes as victories resulting from their organizing efforts, debates continued about the scope and implementation of the new policies, with many calling for more comprehensive reforms.</p>
    `
  }
};

// ===================================
// DOM Elements
// ===================================

const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const timelineEvents = document.querySelectorAll('.timeline-event');

// ===================================
// Event Listeners
// ===================================

// Add click event to each timeline event
timelineEvents.forEach(event => {
  event.addEventListener('click', function() {
    const eventId = this.getAttribute('data-id');
    openModal(eventId);

    // Add active class to clicked event
    timelineEvents.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
  });
});

// Close modal when clicking the X button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

// ===================================
// Modal Functions
// ===================================

/**
 * Opens the modal and displays event details
 * @param {string} eventId - The ID of the event to display
 */
function openModal(eventId) {
  const eventData = timelineData[eventId];

  if (eventData) {
    // Set modal content
    modalTitle.textContent = eventData.title;
    modalYear.textContent = eventData.year;
    modalBody.innerHTML = eventData.description;

    // Show modal with animation
    modal.classList.add('show');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Closes the modal and removes active states
 */
function closeModal() {
  modal.classList.remove('show');

  // Remove active class from all events
  timelineEvents.forEach(e => e.classList.remove('active'));

  // Restore body scroll
  document.body.style.overflow = '';
}

// ===================================
// Smooth Scroll Enhancement
// ===================================

/**
 * Adds smooth scrolling behavior for better UX
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// Initialization
// ===================================

/**
 * Initialize the page when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('UC Divestment History Timeline initialized');
  console.log(`Total events: ${Object.keys(timelineData).length}`);
});
