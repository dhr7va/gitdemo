function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const date = form.date.value;
    const time = form.time.value;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${number}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
}

