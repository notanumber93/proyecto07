//Domain Generatorg
let pronoun = ["the", "our", "her", "his", "their"];
let adj = ["great", "big", "beautiful"];
let noun = ["jogger", "racoon", "lawyer"];
let domain = [".com", ".cl", ".net", ".org"];

pronoun.forEach(element1 => { 
    adj.forEach(element2 => {
        noun.forEach(element3 => {
                domain.forEach(element4 => {
                    console.log(element1 + element2 + element3 + element4);    
                });
        });
    })
});

