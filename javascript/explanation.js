var lvl1 = ["The goal of foster care is to seek a permanent placement for the child as quickly as possible, be it reunification with the birth parents, kinship care, or adoption. If the child cannot be reunited with their biological family, the child will be placed in a permanent home. Placement is for as long as it takes to achieve a permanent placement for the child, whether the plan be for reunification with the child's family, placement with relatives, or adoption.",
"Charles Loring Brace is regarded as the founder of the modern foster care system.  In 1853, after spending years working with poor and orphaned youth in the Five Points area of New York, Brace founded the Children’s Aid Society to help find homes for these children.  Over the next 75 years, Brace’s organization helped place over 400,000 impoverished children from NY and other eastern cities with farm families in midwestern, northern, southern and western states.",
"In 2016, the most recent year for which statistics are available, 61% of all children in foster care were removed from their parents due to neglect.  34% of the total number, were removed from their families due to parental drug (both factors were present in a high percentage of cases).  (U.S. Administration for Children and Families report, 2017)",
"Which means that without foster care, we might not have had, “The Seven Year Itch,” “Rocky,” “Coming to America” or “Girls Trip.” "
];
var lvl2 = ["Approximately 687,000 children spent time in the foster care system in 2016, according to the U.S. Department of Health and Human Services.  Some of those children spent only a short time in foster care before being reunited with their biological family.  Others will stay in the system for years to come.",
"Nationally, the average time spent in foster care is approximately two years, with 15% of foster children staying in the system for three years or more.  In 2016, over 20.000 foster children “aged out” of the system, meaning they reached the age of 18 without being adopted or reunited with their biological families.",
"The average age of kids entering the U.S. foster care system is 7.  However, that number is trending downward due to the influx of children who have been removed from their biological parents due to the opioid epidemic.  The average age of kids removed from their parents due to drug abuse in 2016 was 4 years younger than other kids in foster care.",
"Since 2009, the percentage of children who leave care to adoption has remained steady at about 21 to 23 percent of all foster care exits. Of the 402,378 U.S. children in foster care now, it's estimated that 101,840 are eligible for adoption. The number of waiting children has equaled about 26 to 27 percent of children in care for many years.  Almost two-thirds of these eligible children will eventually be adopted into forever families. However, this means that about 20,000 kids who could have been adopted will age out of foster care without ever being placed with a permanent family."
];
var lvl3 = ["55% of foster children have reunification with their biological parents as their goal. Even though typically they have been removed from their parents due to neglect or abuse, a majority of foster children want to be returned to their biological families when that is possible. For the first time, following passage of The Family First Act in March, 2018, the first major piece of legislation on foster care to be passed in the last 50 years, the federal government will start reimbursing states for expenses involved with reunifying families, and for program costs associated with preventing children from being removed from their biological parents in the first place. ",
"Research indicates that as many as 40% of children placed in foster care will end up separated from one or all of their siblings. (Seattle Journal for Social Justice, Volume 12, Issue 2, 2013). Despite the 2008 passage of the federal Fostering Connections Act, which mandated that siblings in foster care should be placed together whenever possible, and laws aimed at keep siblings together in more than half of U.S. states, in practice siblings are still often separated while in foster care.   Being separated from their siblings is an additional loss to being separated from their parents, and for many foster children, is an even bigger source of trauma.",
"Playdates, sleepovers and field trips are a normal part of childhood for most kids.  But prior to 2014, many foster children didn’t get to experience such events, due to the legal liability foster parents faced if something went wrong on a sleepover or trip they approved. But since passage of the federal “Preventing Sex Trafficking and Strengthening Families Act” in 2014, foster parents have had more latitude to make such choices on behalf of their foster kids. The law required states to implement a “reasonable and prudent parenting standard” giving foster parents the authority to make day-to-day decisions affecting children in their care regarding extracurricular, enrichment, cultural, social or sporting activities.  So foster kids now get to have a more normal childhood, which is win for them, and a win for their foster parents. (AP News, Dec., 2017)",
"On average, students in foster care move schools at least once or twice a year, and by the time they age out of the system, over one third will have experienced five or more school moves.  Children are estimated to lose four to six months of academic progress per move, which puts most foster care children years behind their peers. School transfers also decrease the chances a foster care student will ever graduate from high school. A national study of 1,087 foster care alumni found that “youth who had even one fewer change in living arrangement per year were almost twice as likely to graduate from high school before leaving foster care.” (The Atlantic, 2/28/14)"];
var lvl4 = ["Reimbursement levels vary widely state to state, and also by the age and needs of the child.  But on average, foster parents receive between $20 and $25 per day for taking care of a child. This amounts to between $650 to $800 per month, or around $9000 per year. Despite a persistent myth that many foster parents, “Do it for the money,” this typically amounts to approximately $1 per hour, per child, per day (ChildTrends.org).",
"Combined state-local-federal spending on the foster care system totals approximately $29B per year.  This amounts to approximately $62,100 per foster child, per year.  As noted above, foster parents themselves receive only $9000 per year, per child, on average.  So the vast majority of the money being spent on our nation’s foster children is on administration of the system, higher cost residential care for some youth, medical services and other costs.  The money is not going directly to foster parents.",
"The average middle income family now spends over $231,000 to raise a child to the age of 18, or approximately $13,500 per year. On average, upper income families (over $110K in income per year) spend approximately $372,000 ($21,000 per year).  Lower income families spend approximately $175,000, or $9700 per year (TIME magazine).  Foster parents therefore receive less per year than what average, lower income families spend on their children.",
"Foster children “age out” of the foster care system when they turn 18.  However, since 2008 states have the option to continue providing support to foster children up to the age of 19, 20 or 21 if the youth is: completing secondary education; enrolled in an institution which provides vocational education; participating in a program to find employment; or employed for at least 80 hours per month."];
var lvl5 = ["",
"",
"",
""];
var lvl6 = ["",
"",
"",
""]
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
    if (q != "") q = parseInt(qstr);
    
    document.getElementById("explanationID").innerHTML = explanationarr[lvl][q];
}


