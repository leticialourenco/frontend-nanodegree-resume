var bio = {
	"name" : "Leticia Lourenco",
	"role" : "Designer + Front-end Developer",
	"contacts" : {
		"mobile" : "818-731-0607",
		"email" : "hello@leticialourenco.com",	
		"github" : "leticialourenco",
		"location" : "Los Angeles, CA"
	},
	"welcomeMessage" : "Hello! I'm Leticia, a designer and developer who is passionate and specialized in web.",
	"skills" : [
		"graphic design",
		"html", 
		"css", 
		"js"
	],
	"biopic" : "images/biopic.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "Universidade Federal de Lavras",
			"location" : "Lavras",
			"degree" : "BA",
			"majors" : ["Information Systems", "Computer Science"],
			"dates" : "2012 - 2016",
			"url" : "http://ufla.br"
		},
		{
			"name" : "California State University, Northridge",
			"location" : "Northridge, CA",			
			"degree" : "Exchange",
			"majors" : ["Front-end Dev. & UX/UI Design"],
			"dates" : "2014 - 2015",
			"url" : "http://www.csun.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-end Nanodegree",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Polaris Web",
			"title" : "UI Designer & Front-end Dev.",
			"location" : "Lavras, Brazil",
			"dates" : "2011 - 2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, illum ullam animi facilis sed nesciunt, delectus nulla voluptas excepturi cumque nostrum dignissimos sint facere cum nihil in veniam fugiat dolorem!."
		},
		{
			"employer" : "VISCOM Center",
			"title" : "UI/UX Designer & Front-end Dev.",
			"location" : "Northridge, CA",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam accusamus numquam nesciunt facere blanditiis, debitis, assumenda itaque inventore ad ipsam reprehenderit asperiores, quidem libero aut magni, quis aliquam! Iste."
		},
		{
			"employer" : "Meta+Lab",
			"title" : "UI/UX Designer & Front-end Dev.",
			"location" : "Northridge, CA",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam accusamus numquam nesciunt facere blanditiis, debitis, assumenda itaque inventore ad ipsam reprehenderit asperiores, quidem libero aut magni, quis aliquam! Iste."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Anna Anjos",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam accusamus numquam nesciunt facere blanditiis, debitis, assumenda itaque inventore ad ipsam reprehenderit asperiores, quidem libero aut magni, quis aliquam! Iste.",
			"images" : [
				"images/portfolio_img_1.jpg"
			]
		},
		{
			"title" : "OPG Managment",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam accusamus numquam nesciunt facere blanditiis, debitis, assumenda itaque inventore ad ipsam reprehenderit asperiores, quidem libero aut magni, quis aliquam! Iste.",
			"images" : [
				"images/portfolio_img_2.jpg"
			]
		},
		{
			"title" : "New Race Shop",
			"dates" : "2016",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam accusamus numquam nesciunt facere blanditiis, debitis, assumenda itaque inventore ad ipsam reprehenderit asperiores, quidem libero aut magni, quis aliquam! Iste.",
			"images" : [
				"images/portfolio_img_3.jpg"
			]
		}
	]
};


bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcomeMsg);

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}	

	$("#mapDiv").append(googleMap);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
};


education.display = function() {
	
	for (school in education.schools) {	
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);

		for (major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}	
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}

	for (onlineCourse in education.onlineCourses) {	
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	}
};


work.display = function() {
	
	for (job in work.jobs) {	
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};


projects.display = function() {
	
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}; 

bio.display();
education.display();
work.display();
projects.display();

