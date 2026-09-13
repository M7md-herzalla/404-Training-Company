const header = document.getElementById("mainHeader");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("show");
        } else {
            header.classList.remove("show");
        }

    });

}
function showProgram(program) {

    const details = document.getElementById("program-details");

    if (program === "web") {

        details.innerHTML = `
            <h2>Web Development Learning Path</h2>

            <h3>1. HTML Fundamentals</h3>
            <ul>
                <li>Tags & Attributes</li>
                <li>Headings & Paragraphs</li>
                <li>Links & Images</li>
                <li>Lists</li>
                <li>Forms</li>
                <li>Tables</li>
                <li>Semantic HTML</li>
            </ul>

            <h3>2. CSS Fundamentals</h3>
            <ul>
                <li>Colors & Fonts</li>
                <li>Box Model</li>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Responsive Design</li>
            </ul>

            <h3>3. JavaScript</h3>
            <ul>
                <li>Variables</li>
                <li>Conditions</li>
                <li>Loops</li>
                <li>Functions</li>
                <li>DOM</li>
                <li>Events</li>
            </ul>

            <h3>4. Final Project</h3>
            <p>Build a complete responsive website.</p>
        `;

    }
    else if (program === "app") {

    details.innerHTML = `
        <h2>App Development Learning Path</h2>

        <h3>1. Programming Basics</h3>
        <ul>
            <li>Variables</li>
            <li>Conditions</li>
            <li>Loops</li>
            <li>Functions</li>
        </ul>

        <h3>2. User Interface</h3>
        <ul>
            <li>Screens</li>
            <li>Navigation</li>
            <li>Forms</li>
        </ul>

        <h3>3. Data</h3>
        <ul>
            <li>Local Storage</li>
            <li>APIs</li>
            <li>Database Basics</li>
        </ul>

        <h3>4. Final Project</h3>
        <p>Build a simple mobile application.</p>
    `;


}
else if (program === "business") {

    details.innerHTML = `
        <h2>Business Management Learning Path</h2>

        <h3>1. Management Fundamentals</h3>
        <ul>
            <li>Introduction to Management</li>
            <li>Planning</li>
            <li>Organizing</li>
            <li>Directing</li>
            <li>Controlling</li>
        </ul>

        <h3>2. Business Strategy</h3>
        <ul>
            <li>Business Goals</li>
            <li>Vision and Mission</li>
            <li>SWOT Analysis</li>
            <li>Strategic Planning</li>
            <li>Competitive Advantage</li>
        </ul>

        <h3>3. Operations Management</h3>
        <ul>
            <li>Business Processes</li>
            <li>Resource Management</li>
            <li>Quality Management</li>
            <li>Productivity</li>
            <li>Performance Indicators</li>
        </ul>

        <h3>4. Decision Making</h3>
        <ul>
            <li>Problem Identification</li>
            <li>Collecting Information</li>
            <li>Generating Alternatives</li>
            <li>Evaluating Alternatives</li>
            <li>Selecting the Best Solution</li>
        </ul>

        <h3>5. Final Project</h3>
        <p>
            Develop a simple business plan for a fictional company.
        </p>
    `;
}
else if (program === "leadership") {

    details.innerHTML = `
        <h2>Leadership Skills Learning Path</h2>

        <h3>1. Leadership Fundamentals</h3>
        <ul>
            <li>What is Leadership?</li>
            <li>Leader vs Manager</li>
            <li>Leadership Styles</li>
            <li>Characteristics of Effective Leaders</li>
        </ul>

        <h3>2. Team Leadership</h3>
        <ul>
            <li>Building Effective Teams</li>
            <li>Delegation</li>
            <li>Employee Motivation</li>
            <li>Trust Building</li>
            <li>Team Collaboration</li>
        </ul>

        <h3>3. Decision Making and Problem Solving</h3>
        <ul>
            <li>Identifying Problems</li>
            <li>Analyzing Problems</li>
            <li>Evaluating Solutions</li>
            <li>Making Decisions</li>
            <li>Managing Risks</li>
        </ul>

        <h3>4. Performance Management</h3>
        <ul>
            <li>Setting Goals</li>
            <li>Monitoring Performance</li>
            <li>Giving Feedback</li>
            <li>Coaching Employees</li>
            <li>Accountability</li>
        </ul>

        <h3>5. Practical Exercise</h3>
        <p>
            Lead a team through a realistic workplace problem and
            develop an action plan.
        </p>
    `;
}
else if (program === "communication") {

    details.innerHTML = `
        <h2>Communication Skills Learning Path</h2>

        <h3>1. Communication Fundamentals</h3>
        <ul>
            <li>Communication Process</li>
            <li>Verbal Communication</li>
            <li>Non-Verbal Communication</li>
            <li>Communication Barriers</li>
        </ul>

        <h3>2. Active Listening</h3>
        <ul>
            <li>Listening Techniques</li>
            <li>Understanding the Speaker</li>
            <li>Asking Effective Questions</li>
            <li>Providing Feedback</li>
        </ul>

        <h3>3. Professional Communication</h3>
        <ul>
            <li>Professional Emails</li>
            <li>Business Meetings</li>
            <li>Telephone Communication</li>
            <li>Workplace Communication</li>
        </ul>

        <h3>4. Presentation Skills</h3>
        <ul>
            <li>Planning a Presentation</li>
            <li>Organizing Content</li>
            <li>Body Language</li>
            <li>Public Speaking</li>
            <li>Handling Questions</li>
        </ul>

        <h3>5. Conflict and Negotiation</h3>
        <ul>
            <li>Understanding Conflict</li>
            <li>Managing Difficult Conversations</li>
            <li>Negotiation Basics</li>
            <li>Finding Win-Win Solutions</li>
        </ul>

        <h3>6. Practical Exercise</h3>
        <p>
            Deliver a short presentation and participate in a
            workplace communication role-play.
        </p>
    `;
}
else if (program === "it") {

    details.innerHTML = `
        <h2>IT Support Learning Path</h2>

        <h3>1. Computer Fundamentals</h3>
        <ul>
            <li>Computer Hardware</li>
            <li>Computer Software</li>
            <li>CPU, RAM and Storage</li>
            <li>Input and Output Devices</li>
            <li>Operating Systems</li>
        </ul>

        <h3>2. Windows Support</h3>
        <ul>
            <li>Windows Installation</li>
            <li>User Accounts</li>
            <li>File Management</li>
            <li>Software Installation</li>
            <li>Windows Settings</li>
        </ul>

        <h3>3. Networking Fundamentals</h3>
        <ul>
            <li>What is a Network?</li>
            <li>IP Addresses</li>
            <li>Routers and Switches</li>
            <li>Wi-Fi Networks</li>
            <li>DNS Basics</li>
            <li>Internet Connectivity</li>
        </ul>

        <h3>4. IT Troubleshooting</h3>
        <ul>
            <li>Identify the Problem</li>
            <li>Collect Information</li>
            <li>Diagnose the Cause</li>
            <li>Apply a Solution</li>
            <li>Test the Solution</li>
            <li>Document the Problem</li>
        </ul>

        <h3>5. Basic IT Security</h3>
        <ul>
            <li>Strong Passwords</li>
            <li>Malware Awareness</li>
            <li>Phishing Awareness</li>
            <li>Software Updates</li>
            <li>Data Backup</li>
        </ul>

        <h3>6. Practical Lab</h3>
        <p>
            Diagnose and solve common computer, Windows,
            network, and user support problems.
        </p>
    `;
}
details.scrollIntoView({
    behavior: "smooth"
});
}


const enrollButtons=document.querySelectorAll(".enroll-btn");
const courseInput=document.getElementById("course");
const registrationForm=document.getElementById("registrationForm");
const formMsg=document.getElementById("formMsg");


enrollButtons.forEach(function(button){

button.addEventListener("click",function(event){
     event.stopPropagation();
     let courseName = button.dataset.course;
    courseInput.value=courseName;
    registrationForm.scrollIntoView({
        behavior:"smooth",
         block: "start"
    });
});
});


let registrations =
    JSON.parse(localStorage.getItem("registrations")) || [];
if (registrationForm) {
registrationForm.addEventListener("submit",function(event){
event.preventDefault();
const user = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        age: Number(document.getElementById("age").value),
        course: document.getElementById("course").value,
        experience: document.querySelector( 'input[name="experience"]:checked')?.value
    };

    console.log(user);

    if (user.name === "") {
    formMsg.textContent = "Please enter your name.";
    return;
}
    const namePattern =/^[\p{L}\s]+$/u;
if (!namePattern.test(user.name)) {
    formMsg.textContent="name must contain letters";
return;
}
if (user.email==="") {
    formMsg.textContent="please enter your email";
return;
}
if (user.password.length<6) {
    formMsg.textContent="please enter at least 6 charcters";
    return;
}
if (user.age<18 || user.age>100) {
    formMsg.textContent="age must  be between 18-100";
return;
}
if (user.course==="") {
    formMsg.textContent="please enter a course";
return;
}
if (!user.experience) {
    formMsg.textContent="please select your experience level";
    return;
}

registrations.push(user);

localStorage.setItem(
    "registrations",
    JSON.stringify(registrations)
);
JSON.parse(localStorage.getItem("registrations"));
    

    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Password:", user.password);
    console.log("Age:", user.age);
    console.log("Course:", user.course);
    console.log("Experience:", user.experience);
formMsg.textContent = "";

    alert("Registration completed successfully!");

    window.location.reload();

});
}






















