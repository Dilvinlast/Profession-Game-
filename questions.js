
window.PROFESSION_QUESTIONS = {

horeca: [
    {
        level: "Warm-up",
        category: "numeracy",
        prize: 250,
        seconds: 20,
        question: "Three coffees cost €2.40 each. The guest pays with €10. How much change?",
        answers: ["€2.60", "€2.80", "€3.20", "€3.80"],
        correct: 1,
        logic: "3 × 2.40 = 7.20, then 10 − 7.20 = 2.80",
        lesson: "Every shift ends with someone counting. Speed here saves minutes every day."
    },
    {
        level: "Warm-up",
        category: "numeracy",
        prize: 250,
        seconds: 20,
        question: "A table's bill comes to €84. They leave a 10% tip. What is the total?",
        answers: ["€88.40", "€92.40", "€94.00", "€96.40"],
        correct: 1,
        logic: "84 × 0.10 = 8.40, then 84 + 8.40 = 92.40",
        lesson: "A tip is the guest's verdict on the evening, in numbers."
    },
    {
        level: "Warm-up",
        category: "numeracy",
        prize: 250,
        seconds: 20,
        question: "A kitchen uses 6 kg of flour a day. A sack holds 25 kg. How many full days does it last?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
        logic: "25 ÷ 6 = 4.2, so four full days",
        lesson: "Order before the sack runs out, not on the day it does."
    },
    {
        level: "Warm-up",
        category: "numeracy",
        prize: 250,
        seconds: 20,
        question: "A restaurant serves 90 guests a night. Four in ten order dessert at €6. What does dessert earn?",
        answers: ["€180", "€216", "€240", "€280"],
        correct: 1,
        logic: "90 × 0.40 = 36 desserts, then × 6 = 216",
        lesson: "Dessert is where a restaurant's margin lives."
    },
    {
        level: "Basic",
        category: "cost awareness",
        prize: 500,
        seconds: 30,
        question: "An invoice says €900, with 2% off if you pay within three days. You pay on day two. What do you pay?",
        answers: ["€882", "€888", "€898", "€918"],
        correct: 0,
        logic: "900 × 0.02 = 18, then 900 − 18 = 882",
        lesson: "Early payment discounts are free money for a business with cash in hand."
    },
    {
        level: "Basic",
        category: "margin literacy",
        prize: 500,
        seconds: 30,
        question: "A café keeps €264 a day after food costs. Rent of €1,200 is due each month. Counting from day one, when is the rent covered?",
        answers: [
            "By the fifth day of the month",
            "By the tenth day",
            "By the middle of the month",
            "Only at month end"
        ],
        correct: 0,
        logic: "1,200 ÷ 264 = 4.5 days",
        lesson: "Knowing the date your costs are covered changes how the rest of the month feels."
    },
    {
        level: "Basic",
        category: "concentration tolerance",
        prize: 500,
        seconds: 30,
        question: "Seven in ten of a café's customers work in one office block nearby. What is the main risk?",
        answers: [
            "The office moves and takings collapse",
            "Staff ask for higher pay",
            "Suppliers raise their prices",
            "Rent rises at the next renewal"
        ],
        correct: 0,
        logic: "Seven customers in ten come from one building",
        lesson: "Location is an asset you do not control."
    },
    {
        level: "Basic",
        category: "margin literacy",
        prize: 500,
        seconds: 30,
        question: "A restaurant is full every night and still makes little money. Why?",
        answers: [
            "Costs rise with every guest served",
            "VAT is charged twice on food",
            "Rent rises with guest numbers",
            "Tips are counted as revenue"
        ],
        correct: 0,
        logic: "Food, labour and waste all rise with every guest; only the rent stays still",
        lesson: "Busy is a feeling. Margin is a number."
    },
    {
        level: "Applying",
        category: "margin literacy",
        prize: 750,
        seconds: 30,
        question: "A café sells 120 coffees a day at €3. Each costs €0.80 to make. It opens 26 days a month and pays €1,200 rent. What is left?",
        answers: ["€5,664", "€6,864", "€7,644", "€8,064"],
        correct: 0,
        logic: "120 × 2.20 = 264 a day, × 26 = 6,864, minus 1,200 = 5,664",
        lesson: "Two euros a cup pays the rent by the fifth day. The rest is the business."
    },
    {
        level: "Applying",
        category: "growth vs optimisation",
        prize: 750,
        seconds: 30,
        question: "A chef costs €2,400 a month, all employment costs included. With one, you serve 30 more guests a week, each leaving €18 after food costs. Worth it?",
        answers: [
            "No, it falls about €60 short each month",
            "Yes, it adds about €60 each month",
            "Yes, it adds about €2,338 each month",
            "No, it falls about €540 short each month"
        ],
        correct: 0,
        logic: "30 × 18 = 540 a week, × 4.33 weeks = 2,338, against a 2,400 salary",
        lesson: "A hire that lands just below break-even is a bet on growth you have not won yet. One more guest a week changes the answer."
    },
    {
        level: "Applying",
        category: "present vs future",
        prize: 750,
        seconds: 30,
        question: "A terrace costs €6,000 and would add €2,000 of profit each summer. Your lease has 18 months left, so two summers. Build it?",
        answers: [
            "Skip it, two summers bring €4,000 against €6,000",
            "Build it, two summers bring €6,000 against €4,000",
            "Build it, the landlord is likely to extend the lease",
            "Skip it, a terrace permit takes most of a season"
        ],
        correct: 0,
        logic: "2 summers × 2,000 = 4,000 of profit, against a 6,000 cost",
        lesson: "Never invest past the end of your lease. The third summer belongs to the landlord."
    },
    {
        level: "Applying",
        category: "price vs volume",
        prize: 750,
        seconds: 30,
        question: "A delivery app brings €4,000 a month and keeps 30% of it. The food costs you €2,600. What is left?",
        answers: [
            "About €200",
            "About €1,400",
            "It loses about €200",
            "It loses about €1,400"
        ],
        correct: 0,
        logic: "4,000 − 1,200 commission − 2,600 food = 200",
        lesson: "Volume through someone else's channel is worth having only once you count their cut."
    },
    {
        level: "Reasoning",
        category: "leverage attitude",
        prize: 1000,
        seconds: 45,
        question: "A year of supplies costs €80,000, or €68,000 if you pay upfront. You would borrow €68,000 for a year at 12% simple interest, no fees. Worth it?",
        answers: [
            "Yes, by about €3,840",
            "Yes, by about €12,000",
            "No, by about €3,840",
            "No, by about €8,160"
        ],
        correct: 0,
        logic: "Saving 12,000, interest 68,000 × 12% = 8,160, net 3,840",
        lesson: "Credit is a tool with a price. Compare the price against what it buys."
    },
    {
        level: "Reasoning",
        category: "time vs income",
        prize: 1000,
        seconds: 45,
        question: "Café A makes €12,000 a month in profit and you work there every day. Café B makes €9,000, pays a manager €2,200, and takes five hours a week. Which one leaves you able to run a third café?",
        answers: [
            "Café B, it frees your week for the next one",
            "Café A, €12,000 a month funds the next one",
            "Café A, the manager's pay weakens B",
            "Café B, a manager can run any business"
        ],
        correct: 0,
        logic: "A: €12,000 for a full week of your time. B: €6,800 net for five hours",
        lesson: "Capacity to grow is measured in free hours, not in monthly profit."
    },
    {
        level: "Reasoning",
        category: "liquidity vs ownership",
        prize: 1000,
        seconds: 45,
        question: "Your café earns €30,000 a year in profit. A buyer pays 2 times annual profit. A €25,000 refit would raise profit 30%, and you would sell as soon as it is done. Sell now or refit first?",
        answers: [
            "Sell now, by €7,000",
            "Sell now, by €25,000",
            "Refit first, by €7,000",
            "Refit first, by €18,000"
        ],
        correct: 0,
        logic: "Now: 60,000. After: 78,000 − 25,000 spent = 53,000",
        lesson: "A refit that adds €18,000 of value for €25,000 of spending moves you backwards, however good the café looks afterwards."
    },
    {
        level: "Final boss",
        category: "liquidity vs ownership",
        prize: 2000,
        seconds: 60,
        question: "House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. A restaurant group offers you one of four deals for your café brand. The group earns €70,000 a year and a buyer pays 2 times profit. Which is worth most over three years?",
        answers: [
            "€40,000 in cash now",
            "€1,200 a month for three years",
            "A 30% stake in a group earning €70,000 a year",
            "€20,000 now and €700 a month for three years"
        ],
        correct: 2,
        logic: "Stake: 21,000 a year × 3 = 63,000, and it is still worth 30% of 140,000 = 42,000. Total about 105,000, against 43,200, 45,200 and 40,000",
        lesson: "Cash is countable today. An asset pays you while you hold it and is still worth something when you stop."
    }
],


    retail: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A shelf holds six rows of 14 packs. How many packs?",
            answers: ["74", "84", "86", "96"],
            correct: 1,
            logic: "6 × 14 = 84",
            lesson: "Counting stock is the first job of the day."
        }
    ],

    it: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A client is billed 14 hours at €35 an hour and has paid a €200 deposit. How much is still owed?",
            answers: ["€245", "€290", "€310", "€490"],
            correct: 1,
            logic: "14 × 35 = 490, minus 200 = 290",
            lesson: "A deposit is part of the price, not a bonus."
        }
    ],

    healthcare: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A clinic books 32 appointments a day across four rooms, split evenly. How many per room?",
            answers: ["6", "7", "8", "9"],
            correct: 2,
            logic: "32 ÷ 4 = 8",
            lesson: "Know your capacity per room before you promise a booking."
        }
    ],

    education: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A course has 24 places at €180 each and seven stay empty. What does it earn?",
            answers: ["€2,880", "€3,060", "€3,240", "€4,320"],
            correct: 1,
            logic: "24 − 7 = 17, then × 180 = 3,060",
            lesson: "An empty seat costs the same as a full one."
        }
    ],

    beauty: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A trainer charges €25 a session and works 18 sessions a week. Studio rent is €150 a week. What is left?",
            answers: ["€275", "€300", "€350", "€450"],
            correct: 1,
            logic: "18 × 25 = 450, minus 150 = 300",
            lesson: "Revenue is not income. The rent comes out first."
        }
    ],

    construction: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A job needs 96 square metres of flooring plus four spare. Boxes cover five square metres. How many boxes?",
            answers: ["19", "20", "21", "24"],
            correct: 1,
            logic: "96 + 4 = 100, then ÷ 5 = 20",
            lesson: "Materials come in boxes, not in exact metres."
        }
    ],

    transport: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A driver covers 320 km at €0.45 per km. What does the trip pay?",
            answers: ["€124", "€134", "€144", "€154"],
            correct: 2,
            logic: "320 × 0.45 = 144",
            lesson: "Every route is a small invoice."
        }
    ],

    media: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A campaign spends €600 and brings 240 enquiries. What is the cost per enquiry?",
            answers: ["€1.50", "€2.00", "€2.50", "€4.00"],
            correct: 2,
            logic: "600 ÷ 240 = 2.50",
            lesson: "One number tells you whether a campaign works."
        }
    ],

    manufacturing: [
        {
            level: "Warm-up",
            category: "numeracy",
            prize: 250,
            seconds: 20,
            question: "A line produces 240 parts a day and one part in twelve fails quality control. How many good parts?",
            answers: ["200", "216", "220", "228"],
            correct: 2,
            logic: "240 ÷ 12 = 20 rejected, then 240 − 20 = 220",
            lesson: "Output is what passes, not what comes off the line."
        }
    ]
};
