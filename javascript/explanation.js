var lvl1 = ["Charles Loring Brace.  In 1853, after spending years working with poor and orphaned youth in the Five Points area of New York, Brace founded the Children’s Aid Society to help find homes for these children.  Read more...",
'Which means that without foster care, we might never have had, “Some Like it Hot," "Trading Places" or “Rocky."  Read more...',
"34% of the total number of children removed from their homes in 2016, over 92,000 children, were removed from their families due to parental drug abuse with the opioid crisis driving the increase in numbers annually.  (Note: The most current foster care stats taken over the course of a full year by governmental agencies are from 2016.)  Read more...",
"On average, students in foster care move schools at least once or twice a year. Of those youth who age out of the system, over one third will have experienced five or more school moves.  Read more..."
];
var lvl2 = ["As many as 40% of children placed in foster care will end up separated from one or all of their siblings.  Read more...",
"More than 50% of girls in the foster care system will become pregnant by the age of 19, compared to only 20% of teen girls nationally. Read more...",
"Since 2009, the percentage of children who leave care to adoption has remained steady at about 21 to 23 percent of all foster care exits.  Read more...",
"Nationally, the average time spent in foster care is nearly two years, with 15% of foster children staying in the system for three years or more, and six percent for five or more years.  Read more..."
];
var lvl3 = ["25% of all foster children who age out of the system will be incarcerated within two years.  Read more...",
"More than one in five will become instantly homeless after age 18.  Read more...",
"58% of foster children will graduate from high school by age 19, compared to 87% of all 19-year-olds. Read more…",
"Fewer than 3 percent will earn a college degree by age 25 (compared to 28 percent of all 25-year-olds). Read more..."];
var lvl4 = ["Combined state-local-federal spending on the foster care system totals approximately $29B per year.  Read more...",
"Reimbursement levels vary widely state to state, and also by the age and needs of the child.  But on average, foster parents receive between $20 and $25/day for taking care of a child, which amounts to $650-$800/month, or around $9000 per year.  Read more...",
"In most states, 100% tuition fee waivers are available for former foster children to attend state and local colleges.  If a child in foster care wants to go to college, grants and financial aid are available to make this possible. Read more...",
"Foster children “age out” of the foster care system when they turn 18.  Since 2008, however, states have the option to continue providing reimbursable foster care, adoption [note, William: delete comma after \"adoption\"] or guardianship assistance payments to children up to the age of 19, 20 or 21, if the youth meets certain criteria.  Read more..."];
var lvl5 = ["687,000 children spent time in the foster care system in 2016, according to the U.S. Department of Health and Human Services.  Read more...",
"At least half of the states in the U.S. have lost foster care capacity in the past five years, as the number of foster children needing placement went up.  Read more...",
"Nationally, the average time spent in foster care is nearly two years, with 15% of foster children staying in the system for three years or more, and six percent for five or more years.  Read more...",
"Despite the fact that 61% of the U.S. general population is white, only 44% of the children in foster care are Caucasian.  Read more..."];
var lvl6 = ["Millenials, who make up 30% of the U.S. population. Generation Z, which currently stands at 24%, will surpass them in 2019. Why does this matter for foster care kids?  Read more...",
"This means there are as many as 36 couples waiting for every one child who is placed up for adoption.  Read more...",
"In March, 2018, the law was passed to aid in reunifying foster children with their families of origin. Read more...",
"Between the widespread desire for adults to parent, the digital age creating new and sophisticated opportunities for communication, the fact that organization and fundraising are now at unprecedented levels, and our inherent impulse to be good and feel better about ourselves when we help others in need, we have every reason to believe WE CAN FIX THIS.  Read more..."
];
var explanationarr = [lvl1, lvl2, lvl3, lvl4, lvl5, lvl6];

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.onload = function(){
    var lvlstr = getCookie("level");
    var qstr = getCookie("question");
    var lvl = 0;
    var q = 0;
    console.log(lvl);
    console.log(q);
    if (lvlstr != "") lvl = parseInt(lvlstr);
    if (qstr != "") q = parseInt(qstr);
    
    document.getElementById("explanationID").innerHTML = explanationarr[lvl][q];
}


