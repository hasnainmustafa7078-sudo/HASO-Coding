fetch("data.json")

    .then(response => response.json())

    .then(data => {

        // Get HTML containers

        const studentsContainer =
            document.getElementById("students");

        const parentsContainer =
            document.getElementById("parents");

        const teachersContainer =
            document.getElementById("teachers");


        // Students Records

        data.students.forEach(student => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <h3>${student.name}</h3>

                <p>
                    <span class="label">ID:</span>
                    ${student.id}
                </p>

                <p>
                    <span class="label">Course:</span>
                    ${student.course}
                </p>

                <p>
                    <span class="label">Semester:</span>
                    ${student.semester}
                </p>

                <p>
                    <span class="label">Batch:</span>
                    ${student.batch}
                </p>
            `;

            studentsContainer.appendChild(card);

        });


        // Parents Recordds

        data.parents.forEach(parent => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <h3>${parent.name}</h3>

                <p>
                    <span class="label">ID:</span>
                    ${parent.id}
                </p>

                <p>
                    <span class="label">Relation:</span>
                    ${parent.relation}
                </p>

                <p>
                    <span class="label">Student:</span>
                    ${parent.studentName}
                </p>
            `;

            parentsContainer.appendChild(card);

        });


        // Teachers Recoerds

        data.teachers.forEach(teacher => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <h3>${teacher.name}</h3>

                <p>
                    <span class="label">ID:</span>
                    ${teacher.id}
                </p>

                <p>
                    <span class="label">Department:</span>
                    ${teacher.department}
                </p>

                <p>
                    <span class="label">Experience:</span>
                    ${teacher.experience}
                </p>
            `;

            teachersContainer.appendChild(card);

        });

    })


    .catch(error => {

        console.log("Error loading JSON:", error);

    });
