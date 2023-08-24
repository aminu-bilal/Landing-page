// Get input element
const filterInput = document.getElementById('filterInput');
// Add event listener to variable
filterInput.addEventListener('keyup', filterNames);
// keyup is the event and filternames is the function to take effect after the event
function filterNames(){
    // Get value of the input
    const filtervalue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get names ul
    const ul = document.getElementById('names');
    // Get li from ul
    const li = ul.querySelectorAll('li.collection_item');

    // loop through collection_item li's
    for(let i = 0; i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
    // Explaination of the code above
// Certainly! The provided code snippet is a JavaScript script that adds filtering functionality to a list of names based on user input. 
// Let's break down each part of the code:

// 1. **Get Input Element**: This line retrieves an HTML input element with the ID 'filterInput' using the `getElementById` 
// method and assigns it to the `filterInput` variable. This input element is presumably where the user will enter their filtering text.

// ```javascript
// const filterInput = document.getElementById('filterInput');
// ```

// 2. **Add Event Listener**: This line attaches an event listener to the `filterInput` element. 
// It listens for the 'keyup' event (when a key on the keyboard is released) and calls the `filterNames` function whenever this event occurs.

// ```javascript
// filterInput.addEventListener('keyup', filterNames);
// ```

// 3. **filterNames Function**: This function is responsible for performing the actual filtering of names based on the user's input.

//     a. **Get Input Value**: The function starts by getting the value of the input element with the ID 'filterInput'. 
//     This value is then converted to uppercase using the `toUpperCase` method. This is done to ensure a case-insensitive comparison later.

//     ```javascript
//     const filtervalue = document.getElementById('filterInput').value.toUpperCase();
//     ```

//     b. **Get Names List**: The function then retrieves an unordered list (ul) element with the ID 'names'.

//     ```javascript
//     const ul = document.getElementById('names');
//     ```

//     c. **Get List Items**: It further retrieves all list item (li) elements within the ul that have a class 'collection_item'.

//     ```javascript
//     const li = ul.querySelectorAll('li.collection_item');
//     ```

//     d. **Filter Loop**: The function then enters a loop that iterates through each li element.

//         i. Inside the loop, it retrieves the first anchor (a) element within the current li using `getElementsByTagName('a')[0]`.

//         ```javascript
//         let a = li[i].getElementsByTagName('a')[0];
//         ```

//         ii. It checks if the content of the anchor element (the name) matches the user's filter value. 
//         This comparison is case-insensitive due to the earlier conversion of `filtervalue` to uppercase. 
//         If the filter value is found in the anchor's content, the li element is displayed; otherwise, it's hidden.

//         ```javascript
//         if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
//             li[i].style.display = '';
//         } else {
//             li[i].style.display = 'none';
//         }
//         ```
        
//         If the filter value is found in the name (anchor's content), the `li` element's `style.display` property is set to an empty string, 
//         making it visible. Otherwise, it's set to `'none'`, making it hidden.

// In summary, the code creates an interactive filtering mechanism that responds to user input. As the user types into the input field, 
// the script filters and displays only the list items (names) that match the entered text. The list items that do not match are hidden from view.