import { StudentUserResponse, TimetableResponse } from '../api/types';

export const REAL_STUDENT_DATA: StudentUserResponse = {
    profile: {
        "name": "SATADRU BHATTACHARYA",
        "regNo": "RA2511033010043",
        "department": "Computer Science and Engineering(SE)-(AL2 Section)",
        "program": "B.Tech",
        "semester": "3",
        "comboBatch": "2/2",
        "batch": 2,
        "mobile": "9999999999",
        "email": "sb7956@srmist.edu.in",
        "facultyAdvisor": {
            "name": "Beena Godbin A",
            "email": "beenagoa@srmist.edu.in",
            "mobile": "6383637687"
        }
    },
    attendance: [
        {
            "courseCode": "21MAB201T",
            "courseTitle": "Transforms and Boundary Value Problems",
            "credit": 4,
            "courseCategory": "Basic Science",
            "facultyName": "Dr. Thenmozhi S (103240)",
            "slot": "A",
            "roomNo": "TP 706",
            "hoursConducted": 65.0,
            "hoursPresent": 50.0,
            "hoursAbsent": 15.0,
            "attendancePercent": 76.92
        },
        {
            "courseCode": "21CSC201J",
            "courseTitle": "Data Structures and Algorithms",
            "credit": 4,
            "courseCategory": "Professional Core",
            "facultyName": "Akilandasowmya (103675)",
            "slot": "B",
            "roomNo": "TP 706",
            "hoursConducted": 87.0,
            "hoursPresent": 67.0,
            "hoursAbsent": 20.0,
            "attendancePercent": 77.01
        },
        {
            "courseCode": "21CSS201T",
            "courseTitle": "Computer Organization and Architecture",
            "credit": 4,
            "courseCategory": "Engineering Science",
            "facultyName": "Nagarajan S (103622)",
            "slot": "C",
            "roomNo": "TP 706",
            "hoursConducted": 60.0,
            "hoursPresent": 46.0,
            "hoursAbsent": 14.0,
            "attendancePercent": 76.67
        },
        {
            "courseCode": "21CSC203P",
            "courseTitle": "Advanced Programming Practice",
            "credit": 4,
            "courseCategory": "Professional Core",
            "facultyName": "Dr.Vidhya S (102939)",
            "slot": "D",
            "roomNo": "TP 706",
            "hoursConducted": 62.0,
            "hoursPresent": 47.0,
            "hoursAbsent": 15.0,
            "attendancePercent": 75.81
        },
        {
            "courseCode": "21CSC202J",
            "courseTitle": "Operating Systems",
            "credit": 4,
            "courseCategory": "Professional Core",
            "facultyName": "Dr.Vidhya B (103387)",
            "slot": "F",
            "roomNo": "TP 706",
            "hoursConducted": 77.0,
            "hoursPresent": 59.0,
            "hoursAbsent": 18.0,
            "attendancePercent": 76.62
        },
        {
            "courseCode": "21LEM202T",
            "courseTitle": "UHV-II: Universal Human Values",
            "credit": 3,
            "courseCategory": "Mandatory",
            "facultyName": "Dr. Arunarani AR (102975)",
            "slot": "G",
            "roomNo": "To be Alloted",
            "hoursConducted": 2.0,
            "hoursPresent": 2.0,
            "hoursAbsent": 0.0,
            "attendancePercent": 100.0
        },
        {
            "courseCode": "21LEM201T",
            "courseTitle": "Professional Ethics",
            "credit": 0,
            "courseCategory": "Mandatory",
            "facultyName": "Dr. Nancy Prasanna Joseph (102297)",
            "slot": "P37-",
            "roomNo": "online",
            "hoursConducted": 14.0,
            "hoursPresent": 12.0,
            "hoursAbsent": 2.0,
            "attendancePercent": 85.71
        }
    ],
    marks: [
        {
            "courseCode": "21MAB201T",
            "courseTitle": "Transforms and Boundary Value Problems",
            "credit": 4,
            "marks": [
                {
                    "testName": "FT-I",
                    "score": 5,
                    "maxScore": 5,
                    "weightage": 100
                },
                {
                    "testName": "FT-II",
                    "score": 10.2,
                    "maxScore": 15,
                    "weightage": 68
                },
                {
                    "testName": "FT-III",
                    "score": 13.5,
                    "maxScore": 15,
                    "weightage": 90
                },
                {
                    "testName": "FT-IV",
                    "score": 9.6,
                    "maxScore": 15,
                    "weightage": 64
                },
                {
                    "testName": "LLT-I",
                    "score": 10,
                    "maxScore": 10,
                    "weightage": 100
                }
            ],
            "totalScore": 48.3,
            "maxTotalScore": 60
        },
        {
            "courseCode": "21CSC201J",
            "courseTitle": "Data Structures and Algorithms",
            "credit": 4,
            "marks": [
                {
                    "testName": "FJ-I",
                    "score": 9.03,
                    "maxScore": 15,
                    "weightage": 60.199999999999996
                },
                {
                    "testName": "FJ-II",
                    "score": 9.58,
                    "maxScore": 15,
                    "weightage": 63.866666666666674
                },
                {
                    "testName": "FJ-III",
                    "score": 13.95,
                    "maxScore": 15,
                    "weightage": 93
                },
                {
                    "testName": "LLJ-I",
                    "score": 7,
                    "maxScore": 7,
                    "weightage": 100
                },
                {
                    "testName": "LLJ-II",
                    "score": 6.84,
                    "maxScore": 8,
                    "weightage": 85.5
                }
            ],
            "totalScore": 46.4,
            "maxTotalScore": 60
        },
        {
            "courseCode": "21CSS201T",
            "courseTitle": "Computer Organization and Architecture",
            "credit": 4,
            "marks": [
                {
                    "testName": "FT-I",
                    "score": 5,
                    "maxScore": 5,
                    "weightage": 100
                },
                {
                    "testName": "FT-II",
                    "score": 7.5,
                    "maxScore": 15,
                    "weightage": 50
                },
                {
                    "testName": "FT-III",
                    "score": 3,
                    "maxScore": 15,
                    "weightage": 20
                },
                {
                    "testName": "FT-IV",
                    "score": 8.1,
                    "maxScore": 15,
                    "weightage": 53.99999999999999
                },
                {
                    "testName": "LLT-I",
                    "score": 7.5,
                    "maxScore": 10,
                    "weightage": 75
                }
            ],
            "totalScore": 31.1,
            "maxTotalScore": 60
        },
        {
            "courseCode": "21CSC203P",
            "courseTitle": "Advanced Programming Practice",
            "credit": 4,
            "marks": [
                {
                    "testName": "FP-I",
                    "score": 6.9,
                    "maxScore": 10,
                    "weightage": 69
                },
                {
                    "testName": "FP-II",
                    "score": 9,
                    "maxScore": 10,
                    "weightage": 90
                },
                {
                    "testName": "PBL-I",
                    "score": 16.5,
                    "maxScore": 20,
                    "weightage": 82.5
                },
                {
                    "testName": "PBL-II",
                    "score": 15,
                    "maxScore": 20,
                    "weightage": 75
                },
                {
                    "testName": "PBL-III",
                    "score": 14.5,
                    "maxScore": 20,
                    "weightage": 72.5
                },
                {
                    "testName": "R21 Report and Viva - Theory",
                    "score": 12.5,
                    "maxScore": 20,
                    "weightage": 62.5
                }
            ],
            "totalScore": 74.4,
            "maxTotalScore": 100
        },
        {
            "courseCode": "21CSC202J",
            "courseTitle": "Operating Systems",
            "credit": 4,
            "marks": [
                {
                    "testName": "FJ-I",
                    "score": 8.5,
                    "maxScore": 15,
                    "weightage": 56.666666666666664
                },
                {
                    "testName": "FJ-II",
                    "score": 10.2,
                    "maxScore": 15,
                    "weightage": 68
                },
                {
                    "testName": "FJ-III",
                    "score": 7.3,
                    "maxScore": 15,
                    "weightage": 48.666666666666664
                },
                {
                    "testName": "LLJ-I",
                    "score": 3.8,
                    "maxScore": 7,
                    "weightage": 54.285714285714285
                },
                {
                    "testName": "LLJ-II",
                    "score": 6.25,
                    "maxScore": 8,
                    "weightage": 78.125
                }
            ],
            "totalScore": 36.05,
            "maxTotalScore": 60
        },
        {
            "courseCode": "21LEM202T",
            "courseTitle": "UHV-II: Universal Human Values",
            "credit": 3,
            "marks": [
                {
                    "testName": "FMT-I",
                    "score": 46.45,
                    "maxScore": 50,
                    "weightage": 92.9
                },
                {
                    "testName": "LLT-I",
                    "score": 30,
                    "maxScore": 30,
                    "weightage": 100
                },
                {
                    "testName": "R21 Summative - Theory",
                    "score": 19,
                    "maxScore": 20,
                    "weightage": 95
                }
            ],
            "totalScore": 95.45,
            "maxTotalScore": 100
        },
        {
            "courseCode": "21LEM201T",
            "courseTitle": "Professional Ethics",
            "credit": 0,
            "marks": [
                {
                    "testName": "FML-I",
                    "score": 0,
                    "maxScore": 20,
                    "weightage": 0
                },
                {
                    "testName": "FML-II",
                    "score": 42,
                    "maxScore": 60,
                    "weightage": 70
                },
                {
                    "testName": "FML-III",
                    "score": 20,
                    "maxScore": 20,
                    "weightage": 100
                }
            ],
            "totalScore": 62,
            "maxTotalScore": 100
        }
    ]
};

