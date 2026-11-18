
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
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"A shelf holds six rows of 14 packs. How many packs?",
answers:["74","84","86","96"],correct:1,
logic:"6 × 14 = 84",
lesson:"Counting stock is the first job of the day."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"An item is priced €24.99. A customer buys three and pays with €100. How much change?",
answers:["€24.03","€25.03","€26.03","€75.03"],correct:1,
logic:"3 × 24.99 = 74.97, then 100 − 74.97 = 25.03",
lesson:"Prices ending in 99 are designed to be hard to add up."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"Daily takings are €640, €715, €580 and €865. What is the four-day total?",
answers:["€2,700","€2,780","€2,800","€2,860"],correct:2,
logic:"640 + 715 + 580 + 865 = 2,800",
lesson:"Know your week before the week ends."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"A €45 item is reduced by a third. What is the new price?",
answers:["€15","€28","€30","€32"],correct:2,
logic:"45 ÷ 3 = 15, then 45 − 15 = 30",
lesson:"A third off the sign is a third off what you keep."},

{level:"Basic",prize:500,seconds:30,category:"margin literacy",
question:"You buy an item for €18 and sell it for €30. How much of the selling price is profit?",
answers:["30%","40%","60%","67%"],correct:1,
logic:"30 − 18 = 12, then 12 ÷ 30 = 40%",
lesson:"Of every €30 you take, €12 stays. That is 40%, and it is the number that pays the rent."},

{level:"Basic",prize:500,seconds:30,category:"margin literacy",
question:"Monthly takings are €22,000. Goods cost €13,000, wages €5,000 and rent €2,500. What is left?",
answers:["€1,000","€1,500","€2,500","€4,000"],correct:1,
logic:"22,000 − 13,000 − 5,000 − 2,500 = 1,500",
lesson:"A busy shop and a thin result often arrive together."},

{level:"Basic",prize:500,seconds:30,category:"cash timing",
question:"Christmas stock is ordered and paid for in October and sells in December. What does the shop need to get through those two months?",
answers:["Cash to carry two months of stock before it sells","Higher prices in December to cover the waiting","A larger storage unit to hold the seasonal stock","Insurance on the stock while it waits to be sold"],correct:0,
logic:"Stock paid for in October is money gone until December",
lesson:"Seasonal shops die in autumn, not in January."},

{level:"Basic",prize:500,seconds:30,category:"margin literacy",
question:"A customer pays €121, which includes 21% VAT. How much of it belongs to the shop?",
answers:["€95.59","€100.00","€104.00","€121.00"],correct:1,
logic:"121 ÷ 1.21 = 100",
lesson:"The VAT in your till was never your money."},

{level:"Applying",prize:750,seconds:30,category:"price vs volume",
question:"You sell an item for €20. You can order 200 units at €12 or 500 at €9. Anything unsold is thrown away, and you usually sell about 250. Which order is better?",
answers:["200 units, by about €1,100","200 units, by about €2,100","500 units, by about €1,100","500 units, by about €500"],correct:0,
logic:"200: sell 200 × 20 = 4,000, minus 2,400 = 1,600. 500: sell 250 × 20 = 5,000, minus 4,500 = 500",
lesson:"The bigger order sells 50 more units and still earns less, because you paid for 250 you threw away."},

{level:"Applying",prize:750,seconds:30,category:"cash timing",
question:"A shop holds €60,000 of stock and sells and replaces it four times a year. How long does an average item sit on the shelf?",
answers:["1 month","2 months","3 months","4 months"],correct:2,
logic:"12 ÷ 4 = 3",
lesson:"Every month on the shelf is money you cannot spend."},

{level:"Applying",prize:750,seconds:30,category:"cash timing",
question:"Annual sales are €180,000. Two thirds happen in November and December, and your costs run at about €8,000 every month. What is the main risk to the shop?",
answers:["Running out of cash during the quiet months","Running out of stock in December","Paying too much rent in the quiet months","Staff leaving after the busy season"],correct:0,
logic:"Nov and Dec bring 120,000, so the other ten months average 6,000 against 8,000 of costs, a 2,000 gap every month",
lesson:"Seasonal shops fail in March, on the cash they did not keep from December."},

{level:"Applying",prize:750,seconds:30,category:"cost awareness",
question:"Card payments cost 1.5% of the amount. Monthly card sales are €30,000. What do the cards cost you?",
answers:["The cost is €45 a month","The cost is €150 a month","The cost is €450 a month","There is no real cost"],correct:2,
logic:"30,000 × 1.5% = 450",
lesson:"Convenience has a price, and at scale it is a salary."},

{level:"Reasoning",prize:1000,seconds:45,category:"leverage attitude",
question:"You borrow €60,000 to refit the shop. Offer A: 36 payments of €1,900. Offer B: 60 payments of €1,250. Which costs less, and by how much?",
answers:["A, by €6,600","A, by €15,000","B, by €6,600","B, by €2,400"],correct:0,
logic:"A = 68,400. B = 75,000",
lesson:"The smaller monthly payment is the more expensive loan."},

{level:"Reasoning",prize:1000,seconds:45,category:"growth vs optimisation",
question:"Your shop makes €2,000 a month in profit. A second shop would add €1,800 a month in profit before a €1,400 manager. A refit of the first would add €700 a month. You can fund one. Which?",
answers:["The refit, it adds €700 against €400","The second shop, it adds €1,800 a month","The second shop, it adds €400 after the manager","The refit, two locations split your attention"],correct:0,
logic:"Second shop nets 400 after the manager; the refit adds 700 with no extra management",
lesson:"Growth that costs you management is worth less than growth that does not."},

{level:"Reasoning",prize:1000,seconds:45,category:"prevention appetite",
question:"Theft and damage cost 2% of the €500,000 of stock you sell in a year. A security system costs €4,000 plus €100 a month and usually halves the losses. Worth it?",
answers:["Install it, it pays back in about 13 months","Install it, it pays back within three months","Skip it, 2% is the normal level for retail","Skip it, the running cost eats most of the saving"],correct:0,
logic:"Losses 10,000 a year, halved saves 5,000. Running cost 1,200, so 3,800 net against a 4,000 setup",
lesson:"A €3,800 yearly saving against a €4,000 setup crosses into profit early in the second year."},

{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",
question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. You are offered one of four deals for your shop. The three-shop group earns €80,000 a year and a buyer pays 2 times profit. Which is worth most over three years?",
answers:["€45,000 in cash now","€1,300 a month for three years","A 35% stake in a three-shop group earning €80,000 a year","€25,000 now and €800 a month for three years"],correct:2,
logic:"Stake: 28,000 a year × 3 = 84,000, still worth 35% of 160,000 = 56,000. Total about 140,000, against 46,800, 53,800 and 45,000",
lesson:"A share of a bigger business pays twice: while you hold it, and when you sell it."}
],


   
it: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"A client is billed 14 hours at €35 an hour and has paid a €200 deposit. How much is still owed?",
answers:["€245","€290","€310","€490"],correct:1,
logic:"14 × 35 = 490, minus 200 = 290",
lesson:"A deposit is part of the price, not a bonus."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"An app has 240 subscribers paying €9 a month. What is the monthly revenue?",
answers:["€1,980","€2,160","€2,400","€2,880"],correct:1,
logic:"240 × 9 = 2,160",
lesson:"Recurring revenue starts each month already earned, which is why buyers pay more for it."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"Three developers each work six hours a day on a task needing 54 hours. How many days?",
answers:["2","3","4","6"],correct:1,
logic:"3 × 6 = 18 hours a day, then 54 ÷ 18 = 3",
lesson:"People and hours are not the same resource."},

{level:"Warm-up",prize:250,seconds:20,category:"numeracy",
question:"A licence costs €45 per seat per month for eight seats. What is the annual cost?",
answers:["€360","€2,160","€4,320","€5,400"],correct:2,
logic:"45 × 8 = 360 a month, then × 12 = 4,320",
lesson:"Per-seat pricing grows with the team, quietly."},

