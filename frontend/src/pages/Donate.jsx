import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
    ShieldCheck, Users, BookOpen, Globe, Cpu,
    CreditCard, Banknote, X, ChevronDown, ChevronUp,
    Heart, Star, Award, Zap,
} from "lucide-react";
import "../styles/donate.css";

/* ================================================================
   CONFIG — fill these in once your Paystack pages are live
   ================================================================ */
const PAYSTACK_INDIVIDUAL_URL = "https://paystack.shop/pay/YOUR_INDIVIDUAL_SLUG";
const PAYSTACK_ORG_URL = "https://paystack.shop/pay/YOUR_ORG_SLUG";

// UTM helper — appended so you can track which CTA drove each conversion
const withUTM = (base, source, content) =>
    `${base}?utm_source=${source}&utm_medium=donate_page&utm_campaign=2026_fund&utm_content=${content}`;

/* ================================================================
   DATA
   ================================================================ */

// Impact labels shown dynamically as donor selects an amount
const IMPACT_AMOUNTS = [
    { amount: 10, label: "Covers one week of digital resources for a woman leader" },
    { amount: 25, label: "Funds a full mentorship session between mentor and mentee" },
    { amount: 50, label: "Sponsors one woman's entry into our Leadership Academy" },
    { amount: 100, label: "Provides a month of coaching, tools, and community access" },
    { amount: 250, label: "Sends two women through our 8-week Leadership Bootcamp" },
    { amount: 500, label: "Fully funds one scholarship for our annual Summit programme" },
];

// Corporate giving tiers — shown in org path of the modal
const CORP_TIERS = [
    {
        tier: "Ally",
        range: "$500 – $1,999",
        icon: Heart,
        color: "#e07b54",
        perks: [
            "Logo on our website & newsletter",
            "2 complimentary Summit tickets",
            "Annual impact report",
        ],
    },
    {
        tier: "Champion",
        range: "$2,000 – $9,999",
        icon: Star,
        color: "#d4a853",
        perks: [
            "Everything in Ally",
            "Featured in press releases",
            "5 Summit tickets + speaking slot",
            "Branded workshop session",
        ],
    },
    {
        tier: "Vanguard",
        range: "$10,000+",
        icon: Award,
        color: "var(--pivot-orange)",
        perks: [
            "Everything in Champion",
            "Founding partner status",
            "Unlimited Summit access",
            "Co-branded programme naming rights",
            "Quarterly strategy meetings with our leadership",
        ],
    },
];

const WIRE_DETAILS = [
    {
        currency: "USD",
        rows: [
            { label: "Bank Name", value: "YOUR BANK NAME" },
            { label: "Account Name", value: "YOUR ORGANISATION NAME" },
            { label: "Account Number", value: "0000000000" },
            { label: "SWIFT / BIC", value: "YOURSWIFT" },
        ],
    },
    {
        currency: "EUR",
        rows: [
            { label: "Bank Name", value: "YOUR BANK NAME" },
            { label: "Account Name", value: "YOUR ORGANISATION NAME" },
            { label: "Account Number", value: "0000000000" },
            { label: "SWIFT / BIC", value: "YOURSWIFT" },
            { label: "IBAN", value: "YOUR IBAN" },
        ],
    },
];

const TESTIMONIALS = [
    {
        quote: "This programme gave me more than skills — it gave me a community of women who push each other forward relentlessly.",
        name: "Adaeze O.",
        role: "Software Engineer, Lagos",
    },
    {
        quote: "I walked in not knowing what a pull request was. Six months later I shipped my first product. The mentors here are extraordinary.",
        name: "Fatima K.",
        role: "Product Manager, Abuja",
    },
    {
        quote: "There are very few communities that do what Women in Power does. Mentorship, access, resources — all under one roof.",
        name: "Ngozi A.",
        role: "Data Analyst, Accra",
    },
];

const STATS = [
    { value: "12,000+", label: "Women trained across Africa" },
    { value: "3,400+", label: "Mentorship connections made" },
    { value: "89%", label: "Landed leadership roles within a year" },
    { value: "40+", label: "Countries represented" },
];

const ALLOCATION = [
    { percent: "45%", label: "Mentorship Networks", icon: Users },
    { percent: "30%", label: "Leadership Academy", icon: BookOpen },
    { percent: "15%", label: "Policy Advocacy", icon: Globe },
    { percent: "10%", label: "Infrastructure", icon: Cpu },
];

