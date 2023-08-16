<!DOCTYPE html>
<html>
<head>
    <title>Student Grades</title>
</head>
<body>
    <title>Student Grades</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            text-align: center;
        }

    
    </style>
</head>

<body>
    <h1>Student Grades</h1>

    <div id="studentData"></div>
    <div id="statistics"></div>

    <script src="script.js"></script>
    <div id="studentData"></div>
    <div>Total Students: <span id="totalStudents"></span></div>
    <div>Lowest Score: <span id="lowestScore"></span></div>
    <div>Highest Score: <span id="highestScore"></span></div>
    <div>Average Score: <span id="averageScore"></span></div>

    <script>
        var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

        var students = grades.split(', ');

        var totalStudents = students.length;
        document.getElementById('totalStudents').textContent = totalStudents;

        var lowestScore = Infinity;
        var highestScore = -Infinity;
        var totalScore = 0;

        var studentDataElement = document.getElementById('studentData');

        students.forEach(function(student) {
            var [name, score] = student.split('|');
            var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
            var scoreValue = parseInt(score);

            if (scoreValue < lowestScore) {
                lowestScore = scoreValue;
            }
            if (scoreValue > highestScore) {
                highestScore = scoreValue;
            }

            totalScore += scoreValue;

            var studentInfo = document.createElement('p');
            studentInfo.textContent = capitalized + ' - ' + score;
            studentDataElement.appendChild(studentInfo);
        });

        document.getElementById('lowestScore').textContent = lowestScore;
        document.getElementById('highestScore').textContent = highestScore;
        document.getElementById('averageScore').textContent = (totalScore / totalStudents).toFixed(2);
    </script>
</body>
</html>