{level:"Basic",prize:500,seconds:30,category:"cash timing",
question:"A €3,000 project is paid in three equal parts: on signing, at midpoint, on delivery. Two are paid. What is outstanding?",
answers:["€500","€1,000","€1,500","€2,000"],correct:1,
logic:"3,000 ÷ 3 = 1,000 each, with one part left",
lesson:"Staged payments protect both sides, if you track them."},

{level:"Basic",prize:500,seconds:30,category:"margin literacy",
question:"A studio takes in €8,000 a month. Salaries cost €5,000, tools €600 and the office €900. What is left?",
answers:["€900","€1,200","€1,500","€2,100"],correct:2,
logic:"8,000 − 5,000 − 600 − 900 = 1,500",
lesson:"Software firms look profitable until the tools bill arrives."},

{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",
question:"All client work sits on one laptop, with no copy anywhere else. What is the main risk?",
answers:["Losing every project if the laptop fails","Paying more for software licences","Working slower than on two machines","Needing a faster connection"],correct:0,
logic:"One copy means one failure ends the work",
lesson:"A backup costs a few euros a month. Rebuilding a year of work costs the year."},

{level:"Basic",prize:500,seconds:30,category:"liquidity vs ownership",
question:"Two studios each earn €100,000 a year. One sells software subscriptions, the other sells one-off projects. Why can a buyer value the first business more?",
answers:["Its revenue is more predictable after the sale","Its costs are lower for the same revenue","Its staff are easier to replace after a sale","Its tax treatment is better for the buyer"],correct:0,
logic:"Recurring revenue is more predictable, which can support a higher valuation multiple",
lesson:"What a business sells for depends on how much of the income survives your departure."},

{level:"Applying",prize:750,seconds:30,category:"time vs income",
question:"A developer charges €45 an hour. Of a 40-hour week, about 22 hours are billable, and they work 48 weeks a year. What do they earn in a year?",
answers:["€38,000","€42,300","€47,500","€52,800"],correct:2,
logic:"22 × 48 × 45 = 47,520",
lesson:"Half your week is not billable, and it never was."},

{level:"Applying",prize:750,seconds:30,category:"time vs income",
question:"A project is quoted at €6,000 for 100 hours and actually takes 140. What is the effective hourly rate?",
answers:["€60","€50","€43","€30"],correct:2,
logic:"6,000 ÷ 140 = 42.86",
lesson:"A fixed price is a bet on your own estimate."},

{level:"Applying",prize:750,seconds:30,category:"concentration tolerance",
question:"Your largest client offers six months of exclusive work at 80% of your usual rate. What is the main risk?",
answers:["No other clients left when the six months end","Losing 20% of revenue during the contract","Having too much work for one person","The client changing the scope"],correct:0,
logic:"Exclusivity fills today and empties the pipeline for tomorrow",
lesson:"The cost of a full calendar is an empty one later."},

{level:"Applying",prize:750,seconds:30,category:"cost awareness",
question:"A service has 200 customers and loses 5% of them every month. How many new customers does it need just to stay level?",
answers:["Ten a month","Five a month","Twenty a month","None, churn evens out"],correct:0,
logic:"200 × 5% = 10 lost every month",
lesson:"Churn is a hole in the bucket, and it widens as the bucket fills."},

{level:"Reasoning",prize:1000,seconds:45,category:"time vs income",
question:"Studio A makes €4,000 a month in profit and takes 30 hours of your time. Studio B makes €3,000, pays a manager €750, and takes five hours. Which one leaves you able to run a third studio?",
answers:["Studio B, it leaves 25 hours for the next one","Studio A, €4,000 a month funds the next one","Studio A, the manager's pay weakens B","Studio B, a manager can run any business"],correct:0,
logic:"A: 4,000 for 30 hours of your time. B: 2,250 net for five hours",
lesson:"Capacity to grow is measured in free hours, not in monthly profit."},

{level:"Reasoning",prize:1000,seconds:45,category:"present vs future",
question:"A tool you need costs €30,000 to build plus €200 a month to run. Licensing the same thing costs €1,200 a month. Over three years, which is cheaper?",
answers:["Build, by about €6,000","Build, by about €13,000","Licence, by about €6,000","Licence, by about €2,400"],correct:0,
logic:"Build: 30,000 + 7,200 = 37,200. Licence: 43,200",
lesson:"Building wins on a long horizon and loses on a short one."},

{level:"Reasoning",prize:1000,seconds:45,category:"time vs income",
question:"Offer A pays €60,000 once, this year. Offer B pays €2,000 a month for three years and takes 15 hours a month, which you could bill at €45 an hour elsewhere. Which is worth more?",
answers:["A, by about €12,000","A, by about €36,000","B, by about €12,000","B, by about €24,000"],correct:0,
logic:"A pays 60,000. B pays 72,000 and consumes 15 × 36 × 45 = 24,300 of your time, leaving 47,700",
lesson:"Recurring revenue is better only when it does not eat the time that earns elsewhere."},

{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",
question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. You are offered one of four deals for your development studio. The software firm earns €100,000 a year and a buyer pays 3 times profit. Which is worth most over three years?",
answers:["€60,000 in cash now","€1,600 a month for three years","A 30% stake in a software firm earning €100,000 a year","€30,000 now and €1,000 a month for three years"],correct:2,
logic:"Stake: 30,000 a year × 3 = 90,000, still worth 30% of 300,000 = 90,000. Total about 180,000, against 57,600, 66,000 and 60,000",
lesson:"In a business valued at a high multiple, a share of it beats almost any cash offer."}
],