const FAQS = [
    {
        q: "Is my donation tax-deductible?",
        a: "Yes. Women in Power is a registered non-profit organisation. All donations are tax-deductible to the full extent permitted by law. You will receive an official receipt via email immediately after your donation is confirmed.",
    },
    {
        q: "How is my money used?",
        a: "45% goes directly to mentorship programmes, 30% funds our Leadership Academy curriculum, 15% supports policy advocacy work, and 10% covers operational infrastructure. We publish a full annual impact report every January.",
    },
    {
        q: "Can I donate anonymously?",
        a: "Absolutely. Simply leave the name field blank or use 'Anonymous Donor' when completing your Paystack payment. Your privacy is completely respected and your details will never be shared.",
    },
    {
        q: "Can I set up a recurring monthly donation?",
        a: "Yes — select the monthly option on the Paystack payment page. You can cancel or adjust your recurring gift at any time by contacting us at giving@womeninpower.org.",
    },
    {
        q: "My organisation wants to give. What are the options?",
        a: "We have structured corporate giving tiers starting from $500, each with different partnership benefits including Summit access, co-branding, and programme naming rights. Click 'As an Organisation' to see full tier details and get started.",
    },
    {
        q: "Will I receive a receipt or acknowledgement?",
        a: "Yes. Paystack sends an automated receipt to your email address as soon as your payment clears. For wire transfers, please allow 3–5 business days and email giving@womeninpower.org with your transfer reference so we can confirm receipt.",
    },
];

/* ================================================================
   FAQ ACCORDION ITEM
   ================================================================ */
