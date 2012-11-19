neach = function(a, n, c) {
  (function e(array, fn) {
    for(var i = 0;i<array.length; i++) {
      fn < n.length ? e(array[i][n[fn]](), fn+1) : c(array[i]);
    }
  })(a, 0);
};



// Test data
var consultants = [];
var skills = ['Java', 'C++', 'Python', 'C#'];
var skillCount = [0,0,0,0];

for(var i = 0; i<=1; i++) {
  consultants[i] = {
    'id' : i,
    'projects': [],
    'getProjects' : function() {
      return this.projects;
    }};
  
  for(var j = 0; j<=2; j++) {
    consultants[i].projects[j] = {
      'id' : j,
      'techs' : [],
      'getTechs' : function() {
        return this.techs;
      }};
    
    for(var k = 0; k<=3; k++) {
      var ran = (Math.random() * (skills.length-1)).toFixed(0);
      consultants[i].projects[j].techs[k] = skills[ran] + ' ' + i + ' ' + j + ' ' + k;
      skillCount[ran] = skillCount[ran]+1;
    }
  }
  
}

neach(consultants, ['getProjects', 'getTechs'], function(tech) { console.log(tech); });
console.log('Counts: ', skillCount);