healthcare: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A clinic books 32 appointments a day across four rooms, split evenly. How many per room?",answers:["6","7","8","9"],correct:2,logic:"32 ÷ 4 = 8",lesson:"Know your capacity per room before you promise a booking."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A consultation costs the patient €45 and the materials used cost €8. What stays in the clinic?",answers:["€8","€35","€37","€45"],correct:2,logic:"45 − 8 = 37",lesson:"Every appointment has a small cost inside it."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A nurse works seven hours a day and each patient takes 35 minutes. How many patients?",answers:["10","11","12","14"],correct:2,logic:"7 × 60 = 420 minutes, then ÷ 35 = 12",lesson:"Time is the only stock a clinic holds."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A clinic runs 22 days a month with 30 appointments a day at €40. What is the monthly revenue?",answers:["€22,000","€24,400","€26,400","€28,800"],correct:2,logic:"30 × 40 = 1,200 a day, then × 22 = 26,400",lesson:"The month is visible from the daily number."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"An insurer pays €38 a visit and the clinic's cost per visit is €26. How much does each visit leave?",answers:["€8","€10","€12","€26"],correct:2,logic:"38 − 26 = 12 left from each visit",lesson:"Insured work often pays less than private work, and volume has to make up the difference."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"Monthly revenue is €26,400. Salaries cost €16,000, rent €3,500 and supplies €2,800. What is left?",answers:["€2,600","€3,200","€4,100","€5,900"],correct:2,logic:"26,400 − 16,000 − 3,500 − 2,800 = 4,100",lesson:"Staff costs dominate every clinic's accounts."},
{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",question:"A private clinic depends on one insurer for 80% of its patients. What is the main risk?",answers:["Losing most of its income if the contract ends","Paying higher taxes on insured patients","Waiting longer for patient payments","Needing more staff than it can hire"],correct:0,logic:"One decision elsewhere can remove 80% of your income",lesson:"Dependence is comfortable right up to the day it is not."},
{level:"Basic",prize:500,seconds:30,category:"cash timing",question:"The clinic is paid by the insurer 60 days after treatment, and pays staff monthly. What does it need?",answers:["Cash to cover about two months of costs","Prices raised by about 10% per treatment","About 20% more patients every month","A loan for about a year of running costs"],correct:0,logic:"Money leaves monthly and arrives 60 days later",lesson:"Growth makes this worse, not better."},
{level:"Applying",prize:750,seconds:30,category:"price vs volume",question:"A specialist sees six private patients a day at €80, or twelve insured patients at €38. Costs are €26 per patient either way. Which earns more, and by how much?",answers:["Private, by €180 a day","Insured, by €180 a day","Private, by €480 a day","The two are equal"],correct:0,logic:"Private: 6 × 54 = 324. Insured: 12 × 12 = 144",lesson:"Twice the patients, less than half the result."},
{level:"Applying",prize:750,seconds:30,category:"growth vs optimisation",question:"A new room costs €1,800 a month including equipment, and would allow eight more appointments a day, each leaving €12, over 22 days. Is it worth it?",answers:["It adds about €312 a month, if the appointments fill","It adds about €2,112 a month","It loses about €1,800 a month","It breaks even at eight appointments a day"],correct:0,logic:"8 × 12 × 22 = 2,112, minus 1,800 = 312",lesson:"Thin contribution means a new room must be almost full to be worth having."},
{level:"Applying",prize:750,seconds:30,category:"prevention appetite",question:"A licence renewal and compliance audit costs €4,000 every two years. Skipping it risks a suspension that would close the clinic for a month, costing €26,000. Pay it?",answers:["Pay it, the cost is a fraction of a single month's closure","Skip it, audits rarely happen","Pay it only if an inspection is announced","Skip it, the fine would be smaller than the fee"],correct:0,logic:"2,000 a year against a 26,000 exposure",lesson:"Compliance is insurance with a certificate."},
{level:"Applying",prize:750,seconds:30,category:"present vs future",question:"A clinic invests €60,000 in equipment used for ten years, financed by a five-year loan. How does that appear in the accounts?",answers:["Cost spreads over ten years, the loan is repaid in five","Cost appears in full in the first year of ownership","Cost follows the loan and spreads over five years","Equipment is an asset, so there is no cost at all"],correct:0,logic:"Depreciation is 6,000 a year, and the loan takes more cash than that",lesson:"Accounting profit and cash flow diverge, and the gap is where clinics get caught."},
{level:"Reasoning",prize:1000,seconds:45,category:"growth vs optimisation",question:"A second doctor costs €4,500 a month and would see twelve insured patients a day, each leaving €12, over 22 days. Extending private hours would add three private patients a day, each leaving €54. Which is better?",answers:["Private hours, they add €3,564 while the doctor loses €1,332","The second doctor, the extra volume adds €3,168","The second doctor, twelve patients beat three every time","Private hours, they add €1,332 while the doctor adds €3,168"],correct:0,logic:"Doctor: 12 × 12 × 22 = 3,168 against a 4,500 salary. Private: 3 × 54 × 22 = 3,564",lesson:"More patients is not the same as more money. At €12 of contribution, a salary needs a lot of volume behind it."},
{level:"Reasoning",prize:1000,seconds:45,category:"price vs volume",question:"The insurer offers 20% more volume at 10% lower rates. Each visit currently leaves €12 on a €38 rate, at 500 visits a month. Accept or refuse?",answers:["Refuse, the monthly total falls from €6,000 to €4,920","Accept, 20% more patients lifts income by 20%","Accept, the extra volume improves the cost base","Refuse, the clinic has no room for 100 more visits"],correct:0,logic:"New rate 34.20, contribution 8.20, then × 600 visits = 4,920",lesson:"Volume at a lower rate is only worth taking when your costs fall with it."},
{level:"Reasoning",prize:1000,seconds:45,category:"liquidity vs ownership",question:"A hospital group offers €150,000 for your clinic, which earns €50,000 a year in profit, on condition you keep working there for two years at €36,000. What is the offer really worth?",answers:["About €122,000, after €28,000 of lost income","A full €150,000, since the salary is separate","About €222,000, counting the salary as a gain","Nothing worth having, at any price offered"],correct:0,logic:"Two years at 14,000 less than you earn now",lesson:"A work condition is part of the price, not a bonus."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. Your clinic earns €50,000 a year in profit, with 80% of patients from one insurer. That insurer offers €150,000 and a local group offers €120,000. Two years of building private patients would hold profit at €50,000, then lift it to €70,000, and a buyer pays 2 times profit. Which route is worth most over three years?",answers:["Keep it, rebuild the patient mix, then sell for €140,000","Sell to the insurer now for €150,000","Sell to the local group now for €120,000","Keep it unchanged and sell in five years"],correct:0,logic:"Keep and rebuild: 50,000 + 50,000 + 70,000 = 170,000 of profit, plus a 140,000 sale, so 310,000. Insurer: 150,000. Local group: 120,000",lesson:"Fix what caps the price before you accept the price."}
],



education: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A course has 24 places at €180 each and seven stay empty. What does it earn?",answers:["€2,880","€3,060","€3,240","€4,320"],correct:1,logic:"24 − 7 = 17, then × 180 = 3,060",lesson:"An empty seat costs the same as a full one."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A workshop runs six hours with a 30-minute break. How much teaching time?",answers:["5 hours","5 hours 30 min","6 hours","6 hours 30 min"],correct:1,logic:"6:00 − 0:30 = 5:30",lesson:"Sell the hours you actually teach."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"Twelve students pay €95 each per month. What is the monthly income?",answers:["€950","€1,040","€1,140","€1,240"],correct:2,logic:"12 × 95 = 1,140",lesson:"A class is a small monthly business."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A trainer is paid €40 an hour for three hours of teaching and drives 90 minutes each way, unpaid. What is the effective hourly rate?",answers:["€13","€20","€27","€40"],correct:1,logic:"3 × 40 = 120, across six hours of total time",lesson:"Travel time is unpaid time that still belongs to the job."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A trainer invoices €1,200 a month as self-employed. Why is that worth less than a €1,200 net salary?",answers:["Taxes and contributions come out of the invoice","Invoices are paid later than salaries each month","Self-employed people pay VAT at a higher rate","Salaries include an extra month of pay each year"],correct:0,logic:"An invoice is gross income; a net salary already has tax and social payments taken out",lesson:"Compare like with like before you call it a wage."},
{level:"Basic",prize:500,seconds:30,category:"capacity awareness",question:"A course costs €2,600 to run for 20 students. What does each seat cost you?",answers:["€130","€110","€150","€180"],correct:0,logic:"2,600 ÷ 20 = 130 per seat",lesson:"Knowing the cost of a seat tells you the lowest price you can ever charge."},
{level:"Basic",prize:500,seconds:30,category:"prevention appetite",question:"A trainer cancels two days before a course with 18 paid places. What is the true cost?",answers:["Refunds now, and empty seats in the next cohort","Refunds now, and a quiet month after that","The room hire already paid, and little else","Only lost goodwill, if the course is rescheduled"],correct:0,logic:"€3,240 returned, plus the people who tell others",lesson:"In education the damage lands on the next intake, not this one."},
{level:"Basic",prize:500,seconds:30,category:"price vs volume",question:"A training company pays a platform 30% commission for each student it brings. What does a €180 place earn?",answers:["€126","€150","€180","€54"],correct:0,logic:"180 × 0.70 = 126",lesson:"Channels that fill your seats own part of your price."},
{level:"Applying",prize:750,seconds:30,category:"margin literacy",question:"A course of 20 places at €180 costs €2,600 to run, and 16 places sell. What does it earn?",answers:["It earns €280","It earns €880","It loses €320","It breaks even"],correct:0,logic:"16 × 180 = 2,880, minus 2,600 = 280",lesson:"A course at 80% fill is barely worth running, which is why fill rate is the whole business."},
{level:"Applying",prize:750,seconds:30,category:"price vs volume",question:"A trainer raises the price from €180 to €200 and loses five of 40 participants. What happens to revenue?",answers:["Revenue falls by €200","Revenue stays the same","Revenue rises by €100","Revenue rises by €800"],correct:0,logic:"40 × 180 = 7,200, against 35 × 200 = 7,000",lesson:"Five lost seats cancelled the whole increase."},
{level:"Applying",prize:750,seconds:30,category:"concentration tolerance",question:"Two thirds of enrolments come from one corporate client's staff budget. What is the exposure?",answers:["A budget cut elsewhere empties your classrooms","A discount request you would find hard to refuse","Class sizes that vary more than you can plan for","Trainers who may be unavailable at short notice"],correct:0,logic:"Your capacity planning depends on someone else's spending decision",lesson:"Corporate budgets change in a meeting you are not invited to."},
{level:"Applying",prize:750,seconds:30,category:"present vs future",question:"A course runs eight times a year. Materials cost €600 each time, and a one-off curriculum build costs €4,000. How does the build show up per course?",answers:["The build adds €500 per course in the first year","The build adds €4,000 to every course you run","The build sits outside the cost of a course","The build adds €50 for each student enrolled"],correct:0,logic:"4,000 ÷ 8 = 500 in year one, and nothing after",lesson:"Content is an asset that gets cheaper every time you teach it."},
{level:"Reasoning",prize:1000,seconds:45,category:"price vs volume",question:"In person: 20 seats at €180 with €2,600 of costs per run. Online: unlimited seats at €90, €1,400 to produce once and €200 per run, with about 35 students. Which earns more per run?",answers:["Online, by about €1,950 per run","In person, by about €1,950 per run","Online, by about €3,150 per run","In person, by about €1,000 per run"],correct:0,logic:"Online: 35 × 90 = 3,150, minus 200 = 2,950. In person at full: 3,600 − 2,600 = 1,000",lesson:"A lower price with a low marginal cost beats a higher price with 20 seats, even before the one-off build is recovered."},
{level:"Reasoning",prize:1000,seconds:45,category:"concentration tolerance",question:"A corporate client wants 12 in-house sessions a year at €1,400 each, with sector exclusivity for two years. Your open courses earn €1,000 per run and you run 20 a year. Accept?",answers:["Accept, €16,800 for 12 delivery days","Refuse, €16,800 closes a whole sector","Accept, but at €16,800 without exclusivity","Refuse, 20 open runs earn €20,000"],correct:2,logic:"12 × 1,400 = 16,800 for 12 days, against 20 runs for 20,000 and far more effort",lesson:"The sector lock is the real price, and two years is short enough to accept it."},
{level:"Reasoning",prize:1000,seconds:45,category:"liquidity vs ownership",question:"Your training business earns €40,000 a year in profit, almost all from your own teaching. A buyer offers 1.5 times annual profit. A publisher offers €25,000 for your curriculum, which you can keep teaching. Which is better?",answers:["The publisher, you keep the income and sell the asset","The buyer, at €60,000 it is the larger single sum","Neither, the business is worth more than both offers","The buyer, since selling brings the work to an end"],correct:0,logic:"A business that depends on you personally sells at a low multiple; the curriculum is the only separable asset",lesson:"Sell what can leave you. Keep what cannot."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. You teach 20 courses a year, earning €40,000 in profit. With two freelance trainers delivering 16 courses, the business earns €40,000 a year while you teach four, and a buyer then pays 2 times profit instead of 1.5. A training group earns €120,000 a year. Which route is worth most over three years?",answers:["Two freelance trainers, four courses yourself, keep the business","A 30% stake in a group earning €120,000 a year","€60,000 in cash now for the whole business","€20,000 now plus €900 a month for three years"],correct:0,logic:"Keep: 40,000 × 3 = 120,000 of profit, plus a sale at 2 × 40,000 = 80,000, so 200,000. Stake: 36,000 × 3 = 108,000 plus a 54,000 stake value, so 162,000. Cash: 60,000. Instalments: 20,000 + 32,400 = 52,400",lesson:"Making yourself replaceable raises both what the business earns and what it sells for."}
],