function FaqItem({ q, a, isOpen, onToggle }) {
    return (
        <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
            <button className="faq-question" onClick={onToggle}>
                <span>{q}</span>
                <span className="faq-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <p>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ================================================================
   DONATION OPTIONS MODAL
   ================================================================ */
function DonationOptionsModal({ isOpen, onClose, donorType, selectedAmount, utmSource }) {
    const [wireOpen, setWireOpen] = useState(false);
    const [activeTier, setActiveTier] = useState(null);

    const baseUrl = donorType === "individual" ? PAYSTACK_INDIVIDUAL_URL : PAYSTACK_ORG_URL;
    const paystackUrl = withUTM(baseUrl, "donate_page", utmSource);

    const handlePaystack = () => {
        window.open(paystackUrl, "_blank", "noopener,noreferrer");
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="dmodal-overlay"
                    onClick={handleOverlayClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div
                        className="dmodal"
                        initial={{ opacity: 0, scale: 0.93, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Header */}
                        <div className="dmodal__header">
                            <div>
                                <h2 className="dmodal__title">Donation Options</h2>
                                <p className="dmodal__subtitle">
                                    {donorType === "org"
                                        ? "Choose how your organisation would like to give."
                                        : "Choose any payment method below to complete your donation."}
                                </p>
                            </div>
                            <button className="dmodal__close" onClick={onClose} aria-label="Close">
                                <X size={20} />
                            </button>
                        </div>

                        {/* ── INDIVIDUAL PATH ── */}
                        {donorType === "individual" && (
                            <div className="dmodal__options">
                                <button className="dmodal__option-btn" onClick={handlePaystack}>
                                    <CreditCard size={18} className="dmodal__option-icon" />
                                    <span>Card Donation — Paystack</span>
                                    <span className="dmodal__option-arrow">→</span>
                                </button>

                                <button
                                    className={`dmodal__option-btn ${wireOpen ? "dmodal__option-btn--active" : ""}`}
                                    onClick={() => setWireOpen((v) => !v)}
                                >
                                    <Banknote size={18} className="dmodal__option-icon" />
                                    <span>Wire Transfer</span>
                                    <span className="dmodal__option-arrow">
                                        {wireOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {wireOpen && (
                                        <motion.div
                                            className="dmodal__wire-details"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            {WIRE_DETAILS.map(({ currency, rows }) => (
                                                <div className="dmodal__wire-block" key={currency}>
                                                    <p className="dmodal__wire-currency">
                                                        Wire Transfer —{" "}
                                                        <span className="dmodal__wire-currency-tag">{currency} Transactions</span>
                                                    </p>
                                                    <div className="dmodal__wire-table">
                                                        {rows.map(({ label, value }) => (
                                                            <div className="dmodal__wire-row" key={label}>
                                                                <span className="dmodal__wire-label">{label}</span>
                                                                <span className="dmodal__wire-value">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* ── ORG PATH — Corporate tiers ── */}
                        {donorType === "org" && (
                            <div className="dmodal__tiers">
                                {CORP_TIERS.map(({ tier, range, icon: Icon, color, perks }) => (
                                    <div
                                        key={tier}
                                        className={`dmodal__tier ${activeTier === tier ? "dmodal__tier--active" : ""}`}
                                        onClick={() => setActiveTier(tier === activeTier ? null : tier)}
                                        style={{ "--tier-color": color }}
                                    >
                                        <div className="dmodal__tier-header">
                                            <div className="dmodal__tier-icon">
                                                <Icon size={18} />
                                            </div>
                                            <div className="dmodal__tier-info">
                                                <span className="dmodal__tier-name">{tier}</span>
                                                <span className="dmodal__tier-range">{range}</span>
                                            </div>
                                            <span className="dmodal__option-arrow">
                                                {activeTier === tier ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {activeTier === tier && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <ul className="dmodal__tier-perks">
                                                        {perks.map((p) => (
                                                            <li key={p}>
                                                                <Zap size={12} />
                                                                <span>{p}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button
                                                        className="dmodal__tier-cta"
                                                        onClick={(e) => { e.stopPropagation(); handlePaystack(); }}
                                                    >
                                                        Get started as {tier} →
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Footer */}
                        <div className="dmodal__footer">
                            <ShieldCheck size={13} />
                            <span>All transactions are encrypted and secure</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function Donate() {
    const [modalOpen, setModalOpen] = useState(false);
    const [donorType, setDonorType] = useState("individual");
    const [utmSource, setUtmSource] = useState("hero");
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    const openModal = (type, source = "hero") => {
        setDonorType(type);
        setUtmSource(source);
        setModalOpen(true);
    };

    const activeImpact = IMPACT_AMOUNTS.find((a) => a.amount === selectedAmount);

    return (
        <div className="donate-page">
            <Helmet>
                <title>Donate — Invest in Power | Women in Power</title>
                <meta name="description" content="Your contribution directly funds the mentorship, training, and resources needed to elevate the next generation of women leaders across Africa." />
                <meta property="og:title" content="Invest in Power — Donate to Women in Power" />
                <meta property="og:description" content="$20 places a mentor, a skill, or an opportunity directly in her hands. Join 1,240 donors already changing lives." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="mesh-blob mesh-blob-1" style={{ top: "0", right: "-10%" }} />
            <div className="mesh-blob mesh-blob-2" style={{ bottom: "10%", left: "-10%" }} />

            {/* ══════════════════════════════════════════════════════
                SECTION 1 — HERO + TYPE SELECTOR
            ══════════════════════════════════════════════════════ */}
            <section className="donate-hero-section">
                <div className="container section-padding">
                    <div className="donate-hero-grid">
                        <div className="donate-hero-copy">
                            <span className="section-label">INVEST IN POWER</span>
                            <motion.h1
                                className="donate-hero__title"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Sponsor a Woman Leader Today.
                            </motion.h1>
                            <motion.p
                                className="donate-hero__subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                By investing just $20, you place a mentor, a skill,
                                or an opportunity directly in her hands.
                                One act of giving today can change her future forever.
                            </motion.p>
                        </div>

                        {/* Donate type card with amount selector + impact label */}
                        <motion.div
                            className="donate-type-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h2 className="donate-type-card__heading">
                                How would you love to donate?
                            </h2>

                            {/* Amount presets */}
                            <div className="donate-amount-grid">
                                {IMPACT_AMOUNTS.map(({ amount }) => (
                                    <button
                                        key={amount}
                                        className={`donate-amount-btn ${selectedAmount === amount ? "donate-amount-btn--active" : ""}`}
                                        onClick={() => setSelectedAmount(amount)}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic impact label */}
                            <AnimatePresence mode="wait">
                                {activeImpact && (
                                    <motion.div
                                        key={activeImpact.amount}
                                        className="donate-impact-label"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Zap size={13} />
                                        <span>{activeImpact.label}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="donate-type-btns">
                                <button
                                    className="donate-type-btn donate-type-btn--primary"
                                    onClick={() => openModal("individual", "hero_individual")}
                                >
                                    As an Individual
                                </button>
                                <button
                                    className="donate-type-btn donate-type-btn--outline"
                                    onClick={() => openModal("org", "hero_org")}
                                >
                                    As an Organisation
                                </button>
                            </div>

                            <div className="donate__form-foot">
                                <ShieldCheck size={14} />
                                <span>Secured by Paystack · 256-bit encrypted</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECTION 2 — THE CHALLENGE
            ══════════════════════════════════════════════════════ */}
            <section className="donate-challenge-section">
                <div className="container">
                    <div className="donate-split-grid">
                        <motion.div
                            className="donate-challenge-copy"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="donate-section-label">The Challenge</span>
                            <h2 className="donate-split-heading">
                                Millions of women still lack access to the tools and training needed to lead.
                            </h2>
                            <p className="donate-split-body">
                                While the global economy accelerates toward a digital future,
                                the gender gap in leadership, technology, and opportunity persists —
                                especially for women from underserved communities.
                            </p>
                            <ul className="donate-challenge-list">
                                <li>No access to mentors or professional networks.</li>
                                <li>Limited exposure to leadership development resources.</li>
                                <li>Systemic barriers to entry in executive roles.</li>
                                <li>Few role models visible at the highest levels.</li>
                            </ul>
                            <p className="donate-split-body donate-split-body--vision">
                                We envision a world where women are equally represented
                                across all career levels and industries.
                            </p>
                        </motion.div>

                        <motion.div
                            className="donate-challenge-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="donate-challenge-img-block">
                                <div className="donate-challenge-img-placeholder" />
                                <div className="donate-challenge-stat-pill">
                                    <span className="donate-challenge-stat-pill__num">$20</span>
                                    <span className="donate-challenge-stat-pill__label">funds one month of mentorship</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECTION 3 — IMPACT IN NUMBERS
            ══════════════════════════════════════════════════════ */}
            <section className="donate-impact-section">
                <div className="container">
                    <div className="donate-split-grid donate-split-grid--reverse">
                        <motion.div
                            className="donate-impact-visual"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="donate-bento-card">
                                <span className="donate-section-label">2026 Expansion Fund</span>
                                <div className="donate-progress">
                                    <div className="progress-header">
                                        <span className="progress-label">Global Goal</span>
                                        <span className="progress-amount">$84,000 / $100k</span>
                                    </div>
                                    <div className="progress-track">
                                        <motion.div
                                            className="progress-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "84%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
                                    <p className="donate-goal-hint">84% of our annual goal achieved.</p>
                                </div>
                                <div className="allocation-grid" style={{ marginTop: "32px" }}>
                                    {ALLOCATION.map(({ percent, label, icon: Icon }) => (
                                        <div className="allocation-item" key={label}>
                                            <Icon size={16} style={{ color: "var(--pivot-orange)", marginBottom: "8px" }} />
                                            <span className="allocation-percent">{percent}</span>
                                            <span className="allocation-label">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="donate-impact-copy"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="donate-section-label">Our Impact in Numbers</span>
                            <h2 className="donate-split-heading">
                                Thanks to supporters like you, we've transformed thousands of lives.
                            </h2>
                            <div className="donate-stats-grid">
                                {STATS.map(({ value, label }, i) => (
                                    <motion.div
                                        key={label}
                                        className="donate-stat-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="donate-stat-value">{value}</span>
                                        <span className="donate-stat-label">{label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECTION 4 — TESTIMONIALS
            ══════════════════════════════════════════════════════ */}
            <section className="donate-testimonials-section">
                <div className="container">
                    <motion.div
                        className="donate-testimonials-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="donate-section-label">Their Voices</span>
                        <h2 className="donate-testimonials-title">
                            Behind every number is a woman whose life was transformed.
                        </h2>
                    </motion.div>

                    <div className="donate-testimonials-grid">
                        {TESTIMONIALS.map(({ quote, name, role }, i) => (
                            <motion.div
                                key={name}
                                className="donate-testimonial-card"
                                style={{ "--card-index": i }}
                                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                            >
                                <p className="donate-testimonial-quote">"{quote}"</p>
                                <div className="donate-testimonial-meta">
                                    <span className="donate-testimonial-name">— {name}</span>
                                    <span className="donate-testimonial-role">{role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECTION 5 — FAQ
            ══════════════════════════════════════════════════════ */}
            <section className="donate-faq-section">
                <div className="container">
                    <motion.div
                        className="donate-faq-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="donate-section-label">Common Questions</span>
                        <h2 className="donate-faq-title">Everything you need to know before giving.</h2>
                    </motion.div>

                    <motion.div
                        className="donate-faq-list"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {FAQS.map((faq, i) => (
                            <FaqItem
                                key={i}
                                q={faq.q}
                                a={faq.a}
                                isOpen={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════
                SECTION 6 — FINAL CTA
            ══════════════════════════════════════════════════════ */}
            <section className="donate-final-cta">
                <div className="container">
                    <motion.div
                        className="donate-final-cta__inner"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="donate-section-label">Ready to invest?</span>
                        <h2 className="donate-final-cta__heading">
                            One decision.<br />Her entire trajectory.
                        </h2>
                        <p className="donate-final-cta__sub">
                            1,240 donors have already invested this year. Your contribution — however large or small — goes directly to work.
                        </p>
                        <div className="donate-final-cta__btns">
                            <button
                                className="donate-type-btn donate-type-btn--primary"
                                onClick={() => openModal("individual", "footer_individual")}
                            >
                                Donate as Individual
                            </button>
                            <button
                                className="donate-type-btn donate-type-btn--outline"
                                onClick={() => openModal("org", "footer_org")}
                            >
                                Donate as Organisation
                            </button>
                        </div>
                        <div className="donate__form-foot" style={{ justifyContent: "center", marginTop: "24px" }}>
                            <ShieldCheck size={14} />
                            <span>Secured by Paystack · 256-bit encrypted</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <DonationOptionsModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                donorType={donorType}
                selectedAmount={selectedAmount}
                utmSource={utmSource}
            />
        </div>
    );
}