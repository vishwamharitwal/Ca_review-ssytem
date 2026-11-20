document.addEventListener("DOMContentLoaded", () => {
    // GSAP Intro Animation with Welcome Screen
    const tl = gsap.timeline();

    // 1. Animate Welcome Screen
    tl.to(".welcome-logo", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.5)"
    })
        .to(".welcome-text", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4")
        // 2. Hold for a moment, then fade out the whole welcome screen
        .to(".welcome-screen", {
            opacity: 0,
            duration: 0.6,
            delay: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                document.getElementById('welcome-screen').style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling if needed
            }
        })
        // 3. Animate Main Card In
        .to(".card", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.2")
        // 4. Animate Stars
        .from(".stars i", {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=0.4");

    // Removing chip GSAP animation to fix visibility issues
    gsap.set(".chip", { opacity: 1, y: 0 });

    // Rating Logic
    const stars = document.querySelectorAll('.stars i');
    const ratingText = document.getElementById('rating-text');
    let currentRating = 0; // Starts empty

    const ratingDescriptions = {
        1: "Poor",
        2: "Fair",
        3: "Good",
        4: "Very Good",
        5: "Excellent"
    };

    stars.forEach(star => {
        star.addEventListener('mouseover', function () {
            const val = parseInt(this.getAttribute('data-value'));
            highlightStars(val);
        });

        star.addEventListener('mouseout', function () {
            highlightStars(currentRating);
        });

        star.addEventListener('click', function () {
            const newRating = parseInt(this.getAttribute('data-value'));
            if (currentRating !== newRating) {
                currentRating = newRating;
                highlightStars(currentRating);
                ratingText.textContent = ratingDescriptions[currentRating];
                renderChips(currentRating);

                if (currentRating === 5 && typeof confetti === 'function') {
                    confetti({
                        particleCount: 150,
                        spread: 80,
                        origin: { y: 0.6 },
                        colors: ['#FFD700', '#FFA500', '#FF8C00', '#ffffff'] // Golden theme colors
                    });
                }
            }
        });
    });

    function highlightStars(val) {
        stars.forEach(star => {
            const starVal = parseInt(star.getAttribute('data-value'));
            if (starVal <= val) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Carousel Logic
    const carouselCard = document.getElementById('carousel-card');
    const carouselText = document.getElementById('carousel-text');
    const carouselControls = document.getElementById('carousel-controls');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const carouselDots = document.getElementById('carousel-dots');

    let currentMessageIndex = 0;
    let currentChipsList = [];
    let selectedMessage = "";

    const commentsData = {
        5: [
            "G R A M And Associates LLP ke sath taxation aur ITR filing ka experience behad smooth raha. Team bohot professional aur knowledgeable hai! 👍",
            "Audit and corporate compliance services ke liye top-notch CA firm. Timely guidance aur clear explanations ke liye highly recommended.",
            "Hamari company ki GST compliances aur financial advisory kaafi efficiently handle karte hain. Always reliable and responsive.",
            "Tax planning aur startup advisory mein bohot acche insights mile. G R A M And Associates LLP ka approach bohot systematic aur transparent hai.",
            "Professional, honest aur accurate service. RoC compliances aur annual filings time se pehle complete kar di. Excellent support! ⭐",
            "One of the most trusted Chartered Accountant firms. Quick responses, expert advice, aur smooth documentation process.",
            "Bohot hi cooperative staff aur expert partners. Financial queries ko easily solve kar diya. Truly five-star service!"
        ],
        4: [
            "G R A M And Associates LLP se tax advisory li, overall process bohot smooth aur fast tha. Good service.",
            "GST return filing aur documentation time par finalize hua. Staff helpful aur responsive hai.",
            "Company compliances ke liye acchi guidance mili. Transparent process and professional approach.",
            "Tax filing aur queries ko acche se explain kiya. Hamare business ke liye reliable advisory firm hai.",
            "Smooth experience and quick turnaround on financial queries. Satisfied with their professional support."
        ],
        3: [
            "Tax consultation ke liye contact kiya tha, work standard aur satisfactory raha.",
            "ITR filing theek se complete ho gayi, communication decent tha.",
            "Standard accounting and tax services provided as expected.",
            "Consultancy experience was fine and professional."
        ],
        2: [
            "I faced a few delays or queries regarding my filings. I would like to discuss this with your team.",
            "The compliance service could have been smoother. Sharing my direct feedback here.",
            "I had some concerns regarding my tax/accounting work that need attention.",
            "Need clarification on my recent service request. Please connect."
        ],
        1: [
            "I experienced issues with my service and would appreciate immediate assistance from the senior team.",
            "Not satisfied with the recent handling of my work. Requesting a callback to resolve this.",
            "I had concerns regarding my consultation and would like to share feedback directly.",
            "Need urgent attention on my pending work. Please assist."
        ]
    };

    function updateCarousel() {
        if (currentChipsList.length === 0) return;

        carouselText.value = currentChipsList[currentMessageIndex];
        selectedMessage = carouselText.value.trim();

        if (currentChipsList[currentMessageIndex] === "") {
            carouselText.placeholder = "Write your review here...";
        } else {
            carouselText.placeholder = "";
        }

        // Update dots
        const dots = carouselDots.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentMessageIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update buttons state
        prevBtn.disabled = currentMessageIndex === 0;
        nextBtn.disabled = currentMessageIndex === currentChipsList.length - 1;

        checkSubmitState();
    }

    // Allow typing in the textarea
    carouselText.addEventListener('input', () => {
        selectedMessage = carouselText.value.trim();
        currentChipsList[currentMessageIndex] = carouselText.value;
        checkSubmitState();
    });

    // Focus textarea when card is clicked
    carouselCard.addEventListener('click', () => {
        carouselText.focus();
    });

    prevBtn.addEventListener('click', () => {
        if (currentMessageIndex > 0) {
            currentMessageIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentMessageIndex < currentChipsList.length - 1) {
            currentMessageIndex++;
            updateCarousel();
        }
    });

    function renderChips(rating) {
        currentMessageIndex = 0;
        selectedMessage = "";
        checkSubmitState();

        if (rating === 0) {
            carouselText.value = "";
            carouselText.placeholder = "Please select a star rating first";
            carouselControls.style.display = "none";
            return;
        }

        const baseList = commentsData[rating] || [];
        currentChipsList = ["", ...baseList];

        if (currentChipsList.length > 0) {
            carouselControls.style.display = "flex";
            carouselText.placeholder = "Write your review here...";

            // Create dots
            carouselDots.innerHTML = '';
            currentChipsList.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                carouselDots.appendChild(dot);
            });

            updateCarousel();
        } else {
            carouselControls.style.display = "none";
            carouselText.value = "";
            carouselText.placeholder = "No messages available";
        }
    }

    // Submit Logic
    const submitBtn = document.getElementById('submit-btn');

    // Exact Google Review link provided by user
    const GOOGLE_REVIEW_URL = "https://g.page/r/CbWJIMWUr9btEBM/review";

    const WHATSAPP_NUMBER = "918290911347";

    function checkSubmitState() {
        if (currentRating > 0 && selectedMessage !== "") {
            submitBtn.removeAttribute('disabled');
            if (currentRating <= 2) {
                submitBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Share Feedback';
            } else {
                submitBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy & Post on Google';
            }
        } else {
            submitBtn.setAttribute('disabled', 'true');
            submitBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy & Post on Google';
        }
    }

    submitBtn.addEventListener('click', () => {
        if (submitBtn.disabled) return;

        if (currentRating <= 2) {
            // WhatsApp Redirection
            let message = selectedMessage;
            let whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappUrl;
        } else {
            // Copy to clipboard for Google Review
            navigator.clipboard.writeText(selectedMessage).then(() => {
                // Show notification toast
                const toast = document.getElementById('copy-toast');
                if (toast) {
                    toast.classList.add('show');
                }

                // Button animation feedback (No emojis)
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `<span>Review Copy Ho Gaya! Redirecting...</span> <i class="fa-solid fa-check"></i>`;
                submitBtn.style.backgroundColor = "#10B981"; // Success green

                gsap.fromTo(submitBtn,
                    { scale: 0.96 },
                    { scale: 1, duration: 0.3, ease: "back.out(2)" }
                );

                // Redirect after 2 seconds to let user read the message
                setTimeout(() => {
                    window.location.href = GOOGLE_REVIEW_URL;
                    if (toast) toast.classList.remove('show');
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = "";
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Could not copy message. Please try again.");
            });
        }
    });
});
