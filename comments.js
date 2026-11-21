const REVIEW_PARTS = {
    5: {
        openings: [
            "ITR filing aur tax planning ka experience bohot smooth raha.",
            "Best CA firm for company compliances and GST return filing.",
            "Meri capital gains tax return bina kisi hassle ke file kar di.",
            "Very professional team with deep knowledge of tax laws.",
            "Hamari company ke GST aur ROC compliances hamesha time par handle karte hain.",
            "Super fast and hassle-free tax consultation experience.",
            "Startup registration aur legal advisory ke liye best Chartered Accountants.",
            "Income tax scrutiny notice solve karne mein bohot timely support mila.",
            "Excellent accounting service and transparent consultation throughout.",
            "Hamari firm ka annual audit bohot systematically complete kiya.",
            "Great guidance on NRI taxation and lower deduction certificates.",
            "Kaafi supportive partners aur transparent fees structure hai.",
            "Smooth and 100% digital documentation process without office visits.",
            "TDS quarterly returns aur payroll reconciliation bilkul error-free raha.",
            "Outstanding service for business tax planning and compliances.",
            "Ek hi roof ke under taxation aur financial advisory mil gayi.",
            "Prompt response and accurate calculations on complex salary structures.",
            "Urgent CA certificate aur net worth documents quickly provide kiye.",
            "Best tax consultants in terms of speed, clarity, and trust.",
            "Hamare business accounts ko bohot acche se streamline kar diya.",
            "Very reliable and client-centric Chartered Accountant firm.",
            "Time se pehle saare statutory tax compliances complete ho gaye.",
            "Bohot polite staff aur practical financial advice mili.",
            "Exceptional support during our company incorporation and MCA filings.",
            "Legitimate tax optimization guidance helped save decent money."
        ],
        closings: [
            "Highly recommended for business and individuals!",
            "Quick responses aur reliable advice. 5 stars.",
            "Staff bohot helpful hai. Keep up the good work!",
            "Truly professional team, completely satisfied.",
            "Bina kisi jhanjhat ke sab time par ho gaya.",
            "Always accessible on call and WhatsApp. Must visit.",
            "Honest consultation aur zero hidden charges. Highly recommended.",
            "Puri tarah se satisfied hoon. Thank you team!",
            "Top-notch service and great turnaround time.",
            "Five star service without any second thought.",
            "Har query ka clear solution milta hai. Great experience!",
            "Very cooperative and disciplined professionals.",
            "Smooth coordination and timely delivery. 10/10.",
            "Best experience so far, highly recommended.",
            "Extremely courteous partners and prompt resolution.",
            "Bilkul hassle-free service rahi. Thank you!",
            "Great value for money and dependable support.",
            "Transparent guidance throughout the process.",
            "Genuine advice aur quick turnaround. Excellent!",
            "Sabhi tax queries easily solve ho gayi. Recommended!",
            "Superb customer service and expert consultation.",
            "Always ahead of statutory deadlines. Great firm.",
            "Peace of mind for all accounting needs.",
            "Clear communication and honest feedback every time.",
            "One of the finest CA teams to work with."
        ]
    },
    4: {
        openings: [
            "Tax advisory aur return filing ka experience kaafi smooth raha.",
            "Good professional support received from their accounting team.",
            "Company compliance work time par finalize hua.",
            "Decent and helpful consultation regarding business tax.",
            "Fast turnaround on GST queries and documentation."
        ],
        closings: [
            "Satisfied with the overall service.",
            "Good CA firm, would recommend.",
            "Reliable team for compliance needs.",
            "Smooth coordination throughout the process.",
            "Professional approach and good guidance."
        ]
    }
};

function generateDynamicReview(rating = 5) {
    const parts = REVIEW_PARTS[rating] || REVIEW_PARTS[5];
    const o = parts.openings[Math.floor(Math.random() * parts.openings.length)];
    const c = parts.closings[Math.floor(Math.random() * parts.closings.length)];
    return `${o} ${c}`;
}

function generateDynamicReviews(rating = 5, count = 1) {
    const reviews = [];
    for (let i = 0; i < count; i++) {
        reviews.push(generateDynamicReview(rating));
    }
    return reviews;
}

const ALL_COMMENTS = {
    5: generateDynamicReviews(5, 5),
    4: generateDynamicReviews(4, 5),
    3: [
        "Tax consultation standard aur satisfactory rahi.",
        "ITR filing theek se complete hui, decent communication.",
        "Standard accounting and tax services provided as expected."
    ],
    2: [
        "Delays face kiye filings mein, direct baat karni hai.",
        "Compliance service could be smoother. Sharing feedback.",
        "Service request par clarification chahiye, please connect."
    ],
    1: [
        "Service issue solve karwane ke liye senior team se baat karni hai.",
        "Pending work par urgent callback request hai.",
        "Consultation query resolve nahi hui, need assistance."
    ]
};

if (typeof window !== 'undefined') {
    window.REVIEW_PARTS = REVIEW_PARTS;
    window.generateDynamicReview = generateDynamicReview;
    window.generateDynamicReviews = generateDynamicReviews;
    window.ALL_COMMENTS = ALL_COMMENTS;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        REVIEW_PARTS,
        generateDynamicReview,
        generateDynamicReviews,
        ALL_COMMENTS
    };
}
