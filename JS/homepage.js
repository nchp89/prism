//Title card
title = document.createElement("h1");
title.innerText = "Welcome to\n PRISM";
document.body.appendChild(title);

//Div that holds the primary buttons
holder = document.createElement("div");
holder.id = "button_holder_div";
document.body.appendChild(holder);

//Continue Journey Button
continueAnchor = document.createElement("a");
continueAnchor.href = "pages/home.html";
holder.appendChild(continueAnchor);
continueButton = document.createElement("button");
continueButton.classList.add("btn");
continueButton.classList.add("btn-primary");
continueButton.classList.add("btn-lg");
continueButton.innerText = "Continue Your Journey";
continueAnchor.appendChild(continueButton);

//Spacer div
spacer = document.createElement("div");
spacer.id = "mainpage_div";
holder.appendChild(spacer);

//Start Journey Button
startAnchor = document.createElement("a");
startAnchor.href = "pages/start.html";
holder.appendChild(startAnchor);
startButton = document.createElement("button");
startButton.classList.add("btn");
startButton.classList.add("btn-secondary");
startButton.innerText = "Start Your Journey";
startAnchor.appendChild(startButton);