export const REAL_TIMETABLE_DATA: TimetableResponse = {
    batch: 2,
    days: {
        "1": [
            {
                "slotName": "Slot 1",
                "timeRange": "08:00 - 08:50",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 2",
                "timeRange": "08:50 - 09:40",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 3",
                "timeRange": "09:45 - 10:35",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 4",
                "timeRange": "10:40 - 11:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 5",
                "timeRange": "11:35 - 12:25",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 6",
                "timeRange": "12:30 - 01:20",
                "courseCode": "21MAB201T",
                "courseTitle": "Transforms and Boundary Value Problems",
                "faculty": "Dr. Thenmozhi S (103240)",
                "room": "TP 706",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 7",
                "timeRange": "01:25 - 02:15",
                "courseCode": "21MAB201T",
                "courseTitle": "Transforms and Boundary Value Problems",
                "faculty": "Dr. Thenmozhi S (103240)",
                "room": "TP 706",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 8",
                "timeRange": "02:20 - 03:10",
                "courseCode": "21CSC202J",
                "courseTitle": "Operating Systems",
                "faculty": "Dr.Vidhya B (103387)",
                "room": "TP 706",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 9",
                "timeRange": "03:10 - 04:00",
                "courseCode": "21CSC202J",
                "courseTitle": "Operating Systems",
                "faculty": "Dr.Vidhya B (103387)",
                "room": "TP 706",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 10",
                "timeRange": "04:00 - 04:50",
                "courseCode": "21LEM202T",
                "courseTitle": "UHV-II: Universal Human Values",
                "faculty": "Dr. Arunarani AR (102975)",
                "room": "To be Alloted",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 11",
                "timeRange": "04:50 - 05:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            },
            {
                "slotName": "Slot 12",
                "timeRange": "05:30 - 06:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 1
            }
        ],
        "2": [
            {
                "slotName": "Slot 1",
                "timeRange": "08:00 - 08:50",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "TP 706",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 2",
                "timeRange": "08:50 - 09:40",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "TP 706",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 3",
                "timeRange": "09:45 - 10:35",
                "courseCode": "21LEM202T",
                "courseTitle": "UHV-II: Universal Human Values",
                "faculty": "Dr. Arunarani AR (102975)",
                "room": "To be Alloted",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 4",
                "timeRange": "10:40 - 11:30",
                "courseCode": "21LEM202T",
                "courseTitle": "UHV-II: Universal Human Values",
                "faculty": "Dr. Arunarani AR (102975)",
                "room": "To be Alloted",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 5",
                "timeRange": "11:35 - 12:25",
                "courseCode": "21MAB201T",
                "courseTitle": "Transforms and Boundary Value Problems",
                "faculty": "Dr. Thenmozhi S (103240)",
                "room": "TP 706",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 6",
                "timeRange": "12:30 - 01:20",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 7",
                "timeRange": "01:25 - 02:15",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 8",
                "timeRange": "02:20 - 03:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 9",
                "timeRange": "03:10 - 04:00",
                "courseCode": "21CSC202J",
                "courseTitle": "Operating Systems",
                "faculty": "Dr.Vidhya B (103387)",
                "room": "UB 714A",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 10",
                "timeRange": "04:00 - 04:50",
                "courseCode": "21CSC202J",
                "courseTitle": "Operating Systems",
                "faculty": "Dr.Vidhya B (103387)",
                "room": "UB 714A",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 11",
                "timeRange": "04:50 - 05:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 2
            },
            {
                "slotName": "Slot 12",
                "timeRange": "05:30 - 06:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 2
            }
        ],
        "3": [
            {
                "slotName": "Slot 1",
                "timeRange": "08:00 - 08:50",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 2",
                "timeRange": "08:50 - 09:40",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 3",
                "timeRange": "09:45 - 10:35",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "UB 703",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 4",
                "timeRange": "10:40 - 11:30",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "UB 703",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 5",
                "timeRange": "11:35 - 12:25",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 6",
                "timeRange": "12:30 - 01:20",
                "courseCode": "21CSS201T",
                "courseTitle": "Computer Organization and Architecture",
                "faculty": "Nagarajan S (103622)",
                "room": "TP 706",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 7",
                "timeRange": "01:25 - 02:15",
                "courseCode": "21CSS201T",
                "courseTitle": "Computer Organization and Architecture",
                "faculty": "Nagarajan S (103622)",
                "room": "TP 706",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 8",
                "timeRange": "02:20 - 03:10",
                "courseCode": "21MAB201T",
                "courseTitle": "Transforms and Boundary Value Problems",
                "faculty": "Dr. Thenmozhi S (103240)",
                "room": "TP 706",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 9",
                "timeRange": "03:10 - 04:00",
                "courseCode": "21CSC203P",
                "courseTitle": "Advanced Programming Practice",
                "faculty": "Dr.Vidhya S (102939)",
                "room": "TP 706",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 10",
                "timeRange": "04:00 - 04:50",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "TP 706",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 11",
                "timeRange": "04:50 - 05:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 3
            },
            {
                "slotName": "Slot 12",
                "timeRange": "05:30 - 06:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 3
            }
        ],
        "4": [
            {
                "slotName": "Slot 1",
                "timeRange": "08:00 - 08:50",
                "courseCode": "21CSC203P",
                "courseTitle": "Advanced Programming Practice",
                "faculty": "Dr.Vidhya S (102939)",
                "room": "TP 706",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 2",
                "timeRange": "08:50 - 09:40",
                "courseCode": "21CSC203P",
                "courseTitle": "Advanced Programming Practice",
                "faculty": "Dr.Vidhya S (102939)",
                "room": "TP 706",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 3",
                "timeRange": "09:45 - 10:35",
                "courseCode": "21CSC201J",
                "courseTitle": "Data Structures and Algorithms",
                "faculty": "Akilandasowmya (103675)",
                "room": "TP 706",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 4",
                "timeRange": "10:40 - 11:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 5",
                "timeRange": "11:35 - 12:25",
                "courseCode": "21CSS201T",
                "courseTitle": "Computer Organization and Architecture",
                "faculty": "Nagarajan S (103622)",
                "room": "TP 706",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 6",
                "timeRange": "12:30 - 01:20",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 7",
                "timeRange": "01:25 - 02:15",
                "courseCode": "21LEM201T",
                "courseTitle": "Professional Ethics",
                "faculty": "Dr. Nancy Prasanna Joseph (102297)",
                "room": "online",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 8",
                "timeRange": "02:20 - 03:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 9",
                "timeRange": "03:10 - 04:00",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 10",
                "timeRange": "04:00 - 04:50",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 11",
                "timeRange": "04:50 - 05:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            },
            {
                "slotName": "Slot 12",
                "timeRange": "05:30 - 06:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 4
            }
        ],
        "5": [
            {
                "slotName": "Slot 1",
                "timeRange": "08:00 - 08:50",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 2",
                "timeRange": "08:50 - 09:40",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 3",
                "timeRange": "09:45 - 10:35",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 4",
                "timeRange": "10:40 - 11:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 5",
                "timeRange": "11:35 - 12:25",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 6",
                "timeRange": "12:30 - 01:20",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 7",
                "timeRange": "01:25 - 02:15",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 8",
                "timeRange": "02:20 - 03:10",
                "courseCode": "21CSS201T",
                "courseTitle": "Computer Organization and Architecture",
                "faculty": "Nagarajan S (103622)",
                "room": "TP 706",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 9",
                "timeRange": "03:10 - 04:00",
                "courseCode": "21CSC202J",
                "courseTitle": "Operating Systems",
                "faculty": "Dr.Vidhya B (103387)",
                "room": "TP 706",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 10",
                "timeRange": "04:00 - 04:50",
                "courseCode": "21CSC203P",
                "courseTitle": "Advanced Programming Practice",
                "faculty": "Dr.Vidhya S (102939)",
                "room": "TP 706",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 11",
                "timeRange": "04:50 - 05:30",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            },
            {
                "slotName": "Slot 12",
                "timeRange": "05:30 - 06:10",
                "courseCode": "-",
                "courseTitle": "Free Period",
                "faculty": "",
                "room": "",
                "dayOrder": 5
            }
        ]
    }
};
