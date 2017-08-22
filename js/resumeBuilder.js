var DATA = '%data%';

var bio = {
  name: 'Faris AlQahtani',
  role: 'Front End Developer',
  contacts: {
    mobile: '+966 593382322',
    email: 'fbq_2007@hotmail.com',
    github:'farisq1',
    location:'Riyadh'
  },
  welcomeMessage: 'I am a Front End Developer from Saudi Arabia studying in King Saud University. Hopefully you find what you are looking for here.',
  skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Web Applications', 'WordPress', 'Front-end Development'],
  biopic: 'images/biopic.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
    

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'King Saud University',
      title: 'Student Organizer',
      location: 'Riyadh',
      dates: 'April 2016',
      description: 'I worked organizing the students who wants to attend the event that was in the university organizing them of who showed up and who did not show up in order to give them certificates.'
    },
    {
      employer: 'My brothers shop',
      title: 'Buying and Selling Agent',
      location: 'Riyadh',
      dates: 'July 2016 - untill now',
      description: 'I worked with him in buying shop accessories which is relate to phones/ipads etc... and we sell them to people and sometimes we help fix their phones problems.'
    },
    
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};


var projects = {
  projects: [
    {
      'title': 'Portfolio project',
      'dates': 'July 2017',
      'description': 'A project from Udacity,It was about building a protfolio website but i made it with my own design to be a little bit different.',
      'images': ['images/portfolio.png', 'images/portfolio1.png']
    },
    {
      'title': 'Animal Card',
      'dates': 'July 2017',
      'description': 'A project from Udacity, It was about making an animal card that shows information about this animal.',
      'images': ['images/animalcard.png']
    },
   
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'AlTaqwa School',
      'location': 'Riyadh',
      'degree': 'Highschool',
      'major' : ['Information Systems'],
      'dates': '2011 - 2014'
    }
  ],
  onlineCourses: [
   {
     'title': 'Java free course in Arabic',
     'school': 'Rwaq',
     'dates': 'January 2015',
     'url': 'https://www.rwaq.org/courses/java_programing/sections'
   },
   {
     'title': 'Front End Development',
     'school': 'Udacity',
     'dates': 'July 2017 - untill now',
     'url': 'http://www.udacity.com'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace(DATA, education.schools[i].major);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $(".education-entry:last").append(formattedSchoolMajor);
	    $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        
      }

      $('#education').append(HTMLonlineClasses);

      for (var x = 0, len = education.onlineCourses.length; x < len; x++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[x].title).replace('#', education.onlineCourses[x].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[x].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[x].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[x].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