beauty: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A trainer charges €25 a session and works 18 sessions a week. Studio rent is €150 a week. What is left?",answers:["€275","€300","€350","€450"],correct:1,logic:"18 × 25 = 450, minus 150 = 300",lesson:"Revenue is not income. The rent comes out first."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A salon works nine hours a day with 45-minute appointments. How many slots?",answers:["10","11","12","14"],correct:2,logic:"9 × 60 = 540 minutes, then ÷ 45 = 12",lesson:"Your day has a fixed number of slots, and that is your ceiling."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A treatment costs €60 and the products used cost €14. What stays in the business?",answers:["€14","€40","€46","€60"],correct:2,logic:"60 − 14 = 46",lesson:"Every treatment carries a small invoice inside it."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"Four stylists each see eight clients a day, 24 days a month. How many visits?",answers:["640","768","800","960"],correct:1,logic:"4 × 8 = 32 a day, then × 24 = 768",lesson:"Capacity is people multiplied by days."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A salon earns €3,600 a month. Rent is €800, products €400, one employee €1,100, and the owner takes €900. What is left for the business?",answers:["€300","€400","€500","€700"],correct:1,logic:"3,600 − 800 − 400 − 1,100 − 900 = 400",lesson:"Pay yourself as a cost, then judge the business honestly."},
{level:"Basic",prize:500,seconds:30,category:"capacity awareness",question:"Two of twelve daily slots go unfilled at €50 each, over 24 working days. What does that cost a month?",answers:["€2,400 a month is lost","€1,200 a month is lost","€100 a month is lost","Nothing is lost, since no work was done"],correct:0,logic:"2 × 50 × 24 = 2,400",lesson:"An empty chair costs exactly what a full one costs."},
{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",question:"A studio's income depends on one trainer who brings most of the clients. What is the main risk?",answers:["The clients leave with the trainer","The trainer asks for more hours","Class sizes become too large","Equipment wears out faster"],correct:0,logic:"In service businesses the relationship is the asset",lesson:"An asset that can walk out is worth protecting with more than goodwill."},
{level:"Basic",prize:500,seconds:30,category:"cash timing",question:"A client buys a 10-session pass for €200 and has used three. How should the unused €140 be seen?",answers:["Money owed in services, not yet earned","Profit already earned and bankable","A short-term loan from the client","Revenue belonging to last month"],correct:0,logic:"Seven sessions are still to be delivered",lesson:"Prepaid packages are a debt measured in hours."},
{level:"Applying",prize:750,seconds:30,category:"price vs volume",question:"A studio sells a 10-session pass for €200, or single sessions at €25. A client buys the pass and uses seven. What did the studio earn per session used?",answers:["€20.00 per used session","€25.00","€28.60","€35.00"],correct:2,logic:"200 ÷ 7 = 28.57",lesson:"Unused sessions are paid income, and passes are priced with that in mind."},
{level:"Applying",prize:750,seconds:30,category:"capacity awareness",question:"No-shows run at 15% of 768 monthly appointments, each worth €50 in revenue. What does that cost a month?",answers:["About €5,760 a month is lost","About €1,150 a month is lost","About €600 a month is lost","Nothing, the slot can be refilled"],correct:0,logic:"768 × 15% = 115 appointments, then × 50 = 5,760",lesson:"A deposit policy is the cheapest revenue increase in this industry."},
{level:"Applying",prize:750,seconds:30,category:"time vs income",question:"You can rent a chair to a self-employed stylist for €600 a month, or employ someone who would bring in €2,400 and cost €1,700. Which earns more?",answers:["Employing, by €100 a month","Renting, by €100 a month","Employing, by €700 a month","Renting, by €600 a month"],correct:0,logic:"Employing nets 2,400 − 1,700 = 700, against 600 of rent",lesson:"A €100 gain that carries employment risk is rarely a good trade."},
{level:"Applying",prize:750,seconds:30,category:"cost awareness",question:"A gym has 300 members at €40 a month and loses 6% of them each month. How many new members are needed each month just to stand still?",answers:["Eighteen a month","Six a month","None, membership is stable","A 6% price rise instead"],correct:0,logic:"300 × 6% = 18",lesson:"Churn is the real cost of a membership business, and it grows with the business."},
{level:"Reasoning",prize:1000,seconds:45,category:"growth vs optimisation",question:"A second treatment room costs €1,200 a month and would allow six more treatments a day, each leaving €46. You currently turn away about two clients a day. Open it?",answers:["Only if demand grows, two turned away is €2,208 of proven demand","Open it now, six treatments a day would cover the rent twice over","Open it now, the room will fill itself within a season","Leave it, a second room rarely returns its rent"],correct:0,logic:"2 × 46 × 24 = 2,208 of proven demand against 1,200 of cost",lesson:"Build capacity for demand you can count, not demand you hope for."},
{level:"Reasoning",prize:1000,seconds:45,category:"price vs volume",question:"A loyalty offer gives every tenth visit free. An average visit is €50, with €14 of product cost. What does the offer cost you?",answers:["It costs about 10% of revenue and holds the client","It costs about nothing, the visit was free anyway","It costs about €14, the product used on that visit","It costs about 10% of profit rather than revenue"],correct:0,logic:"One free visit in ten is 50 of revenue given up, with the 14 cost still incurred",lesson:"Loyalty schemes are a discount. Price them deliberately."},
{level:"Reasoning",prize:1000,seconds:45,category:"present vs future",question:"Your salon earns €36,000 a year in profit. A buyer offers 2 times annual profit. A stylist offers €80,000, paid as €30,000 now and €1,000 a month for four years. Which is worth more?",answers:["The stylist's offer, by about €6,000","The buyer's offer, by about €6,000","The stylist's offer, by about €22,000","The buyer's offer, by about €14,000"],correct:0,logic:"Stylist: 30,000 + (1,000 × 48) = 78,000. Buyer: 36,000 × 2 = 72,000",lesson:"The instalment offer is worth €6,000 more in total and carries the risk that the payments stop."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. Your two salons earn €70,000 a year in profit together, and each needs a €15,000 manager if you step back. The busier one earns €45,000 a year. A chain offers €140,000 for both, or €90,000 for the busier one alone. A buyer pays 2 times profit. Which route is worth most over three years?",answers:["Sell the busier one for €90,000 and keep the quieter with a manager","Sell both for €140,000 and leave the industry","Keep both with two managers","Sell the quieter one and keep the busier with a manager"],correct:2,logic:"Keep both: 70,000 − 30,000 of managers = 40,000 a year, so 120,000, plus both salons still worth about 80,000, so 200,000. Sell the quieter and keep the busier: about 50,000 now, then 30,000 a year = 90,000, plus a 60,000 salon, so 200,000. Sell the busier: 90,000 now, then 10,000 a year = 30,000, plus a 20,000 salon, so 140,000. Sell both: 140,000",lesson:"Two managed salons and one managed salon land in the same place. The deciding factor is how much of your year you want back."}
],



construction: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A job needs 96 square metres of flooring plus four spare. Boxes cover five square metres. How many boxes?",answers:["19","20","21","24"],correct:1,logic:"96 + 4 = 100, then ÷ 5 = 20",lesson:"Materials come in boxes, not in exact metres."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"Two workers are paid €140 a day each for a four-day job. What is the labour cost?",answers:["€560","€840","€1,120","€1,400"],correct:2,logic:"2 × 140 × 4 = 1,120",lesson:"Labour is the estimate that moves most."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A wall is eight metres long and 2.5 metres high. What is the area?",answers:["10.5 m²","16 m²","20 m²","24 m²"],correct:2,logic:"8 × 2.5 = 20",lesson:"Everything on site starts with an area."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A job is quoted at €4,000 with a 30% deposit. How much arrives before work starts?",answers:["€400","€800","€1,200","€2,000"],correct:2,logic:"4,000 × 0.30 = 1,200",lesson:"The deposit buys the materials, not your time."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A job pays €4,000. Materials cost €1,500, two workers €900 each, and fuel €200. What is left?",answers:["€400","€500","€700","€1,400"],correct:1,logic:"4,000 − 1,500 − 1,800 − 200 = 500",lesson:"A big contract and a thin margin often travel together."},
{level:"Basic",prize:500,seconds:30,category:"capacity awareness",question:"A crew of three completes one bathroom a week, even with normal overtime. A client wants five bathrooms in three weeks. Can it be done?",answers:["It needs a second crew or a longer deadline","It fits, with overtime","It fits, since bathrooms vary in size","It needs better materials"],correct:0,logic:"Three weeks of capacity is three bathrooms",lesson:"Promising capacity you do not have is how jobs are lost."},
{level:"Basic",prize:500,seconds:30,category:"cash timing",question:"A contract holds 10% retention for a year after completion, on a €40,000 job. What does that mean for you?",answers:["€4,000 is withheld for a year, subject to the release conditions","The client pays 10% extra at the end","Retention is a discount on the price","It affects only the final invoice date"],correct:0,logic:"Ten percent of the contract, held by the client for a year after completion",lesson:"Retention is your profit, parked in another company's account."},
{level:"Basic",prize:500,seconds:30,category:"prevention appetite",question:"Why is a fixed-price contract riskier than a day-rate contract?",answers:["Every delay and price rise is yours to absorb","Every payment arrives later than on day rates","Every change needs the client's written approval","Every fixed price is quoted below the day rate"],correct:0,logic:"A fixed price transfers uncertainty from the client to you",lesson:"You are paid for the estimate, and you pay for the mistake."},
{level:"Applying",prize:750,seconds:30,category:"present vs future",question:"A client offers €12,000 now, or €13,500 in six months. A €12,000 credit line for six months costs 12% a year. Which is better?",answers:["€13,500 later, by about €780","€12,000 now, by about €780","€12,000 now, by about €1,500","€13,500 later, by about €1,500"],correct:0,logic:"Interest 12,000 × 12% × 0.5 = 720, so 13,500 − 720 = 12,780",lesson:"Waiting has a price. Compare it against what waiting pays."},
{level:"Applying",prize:750,seconds:30,category:"prevention appetite",question:"You quote ten days of work. Rain typically costs two days, and your crew is paid €280 a day regardless. What should you do?",answers:["Build €560 into the quote for the two lost days","Charge €280 a day for rain days as they happen","Absorb the €560, weather is hard to predict","Add two weekend days at €280 to recover time"],correct:0,logic:"2 × 280 = 560",lesson:"Predictable disruption belongs in the price, not in your margin."},
{level:"Applying",prize:750,seconds:30,category:"time vs income",question:"A subcontractor quotes €8,000 for work you estimated at €9,500 of your own cost. Use them?",answers:["Use them, it saves €1,500 and frees your crew","Do it in house, the €1,500 rarely survives contact","Use them only if they accept a €1,500 retention","Do it in house, quality control is worth €1,500"],correct:0,logic:"A €1,500 saving, with reliability as the risk",lesson:"Their reference check is cheaper than your crew's week."},
{level:"Applying",prize:750,seconds:30,category:"margin literacy",question:"A client asks for an extra door during the work. It costs €600 in materials and a day of labour. What do you do?",answers:["Price it as a variation and get it agreed in writing","Absorb it, to keep the client happy","Add it to the final invoice without discussion","Refuse, the contract is fixed"],correct:0,logic:"Unpriced variations are how profitable jobs become break-even jobs",lesson:"Every change is a small new contract."},
{level:"Reasoning",prize:1000,seconds:45,category:"cash timing",question:"A €30,000 job pays 30% deposit, 40% at midpoint and 30% on completion, with 10% retention held for a year. Your costs are €24,000, spread evenly. How much profit is still tied up after completion?",answers:["€3,000","€6,000","€9,000","€12,000"],correct:0,logic:"Received during the job: 9,000 + 12,000 + 6,000 = 27,000 against 24,000 of costs. Total profit is 6,000, and 3,000 sits in retention for a year",lesson:"Half your profit can arrive a year after the work is finished."},
{level:"Reasoning",prize:1000,seconds:45,category:"time vs income",question:"A six-week job pays €60,000 with €48,000 of costs. A three-week job pays €35,000 with €26,000 of costs, for a developer with four more sites. Which is better?",answers:["The three-week job, €3,000 a week and four more sites","The six-week job, €2,000 a week on a larger contract","The six-week job, €12,000 of profit against €9,000","The three-week job, only if the developer signs all five"],correct:0,logic:"Six-week job earns 2,000 a week, three-week job earns 3,000 a week",lesson:"Profit per week of crew time is the number that matters when capacity is your constraint."},
{level:"Reasoning",prize:1000,seconds:45,category:"time vs income",question:"Your firm earns €70,000 a year in profit. A site manager costs €30,000 and would let you take on 40% more work at the same profit margin. Assuming the work is available, what happens to annual profit?",answers:["It falls by €2,000","It rises by €8,000","It rises by €28,000","It stays the same"],correct:0,logic:"70,000 × 1.4 = 98,000, minus the 30,000 manager, leaves 68,000",lesson:"The hire works from about 45% more work, so the real question is how much you can win."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. Your construction firm earns €70,000 a year and depends on you, so a buyer pays 1.5 times profit today. Spend a year building a management team and profit falls to €60,000 that year, then returns to €70,000 and the firm sells at 2 times profit after three years. Which route is worth most over three years?",answers:["Build the management team: €200,000 of profit plus a €140,000 sale","Sell now for €105,000, the owner-dependent price","A 25% stake in a contractor earning €200,000 a year","€40,000 now plus €1,500 a month for four years"],correct:0,logic:"Build: 60,000 + 70,000 + 70,000 = 200,000 of profit, plus a 140,000 sale, so 340,000. Stake: 50,000 × 3 = 150,000 plus a 100,000 stake value, so 250,000. Sell now: 105,000. Instalments: 40,000 + 72,000 = 112,000",lesson:"A year spent making the firm run without you is worth more than any offer on the table."}
],



