// ===================================
// Timeline Event Data
// ===================================

const timelineData = {
  1: {
    year: '2014',
    title: 'Initial Calls for Divestment',
    description: `
      <p>Student organizations across UC campuses began organizing campaigns calling for the University to divest from fossil fuel companies and other controversial industries. This marked the beginning of a sustained movement that would grow over the following years.</p>
      <p>Key moments included the formation of student coalitions, initial proposals to student government bodies, and early advocacy efforts directed at university administration and the Board of Regents.</p>
      <p>These initial calls laid the groundwork for broader organizing efforts and helped establish divestment as a central issue for student activism across the UC system.</p>
    `
  },
  2: {
    year: '2015',
    title: 'Student Protests',
    description: `
      <p>Building on momentum from the previous year, students organized large-scale protests, demonstrations, and sit-ins to demand action on divestment. Protests took place at multiple UC campuses and at Board of Regents meetings.</p>
      <p>Student activists employed various tactics including petition drives that gathered thousands of signatures, coordinated social media campaigns, and direct engagement with university officials.</p>
      <p>The movement gained significant media attention and support from faculty members, alumni, and community organizations, increasing pressure on university leadership to respond to student demands.</p>
    `
  },
  3: {
    year: '2016',
    title: 'Administrative Response',
    description: `
      <p>University administrators and the Board of Regents began formally responding to student demands. This included establishing committees to study the feasibility of divestment, holding public forums, and releasing statements addressing the concerns raised by students.</p>
      <p>While some viewed these initial responses as progress, many student activists felt the administration's approach was insufficient and designed to delay meaningful action rather than implement substantive policy changes.</p>
      <p>This period saw continued dialogue between students and administration, with both sides presenting research, economic analyses, and ethical arguments to support their positions.</p>
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
