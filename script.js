document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Custom response patterns
    const responses = {
        "are you human": "no i am a chatbot how can i be human",
        "environment": "supportive",
        "ansh": "he is very noty",
        "by": "same to you",
        "who created you": "mr Shaikh Haareess and Prakhar created me",
        "how are you made": "i am created with java script and my creator is Shaikh Haareess",
        "another joke": "Q:Why wouldn’t the elephant use the computer? A: He was afraid of the mouse!",
        "tell me a joke": "Q: Why was the teacher wearing sunglasses in the classroom? A:Because the class was so bright",
        "timings": "The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 AM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "fees during admission": "According to Ranks (officers,jco,or,civ) fees will be taken",
        "criteria for admission": "Birth Certificate and serving certificate is compulsery",
        "last day for fees": "Every Month of 20th",
        "url": "https://www.apspanagarh.com",
        "fees": "acording to the rank fees will be taken",
        "fees structure": "The fee structure varies depending on the class and other factors. For detailed information, you should refer to the school’s fee brochure or contact the school’s finance office.",
        "attendance Policy": "75% manadtory",
        "contact": "Army Public School, PanagarhPurba Barddhaman,West Bengal - 713420Contact No :  +913432513216 Email Address : aps.panagarh2012@gmail.com",
        "what is the fees strecture": "you can see the fees strecture https://www.apspanagarh.com/admission.php?id=Nw%3D%3D&sid=MTY%3D this website",
        "fees": "According to ranks quaterly fees will be taken",
        "who are the best teachers": " the best teachers include Rupeshwari ma'm Sorabh sir,Nazmi ma'm and the seniors",
        "homework ": "depends upon the teaching style of the teacher",
        "tc": "take tc form and apply from office",
        "quality of education": "good",
        "healthcare facilty": "first aid kit and care room",
        "activities": "army public school panagarh offers a variety of extracurricular activities, including sports, music, dance, drama, art and craft, and various clubs. These activities are designed to enhance students' overall development and interests.",
        "parents visit": "after school hours",
        "play stone paper sisor": "ok lets play!if you win you can collect 5000 rupees from the office write your input",
        "stone": "paper,ah! i won try again",
        "paper": "sisor,ah! i won try again",
        "sisor": "stone,ah! i won try again",
        "jobs": "ask for available vacancies in the office",
        "can you help me in homework": "no",
        "do you know Prakhar": "Yes he is my creator",
        "do you Know shaikh": "Yes he is my creator",
        "who was Sayantan Barman": "the best teacher aps panagarh has ever witnessed",
        "mobile phone": "not alowed",
        "phone": "not alowed",
        "Who is the goat": "Sayantan Barman",
        "curriculum": "The school follows the curriculum set by the Central Board of Secondary Education (CBSE), which includes a wide range of subjects from kindergarten through secondary education.",
        "timing": "The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 AM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "admission": " To apply for admission, you need to fill out the application form available on the school’s official website or at the school’s administrative office. The admission process usually involves submitting required documents, an entrance test, and an interview.you can also regester for admission online by this link https://aweserp-stg.inroad.in/webinterface/searchschool",
        "sourabh mukharjee": "he is the god of computer",
        "prakhar": "mr prakhar is also my creator ",
        "shaikh": "mr shaikh is my creator",
        "why are you created": "for asking questions",
        "how are you": "i am fine",
        "which languages can you speak": "only english",
        "who made you": "i am made by Shaikh Haareess and Prakhar",
        "what is your name": "aps buddy",
        "hey": "hello",
        "how is the environment of the school": "Supportive",
        "what is the criteria for admission": "",
        "what is the admission procedure": "Online Regestratin then physical verificiation",
        "what is the criteria for admission": "Birth Certificate and serving certificate is compulsery",
        "what are the total charges at the time of fresh admission": "According to Ranks (officers,jco,or,civ) fees will be taken",
        "what are the charges of quaterly fees": "According to ranks quaterly fees will be taken",
        "how much charges during late fell fees": "upto 20th of the Current Month-100 upto 1 Menth-200, upto 2 months",
        "what are the age criteria of class 1": "AGE should be 6+",
        "when is the last date of Fees Payment": "Every Month of 20th",
        "hi": "HOWDY",
        "do you know a joke": "Nate: Why was school easier for cave people. Kate: Why. Nate: Because there was no history to study",
        "how much amount will deduct in security money (Rank wise)": "Officer:7920 Jco:5280 Or:3960 Civ:11880",
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I’m doing great! How can I assist you?",
        "what is your name": "I’m a chatbot created by Shaikh Haareess and Prakhar Kumar Parashar. You can call me Aps Buddy.",
        "bye": "Goodbye! Have a great day!",
        "what is army public school panagarh?": "army public school panagarh is an educational institution located in Panagarh, West Bengal, India. It provides quality education to children of army personnel and civilians, following the curriculum prescribed by the CBSE (Central Board of Secondary Education).",
        "what are the school’s operating hours?": "The school typically operates from Monday to Friday. The exact hours may vary, but classes generally start around 8:00 AM and end around 2:00 PM. For the most accurate timing, please refer to the school's official website or contact the administration.",
        "how can i apply for admission to army public school panagarh?": " To apply for admission, you need to fill out the application form available on the school’s official website or at the school’s administrative office. The admission process usually involves submitting required documents, an entrance test, and an interview.",
        "what curriculum does army public school panagarh follow": "The school follows the curriculum set by the Central Board of Secondary Education (CBSE), which includes a wide range of subjects from kindergarten through secondary education.",
        "what extracurricular activities are offered?": "army public school panagarh offers a variety of extracurricular activities, including sports, music, dance, drama, art and craft, and various clubs. These activities are designed to enhance students' overall development and interests.",
        "how can I contact a specific teacher or staff member": "You can contact specific teachers or staff members by reaching out to the school’s administrative office. They can provide you with the contact details or arrange a meeting with the concerned person.",
        "are there any parent-teacher meetings scheduled throughout the year?": " Yes, the school typically holds parent-teacher meetings at regular intervals to discuss students' progress and address any concerns. The dates for these meetings are usually communicated through the school’s notice board or website.",
        "what is the fee structure for army public school panagarh": "The fee structure varies depending on the class and other factors. For detailed information, you should refer to the school’s fee brochure or contact the school’s finance office.",
        "how can I contact army public school panagarh": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "what is the school’s address": "The address of army public school panagarh is Army Public School, Panagarh Purba Barddhaman,West Bengal - 713420. For directions, please refer to the school's website or contact the school directly.",
        "what is the url of aps panagarh": "https://www.apspanagarh.com",
        "what are the Criteria for admission": "Birth Certificate and seswing certificate is Compulsory.",
        "what are the total charges at the time of fresh Admission": "According to Ranks (off , Jco , or, civ fees) will be taken",
        "what are the charges of quarterly fees": "According to Ranks quarterly fees will be taken.",
        "how much charges during late felt fees": "upto 20 th of the Current Month-100, upto 1 Month-200, upto 2 month-750",
        "what are the age criteria of class-1": "AGE should be 6+",
        "when is the last date of Fees Payment": "Every Month of 20th",
        "how much amount will deduct in security money (Rank wise)": "OFFR-7920 JCO / 5280 OR 3960 3960, τιν 11880",
        "what is the school timings": "7:30 AM to 1:30 PM",
        "what is the Name of Fees Payment link": "exp.awesindia.edu.in",
        "how can I track my application": "In ERP website.",
        "what is the Procedure of taking TC": "taking tc form and apply",
        "what are the documents required for tc": "tc form,cancel cheque and fee recept",
        "what is the dress code": "steel grey trouser and white shirt",
        "Who will Provide House dress code": "Class teacher",
        "where I will get the students Books, Dress & shoes": "Panagarh Deep Jyoti",
        " where is the Book shop in Panagarh": "Near Gurudwara",
        "contact no. of Book shop (Deep Jyoti)": "9474700043",
        "what are the documents requiring for Pen": "Details of Student, Passport size Photo and TC.",
        "what is the timing for meeting class  Teacher": "After 1:30 Pm",
        "what are the facilities Provided by School during minor injuries of students": "Sick Room and first aid kit is available",
        "are there computer labs and Libraries available to Students": "Yes",
        "are there science Laboratories available for students": "Yes",
        "how does school handle medical emergencies": "by taking student to MH",
        "how can parents keep track of their childs proggress?": "by whatsapp",
        "what is the school policy on parents visiting the school": "taking outpass from the entery gate",
        "what is the tuition fee Structure": "Fees Stouchure list is available.",
        "what is the school's refund Policy": "After leaving the school Security  money  Will  be refund",
        "what is the school's attendance Policy": "75% Mandatory",
        "what is the  Policy on  mobile Phone use during School hours": "Not allowed in School.",
        "what is the qualification of teachers": "Bachelor degree & B.ed",
        "what is the school's Policy on discipline": "Respect for others verbal warmings will be given",
        "what Sports facilities does the School have": "Cricket Pitch, Basketball Courts, tennis Courts etc.",
        "are there regular Parent teacher meetings": "yes",
        "what extracurricular activities are offered": "Music, Arts, sports games, Debate etc.",
        "how does the school support students with special Needs": "By taking extra classes and helping the students",
        "how does the school Prepare Students for higher education": "By Personalized guidance on course selection and academic Planning.",
        "what is the schools homework Policy": "Teachers Provide support and guidance for homework completion",
        "Are there opportunities four students to Participate in gifted Programs": "Yes",
        "How does the school handle teacher absences": "By Finding a substitute teacher",
        "How does the school handle Student health issues": "By giving Medicines & Sick Room is also available",
        "Is there a Schoolbus service": "Yes",
        "What is the school's Policy on Parent visits": "After 1:30 PM Parents can meet class teachers.",
        "percentage required to pass 9": "33% in all subjects",
        "marks required to pass": "33% in all subjects",
        "transportaition services": "buses are available",
        "minimum age": "6 years",
        "teachers qualification": "Bachelor degree & B.ed",
        "refund Policy": "After leaving the school Security  money  Will  be refund",
        "Fees Payment link": "exp.awesindia.edu.in",
        "contact army public school panagarh": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "contact": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "contact school": "You can contact army public school panagarh via phone at +913432513216, or email at aps.panagarh2012@gmail.com. You can also visit their official website for more details or address any queries.",
        "fees amount": "the payment amount would be decided by the rank of the gaurdian",
    };

    const sendMessage = (message, isUser = true) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user' : 'bot');
        messageElement.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const getBotResponse = (message) => {
        // Convert message to lowercase to match the patterns
        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || responses["default"];
    };

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            sendMessage(userMessage);
            userInput.value = '';
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => sendMessage(botResponse, false), 500);
        }
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});
