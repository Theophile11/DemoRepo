var temps = ['Tous les matins, ','Une fois par mois, ','Pour mon anniversaire, ','Après manger, ','Tous les lundis, '];
var verbes = ['j\'adore ','je déteste mais je dois ', 'je dois '];
var actions = ['faire la vaiselle.','emmener mon petit frère à l\'école.','me doucher.', 'méditer.'];

function generateSentence() {
    var temp = temps[Math.floor(Math.random() * temps.length)];
    var verbe = verbes[Math.floor(Math.random() * verbes.length)];
    var action = actions[Math.floor(Math.random() * actions.length)]; 
    console.log(temp.concat(verbe, action))
}


generateSentence()