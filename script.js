//return of values in function
function multiply(a, b) {
  return a * b;
}

let multiplication = multiply(5, 3);
console.log(multiplication);


//function to return multiple values from an object
function getUserData() {
    return {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        isActive: true
    };
}

const user = getUserData();
console.log(user.name); // "John Doe"
console.log(user.age);  // 30
console.log(user.email); // "john@example.com"
console.log(user.isActive); // true



// functions that animates a box when clicked
function openModal() {
            document.getElementById('modal').classList.add('active');
            document.addEventListener('keydown', handleKeyPress);
        }
        
        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.removeEventListener('keydown', handleKeyPress);
        }
        
        function handleKeyPress(e) {
            if (e.key === 'Escape') closeModal();
        }
        
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });