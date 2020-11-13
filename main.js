let texts =  [
    `Dear Aparimeya, Thank you for taking the time to discuss your resume with us. Although it is clear that someone with your qualifications has much to offer, we have been unable to identify an ideal match between your particular background and experience and our current needs. However, we will keep your resume in our files on the chance that a suitable position should become available at a later date. Thank you again for your interest in the firm, and we wish you the best in your job search. Sincerely, Human Capital | Recruiting`,
    `Hi Aparimeya, Thanks for your interest in Reddit! The team has reviewed your application for the Software Engineering Intern role, and after carefully considering your background and qualifications we have decided not to move forward in the process at this time. We are flattered by the huge number of applications we receive from exceptional candidates and while exciting, this also makes the hiring process that much more challenging. Thanks again for your interest in Reddit and we wish you the best of luck in your search. Sincerely, The Reddit Team`,
    `Hi Aparimeya, Thank you so much for your interest in joining Stripe! We have had a number of qualified applicants and are on track to fill our class in all of our US offices. We have made the difficult decision to not move forward with your candidacy at this time, but want to thank you for your patience while we reviewed all of our submissions. We encourage you to revisit our jobs page next fall to see what opportunities might interest you. The University Recruiting team wishes you the best of luck in your search and we hope our paths cross again soon. Best, Stripe University Recruiting`,
    `Hello Aparimeya, Thank you for giving us the opportunity to consider you for the position with us at Unity Technologies. We have carefully reviewed your experience and qualifications for this position, and unfortunately, we have decided not to move forward with your application at this time. Please keep checking our Careers Page, and LinkedIn Company Page, for other opportunities that may be of interest to you. We do appreciate your interest in Unity Technologies, and we wish you every success for the future. Regards, Unity Technologies Recruiting Team`,
    `Hello Aparimeya, Thank you for taking the time to interview with IMC for the Software Engineer Intern - Summer 2021 role. We enjoyed learning more about your background and appreciate you taking time out of your busy academic schedule to interview with our team. It has been an incredibly competitive recruiting season and in turn we need to be highly selective. After careful consideration, we’ve decided to move forward with other candidates whose skills and experience more closely align with our current business needs. Should our needs change, we will be sure to reach out to you at the appropriate time. We appreciate the time and effort you have dedicated to our process and wish you the best of luck in your future career endeavors. Regards, IMC Recruiting`,
    `Hi Aparimeya, Thank you for your application to Databricks! After reviewing your skills and experience, we have made the decision to not move forward at this time. However, we will keep your resume on file in case a more suitable role opens in the future. Also, please check our careers page from time to time as new roles are constantly being created. We appreciate your interest and wish you the best of luck in your search! Regards, Databricks Recruiting`,
    `Hi Aparimeya, Thank you for giving us the opportunity to consider you for the Software Engineering Internship role. After careful consideration, we have decided to not proceed with your candidacy. Please know that we really appreciate your interest and if you see another role you're interested in, don't hesitate to apply through fb.com/careers.`,
    `Hi Aparimeya, Thank you for taking the time to complete our programming challenge. After careful consideration, we regret to inform you that we do not have any openings that are a strong match for your experience and skills at this time. We greatly encourage you to continue leveling up your technical experience and re-apply at a later time. Hackerrank has many awesome practice challenges and resources you can access via https://www.hackerrank.com/dashboard. Thank you again for your interest in Palantir, and we wish you luck in your role search.`,
    `Hi Aparimeya, Thank you for taking the time to apply for the Backend Engineer (Intern) position.  We've been extremely fortunate to have a fantastic response from accomplished candidates such as yourself for this role. However, after careful consideration, we've made the decision to not move forward with the interview process at this time. We really appreciate your time and efforts in applying. We’d love to stay in touch as our team continues to grow and reconnect down the line. Thanks again for your interest in Robinhood, and we wish you the best of luck in your search! Kind regards, Robinhood Recruiting Team`,
    `Aparimeya, Thank you for your interest in Jane Street. We appreciate the time you spent preparing your application. Unfortunately, we are unable to find a good match for your skills and credentials at this time. We will retain your resume in our files in the event that our needs change. Thank you again, and best of luck in your search. Best, Jane Street Recruiting`,
    `Dear Aparimeya, We want to thank you for the investment of your time in exploring career opportunities with IBM. With reference to the application for the above position, we regret to inform you that at this time IBM is pursuing other candidates whose expertise is more closely aligned to the job requirements. In keeping with our company policies, your application will be kept active in our system for other IBM Recruiters to review for 12 months (or 6 months for residents of Germany and Austria). We highly encourage you to consider other opportunities at IBM and hope that you have continued interest in a career with us. Sincerely, IBM Early Professional Recruitment Team`,
]
let text = texts.join(" ")
let txt = text.split(" ");
let ngrams = {}
for(let i = 0; i <= txt.length-1; i++){
    let gram = txt[i]
    if(!ngrams[gram])
    ngrams[gram] = []
    ngrams[gram].push(txt[i+1])
}
// console.log(ngrams)
function gen(){
 //   console.log(txt[1])
    let startgram = txt[0]
    let result = startgram
    for(let y = 0; y < 200  ;y++){
        let possibilities = ngrams[startgram]
       
        if(!possibilities) break
        let next = possibilities[Math.floor(Math.random() * possibilities.length)];
        result += " " + next
        //console.log(startgram,next)
        startgram = next
    
    }

    return result
}


    console.log(gen())
  //  console.log(ngrams['Aparimeya,'])