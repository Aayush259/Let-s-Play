/*
    This function updates the main content of the dbms introduction page.
*/
const GoToStep = (stepNumber) => {

    const Content = document.querySelector('.content');

    if (stepNumber === 1) {
        TopicHeading.innerHTML = `Introduction to DBMS`;

        Content.innerHTML = `
            <h2>What is data?</h2>
            <img src="../images/dbms/data-image.jpg" alt="Data Image" class="desc-img">
            <p>Data are the row facts that can be recorded.</p>
            <p>Just like the data in a shopping list or a todo list. Data can be of various types including text, numbers, values, audio, video and much more.</p>
            <p>The tech giants like Google or Microsoft work on these data and earn in millions based on this data.</p>
        `;
    }
    else if (stepNumber === 2) {

        Content.innerHTML = `
            <h2>Information</h2>
            <img src="../images/dbms/information.jpeg" alt="Information" class="desc-img">
            <p>Processed or meaningful data is called information.</p>
            <p>Information is an abstract concept that refers to data that has been processed, organized and structured in a way that it provides context for data and enables decision making.</p>
            <p>It is the knowledge obtained from investigation, study, or instruction.</p>
        `;
    }
    else if (stepNumber === 3) {

        Content.innerHTML = `
            <h2>Database</h2>
            <img src="../images/dbms/database-image.jpg" alt="Database Image" class="desc-img">
            <p>A database is the collection of data that represents some real world entity.</p>
            <p>Many big tech companies use database to store the user's data and improve their products according to the data.</p>
            <p>Oracle, MySQL etc. are some of the popular examples of databases.</p>
        `;
    }
    else if (stepNumber === 4) {

        Content.innerHTML = `
        <h2>DBMS</h2>
        <p style="margin-top: 1rem;">DBMS stands for Database Management System.</p>
        <p>It is a software which is used to manage data in a database. It provides an interface to perform various operations like creating a database, storing data in it, updating data, creating table in database, and more. All of these can be done using a language like SQL (Structured Query Language).</p>
        `;
    }
    else if (stepNumber === 5) {

        Content.innerHTML = `
            <h2>DBMS</h2>
            <img src="../images/dbms/security-image.jpg" alt="Data Security" class="desc-img">
            <p>DBMS provides a robust security framework that ensures the confidentially, integrity, availability of data. It offers authentication and authorization features that control access to database.</p>
            <p>DBMS provides mechanisms that ensure accuracy and consistency of data.</p>
            <p>It provides a concurrent access mechanism that allows multiple users to access the same data simultaneously without causing data corruption.</p>
            <p>DBMS allows for efficient data analysis and reporting. It provides tools for querying and reporting on the data stored in databse.</p>
        `;
    }
    else if (stepNumber === 6) {

        Content.innerHTML = `
            <h2>Question Time 🤩</h2>
            
            <p style="margin-top: 1rem;">True or False?</p>
            <p>Information is the raw fact that can be recorded.</p>

            <div class="answer-btn-container">
                <button id="Wrong" class="answer-btn" onclick="Wrong()">True</button>
                <button id="Correct" class="answer-btn" onclick="Correct()">False</button>
            </div>
        `;
    }
}

GoToStep(currentStep);