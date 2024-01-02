const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const LETTER_GRADE_A = 93;
const LETTER_GRADE_B = 85;
const LETTER_GRADE_C = 77;
const LETTER_GRADE_D = 69;
const LETTER_GRADE_E = 60;

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function findSum(array) {
  return array.reduce((sum, num) => sum + num);
}

function findAverage(array) {
  let arraySum = findSum(array);
  return arraySum / (array.length);
}

function findMinimum(array) {
  return array.reduce(function(currentMin, nextNumber) {
    if (nextNumber < currentMin) {
      return nextNumber;
    } else {
      return currentMin;
    }
  });
}

function findMaximum(array) {
  return array.reduce(function(currentMax, nextNumber) {
    if (nextNumber > currentMax) {
      return nextNumber;
    } else {
      return currentMax;
    }
  });
}

function findExamAverage(studentData) {
  let studentExamData = studentData['scores']['exams'];
  return findAverage(studentExamData);
}

function findExerciseAverage(studentData) {
  let studentExerciseData = studentData['scores']['exercises'];
  return findSum(studentExerciseData);
}

function findClassAverage(examAvg, exerciseAvg) {
  return Math.round((EXAM_WEIGHT * examAvg) +
    (EXERCISE_WEIGHT * exerciseAvg));
}

function finalLetterGrade(numberGrade) {
  let letterGrade = 'F';

  if (numberGrade >= LETTER_GRADE_A) {
    letterGrade = 'A';
  } else if (numberGrade >= LETTER_GRADE_B) {
    letterGrade = 'B';
  } else if (numberGrade >= LETTER_GRADE_C) {
    letterGrade = 'C';
  } else if (numberGrade >= LETTER_GRADE_D) {
    letterGrade = 'D';
  } else if (numberGrade >= LETTER_GRADE_E) {
    letterGrade = 'E';
  }

  return `${numberGrade} (${letterGrade})`;
}

function generateLetterGrade(classScores, student) {
  let examAvg = findExamAverage(classScores[student]);
  let exerciseAvg = findExerciseAverage(classScores[student]);

  let numberGrade = findClassAverage(examAvg, exerciseAvg);
  return finalLetterGrade(numberGrade);
}

function organizeByExamNumber(array) {
  let organizedExams = [];

  for (let exam = 0; exam < array[0].length; exam += 1) {
    let examInfo = [];
    array.forEach((studentExams) => examInfo.push(studentExams[exam]));
    organizedExams.push(examInfo);
  }

  return organizedExams;
}

function generateExamStats(exam) {
  return {
    average: findAverage(exam),
    minimum: findMinimum(exam),
    maximum: findMaximum(exam),
  };
}

function generateClassRecordSummary(scores) {
  let studentGrades = Object.keys(scores).map(function(student) {
    return generateLetterGrade(scores, student);
  });

  let studentExams = Object.keys(scores).map(function(student) {
    return scores[student]['scores']['exams'];
  });

  let examStats = organizeByExamNumber(studentExams).map(function(exam) {
    return generateExamStats(exam);
  });

  return {
    studentGrades: studentGrades,
    exams: examStats,
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }