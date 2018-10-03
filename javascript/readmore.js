var lvl1 = ["Brace started out serving as a Calvinist minister to the poor, but he then decided he wanted to pursue his work in the streets rather than in church. He started the 'Orphan Train' movement, and over the next 75 years his organization helped place over 400,000 impoverished children from northeastern cities with farm families in other parts of the country.",
'Also a foster care child, Tiffany Haddish, an American comedian and actress, received critical acclaim after her breakout role in the film "Girls Trip," co-starring Queen Latifah, Jada Pinkett Smith and Regina Hall. In 2018, Haddish was included on Time\'s annual list of the 100 Most Influential People in the World.',
"Of the 15 categories states can report for circumstances associated with a child's placement in foster care, drug abuse also had the highest increase.",
"Children are estimated to lose four to six months of academic progress per move, which puts most foster care children years behind their peers. School transfers also decrease the chances a foster care student will ever graduate from high school. A national study of 1,087 foster care alumni found that “youth who had even one fewer change in living arrangement per year were almost twice as likely to graduate from high school before leaving foster care.”"
];
var lvl2 = ["Despite the 2008 passage of the federal Fostering Connections Act, which mandated siblings in foster care be placed together whenever possible, in practice siblings are still often separated while in foster care. For many foster children, being separated from siblings is an even bigger source of trauma than being separated from parents.",
"71% of females in foster care will be pregnant by age 21. 77% of women who were formerly in foster care will become pregnant by the age of 24, compared to 40% of women who spent no time in foster care. As for boys, 50% of those in foster care had gotten a partner pregnant while still a teenager, compared to 19% of boys in the general population.",
"Of the 402,378 U.S. children in foster care right now, it's estimated 101,840 are eligible for adoption. The number of children awaiting adoption has equaled 26 to 27 percent of children in care for many years. Almost two-thirds of these eligible children will eventually be adopted into forever families.",
"In 2016, over 20,000 foster children “aged out” of the system, meaning they reached the age of 18 without being adopted or reunited with their biological families."
];
var lvl3 = ["Black children are about twice as likely to be placed in foster care as white kids. Because they are already subject to disproportionate rates of criminalization, being a foster youth compounds the risk. Foster care kids, particularly girls, can be targeted by sex traffickers, another means by which foster children end up in the criminal justice system.",
"Research suggests frequent placement changes are associated with an increase in a foster child's relative risk of becoming homeless. ",
"Oops! Nothing to see here.",
"By age 24, furthermore,  only 50% of former foster children will be employed."];
var lvl4 = ["This amounts to approximately $62,000 per foster child per year.",
"Despite a persistent myth that many foster parents \"do it for the money,\" this typically amounts to approximately $1/hour per child.  And if the government spends $62,000 per foster child in this country per year, how does the $53,000 not given to the foster parents actually help the child directly?",
"In spite of such federal and state support programs, however, only about 30% of foster children finish high school, fewer than 11% ultimately attend college, and only 2.5% will attain a college degree.",
"To continue receiving foster care, the child needs to be completing secondary education or a program leading to an equivalent credential; enrolled in an institution which provides post-secondary or vocational education; participating in a program or activity designed to promote, or remove barriers to, employment; employed for at least 80 hours per month; or incapable of doing any of the above due to a medical condition."
];
var lvl5 = ["Some spent only a short time in foster care before reuniting with their biological family. Others will stay in the system for years to come. According to available stats, the number of kids in the system increased during the 1990s before dropping to a historic low in 2012. But we're back on the rise, with over 10,000 more kids in foster care in 2016 than 2015, and in 2016 there were 23,291 more children entering than exiting foster care.",
"Another 15 states were not able to provide enough information to even make a determination of their capacity. ",
"In 2016, over 20,000 foster children “aged out” of the system, meaning they reached the age of 18 without being adopted or reunited with their biological families.",
"Of those remaining, the majority are black (23%), Hispanic (21%) and of mixed race (6%)."];
var lvl6 = ["Because millenials and members of Generation Z are widely regarded as being highly justice-minded and have been described as hopeful, but realistic. They want to make a humanitarian impact and are expected to be generous charitable donors as they age...and their technological prodigiousness doesn't hurt either.",
"While all forms of adoption potentially help a child in need, those who adopt children who have been subjected to abuse and neglect are operating from a place of inarguable altruism.",
"The law law does not address root problems of abusive, neglectful parenting, however, and while the government's failure to address this national crisis for 40 years speaks to the urgency for non-profits and ordinary citizens to get heavily involved, its passage means there's an awareness foster care is severely broken in this country and will hopefully mean better outcomes for some of its children.",
"So let's get on it!"
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
    var lvl = 1;
    var q = 1;
    if (lvlstr != "") lvl = parseInt(lvlstr);
    if (qstr != "") q = parseInt(qstr);
    console.log(lvl);
    console.log(q);
    
    document.getElementById("explanationID").innerHTML = explanationarr[lvl][q];
}


