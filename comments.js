const REVIEW_PARTS = {
    5: {
        openings: [
            "G R A M And Associates LLP ke sath consultation ka experience behad smooth aur professional raha.",
            "Hamari company pichle kaafi samay se G R A M And Associates ki CA aur financial services use kar rahi hai.",
            "G R A M And Associates LLP provides truly exceptional taxation and corporate compliance services.",
            "Had a completely seamless and stress-free advisory experience with G R A M And Associates LLP.",
            "Income tax, GST aur corporate compliances ke liye G R A M And Associates ekdum reliable firm hai.",
            "Very impressed with the prompt response and technical competence of G R A M And Associates LLP.",
            "Hamare business ke financial accounts aur taxation ke liye ye CA firm sabse dependable partner sabit hui.",
            "Outstanding professionalism and timely execution delivered by G R A M And Associates LLP.",
            "Pehli baar G R A M And Associates LLP se consult kiya tha aur inka support lajawab raha.",
            "Extremely satisfied with the proactive guidance and transparency of G R A M And Associates LLP.",
            "Tax planning aur audit compliance ke maamle mein inki team ki knowledge bohot sound hai.",
            "From personal tax return filing to corporate secretarial advisory, they handle everything with high accuracy.",
            "Bohot hi cooperative staff aur experienced partners wali Chartered Accountant firm hai.",
            "G R A M And Associates LLP has been instrumental in keeping our business operations 100% compliant.",
            "Filing tax returns and managing company accounts was never this effortless before consulting them.",
            "Highly disciplined, reliable, and approachable team of chartered accountants.",
            "Ek hi roof ke under taxation, statutory audit aur MCA compliance sab smoothly manage ho jata hai.",
            "Working with G R A M And Associates LLP has given us complete peace of mind for our accounting.",
            "Super fast turnaround time and crystal clear explanations on complicated tax issues.",
            "G R A M And Associates LLP is without doubt the most trusted CA firm for business and individuals."
        ],
        qualities: [
            "ITR return filing, capital gains calculation aur pending refund processing bohot accurately complete kiya.",
            "GST monthly filings, input tax credit (ITC) reconciliation aur annual GSTR-9C ko systematically manage karte hain.",
            "Statutory audit aur Section 44AB tax audit ke dauran inka deep verification aur practical advice bohot helpful raha.",
            "Startup registration, DPIIT recognition, aur seed funding compliance documentation ko time se pehle organize karwaya.",
            "Complex salary structure, freelance income deductions aur legal tax saving options ko perfectly guide kiya.",
            "TDS quarterly returns, Form 16 issuance aur TRACES mismatch rectification bina kisi delay ke solve kiya.",
            "Export service LUT filing, zero-rated GST compliances aur cross-border documentation smoothly handle kiya.",
            "Partners personally phone par available rehte hain aur har query ka clear, honest aur transparent answer dete hain.",
            "Inke automated compliance calendar aur timely alerts ke chalte kabhi koi penalty ya late fee nahi lagi.",
            "Old tax scrutiny notices aur departmental appeals ko solid legal documentation ke sath favorably resolve kiya.",
            "Accounts team ke sath coordination itna smooth tha ki year-end balance sheet finalization bilkul hassle-free ho gaya.",
            "Helped us structure real estate property sales and capital gains tax planning under Section 54 flawlessly.",
            "Their virtual CFO services and monthly MIS reports have given our leadership total clarity on cash flows.",
            "NRI property sale TDS documentation, Form 15CA/15CB aur double tax avoidance relief seamlessly deliver kiya.",
            "Every single compliance is handled with high attention to detail, ethical standards, and total honesty.",
            "E-invoicing setup aur multi-state GST branch registrations ko record turnaround time mein complete karwaya.",
            "Latest budget changes aur CBDT notifications ke hisaab se practical business insights provide karte hain.",
            "Private Limited company incorporation aur annual ROC compliance ko bina kisi administrative hurdle ke finish kiya.",
            "Documentation process 100% digital, fast aur secure hai, office visit ki bilkul zaroorat nahi padti.",
            "Retail business ke liye HSN rate mapping aur billing software accounts reconciliation perfectly streamline kiya.",
            "Discovered internal control weaknesses during audit and suggested actionable steps to plug financial leaks.",
            "Urgent provisional balance sheets, net worth certificates aur bank loan CMA data within hours prepare karke diye.",
            "Completely transparent pricing structure with zero hidden costs and highest standards of client confidentiality.",
            "Stock verification aur warehouse audit ko transparent tarike se execute karke management ko solid data diya.",
            "Legitimate tax optimization strategies suggest karke hamara corporate tax liability substantially reduce karwaya."
        ],
        closings: [
            "Team bohot supportive hai. Highly recommended for every business owner!",
            "Truly a five-star experience, definitely recommending them to my network.",
            "Har entrepreneur aur individual ko inki professional services zaroor consider karni chahiye.",
            "Top-notch service and complete value for money. 10/10 recommendation.",
            "Bohot hi humble partners aur efficient staff. Keep up the great work!",
            "Looking forward to a long-term professional association with this firm.",
            "Puri tarah se satisfied hoon, thanks to the entire team of G R A M And Associates.",
            "A genuine, trustworthy and highly ethical CA firm you can rely on blindly.",
            "Best chartered accountants in terms of professionalism, speed and accuracy.",
            "Five stars without any hesitation. Genuinely grateful for the prompt assistance.",
            "Bina kisi jhanjhat ke saara compliance time par execute ho gaya. Excellent support!",
            "Their commitment towards client satisfaction and accuracy is commendable.",
            "Agar stress-free financial aur tax compliance chahiye toh inhi se connect karein.",
            "Extremely courteous, responsive and reliable partners throughout the financial year.",
            "Superb guidance and timely execution every single time. Must recommend!",
            "Shaandar service aur clear communication. Always dependable.",
            "One of the best financial consulting and CA teams we have ever worked with.",
            "Highly impressed with their ethics and transparency. Thank you team!",
            "Zabardast experience raha. Best CA firm for startups and established companies.",
            "Consistently delivers top quality and trustworthy financial counsel."
        ]
    },
    4: {
        openings: [
            "G R A M And Associates LLP se tax advisory li, overall process kaafi smooth tha.",
            "Good professional support received from G R A M And Associates LLP.",
            "Hamari company compliances ke liye G R A M And Associates se contact kiya tha.",
            "Decent experience with G R A M And Associates for our routine tax work.",
            "Timely execution and helpful staff at G R A M And Associates LLP."
        ],
        qualities: [
            "GST returns aur documentation time par finalize ho gaya.",
            "Tax queries ko acche se explain kiya aur return file kar di.",
            "Company annual compliance work was handled systematically.",
            "Good turnaround time on accounting reconciliation and queries.",
            "Transparent process and responsive communication from their team."
        ],
        closings: [
            "Satisfied with the overall service and support.",
            "Good CA firm, would recommend to others.",
            "Reliable team for business compliance needs.",
            "Smooth coordination throughout the process.",
            "Professional approach and dependable guidance."
        ]
    }
};

function generateDynamicReview(rating = 5) {
    const parts = REVIEW_PARTS[rating] || REVIEW_PARTS[5];
    const o = parts.openings[Math.floor(Math.random() * parts.openings.length)];
    const q = parts.qualities[Math.floor(Math.random() * parts.qualities.length)];
    const c = parts.closings[Math.floor(Math.random() * parts.closings.length)];
    return `${o} ${q} ${c}`;
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