transport: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A driver covers 320 km at €0.45 per km. What does the trip pay?",answers:["€124","€134","€144","€154"],correct:2,logic:"320 × 0.45 = 144",lesson:"Every route is a small invoice."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A van holds 12 pallets and you have 40 to move. How many full loads, and what is left?",answers:["3 loads, 2 left","3 loads, 4 left","4 loads, 4 left","4 loads, none left"],correct:1,logic:"40 ÷ 12 = 3 full loads with 4 remaining",lesson:"The last part-load costs the same to drive as a full one."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A round trip takes 5 hours 20 minutes, twice a day. What is the total driving time?",answers:["9 hours 40 min","10 hours","10 hours 40 min","11 hours 20 min"],correct:2,logic:"5:20 × 2 = 10:40",lesson:"Driving hours are regulated. Count them before you promise a delivery."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"Fuel costs €1.60 a litre and the van uses 9 litres per 100 km. What does 500 km cost?",answers:["€54","€64","€72","€81"],correct:2,logic:"500 ÷ 100 × 9 = 45 litres, then × 1.60 = 72",lesson:"Fuel is the one cost that never negotiates."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A courier is paid €0.45 per km and drives 1,200 km a month. Fuel costs €180. What is left?",answers:["€360","€450","€540","€720"],correct:0,logic:"1,200 × 0.45 = 540, minus 180 = 360",lesson:"Per-kilometre pay looks generous until the fuel comes out of it."},
{level:"Basic",prize:500,seconds:30,category:"growth vs optimisation",question:"Three vans can each cover 20 jobs a week, and the firm runs 42 jobs a week. What does that tell you?",answers:["The fleet runs at 70%, so nearly a whole van sits idle","The fleet is running at full capacity","A fourth van is needed to keep up","The price per job is set too low"],correct:0,logic:"42 jobs of a possible 60, so 18 jobs of capacity go unused, close to one whole van",lesson:"An idle van costs exactly what a busy one costs."},
{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",question:"A driver who has run the same route for three years leaves. What does the firm lose?",answers:["The knowledge that made the route profitable","The vehicle assigned to the route","The contract with the client","The fuel card and its discount"],correct:0,logic:"Timing, shortcuts, which docks are slow, which customer signs early",lesson:"Route knowledge is unwritten and expensive to relearn."},
{level:"Basic",prize:500,seconds:30,category:"present vs future",question:"A van costs €36,000 and is sold four years later for €12,000. What did it cost per year?",answers:["€3,000 a year","€6,000 a year","€9,000 a year","€12,000 a year"],correct:1,logic:"36,000 − 12,000 = 24,000, then ÷ 4 = 6,000",lesson:"A vehicle costs what you lose on it, not what you paid for it."},
{level:"Applying",prize:750,seconds:30,category:"margin literacy",question:"A route pays €900. The truck runs 600 km loaded and 600 km back empty, at €0.55 per km. What is the profit?",answers:["Profit €570","Profit €240","Profit €900","Loss €120"],correct:1,logic:"1,200 × 0.55 = 660, then 900 − 660 = 240",lesson:"The empty return is half your distance and none of your revenue."},
{level:"Applying",prize:750,seconds:30,category:"present vs future",question:"A van costs €600 a month to lease. Each job earns €45 with €12 of fuel. How many jobs cover the lease?",answers:["13 jobs","15 jobs","19 jobs","21 jobs"],correct:2,logic:"45 − 12 = 33 per job, then 600 ÷ 33 = 18.2",lesson:"Know your break-even in jobs, not in euros. Nineteen is something you can count on a Monday."},
{level:"Applying",prize:750,seconds:30,category:"price vs volume",question:"A client asks for a 10% discount on a route that pays €900 and costs €660 to run. Accept?",answers:["Refuse or renegotiate, the margin falls from €240 to €150","Accept, €90 is a small price for keeping a client","Accept, the route still covers its costs","Refuse, no discount is ever worth giving"],correct:0,logic:"900 × 0.9 = 810, minus 660 of cost, leaves 150 against 240, so the discount costs 38% of the margin",lesson:"A 10% discount on the price is a 38% cut in what you keep."},
{level:"Applying",prize:750,seconds:30,category:"cash timing",question:"You invoice €80,000 this month and pay €60,000 of costs now. Your clients pay in 60 days. What is the risk?",answers:["The money runs out before the invoices are paid","The profit is taxed before the cash arrives","The clients will dispute the invoices","Costs rise faster than invoices grow"],correct:0,logic:"Profit is 20,000, and you are 60,000 out of pocket for two months",lesson:"Profit is an opinion. Cash is a fact."},
{level:"Reasoning",prize:1000,seconds:45,category:"growth vs optimisation",question:"Contract A pays €120,000 a year and needs a €40,000 van bought now. Contract B pays €90,000 a year using your existing fleet. Both run one year. Which is better?",answers:["B, by about €10,000 in the first year","A, by about €30,000 in the first year","A, by about €120,000 in the first year","B, by about €50,000 in the first year"],correct:0,logic:"A leaves 80,000 after the van, against 90,000 for B",lesson:"The bigger contract is smaller once you count what it needs."},
{level:"Reasoning",prize:1000,seconds:45,category:"price vs volume",question:"A driver costs €2,200 a month and handles 80 jobs, each paying €45 with €14 of variable cost. You have 140 jobs a month and two drivers. What should you do?",answers:["Drop to one driver and turn away 60 jobs, gaining €340","Keep two drivers, the extra jobs cover their cost","Hire a third driver and grow into the demand","Raise the price, no staffing option pays at €45"],correct:0,logic:"Contribution is 31 a job. Two drivers: 140 × 31 = 4,340 against 4,400 of wages, a 60 loss. One driver: 80 × 31 = 2,480 against 2,200, a 280 gain",lesson:"Turning work away can earn more than taking it, when the second driver cannot fill a month."},
{level:"Reasoning",prize:1000,seconds:45,category:"leverage attitude",question:"Contract A pays €140,000 a year for three years with fuel at your risk. Contract B pays €125,000 a year for two years with fuel indexed to the market. Fuel is 40% of your €100,000 of annual costs. Which is safer?",answers:["B, a 20% fuel rise would cost €8,000 a year under A","A, the rate is €15,000 higher and the term is longer","A, fuel prices fall about as often as they rise","B, a two-year term is easier to price than three"],correct:0,logic:"Fuel is 40,000 of costs, so a 20% rise is 8,000 a year, for three years, with no way to pass it on",lesson:"A higher rate that carries an open-ended risk is not a higher rate."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. You are offered one of four deals for your courier firm. The regional operator earns €90,000 a year and a buyer pays 2 times profit. Which is worth most over three years?",answers:["A 30% stake in an operator earning €90,000 a year","€50,000 in cash now, paid on completion","€1,400 a month for the next three years","€30,000 now and €900 a month for three years"],correct:0,logic:"Stake: 27,000 a year × 3 = 81,000, still worth 30% of 180,000 = 54,000. Total about 135,000, against 50,000, 50,400 and 62,400",lesson:"A share of a bigger fleet pays you while you hold it and again when you sell it."}
],



media: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A campaign spends €600 and brings 240 enquiries. What is the cost per enquiry?",answers:["€1.50","€2.00","€2.50","€4.00"],correct:2,logic:"600 ÷ 240 = 2.50",lesson:"One number tells you whether a campaign works."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A video shoot runs seven hours at €80 an hour, plus €150 for equipment hire. What is the total?",answers:["€560","€630","€710","€790"],correct:2,logic:"7 × 80 = 560, plus 150 = 710",lesson:"The day rate is never the whole invoice."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A post reaches 12,000 people and 3% click. How many clicks?",answers:["36","120","360","400"],correct:2,logic:"12,000 × 0.03 = 360",lesson:"Reach is the promise. Clicks are the result."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A retainer of €2,400 a month covers 30 hours. What is the hourly rate?",answers:["€60","€72","€80","€96"],correct:2,logic:"2,400 ÷ 30 = 80",lesson:"A retainer is an hourly rate wearing a monthly coat."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A client pays €5,000 for a campaign, of which €3,200 passes through your account to the ad platform. What is your revenue?",answers:["€5,000","€1,800","€3,200","€8,200"],correct:1,logic:"5,000 − 3,200 = 1,800",lesson:"Money passing through is not money earned."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"Retainers bring €6,000 a month. Two freelancers cost €3,400, tools €400, and you want €1,500 for yourself. What is left?",answers:["€200","€700","€1,100","€2,600"],correct:1,logic:"6,000 − 3,400 − 400 − 1,500 = 700",lesson:"Pay yourself as a cost, then see what the business earns."},
{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",question:"A €4,500 monthly retainer is your main source of income, and the client can end it at any month with no notice. What is the main exposure?",answers:["The client can stop your main income before you replace it","The client can dispute invoices already paid","The work is harder to show publicly in your portfolio","The tax authorities may question the income reported"],correct:0,logic:"One client, no notice period, and no replacement lined up",lesson:"A contract's real value is the month of notice it buys you."},
{level:"Basic",prize:500,seconds:30,category:"cash timing",question:"An agency earns €6,000 a month, €4,500 of it from one client, who now asks for 30-day terms instead of 14. What should the agency check first?",answers:["Whether it can cover two more weeks of costs","Whether the client would accept a higher fee","Whether other clients will ask for the same terms","Whether to refuse and find a replacement client"],correct:0,logic:"Longer terms are a loan you give your client",lesson:"Check you can afford to lend before you agree to lend."},
{level:"Applying",prize:750,seconds:30,category:"present vs future",question:"A campaign costs €2,000 and brings 50 customers, each worth €120 in profit over a year. Was it worth it?",answers:["Yes, it returns €6,000 for €2,000, so €4,000 net","Yes, it returns €2,000 for €2,000, so it breaks even","No, it loses €2,000 in the first month","No, 50 customers is too few to judge"],correct:0,logic:"50 × 120 = 6,000 of profit over the year, minus the 2,000 spent, leaves 4,000",lesson:"Judge a campaign against what a customer is worth over a year, not against the first sale."},
{level:"Applying",prize:750,seconds:30,category:"cash timing",question:"A freelancer earns €2,000 in a good month and €800 in a slow one, alternating. Fixed costs are €1,200 a month. What does that mean?",answers:["The good months must carry the slow ones","The work is unprofitable overall","Costs should be paid every second month","Income and costs balance monthly"],correct:0,logic:"Average 1,400 against 1,200, yet a slow month is 400 short",lesson:"The average never arrives on time."},
{level:"Applying",prize:750,seconds:30,category:"time vs income",question:"A pitch for a €30,000 contract takes 40 hours of unpaid work, and you win roughly one in four. How should those hours be treated?",answers:["Each win costs 160 hours, so price it into the fee","Each pitch is unpaid, so the hours sit outside the price","Each referral is cheaper, so pitching can be dropped","Each extra pitch lifts the win rate above one in four"],correct:0,logic:"Four pitches per win, at 40 hours each",lesson:"Unpaid work is still your most expensive cost."},
{level:"Applying",prize:750,seconds:30,category:"liquidity vs ownership",question:"A photographer can sell full rights for €3,000, or licence the images for one year at €900. The client has renewed every year for three years and looks set to continue. Which is better?",answers:["Licensing, it passes €3,000 in the fourth year","Selling, €3,000 today beats €900 a year","Licensing, rights tend to gain value over time","Selling, renewals depend on the client's budget"],correct:0,logic:"900 × 4 = 3,600, above the 3,000 sale, and the images remain the photographer's",lesson:"Rights are sold once. Licences are sold again."},
{level:"Reasoning",prize:1000,seconds:45,category:"time vs income",question:"A retainer pays €2,500 a month for 25 hours. Project work pays €4,500 for 40 hours, about six times a year. You can take one or the other. Which earns more in a year?",answers:["The retainer, €30,000 against €27,000, at a lower hourly rate","The projects, €27,000 against €30,000, at a higher hourly rate","The retainer, and it also pays more per hour","The projects, and they also take fewer hours"],correct:0,logic:"Retainer: 2,500 × 12 = 30,000 for 300 hours, so 100 an hour. Projects: 4,500 × 6 = 27,000 for 240 hours, so 112 an hour",lesson:"The projects pay better per hour and less per year. Which matters depends on whether you can fill the gaps."},
{level:"Reasoning",prize:1000,seconds:45,category:"growth vs optimisation",question:"Your agency bills €12,000 a month with three staff. A fourth would cost €2,800. Your pipeline holds at least €3,500 of extra work a month for the next two months. Hire?",answers:["Hire, the pipeline supports it for at least two months","Hire, a fourth pair of hands tends to pay for itself","Wait until the pipeline runs six months ahead","Raise prices by 25% rather than adding a salary"],correct:0,logic:"A €700 monthly gain, with two months of visible work to cover the risk",lesson:"Hiring is a bet on the pipeline, so measure the pipeline first."},
{level:"Reasoning",prize:1000,seconds:45,category:"liquidity vs ownership",question:"A brand offers €80,000 for full rights to a campaign you created, or €25,000 plus €1,500 a month in licensing for five years. Which is worth more?",answers:["The licence, by about €35,000","The licence, by about €10,000","Full rights, by about €35,000","Full rights, by about €55,000"],correct:0,logic:"Licence: 25,000 + (1,500 × 60) = 115,000. Full rights: 80,000",lesson:"Buyers offer cash precisely when the asset is worth more than the cash."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. Your agency earns €60,000 a year in profit, and your biggest client is 60% of revenue. That client offers €120,000 for the agency, which is 2 times profit. If you refuse, assume the agency keeps earning €60,000 and could be sold in three years at the same multiple. Sell or refuse?",answers:["Refuse, three years of profit plus a later sale is €300,000","Sell, €120,000 today removes the client risk","Refuse, and ask the client for €200,000 instead","Sell, but only if they employ you afterwards"],correct:0,logic:"Refusing: 60,000 × 3 = 180,000 of profit, plus a 120,000 sale, so 300,000 against 120,000 today",lesson:"Your biggest client offering 2 times profit is an attempt to buy you cheap. Reduce the dependence instead, and sell later at a better price."}
],



manufacturing: [
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A line produces 240 parts a day and one part in twelve fails quality control. How many good parts?",answers:["200","216","220","228"],correct:2,logic:"240 ÷ 12 = 20 rejected, then 240 − 20 = 220",lesson:"Output is what passes, not what comes off the line."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A batch of 500 units takes six hours to run and two hours to set up. What is the total machine time?",answers:["6 hours","7 hours","8 hours","10 hours"],correct:2,logic:"6 + 2 = 8",lesson:"Setup is machine time you cannot sell."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"Material costs €4.20 per unit. What does a batch of 350 units cost in materials?",answers:["€1,260","€1,470","€1,680","€2,100"],correct:1,logic:"350 × 4.20 = 1,470",lesson:"Know your material cost before you quote."},
{level:"Warm-up",prize:250,seconds:20,category:"numeracy",question:"A workshop runs 20 days a month, eight hours a day. How many machine hours?",answers:["140","160","180","200"],correct:1,logic:"20 × 8 = 160",lesson:"Capacity is hours, and hours are finite."},
{level:"Basic",prize:500,seconds:30,category:"margin literacy",question:"A unit sells for €25. Materials are €9 and labour €6. How much does each unit leave toward the rent and other fixed costs?",answers:["€6","€9","€10","€16"],correct:2,logic:"25 − 9 − 6 = 10 of contribution per unit",lesson:"What each unit leaves over is the money that pays for everything that does not change."},
{level:"Basic",prize:500,seconds:30,category:"capacity awareness",question:"Fixed costs are €12,000 a month and each unit leaves €10. How many units cover the fixed costs?",answers:["800","1,000","1,200","1,500"],correct:2,logic:"12,000 ÷ 10 = 1,200",lesson:"Break-even in units is a number you can see on the floor."},
{level:"Basic",prize:500,seconds:30,category:"concentration tolerance",question:"One supplier provides the only material your process accepts. What is the main risk?",answers:["Production stops entirely if that supplier fails","Material prices rise gradually year after year","Deliveries take longer during the winter months","Quality varies between one batch and the next"],correct:0,logic:"A single source is a single point of failure",lesson:"It fails at the worst possible moment, which is the only moment it matters."},
{level:"Basic",prize:500,seconds:30,category:"present vs future",question:"A €24,000 machine lasts eight years. How does the cost appear in the accounts each year?",answers:["€3,000 a year as depreciation","€24,000 in the first year","€24,000 spread over the loan period","Nothing, it is an asset"],correct:0,logic:"24,000 ÷ 8 = 3,000",lesson:"The money leaves at once and the cost lands over years."},
{level:"Applying",prize:750,seconds:30,category:"prevention appetite",question:"A machine breaks down about twice a year, costing €4,000 in lost production each time. A service contract costs €3,000 a year and prevents most breakdowns. Which is cheaper?",answers:["The contract, by about €5,000 a year","The contract, by about €1,000 a year","No contract, by about €3,000 a year","No contract, by about €1,000 a year"],correct:0,logic:"Expected loss 2 × 4,000 = 8,000, against 3,000",lesson:"Prevention is cheap when failure is both expensive and frequent."},
{level:"Applying",prize:750,seconds:30,category:"margin literacy",question:"You run 1,000 units a month with €12,000 of fixed costs. At 2,000 units the fixed costs stay the same. What happens to the fixed cost per unit?",answers:["Fixed cost per unit halves, from €12 to €6","Fixed cost per unit stays where it is, at €12","Fixed cost per unit doubles, from €12 to €24","Fixed cost per unit falls to €3 at that volume"],correct:0,logic:"12,000 ÷ 1,000 = 12, and 12,000 ÷ 2,000 = 6",lesson:"Volume does not cut costs. It spreads them."},
{level:"Applying",prize:750,seconds:30,category:"price vs volume",question:"A customer wants 5,000 units a month at €19 against your usual €25. Variable costs are €15 a unit and the line has spare capacity. Accept?",answers:["Accept, it adds €20,000 a month after variable costs","Refuse, €19 sits €6 below your standard price","Accept, if they commit to twelve months of orders","Refuse, other customers will want the same €19"],correct:0,logic:"19 − 15 = 4 per unit, then × 5,000 = 20,000",lesson:"Spare capacity earns nothing. The real caution is whether your other customers find out."},
{level:"Applying",prize:750,seconds:30,category:"cost awareness",question:"Scrap runs at 8% of production. Each scrapped unit costs €15 in materials and time, and you make 4,000 units a month. What does scrap cost?",answers:["Scrap costs about €4,800 a month","Scrap costs about €600 a month","Scrap costs about €1,200 a month","Scrap costs about €320 a month"],correct:0,logic:"4,000 × 8% = 320 units, then × 15 = 4,800",lesson:"Waste is a bill you pay quietly, every month."},
{level:"Reasoning",prize:1000,seconds:45,category:"present vs future",question:"A €40,000 machine cuts your unit cost from €15 to €12. You make 1,500 units a month. How long until it pays back?",answers:["It pays back in about nine months","It pays back in about two years","It pays back in about five years","It pays back in about three years"],correct:0,logic:"Saving 3 × 1,500 = 4,500 a month, then 40,000 ÷ 4,500 = 8.9",lesson:"A capital decision becomes simple once you convert it into months."},
{level:"Reasoning",prize:1000,seconds:45,category:"cash timing",question:"Running 200-unit batches means a setup every batch, two hours at €60 an hour. Running 1,000 at once means one setup, but €3,000 of stock sits unsold for three months at a holding cost of €20 a month. Which is cheaper over three months?",answers:["Large batches, by about €420 over the period","Large batches, by about €600","Small batches, by about €420","Small batches, because stock ties up cash"],correct:0,logic:"Five setups cost 600. One setup costs 120 plus 60 of holding, so 180. Difference 420",lesson:"Setup cost and holding cost pull in opposite directions, and the answer lives in the middle."},
{level:"Reasoning",prize:1000,seconds:45,category:"liquidity vs ownership",question:"Your workshop earns €50,000 a year in profit and a buyer offers 2 times annual profit. Spending €40,000 would raise profit 30% at the same multiple, and you would sell as soon as the work is done. Sell now or improve first?",answers:["Sell now, by €10,000","Sell now, by €40,000","Improve first, by €10,000","Improve first, by €30,000"],correct:0,logic:"Now: 100,000. Later: 130,000 − 40,000 = 90,000",lesson:"Improvements pay at exit only when the gain beats what they cost."},
{level:"Final boss",prize:2000,seconds:60,category:"liquidity vs ownership",question:"House rules: figures are annual profit, profits are paid out by ownership share, and a buyer pays the stated multiple both now and in three years. Your workshop earns €60,000 a year in profit. A larger factory earns €90,000 a year and pays profits out by share. A buyer values a workshop at 2 times annual profit. Which route is worth most over three years?",answers:["Keep the workshop and hire a manager at €18,000 a year","Sell the workshop for €100,000 and stop working","Swap the workshop for a 40% stake in a larger factory","Take €50,000 now plus €1,200 a month for three years"],correct:0,logic:"Keep: 42,000 a year × 3 = 126,000, and the workshop is still worth 84,000, so 210,000. Stake: 36,000 × 3 = 108,000 plus a 72,000 stake value, so 180,000. Sell now: 100,000. Instalments: 50,000 + 43,200 = 93,200",lesson:"A profitable business run by someone else beats every offer here, and the stake comes closest."}
],

};
