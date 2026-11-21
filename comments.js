const REVIEW_PARTS = {
    5: {
        openings: [
            "Best CA for all tax and financial matters.",
            "Best ITR return filing service! Bohot hi smooth aur quick experience raha.",
            "Truly the best consultants for income tax, ITR return filing, and GST compliances.",
            "Best CA in town! Super fast and accurate ITR return filing.",
            "Best consultants for tax planning and financial advisory.",
            "Best ITR return service, bina kisi hassle ke return time par file ho gaya.",
            "One of the best CAs, bohot hi professional aur helpful guidance provide ki.",
            "Best tax consultants! Har deduction dhyan se claim karwayi.",
            "Best CA for salaried and business ITR returns.",
            "Accurate calculations and prompt response, best consultants to consult with.",
            "Best ITR return filing experience with complete transparency.",
            "Best CA for corporate compliances, tax planning, and audit support.",
            "Best consultants in terms of speed, trust, and professional advice.",
            "Meri complex ITR return easily file kar di, truly the best CA.",
            "Best ITR return filing service, 100% digital and stress-free process.",
            "Best tax consultants, har query ka clear aur practical solution milta hai.",
            "Best CA for tax optimization and legal financial advice.",
            "Timely reminder aur quick submission, best ITR return filing assistance.",
            "Best consultants for business accounting, GST, and direct taxes.",
            "Bohot polite nature aur reliable consultation, definitely the best CA.",
            "Best ITR return service with lowest turnaround time.",
            "Best financial consultants! Honest consultation without any hidden charges.",
            "Best CA firm for end-to-end tax solutions and advisory.",
            "Best ITR return filing guidance, saved good tax legally.",
            "Excellent expertise in taxation, best CA and best consultants."
        ],
        closings: [
            "Best CA, highly recommended!",
            "Best ITR return service, 5 stars!",
            "Best consultants for all tax needs. Must visit!",
            "Truly professional and reliable. 10/10.",
            "Best experience so far, highly recommended.",
            "Quick turnaround time and genuine advice. Five stars!",
            "Best CA and best tax consultants in town.",
            "Best ITR return filing support, fully satisfied!",
            "Clear communication and transparent guidance throughout.",
            "Top-notch service, thank you sir!",
            "Five star service without any second thought.",
            "Very disciplined and client-centric approach.",
            "Best consultants to work with, completely satisfied.",
            "Smooth coordination and fast delivery.",
            "Peace of mind for all tax and accounting needs."
        ]
    },
    4: {
        openings: [
            "Best CA for ITR return filing, overall experience kaafi accha raha.",
            "Good tax consultants, timely response and professional guidance.",
            "Best ITR return filing service with good documentation support.",
            "Helpful consultation regarding business tax and accounting.",
            "Best CA consultation for personal and business tax filing."
        ],
        closings: [
            "Satisfied with the overall service.",
            "Good CA and dependable consultants.",
            "Smooth coordination throughout the process.",
            "Professional approach and good guidance.",
            "Reliable team for tax and compliance needs."
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
        "ITR return filing theek se complete hui, decent communication.",
        "Standard CA and tax consulting services provided."
    ],
    2: [
        "Filing status par update chahiye, direct connect karein.",
        "Consultation service could be smoother. Sharing feedback.",
        "ITR return query par clarification chahiye, please call back."
    ],
    1: [
        "Service issue solve karwane ke liye senior team se baat karni hai.",
        "Pending tax work par urgent callback request hai.",
        "Consultation query resolve nahi hui, urgent assistance needed."
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
