1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
#getElementById("id")-> 
a. It is searching element with fixed "id".
b. It is a single element.
c. It will be unique.
#getElementsByClassName("class")->
a. It is searching all elements with same class.
b. It is HTMLCollection (live list).
c. It is live list. That means it will be update with DOM change.
#querySelector ->
a.The first matching element according to the CSS selector.
b.It is single element.
c.We can use any CSS selector.
#querySelectorAll ->
a.All matching elements according to the CSS selector.
b.It is a static list.
c.It is static, meaning that even if the DOM changes, the previous result remains the same.


2. How do you create and insert a new element into the DOM?
Ans:
a.Create new element.
let newDiv = document.createElement("div");
b. To add the content.
nerDiv.innerText = "We live in Bangladesh";
c.Adding it to the DOM which will go to the parent
document.body.appendChild(newDiv);


3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is when an event occurs on an element, it rises from the child to the parent. 
#Child Click -> Parent Click 
#The event first occurs in the child -> then moves to the Parent.


4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation means that we place the event handler on the Parent instead of the child element and then check which Child was clicked by looking at event.target.
#Why it is needed:
a. We do not add separate handlers if there are many child elements.
b. The same handler will work on new elements in the DOM.


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
#preventDefault() -> Stops the default browser acting and redirects it when it is clicking.
#stopPropagation() -> Stops the event from broadcast through the DOM.


