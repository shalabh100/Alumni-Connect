const profilesData = {
    company1: [
        { name: "Rajesh Kumar", position: "Software Engineer", email: "rajesh.kumar@infosys.com" },
        { name: "Anjali Sharma", position: "Senior Developer", email: "anjali.sharma@infosys.com" },
        { name: "Vikram Singh", position: "Project Manager", email: "vikram.singh@infosys.com" }
    ],
    company2: [
        { name: "Sneha Patel", position: "Data Scientist", email: "sneha.patel@google.com" },
        { name: "Rohit Verma", position: "UX Designer", email: "rohit.verma@google.com" },
        { name: "Priya Iyer", position: "Product Manager", email: "priya.iyer@google.com" }
    ],
    company3: [
        { name: "Karthik Nair", position: "Consultant", email: "karthik.nair@accenture.com" },
        { name: "Meera Rao", position: "Data Analyst", email: "meera.rao@accenture.com" },
        { name: "Abhishek Gupta", position: "Technical Lead", email: "abhishek.gupta@accenture.com" }
    ],
    company4: [
        { name: "Pooja Desai", position: "Software Developer", email: "pooja.desai@wipro.com" },
        { name: "Amit Chawla", position: "System Analyst", email: "amit.chawla@wipro.com" },
        { name: "Divya Kapoor", position: "Team Lead", email: "divya.kapoor@wipro.com" }
    ],
    company5: [
        { name: "Sandeep Reddy", position: "Database Administrator", email: "sandeep.reddy@oracle.com" },
        { name: "Shruti Joshi", position: "Cloud Engineer", email: "shruti.joshi@oracle.com" },
        { name: "Arjun Prasad", position: "Solution Architect", email: "arjun.prasad@oracle.com" }
    ],
    company6: [
        { name: "Nidhi Aggarwal", position: "Risk Analyst", email: "nidhi.aggarwal@deloitte.com" },
        { name: "Manoj Sharma", position: "Financial Consultant", email: "manoj.sharma@deloitte.com" },
        { name: "Pallavi Mehta", position: "IT Auditor", email: "pallavi.mehta@deloitte.com" }
    ]
};

function showProfiles(company) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '';  // Clear previous profiles

    profilesData[company].forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-card');

        profileDiv.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Position: ${profile.position}</p>
            <button class="contact-btn" onclick="contact('${profile.email}')">Contact</button>
        `;

        profileContainer.appendChild(profileDiv);
    });
}

function contact(email) {
    alert(`You can contact this alumni at: ${email}`);
}
