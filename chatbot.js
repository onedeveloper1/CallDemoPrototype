function handleButtonClick(option) {
    console.log("Button clicked:", option);
    const messages = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = option;
    messages.appendChild(userMessage);
    scrollToBottom();

    const typingBubble = document.createElement("div");
    typingBubble.classList.add("message", "bot-message", "typing");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("typing-dots");

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
    }

    typingBubble.appendChild(dotsContainer);
    messages.appendChild(typingBubble);
    scrollToBottom();

    setTimeout(() => {
        messages.removeChild(typingBubble);

        let botMessage = "";

        switch (option) {
            case "Option 1️⃣":
                const botResponse = document.createElement("div");
                botResponse.classList.add("message", "bot-message");
                botResponse.innerHTML = "<strong>Awesome!</strong> 👏 You're now interacting with our live demo chatbot. I'll show you some of the helpful features I can offer your business — from answering customer questions to pulling data from your site and more. Feel free to explore!";
                messages.appendChild(botResponse);
                scrollToBottom();
                return;

            case "Our Services🛠️":
                botMessage = "🚗 Buckle up! Here’s what we can help with:<br>" +
                    "📦 <strong>Vehicle Shipping</strong><br>" +
                    "📝 <strong>Title Assistance</strong><br>" +
                    "🗑️ <strong>Junk Car Removal</strong><br>" +
                    "Select a service below⬇️";
                break;
            case "Shipping🚗":
                botMessage = "🚚 Ready to roll? We offer reliable, <strong>nationwide vehicle shipping</strong> with <strong>flexible scheduling</strong> that fits your timeline. <a href='https://www.youcallwehaul.com/' target='_blank' style='color: #002f6c; font-weight: bold;'>Let’s get your wheels moving!</a>";
                break;
            case "Junk Car Removal ♻":
                botMessage = "💥 Say <strong>goodbye</strong> to that junk car! We’ll tow it away for <strong>free</strong> and might even <strong>hand you cash</strong> right then and there. Just tap <strong>‘Get Cash Now’</strong> on <a href='https://www.youcallwehaul.com/' target='_blank' style='color: #002f6c; font-weight: bold;'>our site</a> and enter your number — it’s that easy!";
                break;
            case "Discover 🌍":
                botMessage = "🤔 Curious where we've been? From <strong>coast to coast</strong>, we've helped folks all across the country! <a href='map.html' target='_blank' style='color: #002f6c; font-weight: bold;'>Check out our interactive map</a> to see all the places we've hauled, shipped, and salvaged!";
                break;
            case "Title Assistance💬":
                botMessage = 'Need a hand with the <strong>title transfer?</strong> 🚗💼 Let’s get rolling! First things first — do you <strong>currently</strong> have the title to the vehicle?';
                break;
            case "Yes👍":
                botMessage = "Awesome! You're <strong>ahead of the game!</strong> 🏁 For the nitty-gritty details <strong>tailored to your state</strong>, pick your state from the list right <a href='https://www.youcallwehaul.com/title-help/' target='_blank' style='color: #002f6c; font-weight: bold;'>here</a>!";
                break;
            case "No👎":
                botMessage = "No worries — <strong>we’ve seen it all!</strong> 😎 Let’s start by figuring out where the vehicle is located. <strong>What state is it in?</strong>";
                break;
            case "Get a Quote💰":
                botMessage = `You got it! 👍 Grab your <strong>free quote</strong> on our <a href="https://www.youcallwehaul.com/#" target="_blank" style="color: #002f6c; font-weight: bold;">quote page</a> or give us a <strong>quick call</strong> at (888) 872-7478 — we’re happy to help!`;
                break;
            case "Contact ✉️":
                botMessage = `We’re here for you! 🙌<br>Give us a call at <strong>(888) 872-7478</strong> or <a href="https://www.youcallwehaul.com/contact-us/" target="_blank" style="color: #002f6c; font-weight: bold;">reach out through our contact page</a>.`;
                break;  
            case "How it Works📦":
                botMessage = `Easy as 1-2-3! 😄<br>
                    <strong>Step 1:</strong> Get your free quote 💰<br>
                    <strong>Step 2:</strong> Choose a pickup time 🚛<br>
                    <strong>Step 3:</strong> Get paid 💵 or ship your car — your call! 🚗📦`;
                break; 
            default:
                botMessage = "I'm not sure how to respond to that. Please choose a valid option.";
                break;
        }

        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = botMessage;
        messages.appendChild(botResponse);
        scrollToBottom();

        if (option === "Title Assistance💬") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("Yes👍"));
                buttonContainer.appendChild(createButton("No👎"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "Our Services🛠️") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("Shipping🚗"));
                buttonContainer.appendChild(createButton("Title Assistance💬"));
                buttonContainer.appendChild(createButton("Junk Car Removal ♻"));
                buttonContainer.appendChild(createButton("Discover 🌍"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "No👎") {
            setTimeout(() => {
                const stateInputWrapper = document.createElement("div");
                stateInputWrapper.classList.add("state-input-wrapper");

                const inputLabel = document.createElement("label");
                inputLabel.setAttribute("for", "stateInput");
                inputLabel.innerHTML = "<strong>Enter your state:</strong>";

                const stateInput = document.createElement("input");
                stateInput.type = "text";
                stateInput.id = "stateInput";
                stateInput.placeholder = "e.g. Texas or TX";

                const submitButton = document.createElement("button");
                submitButton.textContent = "Submit";
                submitButton.classList.add("chatbot-btn");

 // Replace the old onclick with the new improved version:
 submitButton.onclick = () => {
    const userState = stateInput.value.trim();
    if (userState) {
        const userStateLower = userState.toLowerCase();

        // Map of state abbreviations to full state names
        const stateMap = {
            "al": "Alabama", "ak": "Alaska", "az": "Arizona", "ar": "Arkansas",
            "ca": "California", "co": "Colorado", "ct": "Connecticut", "de": "Delaware",
            "fl": "Florida", "ga": "Georgia", "hi": "Hawaii", "id": "Idaho",
            "il": "Illinois", "in": "Indiana", "ia": "Iowa", "ks": "Kansas",
            "ky": "Kentucky", "la": "Louisiana", "me": "Maine", "md": "Maryland",
            "ma": "Massachusetts", "mi": "Michigan", "mn": "Minnesota", "ms": "Mississippi",
            "mo": "Missouri", "mt": "Montana", "ne": "Nebraska", "nv": "Nevada",
            "nh": "New Hampshire", "nj": "New Jersey", "nm": "New Mexico", "ny": "New York",
            "nc": "North Carolina", "nd": "North Dakota", "oh": "Ohio", "ok": "Oklahoma",
            "or": "Oregon", "pa": "Pennsylvania", "ri": "Rhode Island", "sc": "South Carolina",
            "sd": "South Dakota", "tn": "Tennessee", "tx": "Texas", "ut": "Utah",
            "vt": "Vermont", "va": "Virginia", "wa": "Washington", "wv": "West Virginia",
            "wi": "Wisconsin", "wy": "Wyoming"
        };

        // Dictionary of full state names (lowercase) to URLs
        const stateLinks = {
            "alabama": "https://www.youcallwehaul.com/how-to-transfer-alabama-title/",
            "alaska": "https://www.youcallwehaul.com/how-to-transfer-alaska-title/",
            "arizona": "https://www.youcallwehaul.com/how-to-transfer-arizona-title/",
            "arkansas": "https://www.youcallwehaul.com/how-to-transfer-arkansas-title/",
            "california": "https://www.youcallwehaul.com/how-to-transfer-california-title/",
            "colorado": "https://www.youcallwehaul.com/how-to-transfer-colorado-title/",
            "connecticut": "https://www.youcallwehaul.com/how-to-transfer-connecticut-title/",
            "delaware": "https://www.youcallwehaul.com/how-to-transfer-delaware-title/",
            "florida": "https://www.youcallwehaul.com/how-to-transfer-florida-title/",
            "georgia": "https://www.youcallwehaul.com/how-to-transfer-georgia-title/",
            "hawaii": "https://www.youcallwehaul.com/how-to-transfer-hawaii-title/",
            "idaho": "https://www.youcallwehaul.com/how-to-transfer-idaho-title/",
            "illinois": "https://www.youcallwehaul.com/how-to-transfer-illinois-title/",
            "indiana": "https://www.youcallwehaul.com/how-to-transfer-indiana-title/",
            "iowa": "https://www.youcallwehaul.com/how-to-transfer-iowa-title/",
            "kansas": "https://www.youcallwehaul.com/how-to-transfer-kansas-title/",
            "kentucky": "https://www.youcallwehaul.com/how-to-transfer-kentucky-title/",
            "louisiana": "https://www.youcallwehaul.com/how-to-transfer-louisiana-title/",
            "maine": "https://www.youcallwehaul.com/how-to-transfer-maine-title/",
            "maryland": "https://www.youcallwehaul.com/how-to-transfer-maryland-title/",
            "massachusetts": "https://www.youcallwehaul.com/how-to-transfer-massachusetts-title/",
            "michigan": "https://www.youcallwehaul.com/how-to-transfer-michigan-title/",
            "minnesota": "https://www.youcallwehaul.com/how-to-transfer-minnesota-title/",
            "mississippi": "https://www.youcallwehaul.com/how-to-transfer-mississippi-title/",
            "missouri": "https://www.youcallwehaul.com/how-to-transfer-missouri-title/",
            "montana": "https://www.youcallwehaul.com/how-to-transfer-montana-title/",
            "nebraska": "https://www.youcallwehaul.com/how-to-transfer-nebraska-title/",
            "nevada": "https://www.youcallwehaul.com/how-to-transfer-nevada-title/",
            "new hampshire": "https://www.youcallwehaul.com/how-to-transfer-new-hampshire-title/",
            "new jersey": "https://www.youcallwehaul.com/how-to-transfer-new-jersey-title/",
            "new mexico": "https://www.youcallwehaul.com/how-to-transfer-new-mexico-title/",
            "new york": "https://www.youcallwehaul.com/how-to-transfer-new-york-title/",
            "north carolina": "https://www.youcallwehaul.com/how-to-transfer-north-carolina-title/",
            "north dakota": "https://www.youcallwehaul.com/how-to-transfer-north-dakota-title/",
            "ohio": "https://www.youcallwehaul.com/how-to-transfer-ohio-title/",
            "oklahoma": "https://www.youcallwehaul.com/how-to-transfer-oklahoma-title/",
            "oregon": "https://www.youcallwehaul.com/how-to-transfer-oregon-title/",
            "pennsylvania": "https://www.youcallwehaul.com/how-to-transfer-pennsylvania-title/",
            "rhode island": "https://www.youcallwehaul.com/how-to-transfer-rhode-island-title/",
            "south carolina": "https://www.youcallwehaul.com/how-to-transfer-south-carolina-title/",
            "south dakota": "https://www.youcallwehaul.com/how-to-transfer-south-dakota-title/",
            "tennessee": "https://www.youcallwehaul.com/how-to-transfer-tennessee-title/",
            "texas": "https://www.youcallwehaul.com/how-to-transfer-texas-title/",
            "utah": "https://www.youcallwehaul.com/how-to-transfer-utah-title/",
            "vermont": "https://www.youcallwehaul.com/how-to-transfer-vermont-title/",
            "virginia": "https://www.youcallwehaul.com/how-to-transfer-virginia-title/",
            "washington": "https://www.youcallwehaul.com/how-to-transfer-washington-title/",
            "west virginia": "https://www.youcallwehaul.com/how-to-transfer-west-virginia-title/",
            "wisconsin": "https://www.youcallwehaul.com/how-to-transfer-wisconsin-title/",
            "wyoming": "https://www.youcallwehaul.com/how-to-transfer-wyoming-title/"
        };

        // Determine full state name based on input (abbreviation or full name)
        let fullStateName = null;

        if (userStateLower.length === 2) {
            // Input looks like abbreviation
            fullStateName = stateMap[userStateLower];
        }

        if (!fullStateName) {
            // Check if input matches full state name
            // Normalize input capitalization for comparison
            // We'll find if the lowercase user input matches any state in stateLinks keys
            if (stateLinks[userStateLower]) {
                fullStateName = userStateLower.charAt(0).toUpperCase() + userStateLower.slice(1);
                // Capitalize properly for display
                // For multi-word states like 'new york', handle capitalization
                fullStateName = userStateLower.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }
        }

        // If still no full state name, assume user typed full state but with weird capitalization
        if (!fullStateName) {
            // Try capitalizing input for display but use lowercase for lookup
            fullStateName = userStateLower.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        // Lowercase full state name for URL lookup
        const fullStateNameLower = fullStateName.toLowerCase();

        // Append user message
        const userInput = document.createElement("div");
        userInput.classList.add("message", "user-message");
        userInput.textContent = userState;
        messages.appendChild(userInput);

        // Append initial bot reply
        const botReply = document.createElement("div");
        botReply.classList.add("message", "bot-message");
        botReply.innerHTML = `Thanks! 🙌 We're checking title info for <strong>${fullStateName}</strong>. Just a sec... 🔍`;
        messages.appendChild(botReply);
        scrollToBottom();

        // After delay, show link or fallback message
        setTimeout(() => {
            const stateUrl = stateLinks[fullStateNameLower];

            const stateResponse = document.createElement("div");
            stateResponse.classList.add("message", "bot-message");

            if (stateUrl) {
                stateResponse.innerHTML = `Here you go! 📄<br>Click below for <strong>step-by-step title transfer info</strong> in <strong>${fullStateName}</strong>:<br><a href="${stateUrl}" target="_blank" style="color: #002f6c; font-weight: bold;">View ${fullStateName} title guide</a>`;
            } else {
                stateResponse.innerHTML = `Hmm 🤔 I couldn't find a specific title guide for <strong>${fullStateName}</strong>. Please double-check the spelling or <a href='https://www.youcallwehaul.com/title-help/' target='_blank' style='color: #002f6c; font-weight: bold;'>view general info here</a>.`;
            }

            messages.appendChild(stateResponse);
            scrollToBottom();
        }, 1000);
    }
};


                stateInputWrapper.appendChild(inputLabel);
                stateInputWrapper.appendChild(stateInput);
                stateInputWrapper.appendChild(submitButton);
                messages.appendChild(stateInputWrapper);
                scrollToBottom();
            }, 600);
        }

    }, 1000);
}

function createButton(label, url = null) {
    let button;

    if (url) {
        button = document.createElement("a");
        button.href = url;
        button.target = "_blank";
        button.classList.add("chatbot-btn", "chatbot-link-btn");
    } else {
        button = document.createElement("button");
        button.classList.add("chatbot-btn");
        button.onclick = () => handleButtonClick(label);
    }

    button.textContent = label;
    return button;
}

function greetUser() {
    const messages = document.getElementById("chatbot-messages");

    const greetingMessage1 = document.createElement("div");
    greetingMessage1.classList.add("message", "bot-message");
    greetingMessage1.innerHTML = "Hey there! 🛻🪝<br>My name is <strong>Haul-E</strong>, your friendly vehicle removal assistant during your journey today!";
    messages.appendChild(greetingMessage1);

    setTimeout(() => {
        const greetingMessage2 = document.createElement("div");
        greetingMessage2.classList.add("message", "bot-message");
        greetingMessage2.innerHTML = "To get started, choose an option below! ⬇️";
        messages.appendChild(greetingMessage2);
        scrollToBottom();
    }, 500);

    scrollToBottom();
}

window.onload = greetUser;

function scrollToBottom() {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth"
        });
    }
}
