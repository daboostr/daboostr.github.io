// Session data for different tracks
const sessionData = {
  ai: [
    {
      time: "9:00 AM - 10:00 AM",
      title: "The Future of Neural Networks",
      speaker: "Dr. Jane Smith"
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "Practical Machine Learning in Production",
      speaker: "Alex Kumar"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Ethics in AI Development",
      speaker: "Maria Garcia"
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "Deep Learning Workshop",
      speaker: "Dr. Jane Smith"
    }
  ],
  cloud: [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Kubernetes at Scale",
      speaker: "Michael Johnson"
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "Serverless Architecture Patterns",
      speaker: "Lisa Chen"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Multi-Cloud Strategies",
      speaker: "Michael Johnson"
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "DevOps Best Practices",
      speaker: "Tom Anderson"
    }
  ],
  web: [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Modern Frontend Frameworks",
      speaker: "Raj Patel"
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "Performance Optimization Techniques",
      speaker: "Raj Patel"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Progressive Web Apps",
      speaker: "Emily Zhang"
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "Web Assembly Workshop",
      speaker: "David Lee"
    }
  ],
  security: [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Zero Trust Security Architecture",
      speaker: "Sarah Chen"
    },
    {
      time: "10:30 AM - 11:30 AM",
      title: "Secure Coding Practices",
      speaker: "James Wilson"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Privacy by Design",
      speaker: "Sarah Chen"
    },
    {
      time: "2:30 PM - 3:30 PM",
      title: "Incident Response Workshop",
      speaker: "Mike Roberts"
    }
  ]
};

// Animate counter numbers
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Initialize counters when they're in viewport
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
  });
}

// Modal functionality
const modal = document.getElementById('sessionModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

function openModal(track) {
  const trackNames = {
    ai: 'AI & Machine Learning',
    cloud: 'Cloud & DevOps',
    web: 'Web Technologies',
    security: 'Security & Privacy'
  };

  modalTitle.textContent = `${trackNames[track]} Sessions`;
  
  const sessions = sessionData[track];
  modalBody.innerHTML = sessions.map(session => `
    <div class="session-item">
      <div class="session-time">${session.time}</div>
      <div class="session-title">${session.title}</div>
      <div class="session-speaker">Speaker: ${session.speaker}</div>
    </div>
  `).join('');

  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

// Event listeners for track buttons
document.querySelectorAll('.track-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const trackId = btn.dataset.trackId;
    openModal(trackId);
  });
});

// Event listeners for track cards
document.querySelectorAll('.track-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.classList.contains('track-btn')) {
      const trackId = card.dataset.track;
      openModal(trackId);
    }
  });
});

// Close modal button
closeModalBtn?.addEventListener('click', closeModal);

// Close modal on outside click
modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Registration form
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

registrationForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Hide form and show success message
  registrationForm.style.display = 'none';
  successMessage.style.display = 'block';
  
  // Optionally, you could send the data to a server here
  const formData = new FormData(registrationForm);
  console.log('Registration data:', Object.fromEntries(formData));
});

// Register button in hero
document.getElementById('registerBtn')?.addEventListener('click', () => {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

// Learn more button
document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
  document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
});
