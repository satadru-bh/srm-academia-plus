export interface FacultyMember {
  id: string;
  name: string;
  empId?: string;
  designation: string;
  department: string;
  cabin?: string;
  email?: string;
  phone?: string;
  building?: string;
  roleBadge?: string;
  isMyFaculty?: boolean;
  avatarUrl?: string;
  profileUrl?: string;
  specialization?: string;
  coursesTaught?: Array<{
    code: string;
    title: string;
    slot?: string;
  }>;
}

/**
 * Authoritative SRM University Faculty Directory
 * Sourced directly from official SRMIST Faculty & Staff Information Directory (2518 verified records).
 */
export const FACULTY_DIRECTORY: FacultyMember[] = [
  {
    "id": "fac-dr-p-madhusoodhanan",
    "name": "Dr. P. Madhusoodhanan",
    "designation": "Assistant Professor, Department of Career Development",
    "department": "Department of Career Development"
  },
  {
    "id": "fac-prof-v-chitra",
    "name": "Dr. Chitra V",
    "designation": "Dean, Professor & Head, Department of Pharmacology, College of Pharmacy",
    "department": "Department of Pharmacology",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-v-chitra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/1-1.jpg"
  },
  {
    "id": "fac-dr-duraisamy-a",
    "name": "Dr. Duraisamy A",
    "designation": "Dean, Faculty of Science and Humanities",
    "department": "Faculty ofScience and Humanities",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-duraisamy-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-A.-Duraisamy-Dean-a-1.jpg"
  },
  {
    "id": "fac-dr-ganapathy-sankar-u",
    "name": "Dr. Ganapathy Sankar U",
    "designation": "Dean,  College of Occupational Therapy",
    "department": "College of Occupational Therapy",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganapathy-sankar-u/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.U.Ganapathy-Sankar-1.jpg"
  },
  {
    "id": "fac-dr-hari-singh",
    "name": "Dr. Hari Singh",
    "designation": "Dean, School of Public Health",
    "department": "School of Public Health",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-hari-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Dr.-Hari-Singh-1.png"
  },
  {
    "id": "fac-dr-helen-shaji-j-c",
    "name": "Dr. Helen Shaji J C",
    "designation": "Dean, SRM College of Nursing",
    "department": "College of Nursing",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-helen-shaji-j-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Dr.Helen-Shaji-J-C.jpg"
  },
  {
    "id": "fac-dr-jawaharlal-m",
    "name": "Dr. Jawaharlal M",
    "designation": "Dean,  SRM College of Agriculture Sciences",
    "department": "College of Agriculture Sciences",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jawaharlal-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Jawaharlal-M.png"
  },
  {
    "id": "fac-dr-m-leenus-jesu-martin",
    "name": "Dr. Leenus Jesu Martin M",
    "designation": "Dean, Faculty of Engineering and Technology",
    "department": "Faculty ofEngineering and Technology",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-leenus-jesu-martin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/Dr.-Leenus-Jesu-Martin-M.jpg"
  },
  {
    "id": "fac-dr-v-m-shenbagaraman",
    "name": "Dr. Shenbagaraman V.M",
    "designation": "Dean i/c, Faculty of Management",
    "department": "Faculty ofManagement",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-m-shenbagaraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0012_DSC_9403.jpg"
  },
  {
    "id": "fac-prof-dr-indranath-gupta",
    "name": "Prof. (Dr.) Indranath Gupta",
    "designation": "Dean, School of Law",
    "department": "School of Law",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-dr-indranath-gupta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Prof.-Dr.-Indranath-Gupta.jpg"
  },
  {
    "id": "fac-prof-t-s-veeragoudhaman",
    "name": "Prof. Veeragoudhaman T S",
    "designation": "Dean i/c, College of Physiotherapy",
    "department": "College of Physiotherapy",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-t-s-veeragoudhaman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.29-AM.jpeg"
  },
  {
    "id": "fac-dr-d-antony-ashok-kumar",
    "name": "Dr. Antony Ashok Kumar D",
    "designation": "Director, Institute of Hotel and Catering Management",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-antony-ashok-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-16-1.jpg"
  },
  {
    "id": "fac-dr-m-arthanareeswari",
    "name": "Dr. Arthanareeswari M",
    "designation": "Professor & Chairperson (School of Basic Sciences)",
    "department": "School of Basic Sciences)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-arthanareeswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4006.jpg"
  },
  {
    "id": "fac-dr-bernaurdshaw-neppolian",
    "name": "Dr. Bernaurdshaw Neppolian",
    "designation": "Dean (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bernaurdshaw-neppolian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr_-Bernaurdshaw-Neppolian.jpeg"
  },
  {
    "id": "fac-dr-m-cheralathan",
    "name": "Dr. Cheralathan M",
    "designation": "Professor & Chairperson (School of Mechanical Engineering)",
    "department": "School of Mechanical Engineering)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-cheralathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Dr.M.Cheralathan-new-image-1.png"
  },
  {
    "id": "fac-dr-k-gunasekaran",
    "name": "Dr. Gunasekaran K",
    "designation": "Professor and COE",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-gunasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_K_Gunasekaran-1.jpg"
  },
  {
    "id": "fac-dr-a-r-krishnan",
    "name": "Dr. Krishnan A.R.",
    "designation": "Professor and Chairperson (MBA Programme)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-r-krishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0020_DSC_9393.jpg"
  },
  {
    "id": "fac-dr-nisha-ashokan",
    "name": "Dr. Nisha Ashokan",
    "designation": "Professor and Director (Student Affairs)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nisha-ashokan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Nisha-Ashokan-New-a-1.jpg"
  },
  {
    "id": "fac-dr-m-parani",
    "name": "Dr. Parani Madasamy",
    "designation": "Professor and Chairperson (School of Bio Engineering)",
    "department": "School of Bio Engineering)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-parani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Parani-Madasamy.jpg"
  },
  {
    "id": "fac-dr-p-s-rajeswari",
    "name": "Dr. Rajeswari P.S.",
    "designation": "Professor and Chairperson (Marketing & Communication)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-s-rajeswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0028_DSC_9382-1.jpg"
  },
  {
    "id": "fac-dr-t-ramachandran",
    "name": "Dr. Ramachandran T",
    "designation": "Professor and Chairperson (Finance & Accounting)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-ramachandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0030_DSC_9380.jpg"
  },
  {
    "id": "fac-dr-revathi-venkataraman",
    "name": "Dr. Revathi Venkataraman",
    "designation": "Professor and Chairperson (School of Computing)",
    "department": "School of Computing)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prof.-Revathi-Venkataraman.jpg"
  },
  {
    "id": "fac-s-senthilkumar",
    "name": "Dr. Senthilkumar S",
    "designation": "Professor and Chairperson (Ph.D. Programme)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-senthilkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/17.jpg"
  },
  {
    "id": "fac-dr-k-vijayakumar",
    "name": "Dr. Vijayakumar K",
    "designation": "Professor and Chairperson (School of Electrical and Electronics Engineering)",
    "department": "School of Electrical and Electronics Engineering)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-vijayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-27.jpg"
  },
  {
    "id": "fac-dr-mohana-krishnan-r",
    "name": "Prof. Mohana Krishnan R",
    "designation": "Director, Sports",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohana-krishnan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Prof.-Mohana-Krishnan-R.jpeg"
  },
  {
    "id": "fac-dr-gajendran-a",
    "name": "Dr. Gajendran A",
    "designation": "Associate Professor and Chairperson (Organizational Behaviour & HRM )",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gajendran-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Photo-Gajendran-pass-port-.jpg"
  },
  {
    "id": "fac-dr-s-k-manivannan",
    "name": "Dr. Manivannan S.K.",
    "designation": "Associate Professor and Chairperson (Operations & Decision Sciences)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-k-manivannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0017_DSC_9396.jpg"
  },
  {
    "id": "fac-k-santhana-lakshmi",
    "name": "Dr. Santhana Lakshmi K",
    "designation": "Professor and Chairperson (International Programs and Relations)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-santhana-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0005_DSC_9413.jpg"
  },
  {
    "id": "fac-p-saravanan",
    "name": "Dr. Saravanan P",
    "designation": "Associate Professor and Chairperson (Information Systems & Technology Management)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/DSC_0001-removebg-preview-1.png"
  },
  {
    "id": "fac-dr-k-t-vijaykarthigeyan",
    "name": "Dr. Vijaykarthigeyan K T",
    "designation": "Associate Professor and Chairperson (BBA program)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-t-vijaykarthigeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0013_DSC_9402.jpg"
  },
  {
    "id": "fac-s-s-sridhar",
    "name": "Dr. Sridhar S S",
    "designation": "Professor & Associate Dean (Academics - CET)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-s-sridhar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/SSS.jpg"
  },
  {
    "id": "fac-dr-s-albert-antony-raj",
    "name": "Dr. Albert Antony Raj S",
    "designation": "Professor and Deputy Dean (Faculty of Science & Humanities)",
    "department": "Faculty ofScience & Humanities)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-albert-antony-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Albert-S-scaled-e1683695480367.jpg"
  },
  {
    "id": "fac-c-lakshmi",
    "name": "Dr. Lakshmi C",
    "designation": "Professor and Associate Chairperson (School of Computing)",
    "department": "School of Computing)",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.C.Lakshmi-Profile_photo.jpg"
  },
  {
    "id": "fac-dr-m-pushpalatha",
    "name": "Dr. Pushpalatha M",
    "designation": "Professor and Associate Chairperson (School of Computing)",
    "department": "School of Computing)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-pushpalatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pushpalatha.jpg"
  },
  {
    "id": "fac-dr-r-annie-uthra",
    "name": "Dr. Annie Uthra R",
    "designation": "Professor and Head (Computational Intelligence)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-annie-uthra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.R.-Annie-Uthra.jpg"
  },
  {
    "id": "fac-dr-p-j-arul-leena-rose",
    "name": "Dr. Arul Leena Rose.P.J",
    "designation": "Professor & Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-j-arul-leena-rose/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/photoleena-1.jpg"
  },
  {
    "id": "fac-dr-k-geetha-ramesh",
    "name": "Dr. Geetha K",
    "designation": "Professor and Head (Architecture and Interior Design)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-geetha-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Dr.-Geetha-K-School-of-Architecture-and-Interior-Design.jpg"
  },
  {
    "id": "fac-dr-g-joselin-retna-kumar",
    "name": "Dr. Joselin Retna Kumar G",
    "designation": "Professor and Head (Electronics & Instrumentation Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-joselin-retna-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-6.jpg"
  },
  {
    "id": "fac-dr-k-kamalakkannan",
    "name": "Dr. Kamalakkannan K",
    "designation": "Professor and Head (Automobile Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-kamalakkannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Kamalakannan_Auto.jpg"
  },
  {
    "id": "fac-dr-p-r-kannan-rajkumar-2",
    "name": "Dr. Kannan Rajkumar P.R",
    "designation": "Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-r-kannan-rajkumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Dr.P.R.Kannan-Rajkumar.jpg"
  },
  {
    "id": "fac-prof-m-k-kathiravan",
    "name": "Dr. Kathiravan M K",
    "designation": "Professor and Head (Pharmaceutical Chemistry)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-m-k-kathiravan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/unnamed-300x300-1.jpg"
  },
  {
    "id": "fac-dr-l-kavitha-nair",
    "name": "Dr. Kavitha Nair L",
    "designation": "Professor and Head (Language, Culture and Society)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-kavitha-nair/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_1377-transformed.png"
  },
  {
    "id": "fac-dr-v-kavitha",
    "name": "Dr. Kavitha V",
    "designation": "Professor and Head (Data Science And Business Systems)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4251.jpg"
  },
  {
    "id": "fac-dr-s-kirankumar",
    "name": "Dr. Kirankumar S",
    "designation": "Professor & Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-kirankumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Kiran-Profile-Picture-copy.jpg"
  },
  {
    "id": "fac-kothai-seshathri",
    "name": "Dr. Kothai Seshathri",
    "designation": "Professor and Head (Soil Science)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kothai-seshathri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kothai-photo.jpg"
  },
  {
    "id": "fac-dr-m-lakshmi",
    "name": "Dr. Lakshmi M",
    "designation": "Professor and Head (Networking And Communications)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4325.jpg"
  },
  {
    "id": "fac-dr-t-muthuramalingam",
    "name": "Dr. Muthuramalingam T",
    "designation": "Professor and Head (Mechatronics Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-muthuramalingam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/ChatGPT-Image-Sep-14-2026-10_03_43-AM-removebg-preview.jpg"
  },
  {
    "id": "fac-dr-g-niranjana",
    "name": "Dr. Niranjana G",
    "designation": "Professor and Head (Computing Technologies)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-niranjana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/niranjana-e1716472946340.jpg"
  },
  {
    "id": "fac-dr-nithya-t-g-2",
    "name": "Dr. Nithya T G",
    "designation": "Professor and Head (Biochemistry-FSH)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nithya-t-g-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/600045.jpg"
  },
  {
    "id": "fac-dr-paromita-chakraborty",
    "name": "Dr. Paromita Chakraborty",
    "designation": "Professor and Head (REACH)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-paromita-chakraborty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/paromita.png"
  },
  {
    "id": "fac-e-poovammal",
    "name": "Dr. Poovammal E",
    "designation": "Professor and Director (Hostels)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/e-poovammal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poovammal.jpg"
  },
  {
    "id": "fac-dr-prakash-muthuramalingam",
    "name": "Dr. Prakash Muthuramalingam",
    "designation": "Research Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prakash-muthuramalingam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3925.jpg"
  },
  {
    "id": "fac-dr-rajendran-p",
    "name": "Dr. Rajendran P",
    "designation": "University Librarian",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajendran-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Rajendran.png"
  },
  {
    "id": "fac-dr-ritesh-kumar-dubey",
    "name": "Dr. Ritesh Kumar Dubey",
    "designation": "Professor (Research) and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ritesh-kumar-dubey/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5320.jpg"
  },
  {
    "id": "fac-dr-s-sahabudeen",
    "name": "Dr. Sahabudeen S",
    "designation": "Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sahabudeen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/FLD_0256-copy.jpg"
  },
  {
    "id": "fac-dr-m-sangeetha",
    "name": "Dr. Sangeetha M",
    "designation": "Professor and Head (Electronics & Communication)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sangeetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/sangeetha-1.png"
  },
  {
    "id": "fac-dr-selvakumar-g",
    "name": "Dr. Selvakumar G",
    "designation": "Associate Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selvakumar-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Dr.-Selvakumar-G-1.png"
  },
  {
    "id": "fac-dr-e-senthil-kumar",
    "name": "Dr. Senthil Kumar E",
    "designation": "Research Professor and Head (Physics and Nanotechnology)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/25.jpg"
  },
  {
    "id": "fac-dr-s-sivakumar",
    "name": "Dr. Sivakumar S",
    "designation": "Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sivakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Dr.-Sivakumar-S.jpg"
  },
  {
    "id": "fac-dr-u-snekhalatha",
    "name": "Dr. Snekhalatha U",
    "designation": "Professor and Head (Biomedical Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-snekhalatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0051_DSC_9254.jpg"
  },
  {
    "id": "fac-dr-r-sridhar",
    "name": "Dr. Sridhar R",
    "designation": "Professor and Head (Electrical and Electronics Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-sridhar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sridhar_EEE.jpg"
  },
  {
    "id": "fac-dr-k-suresh-kumar",
    "name": "Dr. Suresh Kumar K",
    "designation": "Professor and Head (Mechanical Engineering)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-suresh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.K.Suresh-Kumar-with-coat.jpg"
  },
  {
    "id": "fac-mr-t-n-suresh",
    "name": "Dr. Suresh T.N",
    "designation": "Vice - Principal, College of Physiotherapy",
    "department": "College of Physiotherapy",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-t-n-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-9.jpg"
  },
  {
    "id": "fac-dr-t-m-vijayakumar",
    "name": "Dr. Vijayakumar T M",
    "designation": "Professor and Head (Pharmacy Practice)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-m-vijayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/vijayakumar.jpg"
  },
  {
    "id": "fac-prof-r-vijayalakshmi",
    "name": "Dr. Vijayalakshmi R",
    "designation": "Vice Principal, College of Nursing",
    "department": "College of Nursing",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-r-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Dr.-Vijayalakshmi-R.jpg"
  },
  {
    "id": "fac-grace-lydia-sarojini",
    "name": "Mrs. Grace Lydia Sarojini D",
    "designation": "Vice - Principal, College of Occupational Therapy",
    "department": "College of Occupational Therapy",
    "profileUrl": "https://www.srmist.edu.in/faculty/grace-lydia-sarojini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-prof-n-damodharan",
    "name": "Prof. Damodharan N",
    "designation": "Vice Principal / Professor & Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-n-damodharan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/4.jpg"
  },
  {
    "id": "fac-prof-r-kamaraj",
    "name": "Prof. Kamaraj R",
    "designation": "Professor and Head (Pharmacognosy)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-r-kamaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/5.jpg"
  },
  {
    "id": "fac-dr-k-manikandan",
    "name": "Prof. Manikandan K",
    "designation": "Professor and Head (Pharmaceutical Analysis)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-manikandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/27.jpg"
  },
  {
    "id": "fac-dr-s-jayasingh-albert-chandrasekar",
    "name": "Dr. Jayasingh Albert Chandrasekar S",
    "designation": "Associate Professor & Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-jayasingh-albert-chandrasekar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230315-WA0008.jpg"
  },
  {
    "id": "fac-dr-karpagavalli-s",
    "name": "Dr. Karpagavalli S",
    "designation": "Associate Professor and HoD",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karpagavalli-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Karp-2-scaled-e1681973643757.jpg"
  },
  {
    "id": "fac-dr-p-madhusoodhanan",
    "name": "Dr. Madhusoodhanan  P",
    "designation": "Associate Professor and HoD (CDC-CET)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-madhusoodhanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7331.jpg"
  },
  {
    "id": "fac-dr-v-manimaran",
    "name": "Dr. Manimaran V",
    "designation": "Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-manimaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Mani-photo-500-kb-Copy-1-scaled.jpg"
  },
  {
    "id": "fac-dr-s-periyar-selvam",
    "name": "Dr. Periyar Selvam S",
    "designation": "Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-periyar-selvam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.-S.-Periyar-Selvam.jpg"
  },
  {
    "id": "fac-dr-poarkodi",
    "name": "Dr. Poarkodi",
    "designation": "Associate Professor and Head (Visual Communication)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-poarkodi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/15-extra-scaled.jpg"
  },
  {
    "id": "fac-mr-m-ramesh",
    "name": "Dr. Ramesh. M",
    "designation": "Associate Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/6-scaled.jpg"
  },
  {
    "id": "fac-dr-n-ranjan",
    "name": "Dr. Ranjan N",
    "designation": "Associate Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-ranjan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/ranjan-photo-1.jpeg"
  },
  {
    "id": "fac-dr-senthil-kumar-m",
    "name": "Dr. Senthil Kumar M",
    "designation": "Associate Professor - OG -HoD",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-senthil-kumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0010-2.jpg"
  },
  {
    "id": "fac-dr-r-sridharan",
    "name": "Dr. Sridharan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-sridharan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/1-scaled.jpg"
  },
  {
    "id": "fac-dr-v-vennila",
    "name": "Dr. V. Vennila",
    "designation": "Associate Professor & Head of the Department",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-vennila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/1-1-scaled.jpg"
  },
  {
    "id": "fac-s-vijaya-bharathi",
    "name": "Dr. Vijaya Bharathi S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-vijaya-bharathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/3-4-scaled.jpg"
  },
  {
    "id": "fac-dr-s-vishali",
    "name": "Dr. Vishali S",
    "designation": "Associate Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vishali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Vishali_Chemical.jpg"
  },
  {
    "id": "fac-dr-r-angelin-silviya",
    "name": "Dr.  Angelin Silviya R",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-angelin-silviya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ange-2-scaled.jpg"
  },
  {
    "id": "fac-dr-l-sivakami",
    "name": "Dr.  L. Sivakami",
    "designation": "Associate  Professor & Head of the Department",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-sivakami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Dr.-L.-Sivakami-1.png"
  },
  {
    "id": "fac-ms-aarthi-c",
    "name": "Dr. Aarthi C",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-aarthi-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Aarthi-C-SRM.jpeg"
  },
  {
    "id": "fac-dr-aarthi-s",
    "name": "Dr. Aarthi S",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aarthi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-3.23.08-PM.jpeg"
  },
  {
    "id": "fac-s-anandhi",
    "name": "Dr. Anandhi S",
    "designation": "Head and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-anandhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anan-2-scaled.jpg"
  },
  {
    "id": "fac-dr-a-anbarassan",
    "name": "Dr. Anbarassan A",
    "designation": "Assistant Professor and HOD",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-anbarassan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr__Anbarassan.png"
  },
  {
    "id": "fac-dr-divakar-a-k",
    "name": "Dr. Divakar A K",
    "designation": "Assistant Professor and HOD",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divakar-a-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/diva-photo_crop-scaled.jpg"
  },
  {
    "id": "fac-dr-ganesh-s",
    "name": "Dr. Ganesh S",
    "designation": "Head & Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganesh-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Untitled-design.jpg"
  },
  {
    "id": "fac-dr-gopi-d",
    "name": "Dr. Gopi D",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gopi-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Gopi-Photo-1-scaled.jpg"
  },
  {
    "id": "fac-dr-b-gopu",
    "name": "Dr. Gopu B",
    "designation": "Head and Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-gopu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/GOPU-B.jpg"
  },
  {
    "id": "fac-m-muthukumar",
    "name": "Dr. Muthukumar M",
    "designation": "Assistant Professor (Senior Grade) and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-muthukumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muthukumar-2023-Jul-1-scaled.jpg"
  },
  {
    "id": "fac-dr-periasami-nagappan",
    "name": "Dr. Periasami Nagappan",
    "designation": "Head and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-periasami-nagappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Peri-1-1-scaled.jpg"
  },
  {
    "id": "fac-dr-prakash-k",
    "name": "Dr. Prakash K",
    "designation": "Head and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prakash-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Prak-1-scaled.jpg"
  },
  {
    "id": "fac-dr-n-prema",
    "name": "Dr. Prema N",
    "designation": "Head Of The Department",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-prema/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-rageshwari-selvaraj",
    "name": "Dr. Rageshwari Selvaraj",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rageshwari-selvaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rageshwari.jpg"
  },
  {
    "id": "fac-dr-r-rajasekaran",
    "name": "Dr. Rajasekaran R",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-rajasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rajsaekaran1.png"
  },
  {
    "id": "fac-dr-ramadass-s-2",
    "name": "Dr. Ramadass S",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramadass-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Ramadass.jpg"
  },
  {
    "id": "fac-dr-a-ravanachandar",
    "name": "Dr. Ravanachandar A",
    "designation": "Head and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-ravanachandar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ravanachander.jpg"
  },
  {
    "id": "fac-dr-vidhya-shankari-s-2",
    "name": "Dr. Vidhya Shankari S",
    "designation": "HoD i/c and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vidhya-shankari-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Vidhya-Shankari-S.jpg"
  },
  {
    "id": "fac-mr-kumaravel-k",
    "name": "Mr. Kumaravel K",
    "designation": "Assistant Professor and Head",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-kumaravel-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/2-3-scaled.jpg"
  },
  {
    "id": "fac-mr-rajesh-ganesan",
    "name": "Mr. Rajesh Ganesan",
    "designation": "Professor of Practice",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-rajesh-ganesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Rajesh-Ganesan.jpg"
  },
  {
    "id": "fac-mr-saravanakumar-p",
    "name": "Mr. Saravanakumar P",
    "designation": "Professor of Practice",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-saravanakumar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Untitled-2.jpg"
  },
  {
    "id": "fac-lavanya-j",
    "name": "Mrs. Lavanya J",
    "designation": "Head and Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/lavanya-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-scaled.jpg"
  },
  {
    "id": "fac-dr-s-a-akbar",
    "name": "Dr. Akbar S.A",
    "designation": "Chief Scientist and Professor AcSIR (retd.)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-a-akbar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_S_A_Akbar.jpg"
  },
  {
    "id": "fac-dr-m-alagiri",
    "name": "Dr. Alagiri M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-alagiri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4762.jpg"
  },
  {
    "id": "fac-dr-alex-joseph",
    "name": "Dr. Alex Joseph",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-alex-joseph/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Alex-Joseph.jpg"
  },
  {
    "id": "fac-mrs-a-alice-nithya",
    "name": "Dr. Alice Nithya A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-a-alice-nithya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Alice-Nithya.jpg"
  },
  {
    "id": "fac-amutha-b",
    "name": "Dr. Amutha B",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/amutha-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/amutha.jpg"
  },
  {
    "id": "fac-prof-d-anandhi",
    "name": "Dr. Anandhi D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-d-anandhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.19-AM.jpeg"
  },
  {
    "id": "fac-dr-k-ananthanarayanan",
    "name": "Dr. Ananthanarayanan K",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-ananthanarayanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Ananth-e1773220453864.jpeg"
  },
  {
    "id": "fac-dr-r-angayarkanni",
    "name": "Dr. Angayarkanni R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-angayarkanni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/20-scaled.jpg"
  },
  {
    "id": "fac-dr-annapurani-panaiyappan-k",
    "name": "Dr. Annapurani Panaiyappan K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-annapurani-panaiyappan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3760.jpg"
  },
  {
    "id": "fac-dr-r-annie-sujatha",
    "name": "Dr. Annie Sujatha R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-annie-sujatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4779.jpg"
  },
  {
    "id": "fac-dr-antony-aroul-raj-v",
    "name": "Dr. Antony Aroul Raj V",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-antony-aroul-raj-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Untitled-1.jpg"
  },
  {
    "id": "fac-dr-aravind-a",
    "name": "Dr. Aravind A",
    "designation": "Professor of Practice",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aravind-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/01-Copy1-1.jpg"
  },
  {
    "id": "fac-dr-j-archana",
    "name": "Dr. Archana J",
    "designation": "Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-archana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-10-1.jpg"
  },
  {
    "id": "fac-dr-j-arockia-selvi",
    "name": "Dr. Arockia Selvi J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-arockia-selvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3985.jpg"
  },
  {
    "id": "fac-dr-a-arul-jeya-kumar-2",
    "name": "Dr. Arul Jeya Kumar A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-arul-jeya-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-65.jpg"
  },
  {
    "id": "fac-p-aruna-priya",
    "name": "Dr. Aruna Priya P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-aruna-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100213-Dr.-P.-Aruna-Priya.jpg"
  },
  {
    "id": "fac-dr-ayyappanpillai-ajayaghosh",
    "name": "Dr. Ayyappanpillai Ajayaghosh",
    "designation": "Shanti Swarup Bhatnagar Chair Professor and CSIR-Bhatnagar Fellow",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ayyappanpillai-ajayaghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4012.jpg"
  },
  {
    "id": "fac-dr-m-balasubramanian-2",
    "name": "Dr. Balasubramanian M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-balasubramanian-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/DSC_0904-scaled.jpg"
  },
  {
    "id": "fac-dr-n-bamini-devi",
    "name": "Dr. Bamini Devi N",
    "designation": "Professor & HOD, Department of Medical Surgical Nursing",
    "department": "Department of Medical Surgical Nursing",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-bamini-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-N.-Baminidevi.jpg"
  },
  {
    "id": "fac-dr-b-baranidharan",
    "name": "Dr. Baranidharan B",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-baranidharan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baranidharan.jpg"
  },
  {
    "id": "fac-dr-baskar-m",
    "name": "Dr. Baskar M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-baskar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baskar.jpg"
  },
  {
    "id": "fac-belsam-ananth-m",
    "name": "Dr. Belsam Jeba Ananth .M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/belsam-ananth-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Dr_Belsam_Jeba_Ananth__M.png"
  },
  {
    "id": "fac-dr-benson-thomas-m",
    "name": "Dr. Benson Thomas M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-benson-thomas-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Benson-Thomas-M-scaled.jpg"
  },
  {
    "id": "fac-dr-c-bharatiraja",
    "name": "Dr. Bharatiraja C",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-bharatiraja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/Faculty-Photos-srmist-14-e1750604091355.jpg"
  },
  {
    "id": "fac-mrs-c-t-manimegalai",
    "name": "Dr. C.T. Manimegalai",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-c-t-manimegalai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100224-Dr.-C.T.-Manimegalai.jpg"
  },
  {
    "id": "fac-dr-j-chandradass",
    "name": "Dr. Chandradass J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-chandradass/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/current-photo3.jpg"
  },
  {
    "id": "fac-mr-p-chandrasekaran",
    "name": "Dr. Chandrasekaran P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-chandrasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-20.jpg"
  },
  {
    "id": "fac-dr-n-chellammal",
    "name": "Dr. Chellammal N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-chellammal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/file.jpeg"
  },
  {
    "id": "fac-dr-a-devi",
    "name": "Dr. Devi A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0040_DSC_9267.jpg"
  },
  {
    "id": "fac-dr-s-dhanalakshmi",
    "name": "Dr. Dhanalakshmi S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-dhanalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101911-Dr.-S.-Dhanalakshmi.jpg"
  },
  {
    "id": "fac-dr-elena-soloveva",
    "name": "Dr. Elena Soloveva",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elena-soloveva/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/9a1b95d3-a6ec-4e2a-961d-a2f42ca79955.jpg"
  },
  {
    "id": "fac-p-eswaran",
    "name": "Dr. Eswaran P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-eswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100251-Dr.-P.-Eswaran.jpg"
  },
  {
    "id": "fac-ms-m-ferni-ukrit",
    "name": "Dr. Ferni Ukrit M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-m-ferni-ukrit/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Ferni-Photo.jpeg"
  },
  {
    "id": "fac-dr-l-r-ganapathy-subramanian",
    "name": "Dr. Ganapathy Subramanian L R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-r-ganapathy-subramanian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/HoD.png"
  },
  {
    "id": "fac-dr-k-ganesan",
    "name": "Dr. Ganesan K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-ganesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-21.jpg"
  },
  {
    "id": "fac-dr-s-ganesh-kumar",
    "name": "Dr. Ganesh Kumar S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-ganesh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4236.jpg"
  },
  {
    "id": "fac-dr-b-k-gnanavel",
    "name": "Dr. Gnanavel B K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-k-gnanavel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-100.jpg"
  },
  {
    "id": "fac-professor-t-v-gopal",
    "name": "Dr. Gopal T V",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/professor-t-v-gopal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Dr.-GOPAL-T-V-2.jpg"
  },
  {
    "id": "fac-dr-h-gladius-jennifer",
    "name": "Dr. H. Gladius Jennifer",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-h-gladius-jennifer/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Jennifer-Mam-profile-e1783665085830.png"
  },
  {
    "id": "fac-dr-helen-annal-therese",
    "name": "Dr. Helen Annal Therese",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-helen-annal-therese/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3977.jpg"
  },
  {
    "id": "fac-dr-indhumathi-r",
    "name": "Dr. Indhumathi R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-indhumathi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Indumathi.jpg"
  },
  {
    "id": "fac-dr-iyakutti-k",
    "name": "Dr. Iyakutti K",
    "designation": "Professor (Emeritus)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-iyakutti-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.KI_.jpg"
  },
  {
    "id": "fac-dr-jesu-arockiaraj",
    "name": "Dr. Jesu Arockia Raj A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jesu-arockiaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Jesu_PS-Size-Photo-1-scaled.jpg"
  },
  {
    "id": "fac-dr-r-jeyalakshmi",
    "name": "Dr. Jeyalakshmi R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-jeyalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3946.jpg"
  },
  {
    "id": "fac-dr-d-john-thiruvadigal",
    "name": "Dr. John Thiruvadigal D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-john-thiruvadigal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.John-Sir-scaled.jpg"
  },
  {
    "id": "fac-dr-kalaivani-t",
    "name": "Dr. Kalaivani T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kalaivani-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4788.jpg"
  },
  {
    "id": "fac-m-kalavalli",
    "name": "Dr. Kalavalli M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-kalavalli/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-M.-Kalavalli.jpg"
  },
  {
    "id": "fac-dr-g-kalpana",
    "name": "Dr. Kalpana G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-kalpana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kalpana-scaled.jpg"
  },
  {
    "id": "fac-dr-b-kalpana",
    "name": "Dr. Kalpana Kosalram",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-kalpana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-B.-Kalpana.jpg"
  },
  {
    "id": "fac-dr-a-karthigeyan",
    "name": "Dr. Karthigeyan A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-karthigeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4701.jpg"
  },
  {
    "id": "fac-dr-karthik-lakshmanan",
    "name": "Dr. Karthik Lakshmanan",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthik-lakshmanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-10.05.15.jpeg"
  },
  {
    "id": "fac-dr-a-k-kavitha",
    "name": "Dr. Kavitha A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-k-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/5-1-scaled.jpg"
  },
  {
    "id": "fac-dr-s-kavitha",
    "name": "Dr. Kavitha S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kavitha.jpg"
  },
  {
    "id": "fac-professor-d-kingsly-jeba-singh-ph-d",
    "name": "Dr. Kingsly Jeba Singh D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/professor-d-kingsly-jeba-singh-ph-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DKJS-PP-75-kb-compressed-for-Biometric.jpg"
  },
  {
    "id": "fac-dr-m-krishnamohan",
    "name": "Dr. Krishnamohan M",
    "designation": "Professor and Associate Director (Admissions)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-krishnamohan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/DSC_2369-scaled.jpg"
  },
  {
    "id": "fac-dr-n-krishnaraj",
    "name": "Dr. Krishnaraj N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-krishnaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3751.jpg"
  },
  {
    "id": "fac-dr-r-kumar",
    "name": "Dr. Kumar R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-18.jpg"
  },
  {
    "id": "fac-dr-v-kumaran",
    "name": "Dr. Kumaran V",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-kumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3926.jpg"
  },
  {
    "id": "fac-dr-t-lakshmanan",
    "name": "Dr. Lakshmanan T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-lakshmanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DSC_8981-scaled.jpg"
  },
  {
    "id": "fac-prof-k-s-lakshmi",
    "name": "Dr. Lakshmi K S",
    "designation": "Professor and Director (Admissions)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-k-s-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/02/Dr-K-S-Lakshmi.jpg"
  },
  {
    "id": "fac-dr-lilly-m-saleena",
    "name": "Dr. Lilly M Saleena",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lilly-m-saleena/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0042_DSC_9264.jpg"
  },
  {
    "id": "fac-dr-p-madhavan",
    "name": "Dr. Madhavan P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-madhavan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Madhavan.jpg"
  },
  {
    "id": "fac-dr-p-malar",
    "name": "Dr. Malar P",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-malar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4748.jpg"
  },
  {
    "id": "fac-prof-d-malarvizhi",
    "name": "Dr. Malarvizhi D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-d-malarvizhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.17-AM.jpeg"
  },
  {
    "id": "fac-dr-s-malarvizhi",
    "name": "Dr. Malarvizhi S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-malarvizhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-3.jpg"
  },
  {
    "id": "fac-d-malathi",
    "name": "Dr. Malathi D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-malathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Malathi.jpg"
  },
  {
    "id": "fac-dr-c-malathy",
    "name": "Dr. Malathy C",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-malathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4309.jpg"
  },
  {
    "id": "fac-mani-kumar-m",
    "name": "Dr. Mani Kumar M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mani-kumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-2.30.45-PM.jpeg"
  },
  {
    "id": "fac-t-manoranjitham",
    "name": "Dr. Manoranjitham T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-manoranjitham/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoranjtham.jpg"
  },
  {
    "id": "fac-dr-g-maragatham",
    "name": "Dr. Maragatham G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-maragatham/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Emanager-_Maragatham_photo_final-Photo.jpg"
  },
  {
    "id": "fac-dr-r-i-minu",
    "name": "Dr. Minu R I",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-i-minu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Minu_website-e1744198352383.jpeg"
  },
  {
    "id": "fac-dr-u-mohammed-iqbal",
    "name": "Dr. Mohammed Iqbal U",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-mohammed-iqbal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-4.jpg"
  },
  {
    "id": "fac-prof-m-mothilal",
    "name": "Dr. Mothilal M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-m-mothilal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-Mothilal-M-1.jpg"
  },
  {
    "id": "fac-m-b-mukeshkrishnan",
    "name": "Dr. Mukesh Krishnan M B",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-b-mukeshkrishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3768.jpg"
  },
  {
    "id": "fac-dr-g-murali",
    "name": "Dr. Murali G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-murali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Murali.png"
  },
  {
    "id": "fac-dr-m-murali",
    "name": "Dr. Murali M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-murali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-M.jpg"
  },
  {
    "id": "fac-dr-a-murugan",
    "name": "Dr. Murugan A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-murugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr-murugan-a.jpg"
  },
  {
    "id": "fac-dr-b-muruganantham",
    "name": "Dr. Muruganantham B",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-muruganantham/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/BM.jpg"
  },
  {
    "id": "fac-dr-p-muthulakshmi",
    "name": "Dr. Muthulakshmi.P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-muthulakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/SMTPM.jpg"
  },
  {
    "id": "fac-dr-tyj-naga-malleswari",
    "name": "Dr. Naga Malleswari T Y J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tyj-naga-malleswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4222.jpg"
  },
  {
    "id": "fac-dr-p-nandakumar",
    "name": "Dr. Nandakumar P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-nandakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-29.jpg"
  },
  {
    "id": "fac-dr-k-a-narayana",
    "name": "Dr. Narayana K A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-a-narayana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Narayanan.jpg"
  },
  {
    "id": "fac-dr-m-navaneethan",
    "name": "Dr. Navaneethan M",
    "designation": "Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-navaneethan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1711524563398.png"
  },
  {
    "id": "fac-dr-r-a-nazeer",
    "name": "Dr. Nazeer R. A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-a-nazeer/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Nazeer-R-A.jpg"
  },
  {
    "id": "fac-dr-r-pachaiappan",
    "name": "Dr. Pachaiappan Raman",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-pachaiappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0094_DSC_9207.jpg"
  },
  {
    "id": "fac-dr-a-pandian",
    "name": "Dr. Pandian A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-pandian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandian.jpg"
  },
  {
    "id": "fac-dr-n-pannirselvam-2",
    "name": "Dr. Pannirselvam N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-pannirselvam-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Pannirselvam-102540.jpg"
  },
  {
    "id": "fac-dr-t-parasuraman",
    "name": "Dr. Parasuraman T",
    "designation": "G.D Naidu Chair Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-parasuraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/parasuraman.png"
  },
  {
    "id": "fac-dr-parvathi-n",
    "name": "Dr. Parvathi N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-parvathi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5339.jpg"
  },
  {
    "id": "fac-dr-r-k-pongiannan",
    "name": "Dr. Pongiannan R K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-k-pongiannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pongiannan.jpg"
  },
  {
    "id": "fac-dr-prabhakar-subrahmanyam",
    "name": "Dr. Prabhakar Subrahmanyam",
    "designation": "Professor of Practice",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabhakar-subrahmanyam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Prabhakar-Subrahmanyam.png"
  },
  {
    "id": "fac-dr-s-prabhu",
    "name": "Dr. Prabhu S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-prabhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-15.jpg"
  },
  {
    "id": "fac-dr-c-pradeepa",
    "name": "Dr. Pradeepa C",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-pradeepa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-C.PRADEEPA.jpg"
  },
  {
    "id": "fac-dr-m-prakash",
    "name": "Dr. Prakash M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4302.jpg"
  },
  {
    "id": "fac-dr-m-prakash-3",
    "name": "Dr. Prakash M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-prakash-3/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-66.jpg"
  },
  {
    "id": "fac-dr-k-prasanna-2",
    "name": "Dr. Prasanna K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-prasanna-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-53.jpg"
  },
  {
    "id": "fac-dr-j-preetha-roselyn",
    "name": "Dr. Preetha Roselyn J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-preetha-roselyn/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/preetha1.jpg"
  },
  {
    "id": "fac-dr-s-preeti",
    "name": "Dr. Preeti S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-preeti/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-2-scaled.jpg"
  },
  {
    "id": "fac-dr-c-preferencial-kala",
    "name": "Dr. Preferencial Kala C",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-preferencial-kala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-2-2-e1714110462919.jpg"
  },
  {
    "id": "fac-dr-t-rajasekaran",
    "name": "Dr. Rajasekaran T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-rajasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-55.jpg"
  },
  {
    "id": "fac-dr-r-rajendran",
    "name": "Dr. Rajendran R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-rajendran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Dr.-R.-Rajendran-profile-pic.jpeg"
  },
  {
    "id": "fac-dr-m-p-rajesh",
    "name": "Dr. Rajesh M.P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-p-rajesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rajesh-M-P.jpg"
  },
  {
    "id": "fac-dr-d-rajeswari",
    "name": "Dr. Rajeswari D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-rajeswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-Rajeswari-D_DSBS.jpg"
  },
  {
    "id": "fac-dr-b-ramachandran",
    "name": "Dr. Ramachandran B",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-ramachandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100206-Dr.-B.-Ramachandran.jpg"
  },
  {
    "id": "fac-dr-s-ramamoorthy",
    "name": "Dr. Ramamoorthy S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-ramamoorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramamoorthy.jpg"
  },
  {
    "id": "fac-dr-k-ramani",
    "name": "Dr. Ramani K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-ramani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0019_DSC_9294.jpg"
  },
  {
    "id": "fac-dr-k-m-ramkumar",
    "name": "Dr. Ramkumar K. M.",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-m-ramkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Passport-Photo-1.jpg"
  },
  {
    "id": "fac-dr-m-ramya",
    "name": "Dr. Ramya M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ramya-prof.png"
  },
  {
    "id": "fac-dr-a-rathinam",
    "name": "Dr. Rathinam A",
    "designation": "Professor and Director (Alumni Affairs)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-rathinam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr-A-Rathinam-1.jpeg"
  },
  {
    "id": "fac-dr-p-t-ravichandran",
    "name": "Dr. Ravichandran P.T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-t-ravichandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SIR.png"
  },
  {
    "id": "fac-dr-saad-yunus-sait",
    "name": "Dr. Saad Yunus Sait",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saad-yunus-sait/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4456.jpg"
  },
  {
    "id": "fac-prof-s-sangeetha",
    "name": "Dr. Sangeetha S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-s-sangeetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-Sangeetha-S.jpg"
  },
  {
    "id": "fac-dr-d-sankari",
    "name": "Dr. Sankari D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-sankari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/16-3-1-scaled-e1677910122361.jpg"
  },
  {
    "id": "fac-dr-m-saravanan",
    "name": "Dr. Saravanan M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-8.jpg"
  },
  {
    "id": "fac-dr-s-venkataprasad-bhat",
    "name": "Dr. Sarpangala Venkataprasad Bhat",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-venkataprasad-bhat/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/svbhat-photo-2024.jpg"
  },
  {
    "id": "fac-e-sasikala",
    "name": "Dr. Sasikala E",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/e-sasikala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4250.jpg"
  },
  {
    "id": "fac-dr-r-sathyanathan-2",
    "name": "Dr. Sathyanathan R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-sathyanathan-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-30.jpg"
  },
  {
    "id": "fac-dr-satish-ramalingam",
    "name": "Dr. Satish Ramalingam",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-satish-ramalingam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0014_DSC_9299.jpg"
  },
  {
    "id": "fac-j-selvakumar",
    "name": "Dr. Selvakumar J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-selvakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100232-Dr.J.-Selvakumar.jpg"
  },
  {
    "id": "fac-dr-nagarajan-selvamurugan",
    "name": "Dr. Selvamurugan N",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nagarajan-selvamurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0048_DSC_9257.jpg"
  },
  {
    "id": "fac-dr-k-selvasundaram",
    "name": "Dr. Selvasundaram K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-selvasundaram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/salva-scaled-e1677910592663.jpg"
  },
  {
    "id": "fac-dr-j-selvin-paul-peter",
    "name": "Dr. Selvin Paul Peter J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-selvin-paul-peter/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvin.jpg"
  },
  {
    "id": "fac-t-senthil-kumar",
    "name": "Dr. Senthil Kumar T",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Kumar-T.jpg"
  },
  {
    "id": "fac-dr-r-senthil",
    "name": "Dr. Senthil R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-senthil/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-14.jpg"
  },
  {
    "id": "fac-dr-s-senthil-selvan-2",
    "name": "Dr. Senthil Selvan S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-senthil-selvan-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Dr.S.Senthil-Selvan.jpg"
  },
  {
    "id": "fac-dr-s-senthilkumar",
    "name": "Dr. Senthilkumar S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-senthilkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-SSK.jpg"
  },
  {
    "id": "fac-dr-r-senthilnathan",
    "name": "Dr. Senthilnathan R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-senthilnathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Senthilnathan_R.png"
  },
  {
    "id": "fac-dr-shakeela-sathish",
    "name": "Dr. Shakeela  Sathish",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shakeela-sathish/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Shakeela-Sathish.jpg"
  },
  {
    "id": "fac-dr-s-shanmugan",
    "name": "Dr. Shanmugan S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-shanmugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3976.jpg"
  },
  {
    "id": "fac-dr-shanthi-prince",
    "name": "Dr. Shanthi Prince",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shanthi-prince/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/100215-Dr.-Shanthi-Prince.jpg"
  },
  {
    "id": "fac-dr-r-shanthi-priya",
    "name": "Dr. Shanthi Priya R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-shanthi-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Faculty-Photos-srmist-10.jpg"
  },
  {
    "id": "fac-dr-k-shanthichitra",
    "name": "Dr. Shanthichitra K",
    "designation": "Professor (English) & Chairperson (Student Outreach and Experience)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-shanthichitra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/1-scaled.jpg"
  },
  {
    "id": "fac-dr-a-shanthini",
    "name": "Dr. Shanthini A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-shanthini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4266.jpg"
  },
  {
    "id": "fac-dr-shubhabrata-datta",
    "name": "Dr. Shubhabrata Datta",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shubhabrata-datta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-62.jpg"
  },
  {
    "id": "fac-dr-r-sivakumar-2",
    "name": "Dr. Sivakumar R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-sivakumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-45.jpg"
  },
  {
    "id": "fac-dr-sivathanu-pillai-a",
    "name": "Dr. Sivathanu Pillai A",
    "designation": "Chair Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivathanu-pillai-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/sivathanu.png"
  },
  {
    "id": "fac-dr-srimathi-h",
    "name": "Dr. Srimathi H",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srimathi-h/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/srim_passport.jpg"
  },
  {
    "id": "fac-dr-m-r-stalin-john",
    "name": "Dr. Stalin John M R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-r-stalin-john/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-41.jpg"
  },
  {
    "id": "fac-subalalitha-c-n",
    "name": "Dr. Subalalitha C N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/subalalitha-c-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subalalitha.jpg"
  },
  {
    "id": "fac-prof-subramanian-v",
    "name": "Dr. Subramanian V",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-subramanian-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG_0201.jpg"
  },
  {
    "id": "fac-dr-d-suchitra",
    "name": "Dr. Suchitra D",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-suchitra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/SRM-profile-pic.jpeg"
  },
  {
    "id": "fac-dr-a-suresh",
    "name": "Dr. Suresh A",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3762.jpg"
  },
  {
    "id": "fac-dr-m-thenmozhi",
    "name": "Dr. Thenmozhi M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-thenmozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4308.jpg"
  },
  {
    "id": "fac-dr-m-uma",
    "name": "Dr. Uma M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-uma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4339.jpg"
  },
  {
    "id": "fac-dr-m-umadevi",
    "name": "Dr. Umadevi M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-umadevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Umadevi.jpg"
  },
  {
    "id": "fac-dr-n-umamaheswari",
    "name": "Dr. Umamaheswari N",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-umamaheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-100.jpg"
  },
  {
    "id": "fac-prof-m-s-umashankar",
    "name": "Dr. Umashankar M S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-m-s-umashankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/10-1.jpg"
  },
  {
    "id": "fac-dr-g-usha",
    "name": "Dr. Usha G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-usha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Usha.jpg"
  },
  {
    "id": "fac-prof-k-vadivelan",
    "name": "Dr. Vadivelan K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-k-vadivelan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-2.29.35-PM-1.jpeg"
  },
  {
    "id": "fac-dr-g-vadivu",
    "name": "Dr. Vadivu G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-vadivu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4242.jpg"
  },
  {
    "id": "fac-dr-varshini-karthik",
    "name": "Dr. Varshini Karthik",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-varshini-karthik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Varshini-Pic-2026.jpg"
  },
  {
    "id": "fac-dr-k-venkatesh",
    "name": "Dr. Venkatesh K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-venkatesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3755.jpg"
  },
  {
    "id": "fac-dr-vidhyacharan-bhaskar",
    "name": "Dr. Vidhyacharan Bhaskar",
    "designation": "Adjunct Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vidhyacharan-bhaskar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr_vidhyacharan_bhaskar.jpg"
  },
  {
    "id": "fac-dr-k-vijaya",
    "name": "Dr. Vijaya K",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-vijaya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijaya-K.jpg"
  },
  {
    "id": "fac-dr-vijayakumar-p",
    "name": "Dr. Vijayakumar P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayakumar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/faculty-photos-srmist-25.jpg"
  },
  {
    "id": "fac-p-vijayakumar",
    "name": "Dr. Vijayakumar P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-vijayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100271-Dr.-P.-Vijayakumar.jpg"
  },
  {
    "id": "fac-dr-a-vimala-juliet",
    "name": "Dr. Vimala Juliet A",
    "designation": "Professor, MEMS & Microsystems",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-vimala-juliet/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.VJ-mam.jpg"
  },
  {
    "id": "fac-dr-c-n-s-vinoth-kumar",
    "name": "Dr. Vinoth Kumar C N S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-n-s-vinoth-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/004a3f4a-72ff-4b17-8bc3-0dc8dde3efb6-1.jpg"
  },
  {
    "id": "fac-dr-v-vinoth-kumar",
    "name": "Dr. Vinoth Kumar V",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-vinoth-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0013_DSC_9300.jpg"
  },
  {
    "id": "fac-mr-j-ayyappan",
    "name": "Mr. Ayyappan J",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-ayyappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-45.jpg"
  },
  {
    "id": "fac-prof-p-kamalanathan",
    "name": "Mr. Kamalanathan P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-p-kamalanathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-59.jpg"
  },
  {
    "id": "fac-ct-lakshmanan",
    "name": "Mr. Lakshmanan CT",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ct-lakshmanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Lakshmanan.jpg"
  },
  {
    "id": "fac-prof-m-saravana-hari-ganesh",
    "name": "Mr. Saravana Hari Ganesh M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-m-saravana-hari-ganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-14.jpg"
  },
  {
    "id": "fac-dr-t-maiyalagan",
    "name": "Prof T. Maiyalagan",
    "designation": "Research  Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-maiyalagan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3997.jpg"
  },
  {
    "id": "fac-prof-p-sree-sudha",
    "name": "Prof.  (Dr. ) P. Sree Sudha",
    "designation": "Professor of Law",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-p-sree-sudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-14-at-10.18.31.jpeg"
  },
  {
    "id": "fac-g-augustine-maniraj-pandian",
    "name": "Prof. Augustine Maniraj Pandian G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-augustine-maniraj-pandian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Augustine_Photo-Cream.jpeg"
  },
  {
    "id": "fac-dr-rajanandh-m-g",
    "name": "Prof. Dr. Rajanandh M G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajanandh-m-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/ChatGPT-Image-Sep-22-2026-09_26_36-AM-1.png"
  },
  {
    "id": "fac-dr-k-k-r-datta",
    "name": "Prof. K. K. R. Datta",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-k-r-datta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3972-1.jpg"
  },
  {
    "id": "fac-prof-nedunchezhiyan-vp",
    "name": "Prof. Nedunchezhiyan VP",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-nedunchezhiyan-vp/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PP-Photo-1-2-scaled.jpg"
  },
  {
    "id": "fac-ms-annamma-samuel",
    "name": "Prof.(Dr.) Annamma Samuel",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-annamma-samuel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Annamma-Samuel-Profile-picture-1.jpg"
  },
  {
    "id": "fac-dr-anuradh-saibaba",
    "name": "Prof.(Dr.) Anuradha Saibaba",
    "designation": "Professor of Law",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anuradh-saibaba/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Copilot_20260729_184216.png"
  },
  {
    "id": "fac-dr-m-s-abirami",
    "name": "Dr.  Abirami M. S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-s-abirami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4393_M.S.Abirami.jpg"
  },
  {
    "id": "fac-mrs-aarthi-e",
    "name": "Dr. Aarthi. E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-aarthi-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/A-29823.jpg"
  },
  {
    "id": "fac-dr-abhay-a-sagade",
    "name": "Dr. Abhay A. Sagade",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhay-a-sagade/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/ABHAY-ABHIMANYU-SAGADE.jpg"
  },
  {
    "id": "fac-g-abirami-2",
    "name": "Dr. Abirami G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-abirami-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Abirami.jpg"
  },
  {
    "id": "fac-dr-n-abirami",
    "name": "Dr. Abirami N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-abirami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3982.jpg"
  },
  {
    "id": "fac-dr-r-ajay-rakkesh",
    "name": "Dr. Ajay Rakkesh R",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-ajay-rakkesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/New-Photo_Ajay_edited.jpg"
  },
  {
    "id": "fac-p-akilandeswari",
    "name": "Dr. Akilandeswari P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-akilandeswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Akila.jpg"
  },
  {
    "id": "fac-dr-m-alagesan",
    "name": "Dr. Alagesan M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-alagesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1412-transformed.png"
  },
  {
    "id": "fac-dr-k-alice",
    "name": "Dr. Alice K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-alice/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Alice.jpg"
  },
  {
    "id": "fac-dr-r-ambigai",
    "name": "Dr. Ambigai R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-ambigai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-60.jpg"
  },
  {
    "id": "fac-dr-s-amudha",
    "name": "Dr. Amudha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-amudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4395.jpg"
  },
  {
    "id": "fac-dr-c-amuthadevi",
    "name": "Dr. Amuthadevi C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-amuthadevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4328-2.jpg"
  },
  {
    "id": "fac-dr-l-anand",
    "name": "Dr. Anand L",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-anand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3815.jpg"
  },
  {
    "id": "fac-dr-m-anand",
    "name": "Dr. Anand M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-anand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3752.jpg"
  },
  {
    "id": "fac-dr-s-anandha-kumar",
    "name": "Dr. Anandhakumar Sundaramurthy",
    "designation": "Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-anandha-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr.-Anandhakumar-Sundaramurthy-2.jpg"
  },
  {
    "id": "fac-dr-k-anbalagan",
    "name": "Dr. Anbalagan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-anbalagan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Anbalagan-K.jpg"
  },
  {
    "id": "fac-mrs-m-anbu-priya",
    "name": "Dr. Anbu Priya M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-anbu-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240824-WA0002-new.jpg"
  },
  {
    "id": "fac-dr-s-anbumozhi-angayarkanni",
    "name": "Dr. Anbumozhi Angayarkanni S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-anbumozhi-angayarkanni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4752.jpg"
  },
  {
    "id": "fac-dr-s-a-angayarkanni",
    "name": "Dr. Angayarkanni S A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-a-angayarkanni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-3.jpg"
  },
  {
    "id": "fac-dr-angayarkanni-v",
    "name": "Dr. Angayarkanni V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-angayarkanni-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Angayarkanni.jpg"
  },
  {
    "id": "fac-dr-n-angeline-little-flower",
    "name": "Dr. Angeline Little Flower N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-angeline-little-flower/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4686.jpg"
  },
  {
    "id": "fac-dr-anitha-k",
    "name": "Dr. Anitha K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anitha-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anitha.jpg"
  },
  {
    "id": "fac-dr-k-anitha",
    "name": "Dr. Anitha Kumari S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-anitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr__S__Anitha_Kumari.png"
  },
  {
    "id": "fac-dr-r-anto-arockia-rosaline",
    "name": "Dr. Anto Arockia Rosaline R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-anto-arockia-rosaline/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/RAAR_Updated.jpg"
  },
  {
    "id": "fac-dr-a-anuradha",
    "name": "Dr. Anuradha A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-anuradha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5362.jpg"
  },
  {
    "id": "fac-dr-aparna-s-bhaskar-2",
    "name": "Dr. Aparna S. Bhaskar",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aparna-s-bhaskar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-76.jpg"
  },
  {
    "id": "fac-s-m-aravindh-kumar",
    "name": "Dr. Aravindh Kumar S M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-m-aravindh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-SMA.jpg"
  },
  {
    "id": "fac-dr-archana-k-s",
    "name": "Dr. Archana K S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-archana-k-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4285.jpg"
  },
  {
    "id": "fac-dr-arijit-sen",
    "name": "Dr. Arijit Sen",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arijit-sen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/AS.jpeg"
  },
  {
    "id": "fac-dr-n-arivazhagan",
    "name": "Dr. Arivazhagan N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-arivazhagan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-3.23.44-PM.jpeg"
  },
  {
    "id": "fac-dr-r-arivazhagan",
    "name": "Dr. Arivazhagan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-arivazhagan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0032_DSC_9378.jpg"
  },
  {
    "id": "fac-mr-a-arokiaraj-jovith",
    "name": "Dr. Arokiaraj Jovith A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-a-arokiaraj-jovith/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/jovith.png"
  },
  {
    "id": "fac-dr-b-arthi",
    "name": "Dr. Arthi B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-arthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arthi.jpg"
  },
  {
    "id": "fac-dr-k-arthi",
    "name": "Dr. Arthi K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-arthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4316.jpg"
  },
  {
    "id": "fac-dr-g-arul-joseph",
    "name": "Dr. Arul Joseph G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-arul-joseph/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5342.jpg"
  },
  {
    "id": "fac-dr-k-n-aruljothi",
    "name": "Dr. ArulJothi K.N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-n-aruljothi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Arul-profile-for-book-CBB-1.png"
  },
  {
    "id": "fac-dr-r-arulmozhi",
    "name": "Dr. Arulmozhi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-arulmozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3991.jpg"
  },
  {
    "id": "fac-dr-r-arulprakasam",
    "name": "Dr. Arulprakasam R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-arulprakasam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5244.jpg"
  },
  {
    "id": "fac-dr-arun-a",
    "name": "Dr. Arun A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arun-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4227.jpg"
  },
  {
    "id": "fac-dr-s-arunkumar",
    "name": "Dr. Arun Kumar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-arunkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0027_DSC_9383.jpg"
  },
  {
    "id": "fac-dr-m-arun-noyal-doss",
    "name": "Dr. Arun Noyal Doss M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-arun-noyal-doss/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/WhatsApp-Image-2025-07-31-at-14.12.57.jpeg"
  },
  {
    "id": "fac-dr-m-aruna",
    "name": "Dr. Aruna M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-aruna/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aruna.jpg"
  },
  {
    "id": "fac-aruna-s",
    "name": "Dr. Aruna S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/aruna-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4495-2.jpg"
  },
  {
    "id": "fac-dr-n-arunachalam",
    "name": "Dr. Arunachalam N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-arunachalam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arunachalam.jpg"
  },
  {
    "id": "fac-dr-d-ashok-kumar",
    "name": "Dr. Ashok Kumar D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-ashok-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0066_DSC_9237.jpg"
  },
  {
    "id": "fac-dr-aswathy-k-cherian",
    "name": "Dr. Aswathy K Cherian",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aswathy-k-cherian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aswathy.jpg"
  },
  {
    "id": "fac-dr-athira-m-nambiar",
    "name": "Dr. Athira Nambiar",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-athira-m-nambiar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-9-1.jpg"
  },
  {
    "id": "fac-dr-s-athithan",
    "name": "Dr. Athithan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-athithan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5262.jpg"
  },
  {
    "id": "fac-dr-b-usha",
    "name": "Dr. B. Usha",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-usha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/USHA-BALASUNDARAM-PICTURE.png"
  },
  {
    "id": "fac-dr-babu-r",
    "name": "Dr. Babu R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-babu-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4422.jpg"
  },
  {
    "id": "fac-dr-s-babu",
    "name": "Dr. Babu S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-babu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Babu.jpg"
  },
  {
    "id": "fac-dr-baburaj-baskar",
    "name": "Dr. Baburaj Baskar",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-baburaj-baskar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3929.jpg"
  },
  {
    "id": "fac-g-bakiyaraj",
    "name": "Dr. Bakiyaraj Ganeshamoorthy",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-bakiyaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4690-1-3.jpg"
  },
  {
    "id": "fac-dr-g-balaji",
    "name": "Dr. Balaji G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-balaji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/BALAJI-726-e1783941192311.jpg"
  },
  {
    "id": "fac-dr-k-d-balaji",
    "name": "Dr. Balaji K.D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-d-balaji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0007_DSC_9411.jpg"
  },
  {
    "id": "fac-dr-balaji-n",
    "name": "Dr. Balaji N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balaji-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5249.jpg"
  },
  {
    "id": "fac-dr-p-balaji-srikaanth",
    "name": "Dr. Balaji Srikaanth P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-balaji-srikaanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-4.jpg"
  },
  {
    "id": "fac-mr-g-balamurugan",
    "name": "Dr. Balamurugan G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-balamurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Balamurugan.jpg"
  },
  {
    "id": "fac-mr-balamurugan-janakiraman",
    "name": "Dr. Balamurugan Janakiraman",
    "designation": "Professor Research",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-balamurugan-janakiraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Profile-pic-SRM-1.jpeg"
  },
  {
    "id": "fac-dr-p-balamurugan",
    "name": "Dr. Balamurugan P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-balamurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4326.jpg"
  },
  {
    "id": "fac-dr-bapuji-pullepu",
    "name": "Dr. Bapuji Pullepu",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bapuji-pullepu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-5.jpg"
  },
  {
    "id": "fac-dr-s-barathi",
    "name": "Dr. Barathi S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-barathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0033_DSC_9276.jpg"
  },
  {
    "id": "fac-dr-p-baskara-sethupathi",
    "name": "Dr. Baskara Sethupathi P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-baskara-sethupathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/PBS-photo.jpg"
  },
  {
    "id": "fac-dr-r-beaulah-jeyavathana",
    "name": "Dr. Beaulah Jeyavathana R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4338-3.jpg"
  },
  {
    "id": "fac-bharathi-p",
    "name": "Dr. Bharathi. P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/bharathi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-04-at-09.57.52-1-e1784872865469.jpeg"
  },
  {
    "id": "fac-dr-bibekananda-bira",
    "name": "Dr. Bibekananda Bira",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bibekananda-bira/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5340.jpg"
  },
  {
    "id": "fac-dr-c-s-boopathi",
    "name": "Dr. Boopathi C S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-s-boopathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/CSB-EEE-1.jpg"
  },
  {
    "id": "fac-dr-r-brindha",
    "name": "Dr. Brindha R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-brindha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R-E.jpg"
  },
  {
    "id": "fac-dr-a-celina",
    "name": "Dr. Celina A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-celina/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG20230308153529.jpg"
  },
  {
    "id": "fac-ceronmani-sharmila-v",
    "name": "Dr. Ceronmani Sharmila V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ceronmani-sharmila-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Sharmi-SRM.jpg"
  },
  {
    "id": "fac-dr-s-chandramohan",
    "name": "Dr. Chandramohan S",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-chandramohan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4714.jpg"
  },
  {
    "id": "fac-74244",
    "name": "Dr. Chinnasamy A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/74244/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4303.jpg"
  },
  {
    "id": "fac-dr-r-dayana",
    "name": "Dr. Dayana R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-dayana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100261-Dr.-R.-Dayana.jpg"
  },
  {
    "id": "fac-dr-debabrata-sarkar",
    "name": "Dr. Debabrata Sarkar",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debabrata-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4740.jpg"
  },
  {
    "id": "fac-k-deeba",
    "name": "Dr. Deeba K",
    "designation": "ASSOCIATE PROFESSOR",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-deeba/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeba.jpg"
  },
  {
    "id": "fac-dr-v-deeban-chakravarthy",
    "name": "Dr. Deeban Chakravarthy V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-deeban-chakravarthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeban.jpg"
  },
  {
    "id": "fac-dr-t-deepa",
    "name": "Dr. Deepa T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-deepa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-08-14-at-08.52.24-e1788753404458.jpeg"
  },
  {
    "id": "fac-dr-k-deepa-thilak",
    "name": "Dr. Deepa Thilak K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-deepa-thilak/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3808.jpg"
  },
  {
    "id": "fac-dr-deiva-preetha-c-a-s",
    "name": "Dr. Deiva Preetha C A S",
    "designation": "Associate Professor, Department of Computational Intelligence, Faculty of Engineering and Technology",
    "department": "Department of Computational Intelligence",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deiva-preetha-c-a-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Preetha-Picture.jpg"
  },
  {
    "id": "fac-dr-g-devanand-venkatasubbu",
    "name": "Dr. Devanand Venkatasubbu G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-devanand-venkatasubbu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Picture.jpg"
  },
  {
    "id": "fac-dr-s-devikala",
    "name": "Dr. Devikala S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-devikala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3979.jpg"
  },
  {
    "id": "fac-mr-dhanasekar-s",
    "name": "Dr. Dhanasekar Sevugamoorthy",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-dhanasekar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-42.jpg"
  },
  {
    "id": "fac-dr-divya-krishnan-k-2",
    "name": "Dr. Divya Krishnan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divya-krishnan-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-82.jpg"
  },
  {
    "id": "fac-dr-divya-navamani-j",
    "name": "Dr. Divya Navamani J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divya-navamani-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Photo_2025.jpg"
  },
  {
    "id": "fac-dr-diwakar-r-marur",
    "name": "Dr. Diwakar R. Marur",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-diwakar-r-marur/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7022.jpg"
  },
  {
    "id": "fac-dr-a-dominic-savio",
    "name": "Dr. Dominic Savio A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-dominic-savio/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1494-copy-2.jpg"
  },
  {
    "id": "fac-j-d-dorathi-jayaseeli",
    "name": "Dr. Dorathi Jayaseeli J D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-d-dorathi-jayaseeli/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dorathi.jpg"
  },
  {
    "id": "fac-dr-durgadevagi-shanmugavel-2",
    "name": "Dr. Durgadevagi Shanmugavel",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-durgadevagi-shanmugavel-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/dd-New-photo-1.jpg"
  },
  {
    "id": "fac-dr-g-elangovan",
    "name": "Dr. Elangovan G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-elangovan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4300.jpg"
  },
  {
    "id": "fac-m-eliazer",
    "name": "Dr. Eliazer M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-eliazer/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Eliazer.jpg"
  },
  {
    "id": "fac-dr-v-elizabeth-jesi",
    "name": "Dr. Elizabeth Jesi V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-elizabeth-jesi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Elizabeth-Jesi.jpg"
  },
  {
    "id": "fac-dr-eswaraiah-varrla",
    "name": "Dr. Eswaraiah Varrla",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-eswaraiah-varrla/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4737.jpg"
  },
  {
    "id": "fac-mrs-c-fancy",
    "name": "Dr. Fancy C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-c-fancy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-2.jpg"
  },
  {
    "id": "fac-dr-r-femi",
    "name": "Dr. Femi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-femi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Femi-1.jpg"
  },
  {
    "id": "fac-dr-s-fouziya-sulthana",
    "name": "Dr. Fouziya Sulthana S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-fouziya-sulthana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__S__Fouziya_Sulthana.png"
  },
  {
    "id": "fac-dr-s-ganesan",
    "name": "Dr. Ganesan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-ganesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/ganesan-1.jpg"
  },
  {
    "id": "fac-dr-m-ganesh-pandian",
    "name": "Dr. Ganesh Pandian M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-ganesh-pandian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4007.jpg"
  },
  {
    "id": "fac-dr-gangadevi-r",
    "name": "Dr. Gangadevi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gangadevi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Gangadevi_R.png"
  },
  {
    "id": "fac-m-gayathri",
    "name": "Dr. Gayathri M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-gayathri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gayathri.jpg"
  },
  {
    "id": "fac-mrs-v-m-gayathri",
    "name": "Dr. Gayathri V M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-v-m-gayathri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3787.jpg"
  },
  {
    "id": "fac-dr-a-geetha",
    "name": "Dr. Geetha A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-geetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/gee-photo-new-e1745234695853.jpg"
  },
  {
    "id": "fac-dr-a-geetha-2",
    "name": "Dr. Geetha A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-geetha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4761.jpg"
  },
  {
    "id": "fac-dr-s-geetha",
    "name": "Dr. Geetha S",
    "designation": "Associate Professor and Head(Section of Biochemistry and Crop Physiology)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-geetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/SRMCAS-Dr.S.Geetha-Photo-3-scaled.jpg"
  },
  {
    "id": "fac-geetha-veliah",
    "name": "Dr. Geetha Veliah",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/geetha-veliah/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ms.Geetha-Veliah.jpg"
  },
  {
    "id": "fac-dr-gnanaprakash-d",
    "name": "Dr. Gnanaprakash D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gnanaprakash-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/My-photo1.jpg"
  },
  {
    "id": "fac-dr-s-gnanavel",
    "name": "Dr. Gnanavel S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-gnanavel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0057_DSC_9248.jpg"
  },
  {
    "id": "fac-dr-s-gnanavel-2",
    "name": "Dr. Gnanavel S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-gnanavel-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gnanavel.jpg"
  },
  {
    "id": "fac-dr-s-godfrey-winster",
    "name": "Dr. Godfrey Winster S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-godfrey-winster/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Godfrey.jpg"
  },
  {
    "id": "fac-dr-p-godhandaraman",
    "name": "Dr. Godhandaraman P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-godhandaraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5335.jpg"
  },
  {
    "id": "fac-j-godwin-ponsam",
    "name": "Dr. Godwin Ponsam J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-godwin-ponsam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3820.jpg"
  },
  {
    "id": "fac-dr-gokulakrishnan-d",
    "name": "Dr. Gokulakrishnan D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gokulakrishnan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulakrishnan.jpg"
  },
  {
    "id": "fac-dr-gopal-chandru-senadi",
    "name": "Dr. Gopal Chandru Senadi",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gopal-chandru-senadi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3963.jpg"
  },
  {
    "id": "fac-dr-p-gopinath",
    "name": "Dr. Gopinath P",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-gopinath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3964.jpg"
  },
  {
    "id": "fac-dr-goutam-kumar-kole",
    "name": "Dr. Goutam Kumar Kole",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-goutam-kumar-kole/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3934.jpg"
  },
  {
    "id": "fac-dr-b-gunasekaran",
    "name": "Dr. Gunasekaran B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-gunasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-B.-Gunasekaran.jpg"
  },
  {
    "id": "fac-dr-p-gurumoorthi",
    "name": "Dr. Gurumoorthi P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-gurumoorthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-Gurumoorthy.jpg"
  },
  {
    "id": "fac-dr-gurusideswar-s",
    "name": "Dr. Gurusideswar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gurusideswar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Guru.jpg"
  },
  {
    "id": "fac-dr-b-hariharn",
    "name": "Dr. Hariharan B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-hariharn/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4331.jpg"
  },
  {
    "id": "fac-dr-r-m-hariharan",
    "name": "Dr. Hariharan R M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-m-hariharan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/RM-Hariharan-copy-1-2-e1773924781897.jpg"
  },
  {
    "id": "fac-dr-s-harish",
    "name": "Dr. Harish S",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-harish/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr.-S.-Harish.png"
  },
  {
    "id": "fac-dr-n-harshavardhana",
    "name": "Dr. Harshavardhana N.",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-harshavardhana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Mech-Photos-901.jpg"
  },
  {
    "id": "fac-ms-a-helen-victoria",
    "name": "Dr. Helen Victoria A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-helen-victoria/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3783.jpg"
  },
  {
    "id": "fac-dr-v-hemamalini",
    "name": "Dr. Hemamalini V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-hemamalini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/faculty-photos-srmist-16.jpg"
  },
  {
    "id": "fac-dr-d-hemavathi",
    "name": "Dr. Hemavathi D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-hemavathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-03-at-9.13.45-AM.jpeg"
  },
  {
    "id": "fac-dr-s-horizan-prasanna-kumar",
    "name": "Dr. Horizan Prasanna Kumar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-horizan-prasanna-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1380-transformed.png"
  },
  {
    "id": "fac-dr-i-infanta-mary-priya",
    "name": "Dr. Infanta Mary Priya I",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-i-infanta-mary-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-52.jpg"
  },
  {
    "id": "fac-s-iniyan",
    "name": "Dr. Iniyan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-iniyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Iniyan.jpg"
  },
  {
    "id": "fac-dr-s-iyappan",
    "name": "Dr. Iyappan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-iyappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0023_DSC_9288.jpg"
  },
  {
    "id": "fac-dr-r-jai-ganesh",
    "name": "Dr. Jai Ganesh R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-jai-ganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0068_DSC_9235.jpg"
  },
  {
    "id": "fac-b-jaiganesh",
    "name": "Dr. Jaiganesh B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-jaiganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/5-scaled.jpg"
  },
  {
    "id": "fac-jaivardhan-sinha",
    "name": "Dr. Jaivardhan Sinha",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/jaivardhan-sinha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Jaivardhan-Sinha_Photo.jpg"
  },
  {
    "id": "fac-dr-k-jananisivasankar",
    "name": "Dr. Janani Sivasankar K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-jananisivasankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4790.jpg"
  },
  {
    "id": "fac-dr-janmejaya-samal",
    "name": "Dr. Janmejaya Samal",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-janmejaya-samal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/160236092_3309846649115029_4725233306698480247_n-1-e1712569674114.jpg"
  },
  {
    "id": "fac-k-r-jansi",
    "name": "Dr. Jansi K R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-r-jansi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jansi.jpg"
  },
  {
    "id": "fac-dr-jayabrata-das",
    "name": "Dr. Jayabrata Das",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jayabrata-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Das-Passport.jpg"
  },
  {
    "id": "fac-dr-t-jayanthi",
    "name": "Dr. Jayanthi T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-jayanthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile-photo-website.jpg"
  },
  {
    "id": "fac-j-jayapradha",
    "name": "Dr. Jayapradha J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-jayapradha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jayapradha.jpg"
  },
  {
    "id": "fac-dr-j-jayapragash",
    "name": "Dr. Jayapragash J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-jayapragash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7329-scaled.jpg"
  },
  {
    "id": "fac-dr-r-jayaraj",
    "name": "Dr. Jayaraj R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-jayaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4313.jpg"
  },
  {
    "id": "fac-dr-j-jeba-sonia",
    "name": "Dr. Jeba Sonia J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-jeba-sonia/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.Jeba-Sonia.jpg"
  },
  {
    "id": "fac-dr-jebakumar-r",
    "name": "Dr. Jebakumar R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jebakumar-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jebakumar.jpg"
  },
  {
    "id": "fac-dr-n-c-jesus-rajkumar",
    "name": "Dr. Jesus Rajkumar N C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-c-jesus-rajkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_20230223_091405.jpg"
  },
  {
    "id": "fac-r-jeya",
    "name": "Dr. Jeya R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-jeya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jeya.jpg"
  },
  {
    "id": "fac-dr-p-v-jeyakarthikeyan",
    "name": "Dr. Jeyakarthikeyan.P.V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-v-jeyakarthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-35.jpg"
  },
  {
    "id": "fac-dr-y-jeyashree",
    "name": "Dr. Jeyashree Y",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-y-jeyashree/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Faculty-Photos-srmist-29.jpg"
  },
  {
    "id": "fac-dr-a-john-bosco",
    "name": "Dr. John Bosco A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-john-bosco/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-A.-John-Bosco.jpg"
  },
  {
    "id": "fac-b-jothi",
    "name": "Dr. Jothi B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-jothi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/18.jpg"
  },
  {
    "id": "fac-dr-k-n-rajnish",
    "name": "Dr. K. N. Rajnish",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-n-rajnish/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0022_DSC_9289.jpg"
  },
  {
    "id": "fac-dr-kalaiarasi-n",
    "name": "Dr. Kalaiarasi N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kalaiarasi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Kalaiarasi-N-2-1.jpg"
  },
  {
    "id": "fac-dr-k-kalaiselvi",
    "name": "Dr. Kalaiselvi K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-kalaiselvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3807.jpg"
  },
  {
    "id": "fac-dr-j-kalaivani",
    "name": "Dr. Kalaivani J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-kalaivani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kalaivani.jpg"
  },
  {
    "id": "fac-dr-r-kalaivizhi",
    "name": "Dr. Kalaivizhi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-kalaivizhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3978.jpg"
  },
  {
    "id": "fac-dr-k-kalimuthu",
    "name": "Dr. Kalimuthu K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-kalimuthu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.%20K.%20Kalimuthu.jpg"
  },
  {
    "id": "fac-dr-a-v-kalpana",
    "name": "Dr. Kalpana A V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-v-kalpana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4273.jpg"
  },
  {
    "id": "fac-dr-k-kamala-bharathi",
    "name": "Dr. Kamala Bharathi K",
    "designation": "Professor - Research",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-kamala-bharathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4712.jpg"
  },
  {
    "id": "fac-dr-m-kanchana",
    "name": "Dr. Kanchana M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-kanchana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanchana.jpg"
  },
  {
    "id": "fac-dr-s-kanchana",
    "name": "Dr. Kanchana S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-kanchana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Kachana-Maam.jpg"
  },
  {
    "id": "fac-dr-b-kanisha",
    "name": "Dr. Kanisha B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-kanisha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanisha.jpg"
  },
  {
    "id": "fac-dr-p-kanmani",
    "name": "Dr. Kanmani P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-kanmani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4241.jpg"
  },
  {
    "id": "fac-s-karthik",
    "name": "Dr. Karthick S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-karthik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4415-1.jpg"
  },
  {
    "id": "fac-dr-t-karthick",
    "name": "Dr. Karthick T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-karthick/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4306.jpg"
  },
  {
    "id": "fac-dr-p-c-karthik-2",
    "name": "Dr. Karthik P C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-c-karthik-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4245.jpg"
  },
  {
    "id": "fac-dr-d-karthikeyan",
    "name": "Dr. Karthikeyan D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20211216-WA0009-1.jpg"
  },
  {
    "id": "fac-m-karthikeyan",
    "name": "Dr. Karthikeyan M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan.jpg"
  },
  {
    "id": "fac-dr-s-karuppasamy-2",
    "name": "Dr. Karuppasamy S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-karuppasamy-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-110.jpg"
  },
  {
    "id": "fac-dr-s-karuppudaiyan",
    "name": "Dr. Karuppudaiyan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-karuppudaiyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Web2_Photo-1.jpg"
  },
  {
    "id": "fac-dr-g-kasiraman",
    "name": "Dr. Kasiraman G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-kasiraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-26.jpg"
  },
  {
    "id": "fac-dr-v-kathirvel",
    "name": "Dr. Kathirvel V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-kathirvel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Kathirvel-1.png"
  },
  {
    "id": "fac-dr-l-kavisankar",
    "name": "Dr. Kavisankar L",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-kavisankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/kavisankar.jpg"
  },
  {
    "id": "fac-dr-j-kavitha",
    "name": "Dr. Kavitha J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/kavitha-photo.jpg"
  },
  {
    "id": "fac-dr-r-kavitha",
    "name": "Dr. Kavitha R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/19.jpg"
  },
  {
    "id": "fac-dr-r-kayalvizhi",
    "name": "Dr. Kayalvizhi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-kayalvizhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4223.jpg"
  },
  {
    "id": "fac-s-kiruthika",
    "name": "Dr. Kiruthika S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-kiruthika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/SK_Photo-1.png"
  },
  {
    "id": "fac-dr-k-s-kokilambigai",
    "name": "Dr. Kokilambigai K S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-s-kokilambigai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Staff-profile-Photo.jpg"
  },
  {
    "id": "fac-dr-koustav-sarkar",
    "name": "Dr. Koustav Sarkar",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-koustav-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0097_DSC_9204.jpg"
  },
  {
    "id": "fac-dr-l-krishnaraj-2",
    "name": "Dr. Krishnaraj L",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-krishnaraj-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/LKR-photo-1-1.jpg"
  },
  {
    "id": "fac-dr-krishnaveni-s",
    "name": "Dr. Krishnaveni S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krishnaveni-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/20.jpg"
  },
  {
    "id": "fac-dr-s-krithiga",
    "name": "Dr. Krithiga  S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-krithiga/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100867-Dr.-S.-Krithiga.jpg"
  },
  {
    "id": "fac-dr-kshitij-naikade",
    "name": "Dr. Kshitij Naikade",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kshitij-naikade/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/ANE_0357-2.jpg"
  },
  {
    "id": "fac-dr-r-kumaravel",
    "name": "Dr. Kumaravel R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-kumaravel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7303.jpg"
  },
  {
    "id": "fac-dr-r-lakshminarayanan",
    "name": "Dr. Lakshminarayanan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-lakshminarayanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4226.jpg"
  },
  {
    "id": "fac-dr-latha-r",
    "name": "Dr. Latha R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-latha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Untitled-3.jpg"
  },
  {
    "id": "fac-dr-s-latha",
    "name": "Dr. Latha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-latha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101503-Dr.S.-Latha.jpg"
  },
  {
    "id": "fac-dr-lavanya-a",
    "name": "Dr. Lavanya A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lavanya-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/A.Lavanya.jpeg"
  },
  {
    "id": "fac-dr-m-kamaraj",
    "name": "Dr. M. Kamaraj",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-kamaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_9031-scaled.jpg"
  },
  {
    "id": "fac-dr-g-maduraiveeran",
    "name": "Dr. Maduraiveeran G",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-maduraiveeran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3931-1.jpg"
  },
  {
    "id": "fac-dr-v-magesh-2",
    "name": "Dr. Magesh V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-magesh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Magesh.jpg"
  },
  {
    "id": "fac-dr-s-mahadevan",
    "name": "Dr. Mahadevan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-mahadevan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Mahadevan-S.png"
  },
  {
    "id": "fac-dr-r-mahendran-2",
    "name": "Dr. Mahendran R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-mahendran-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/mahendran-photo.jpg"
  },
  {
    "id": "fac-dr-mahesh-m",
    "name": "Dr. Mahesh M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mahesh-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/erfet.jpg"
  },
  {
    "id": "fac-dr-a-maheshwari",
    "name": "Dr. Maheshwari A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-maheshwari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-7.jpg"
  },
  {
    "id": "fac-dr-r-maheswaran",
    "name": "Dr. Maheswaran Rathinam",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-maheswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4768.jpg"
  },
  {
    "id": "fac-m-maheswari",
    "name": "Dr. Maheswari M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-maheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Maheswari-Profile-photo.jpg"
  },
  {
    "id": "fac-dr-k-mani-rahulan",
    "name": "Dr. Mani Rahulan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-mani-rahulan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/1-3.jpg"
  },
  {
    "id": "fac-dr-n-manikandan",
    "name": "Dr. Manikandan N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-manikandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4244.jpg"
  },
  {
    "id": "fac-dr-manikandaprabhu-alias-saravanan-s-2",
    "name": "Dr. Manikandaprabhu Alias Saravanan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikandaprabhu-alias-saravanan-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-10.jpg"
  },
  {
    "id": "fac-dr-j-manjula",
    "name": "Dr. Manjula J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-manjula/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100227-Dr.-J.-Manjula.jpg"
  },
  {
    "id": "fac-manoj-kumar-n",
    "name": "Dr. Manoj Kumar N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/manoj-kumar-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Manoj-Kumar-N.jpg"
  },
  {
    "id": "fac-dr-a-maria-jossy",
    "name": "Dr. Maria Jossy A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-maria-jossy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100238-Dr.A.-Maria-Jossy.jpg"
  },
  {
    "id": "fac-dr-mary-subaja-christo",
    "name": "Dr. Mary Subaja Christo",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mary-subaja-christo/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4216.jpg"
  },
  {
    "id": "fac-dr-v-mathan-raj",
    "name": "Dr. Mathanraj V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-mathan-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-68.jpg"
  },
  {
    "id": "fac-dr-md-shwahidul-islam",
    "name": "Dr. Md. Shwahidul Islam",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-md-shwahidul-islam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230222-WA0010.jpg"
  },
  {
    "id": "fac-dr-j-megala",
    "name": "Dr. Megala J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-megala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0036_DSC_9272.jpg"
  },
  {
    "id": "fac-dr-melvin-m-j",
    "name": "Dr. Melvin Joe. M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-melvin-m-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Melvin-Joe.png"
  },
  {
    "id": "fac-dr-s-metilda-florence",
    "name": "Dr. Metilda Florence S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-metilda-florence/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3818.jpg"
  },
  {
    "id": "fac-micheal-raj-j",
    "name": "Dr. Michael Raj J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/micheal-raj-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-Micheal-Raj-J-3.png"
  },
  {
    "id": "fac-dr-minnal-carolin-a",
    "name": "Dr. Minnal Carolin A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-minnal-carolin-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-14.jpg"
  },
  {
    "id": "fac-dr-r-mohamed-arif",
    "name": "Dr. Mohamed Arif R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-mohamed-arif/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/ARIF2.jpeg"
  },
  {
    "id": "fac-dr-m-mohamed-rabik",
    "name": "Dr. Mohamed Rabik M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-mohamed-rabik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_M_Mohamed_Rabik.png"
  },
  {
    "id": "fac-dr-mohan-kumar-d",
    "name": "Dr. Mohan Kumar D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohan-kumar-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/06/IMG_7486_a-1-scaled.jpg"
  },
  {
    "id": "fac-dr-mohanaselvi-s",
    "name": "Dr. Mohanaselvi S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohanaselvi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/S.Mohanaselvi.png"
  },
  {
    "id": "fac-dr-k-mohanraj",
    "name": "Dr. Mohanraj K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-mohanraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0570-scaled-e1691581506118-909x1024-1.jpg"
  },
  {
    "id": "fac-dr-p-murali-2",
    "name": "Dr. Murali P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-murali-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-P.jpg"
  },
  {
    "id": "fac-dr-murali-s",
    "name": "Dr. Murali S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-murali-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_8953-scaled.jpg"
  },
  {
    "id": "fac-dr-s-murugaanandam",
    "name": "Dr. Murugaanandam S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-murugaanandam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-33.jpg"
  },
  {
    "id": "fac-dr-r-murugesan",
    "name": "Dr. Murugesan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-murugesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-12.24.59.jpeg"
  },
  {
    "id": "fac-dr-p-muthamilselvi",
    "name": "Dr. Muthamilselvi P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-muthamilselvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Muthamilselvi-P.jpg"
  },
  {
    "id": "fac-dr-r-muthukumar",
    "name": "Dr. Muthukumar R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-muthukumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0003_DSC_9310.jpg"
  },
  {
    "id": "fac-dr-a-naga-rajesh",
    "name": "Dr. Naga Rajesh A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-naga-rajesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/NagaRajesh.jpg"
  },
  {
    "id": "fac-mrs-s-nagadevi",
    "name": "Dr. Nagadevi S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-nagadevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nagadevi.jpg"
  },
  {
    "id": "fac-dr-r-nagalakshmi-2",
    "name": "Dr. Nagalakshmi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-nagalakshmi-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0793-1-scaled.jpg"
  },
  {
    "id": "fac-dr-s-nagendra-prabhu",
    "name": "Dr. Nagendra Prabhu S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-nagendra-prabhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4457.jpg"
  },
  {
    "id": "fac-dr-s-nageswaran",
    "name": "Dr. Nageswaran S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-nageswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0070_DSC_9233.jpg"
  },
  {
    "id": "fac-dr-p-nancy",
    "name": "Dr. Nancy P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-nancy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nancy.jpg"
  },
  {
    "id": "fac-dr-nancy-prasanna-joseph",
    "name": "Dr. Nancy Prasanna Joseph",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nancy-prasanna-joseph/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Dr.-Nancy-Prasanna-Joseph.jpg",
    "empId": "102297"
  },
  {
    "id": "fac-e-nandakumar",
    "name": "Dr. Nandakumar E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/e-nandakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-38.jpg"
  },
  {
    "id": "fac-a-j-d-nanthakumar",
    "name": "Dr. Nanthakumar A.J.D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-j-d-nanthakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Nanthakumar-New.jpg"
  },
  {
    "id": "fac-dr-r-narayanamoorthi",
    "name": "Dr. Narayanamoorthi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-narayanamoorthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0678-3-1-1-scaled.jpg"
  },
  {
    "id": "fac-ms-narayani-a-r",
    "name": "Dr. Narayani A.R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-narayani-a-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Dr.-Narayani-A.-R.jpeg"
  },
  {
    "id": "fac-dr-r-naresh",
    "name": "Dr. Naresh R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-naresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3758.jpg"
  },
  {
    "id": "fac-dr-b-natarajan",
    "name": "Dr. Natarajan Balasubramaniyan",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-natarajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3950.jpg"
  },
  {
    "id": "fac-dr-k-nimala",
    "name": "Dr. Nimala K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-nimala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4235.jpg"
  },
  {
    "id": "fac-dr-k-d-nisha",
    "name": "Dr. Nisha K D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-d-nisha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/KDN-FP-PHOTO.jpg"
  },
  {
    "id": "fac-dr-v-nithya",
    "name": "Dr. Nithya V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-nithya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Dr.-V.-Nithya-Profile-Photo-1.jpg"
  },
  {
    "id": "fac-dr-muthu-p",
    "name": "Dr. P. Muthu",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-muthu-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Muthu-Photo-Linkedin-March-26.png"
  },
  {
    "id": "fac-dr-r-padma-priya",
    "name": "Dr. Padma Priya R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-padma-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7325.jpg"
  },
  {
    "id": "fac-dr-g-padmapriya",
    "name": "Dr. Padmapriya G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-padmapriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmapriya.jpg"
  },
  {
    "id": "fac-dr-s-padmini",
    "name": "Dr. Padmini S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-padmini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmini.jpg"
  },
  {
    "id": "fac-dr-r-palanisamy",
    "name": "Dr. Palanisamy R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-palanisamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/RPS_photo.jpg"
  },
  {
    "id": "fac-dr-palash-sanphui",
    "name": "Dr. Palash Sanphui",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-palash-sanphui/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Palash-new-photo-1.jpg"
  },
  {
    "id": "fac-dr-panneerselvam-p",
    "name": "Dr. Panneerselvam Perumal",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-panneerselvam-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Panneerselvam.jpg"
  },
  {
    "id": "fac-dr-d-paradesi",
    "name": "Dr. Paradesi D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-paradesi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-DP-.jpg"
  },
  {
    "id": "fac-mr-n-parthasarathi",
    "name": "Dr. Parthasarathi N (Civil Engineering)",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-parthasarathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-39-2.jpg"
  },
  {
    "id": "fac-dr-paul-t-sheeba",
    "name": "Dr. Paul T Sheeba",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-paul-t-sheeba/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.Sheba_.jpg"
  },
  {
    "id": "fac-dr-g-p-pazhani",
    "name": "Dr. Pazhani G  P",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-p-pazhani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Pazhani.jpg"
  },
  {
    "id": "fac-dr-r-perumal",
    "name": "Dr. Perumal R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-perumal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5347.jpg"
  },
  {
    "id": "fac-dr-r-s-ponmagal",
    "name": "Dr. Ponmagal R S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-s-ponmagal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ponmgal.jpg"
  },
  {
    "id": "fac-dr-poonam",
    "name": "Dr. Poonam U",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-poonam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonam-U.png"
  },
  {
    "id": "fac-ms-a-poongodi",
    "name": "Dr. Poongodi A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-poongodi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1396-transformed.png"
  },
  {
    "id": "fac-s-poornima",
    "name": "Dr. Poornima S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-poornima/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poornima.jpg"
  },
  {
    "id": "fac-dr-s-prabakeran",
    "name": "Dr. Prabakeran S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-prabakeran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3773.jpg"
  },
  {
    "id": "fac-dr-c-prabhu",
    "name": "Dr. Prabhu C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-prabhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Faculty-profile-photo-A2.jpeg"
  },
  {
    "id": "fac-dr-a-prabhu-chakkaravarthy",
    "name": "Dr. Prabhu Chakkaravarthy A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-prabhu-chakkaravarthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3848.jpg"
  },
  {
    "id": "fac-dr-k-pradeep-mohan-kumar",
    "name": "Dr. Pradeep Mohankumar K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-pradeep-mohan-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pradeep-K.jpg"
  },
  {
    "id": "fac-dr-s-pradeep",
    "name": "Dr. Pradeep S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-pradeep/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/DSC_5220.jpg"
  },
  {
    "id": "fac-dr-pradeep-v",
    "name": "Dr. Pradeep V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pradeep-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/pradeep-v.jpg"
  },
  {
    "id": "fac-dr-d-prakash",
    "name": "Dr. Prakash D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-22.jpg"
  },
  {
    "id": "fac-dr-m-prakash-2",
    "name": "Dr. Prakash M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-prakash-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-M.-Prakash.jpg"
  },
  {
    "id": "fac-dr-t-prakash",
    "name": "Dr. Prakash T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Prakash-T.jpg"
  },
  {
    "id": "fac-dr-prasant-kumar-nayak",
    "name": "Dr. Prasant Kumar Nayak",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prasant-kumar-nayak/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prasant-kumar.jpg"
  },
  {
    "id": "fac-n-prasath",
    "name": "Dr. Prasath N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/n-prasath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3814.jpg"
  },
  {
    "id": "fac-dr-t-praveen-kumar",
    "name": "Dr. Praveen Kumar T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-praveen-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/1c6162a3-c548-4894-9fa3-bfacd339798f-1.png"
  },
  {
    "id": "fac-dr-v-praveena",
    "name": "Dr. Praveena V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-praveena/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-6.jpg"
  },
  {
    "id": "fac-dr-preetha-r",
    "name": "Dr. Preetha R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-preetha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/srmist-faculty-photos-17.jpg"
  },
  {
    "id": "fac-dr-premkumar-b",
    "name": "Dr. Premkumar B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-premkumar-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0052_DSC_9358.jpg"
  },
  {
    "id": "fac-dr-c-pretty-diana-cyril",
    "name": "Dr. Pretty Diana Cyril C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-pretty-diana-cyril/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/pretty.jpg"
  },
  {
    "id": "fac-dr-b-priya-esther",
    "name": "Dr. Priya Esther B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-priya-esther/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-04-at-10.40.58-AM.jpeg"
  },
  {
    "id": "fac-ms-s-priya",
    "name": "Dr. Priya S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Priya-Photo-1.jpeg"
  },
  {
    "id": "fac-dr-k-priyadarsini",
    "name": "Dr. Priyadarsini K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-priyadarsini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/srmist-faculty-26.jpg"
  },
  {
    "id": "fac-dr-priyadip-das",
    "name": "Dr. Priyadip Das",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-priyadip-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3927.jpg"
  },
  {
    "id": "fac-dr-p-purushothaman-2",
    "name": "Dr. Purushothaman P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-purushothaman-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-50.jpg"
  },
  {
    "id": "fac-dr-t-pushpa-malini",
    "name": "Dr. Pushpa Malini T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-pushpa-malini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3993.jpg"
  },
  {
    "id": "fac-dr-r-radhika",
    "name": "Dr. Radhika R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-radhika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3812.jpg"
  },
  {
    "id": "fac-dr-raj-anjanikumar-varma",
    "name": "Dr. Raj Anjanikumar Varma",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-raj-anjanikumar-varma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/raja-anjanikumar-varma.jpg"
  },
  {
    "id": "fac-dr-n-s-raja",
    "name": "Dr. Raja N. S.",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-s-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0025_DSC_9285.jpg"
  },
  {
    "id": "fac-dr-rajaboopathi-m",
    "name": "Dr. Rajaboopathi Mani",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajaboopathi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/DSC_4728-Not-Edited.jpg"
  },
  {
    "id": "fac-dr-t-rajalakshmi",
    "name": "Dr. Rajalakshmi T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-rajalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100748-Dr.T.-Rajalakshmi.jpg"
  },
  {
    "id": "fac-dr-v-rajaram",
    "name": "Dr. Rajaram V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-rajaram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3765.jpg"
  },
  {
    "id": "fac-dr-p-rajasekar",
    "name": "Dr. Rajasekar P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-rajasekar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/raja-website.png"
  },
  {
    "id": "fac-dr-rajesh-agarwal",
    "name": "Dr. Rajesh Agarwal",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajesh-agarwal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102436-Dr.-Rajesh-Agarwal.jpg"
  },
  {
    "id": "fac-dr-rajesh-r",
    "name": "Dr. Rajesh. R",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajesh-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/hod-8-scaled-e1677910739452.jpg"
  },
  {
    "id": "fac-dr-d-rajeshwari",
    "name": "Dr. Rajeshwari D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-rajeshwari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-Rajeshwari.jpg"
  },
  {
    "id": "fac-mr-r-ramasubramani",
    "name": "Dr. Ramasubramani R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-ramasubramani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-99.jpg"
  },
  {
    "id": "fac-dr-g-ramesh",
    "name": "Dr. Ramesh G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5256.jpg"
  },
  {
    "id": "fac-dr-v-ramesh",
    "name": "Dr. Ramesh V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4703.jpg"
  },
  {
    "id": "fac-dr-r-ramya",
    "name": "Dr. Ramya R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0583-scaled.jpg"
  },
  {
    "id": "fac-dr-s-ramya",
    "name": "Dr. Ramya S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/ramya-pic-scaled.jpg"
  },
  {
    "id": "fac-mr-ranjith-pillai-r",
    "name": "Dr. Ranjith Pillai R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ranjith-pillai-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr__Ranjith.png"
  },
  {
    "id": "fac-dr-p-rathinasabapathi",
    "name": "Dr. Rathinasabapathi P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-rathinasabapathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0045_DSC_9261.jpg"
  },
  {
    "id": "fac-r-ravi",
    "name": "Dr. Ravi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-ravi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/PHOTO-2025-12-20-11-17-30.jpg"
  },
  {
    "id": "fac-dr-p-n-remya",
    "name": "Dr. Remya P N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-n-remya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Remya-PN-Photo.jpg"
  },
  {
    "id": "fac-dr-a-revathi",
    "name": "Dr. Revathi A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-revathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/10-1.png"
  },
  {
    "id": "fac-dr-d-rex-arunraj",
    "name": "Dr. Rex Arunraj D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-rex-arunraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rex-Arunraj-D.jpg"
  },
  {
    "id": "fac-dr-w-richard-thilagaraj",
    "name": "Dr. Richard Thilagaraj W",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-w-richard-thilagaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0093_DSC_9208.jpg"
  },
  {
    "id": "fac-dr-a-robert-singh",
    "name": "Dr. Robert Singh A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-robert-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_4357.jpg"
  },
  {
    "id": "fac-dr-rohit-dhir",
    "name": "Dr. Rohit Dhir",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rohit-dhir/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4731.jpg"
  },
  {
    "id": "fac-dr-roji-marjoie-s",
    "name": "Dr. Roji Marjorie S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-roji-marjoie-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/ROJI-3.jpg"
  },
  {
    "id": "fac-dr-a-ruhan-bevi",
    "name": "Dr. Ruhan Bevi A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-ruhan-bevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100226-Dr.-A.-Ruhan-Bevi.jpg"
  },
  {
    "id": "fac-dr-s-rupachandra",
    "name": "Dr. Rupachandra S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-rupachandra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0004_DSC_9309-1.jpg"
  },
  {
    "id": "fac-dr-s-k-m-habeeb",
    "name": "Dr. S. K. M. Habeeb",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-k-m-habeeb/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Habeeb_photo_US.jpg"
  },
  {
    "id": "fac-dr-sabarinathan-s",
    "name": "Dr. Sabarinathan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sabarinathan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-13.jpg"
  },
  {
    "id": "fac-dr-sachikanta-nanda-2",
    "name": "Dr. Sachikanta Nanda",
    "designation": "Associate Professor II",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sachikanta-nanda-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-18-1.jpg"
  },
  {
    "id": "fac-dr-s-sadagopan",
    "name": "Dr. Sadagopan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sadagopan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sadagopan-Photo.jpg"
  },
  {
    "id": "fac-mrs-m-safa",
    "name": "Dr. Safa M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-safa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Dr.-Safa.jpg"
  },
  {
    "id": "fac-dr-u-sakthi",
    "name": "Dr. Sakthi U",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-sakthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/SAKTHISRMPROFILE-2.jpg"
  },
  {
    "id": "fac-dr-samarendra-maji",
    "name": "Dr. Samarendra Maji",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-samarendra-maji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-passport-size-2024.jpeg"
  },
  {
    "id": "fac-dr-sampath-p",
    "name": "Dr. Sambath P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sampath-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5252.jpg"
  },
  {
    "id": "fac-g-k-sandhia",
    "name": "Dr. Sandhia G K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-k-sandhia/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sandhya.jpg"
  },
  {
    "id": "fac-dr-s-sangeetha",
    "name": "Dr. Sangeetha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sangeetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5268.jpg"
  },
  {
    "id": "fac-dr-sanjay-kumar-mehta",
    "name": "Dr. Sanjay Kumar Mehta",
    "designation": "Research Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-mehta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4749-1.jpg"
  },
  {
    "id": "fac-dr-p-sankar",
    "name": "Dr. Sankar P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-sankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sankar-P.jpg"
  },
  {
    "id": "fac-k-sankara-moorthy",
    "name": "Dr. Sankara Moorthy K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-sankara-moorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0023_DSC_9389.jpg"
  },
  {
    "id": "fac-mr-j-santha-kumar",
    "name": "Dr. Santhakumar J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-santha-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-10.18.13.jpeg"
  },
  {
    "id": "fac-santhana-krishnan-r",
    "name": "Dr. Santhana Krishnan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/santhana-krishnan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-89.jpg"
  },
  {
    "id": "fac-c-santhanakrishnan",
    "name": "Dr. Santhanakrishnan C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-santhanakrishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Santhu.jpg"
  },
  {
    "id": "fac-dr-santhi-k",
    "name": "Dr. Santhi K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-santhi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-3.jpg"
  },
  {
    "id": "fac-n-santhosh-kumar",
    "name": "Dr. Santhosh Kumar N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/n-santhosh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0029_DSC_9381.jpg"
  },
  {
    "id": "fac-dr-m-santhosh-rani",
    "name": "Dr. Santhosh Rani M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-santhosh-rani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Dr.M.Santhosh-Rani.png"
  },
  {
    "id": "fac-dr-santosh-kumar",
    "name": "Dr. Santosh Kumar",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-santosh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5283.jpg"
  },
  {
    "id": "fac-dr-d-v-l-sarada",
    "name": "Dr. Sarada D. V. L",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-v-l-sarada/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DVL.jpg"
  },
  {
    "id": "fac-ms-p-saranya",
    "name": "Dr. Saranya P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-p-saranya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/P-Saranya-e1716520944506.jpg"
  },
  {
    "id": "fac-dr-a-saraswathi",
    "name": "Dr. Saraswathi A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-saraswathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5289.jpg"
  },
  {
    "id": "fac-dr-g-saravanan",
    "name": "Dr. Saravanan G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-12.19.54-PM.jpeg"
  },
  {
    "id": "fac-dr-k-saravanan",
    "name": "Dr. Saravanan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-28-at-16.07.55.jpeg"
  },
  {
    "id": "fac-s-saravanan",
    "name": "Dr. Saravanan Santhanam",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan.jpg"
  },
  {
    "id": "fac-dr-t-r-saravanan",
    "name": "Dr. Saravanan T R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-r-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4421.jpg"
  },
  {
    "id": "fac-dr-s-sarumathy",
    "name": "Dr. Sarumathy S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sarumathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/26.jpg"
  },
  {
    "id": "fac-dr-j-sasi-kumar",
    "name": "Dr. Sasi Kumar J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-sasi-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-28.jpg"
  },
  {
    "id": "fac-dr-sathish-k",
    "name": "Dr. Sathish K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathish-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Dr-Sathish-K-1-1.png"
  },
  {
    "id": "fac-dr-j-satish-kumar-2",
    "name": "Dr. Satish Kumar J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-satish-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-17.jpg"
  },
  {
    "id": "fac-dr-d-sattianadan",
    "name": "Dr. Sattianadan D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-sattianadan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-41-1.jpg"
  },
  {
    "id": "fac-dr-saurabh-ghosh",
    "name": "Dr. Saurabh Ghosh",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saurabh-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/srmist-faculty-photos_sg.jpg"
  },
  {
    "id": "fac-s-selva-kumara-samy",
    "name": "Dr. SelvaKumara Samy S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-selva-kumara-samy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4423-1-1.jpg"
  },
  {
    "id": "fac-dr-selvakumaran-t",
    "name": "Dr. Selvakumaran T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selvakumaran-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-TS.jpg"
  },
  {
    "id": "fac-dr-c-selvam",
    "name": "Dr. Selvam C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-selvam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Dr.-Selvam-C-102371-photo-_1-e1764225957398.jpg"
  },
  {
    "id": "fac-dr-p-selvaraj",
    "name": "Dr. Selvaraj P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-selvaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvaraj.jpg"
  },
  {
    "id": "fac-dr-e-selvarajan",
    "name": "Dr. Selvarajan E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-selvarajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvarajan-E.jpg"
  },
  {
    "id": "fac-dr-n-senthamarai",
    "name": "Dr. Senthamarai N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-senthamarai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4212.jpg"
  },
  {
    "id": "fac-dr-r-senthamarai",
    "name": "Dr. Senthamarai R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-senthamarai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5292.jpg"
  },
  {
    "id": "fac-dr-g-t-senthil-andavan",
    "name": "Dr. Senthil Andavan G. T.",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-t-senthil-andavan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/senthil-andavan-1.jpg"
  },
  {
    "id": "fac-dr-g-senthil-kumar",
    "name": "Dr. Senthil Kumar G",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/My-photo-_new.png"
  },
  {
    "id": "fac-dr-p-senthilkumar",
    "name": "Dr. Senthilkumar Palanisamy",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-senthilkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/IMG-20211020-WA0016.jpg"
  },
  {
    "id": "fac-dr-senthilraja-s",
    "name": "Dr. Senthilraja S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-senthilraja-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/faculty-photos-srmist-17.jpg"
  },
  {
    "id": "fac-shanmuga-priya-a-r",
    "name": "Dr. Shanmuga Priya A R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/shanmuga-priya-a-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0016_DSC_9397.jpg"
  },
  {
    "id": "fac-dr-k-shantha-kumari",
    "name": "Dr. Shantha Kumari K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-shantha-kumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4240.jpg"
  },
  {
    "id": "fac-dr-shanthini-j",
    "name": "Dr. Shanthini J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shanthini-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/JS.jpg"
  },
  {
    "id": "fac-s-sharanya",
    "name": "Dr. Sharanya S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-sharanya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4264.jpg"
  },
  {
    "id": "fac-d-k-sheena-christy",
    "name": "Dr. Sheena Christy D.K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-k-sheena-christy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5297.jpg"
  },
  {
    "id": "fac-dr-t-s-shiny-angel",
    "name": "Dr. Shiny Angel T S",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-s-shiny-angel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Shiny-100197.png"
  },
  {
    "id": "fac-dr-a-shobana-devi",
    "name": "Dr. Shobana Devi A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-shobana-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4280.jpg"
  },
  {
    "id": "fac-dr-j-shobana",
    "name": "Dr. Shobana J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-shobana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-Shobana-J_DSBS.jpg"
  },
  {
    "id": "fac-dr-l-shobana",
    "name": "Dr. Shobana L",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-shobana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5323.jpg"
  },
  {
    "id": "fac-dr-shobana-s",
    "name": "Dr. Shobana.S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shobana-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/IMG_6021-1.jpeg"
  },
  {
    "id": "fac-dr-b-shyamala-devi",
    "name": "Dr. Shyamala Devi B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-shyamala-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/16.jpg"
  },
  {
    "id": "fac-dr-s-sindhu-nachiar-2",
    "name": "Dr. Sindhu Nachiar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sindhu-nachiar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-104-1.jpg"
  },
  {
    "id": "fac-dr-c-siva",
    "name": "Dr. Siva C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-siva/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Official-purpose-Photo.jpg"
  },
  {
    "id": "fac-dr-siva-e-p",
    "name": "Dr. Siva E.P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-siva-e-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5259.jpg"
  },
  {
    "id": "fac-dr-r-siva",
    "name": "Dr. Siva R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-siva/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/7.png"
  },
  {
    "id": "fac-dr-m-sivakami",
    "name": "Dr. Sivakami M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sivakami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3990.jpg"
  },
  {
    "id": "fac-dr-b-sivakumar",
    "name": "Dr. Sivakumar B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-sivakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSCN2036-scaled.jpg"
  },
  {
    "id": "fac-dr-sivanathan-k",
    "name": "Dr. Sivanathan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivanathan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Sivanathan_K.png"
  },
  {
    "id": "fac-dr-v-sivaramakrishnan",
    "name": "Dr. Sivaramakrishnan V",
    "designation": "Associate Professor, SBE, Room No. 508",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-sivaramakrishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Siva-with-tie-e1762873696202.jpg"
  },
  {
    "id": "fac-dr-m-snehalatha",
    "name": "Dr. Snehalatha M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-snehalatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7358.jpg"
  },
  {
    "id": "fac-dr-n-snehalatha",
    "name": "Dr. Snehalatha N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-snehalatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_44041.jpg"
  },
  {
    "id": "fac-k-sornalakshmi",
    "name": "Dr. Sornalakshmi K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-sornalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4312.jpg"
  },
  {
    "id": "fac-dr-soumyajit-ghosh",
    "name": "Dr. Soumyajit Ghosh",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-soumyajit-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Soumyajit-photo.jpg"
  },
  {
    "id": "fac-dr-u-sowmmiya",
    "name": "Dr. Sowmmiya U",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-sowmmiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/IMG-20240824-WA0106.jpg"
  },
  {
    "id": "fac-dr-k-sreekumar",
    "name": "Dr. Sreekumar K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-sreekumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreekumar.jpg"
  },
  {
    "id": "fac-dr-sreelatha",
    "name": "Dr. Sreelatha",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sreelatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Photo-6.jpg"
  },
  {
    "id": "fac-dr-l-n-b-srinivas",
    "name": "Dr. Srinivas L N B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-n-b-srinivas/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3834.jpg"
  },
  {
    "id": "fac-dr-srinivasan-r",
    "name": "Dr. Srinivasan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srinivasan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/srinivasan2.jpeg"
  },
  {
    "id": "fac-dr-srinivasarao-kancharla",
    "name": "Dr. Srinivasarao Kancharla",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srinivasarao-kancharla/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3973.jpg"
  },
  {
    "id": "fac-r-subash",
    "name": "Dr. Subash R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-subash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subash.jpg"
  },
  {
    "id": "fac-dr-k-subathra",
    "name": "Dr. Subathra K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-subathra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17000067-2.jpg"
  },
  {
    "id": "fac-dr-v-subburayan",
    "name": "Dr. Subburayan V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-subburayan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5240.jpg"
  },
  {
    "id": "fac-dr-j-subhashini",
    "name": "Dr. Subhashini J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-subhashini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100229-Dr.-J.-Subhashini.jpg"
  },
  {
    "id": "fac-dr-s-subhashini",
    "name": "Dr. Subhashini S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-subhashini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0031_DSC_9278.jpg"
  },
  {
    "id": "fac-dr-c-subramani",
    "name": "Dr. Subramani C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-subramani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Faculty-Photos-srmist-60-1.jpg"
  },
  {
    "id": "fac-dr-m-suchithra",
    "name": "Dr. Suchithra M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-suchithra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Suchithra.jpg"
  },
  {
    "id": "fac-dr-sudha-rajesh",
    "name": "Dr. Sudha Rajesh",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sudha-rajesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/Dr.-Sudha-Rajesh-SRMIST.jpg"
  },
  {
    "id": "fac-dr-v-sudha",
    "name": "Dr. Sudha V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-sudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4003.jpg"
  },
  {
    "id": "fac-dr-p-sudhakar",
    "name": "Dr. Sudhakar P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-sudhakar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_8946-scaled-e1678960205747.jpg"
  },
  {
    "id": "fac-dr-e-sujatha",
    "name": "Dr. Sujatha E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-sujatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5286.jpg"
  },
  {
    "id": "fac-ms-g-sujatha",
    "name": "Dr. Sujatha G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-g-sujatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4204.jpg"
  },
  {
    "id": "fac-dr-s-sujatha",
    "name": "Dr. Sujatha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sujatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0016_DSC_9297.jpg"
  },
  {
    "id": "fac-dr-s-sujatha-2",
    "name": "Dr. Sujatha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sujatha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0041_DSC_9369.jpg"
  },
  {
    "id": "fac-dr-suman-kanougiya",
    "name": "Dr. Suman Kanougiya",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suman-kanougiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SumanKanougiya.png"
  },
  {
    "id": "fac-dr-sumana-vedanth",
    "name": "Dr. Sumana Vedanth",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumana-vedanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/DSC_1432-copy.jpg"
  },
  {
    "id": "fac-dr-sumathy-g",
    "name": "Dr. Sumathy G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumathy-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/30.jpg"
  },
  {
    "id": "fac-dr-sumit-pramanik",
    "name": "Dr. Sumit Pramanik",
    "designation": "Research Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumit-pramanik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Dr.Sumit__SRM-Profile.jpg"
  },
  {
    "id": "fac-dr-m-sumithra",
    "name": "Dr. Sumithra M",
    "designation": "Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sumithra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/9790136139-b2-scaled.jpg"
  },
  {
    "id": "fac-dr-e-sundaravadivel",
    "name": "Dr. Sundaravadivel E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-sundaravadivel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3933.jpg"
  },
  {
    "id": "fac-dr-sivapatham-sundaresan",
    "name": "Dr. Sundaresan. S",
    "designation": "Associate Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivapatham-sundaresan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9.DrS_.Sundaresan-Medical-research.jpg"
  },
  {
    "id": "fac-dr-t-sundarrajan",
    "name": "Dr. Sundarrajan T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-sundarrajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/42.jpg"
  },
  {
    "id": "fac-dr-p-supraja",
    "name": "Dr. Supraja P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-supraja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Supraja-600x600-1.jpg"
  },
  {
    "id": "fac-m-suresh",
    "name": "Dr. Suresh  M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5346.jpg"
  },
  {
    "id": "fac-dr-e-suresh",
    "name": "Dr. Suresh E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-14.jpg"
  },
  {
    "id": "fac-suresh-j",
    "name": "Dr. Suresh J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/suresh-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.16-AM.jpeg"
  },
  {
    "id": "fac-dr-k-suresh",
    "name": "Dr. Suresh Krishnan",
    "designation": "Associate Professor [Grade I]",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Suresh-K.jpg"
  },
  {
    "id": "fac-dr-g-suseela",
    "name": "Dr. Suseela G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-suseela/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4224.jpg"
  },
  {
    "id": "fac-dr-t-suseelal",
    "name": "Dr. Suseelal T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-suseelal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-Suseelal.jpg"
  },
  {
    "id": "fac-dr-m-susila",
    "name": "Dr. Susila M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-susila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100221-Dr.-M.-Susila.jpg"
  },
  {
    "id": "fac-dr-swami-anitha",
    "name": "Dr. Swami Anita",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-swami-anitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3999.jpg"
  },
  {
    "id": "fac-dr-g-swamynathan",
    "name": "Dr. Swamynathan G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-swamynathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17951-9940614794ab.jpg"
  },
  {
    "id": "fac-dr-a-swapna-geetanjali",
    "name": "Dr. Swapna Geetanjali A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-swapna-geetanjali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0041_DSC_9265.jpg"
  },
  {
    "id": "fac-sweety-bakyarani",
    "name": "Dr. Sweety Bakyarani E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sweety-bakyarani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-02-24-at-10.37.20.jpeg"
  },
  {
    "id": "fac-dr-k-tamilarasan",
    "name": "Dr. Tamilarasan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-tamilarasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0076_DSC_9227.jpg"
  },
  {
    "id": "fac-dr-p-tamilarasan",
    "name": "Dr. Tamilarasan P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-tamilarasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Dr.-Tamilarasan-e1779259378516.jpg"
  },
  {
    "id": "fac-dr-t-m-thamizh-thentral",
    "name": "Dr. Thamizh Thentral T M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-m-thamizh-thentral/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/TMT_Profile-pic.jpeg"
  },
  {
    "id": "fac-dr-s-thanga-revathi",
    "name": "Dr. Thanga Revathi S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-thanga-revathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3856.jpg"
  },
  {
    "id": "fac-dr-thanigaivel-s",
    "name": "Dr. Thanigaivel S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thanigaivel-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Thanigai-Image.jpeg"
  },
  {
    "id": "fac-dr-s-thenmalar",
    "name": "Dr. Thenmalar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-thenmalar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3838.jpg"
  },
  {
    "id": "fac-dr-r-thenmozhi",
    "name": "Dr. Thenmozhi R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-thenmozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/thenmoni.jpg"
  },
  {
    "id": "fac-dr-a-thilagaraj",
    "name": "Dr. Thilagaraj A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-thilagaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-1-2-scaled.jpg"
  },
  {
    "id": "fac-dr-r-thilagavathy-2",
    "name": "Dr. Thilagavathy R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thilagavathy.jpg"
  },
  {
    "id": "fac-dr-m-thirumal",
    "name": "Dr. Thirumal M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-thirumal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/25.jpg"
  },
  {
    "id": "fac-dr-thirumurthy-madhavan",
    "name": "Dr. Thirumurthy Madhavan",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thirumurthy-madhavan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230405-WA0008-2.jpg"
  },
  {
    "id": "fac-dr-v-thirunavukkarasu",
    "name": "Dr. Thirunavukkarasu V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-thirunavukkarasu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-49.jpg"
  },
  {
    "id": "fac-dr-j-uma",
    "name": "Dr. Uma J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-uma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5355.jpg"
  },
  {
    "id": "fac-k-m-uma-maheswari",
    "name": "Dr. Uma Maheswari K M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-m-uma-maheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/uma.jpg"
  },
  {
    "id": "fac-m-m-uma-maheswari",
    "name": "Dr. Uma Maheswari M M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-m-uma-maheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1413-transformed.png"
  },
  {
    "id": "fac-dr-s-usha",
    "name": "Dr. Usha S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-usha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/usha-photo-new.jpeg"
  },
  {
    "id": "fac-ushasukhanya-s",
    "name": "Dr. Ushasukhanya S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ushasukhanya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4221.jpg"
  },
  {
    "id": "fac-dr-v-r-prasath-kumar-2",
    "name": "Dr. V.R. Prasath Kumar",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-r-prasath-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/VRP-Photos.jpg"
  },
  {
    "id": "fac-vaishnavi-moorthy",
    "name": "Dr. Vaishnavi Moorthy",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vaishnavi-moorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-64.jpg"
  },
  {
    "id": "fac-v-valarmathi",
    "name": "Dr. Valarmathi V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-valarmathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.V.-Valarmathi.jpg"
  },
  {
    "id": "fac-dr-r-varadharajan",
    "name": "Dr. Varadharajan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-varadharajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5245.jpg"
  },
  {
    "id": "fac-dr-m-s-vasanthi",
    "name": "Dr. Vasanthi M.S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-s-vasanthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100216-Dr.-M.S.-Vasanthi.jpg"
  },
  {
    "id": "fac-dr-t-veeramakali",
    "name": "Dr. Veeramakali T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-veeramakali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4270.jpg"
  },
  {
    "id": "fac-dr-v-velmurugan",
    "name": "Dr. Velmurugan V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-velmurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/30-1.jpg"
  },
  {
    "id": "fac-dr-r-vengadesh-kumara-mangalam",
    "name": "Dr. Vengadesh Kumara Mangalam R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-vengadesh-kumara-mangalam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3975.jpg"
  },
  {
    "id": "fac-dr-p-venkataraman",
    "name": "Dr. Venkataraman P",
    "designation": "Associate Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-venkataraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/30-Dr.P.Venkataraman-Medical-Research.jpg"
  },
  {
    "id": "fac-dr-k-venkatesan",
    "name": "Dr. Venkatesan K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-venkatesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0015_DSC_9298.jpg"
  },
  {
    "id": "fac-r-venkatesan",
    "name": "Dr. Venkatesan R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-venkatesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5353.jpg"
  },
  {
    "id": "fac-dr-b-vennila",
    "name": "Dr. Vennila B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-vennila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/website-photo-1-1-2.png"
  },
  {
    "id": "fac-dr-vetri-selvi-m",
    "name": "Dr. Vetri Selvi M",
    "designation": "Associate Professor and Chairperson (BBA program)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vetri-selvi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/vetri.jpg"
  },
  {
    "id": "fac-r-vidhya",
    "name": "Dr. Vidhya R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-vidhya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-R.jpg"
  },
  {
    "id": "fac-dr-vidhyalakshmi-m-k",
    "name": "Dr. Vidhyalakshmi M K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vidhyalakshmi-m-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhyalakshmi.jpg"
  },
  {
    "id": "fac-mr-r-vijay-raja",
    "name": "Dr. Vijay Raja R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-vijay-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0033_DSC_9377.jpg"
  },
  {
    "id": "fac-dr-a-vijay-vasanth",
    "name": "Dr. Vijay Vasanth A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-vijay-vasanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-10.49.20-AM.jpeg"
  },
  {
    "id": "fac-dr-a-vijaya",
    "name": "Dr. Vijaya A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-vijaya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-61.jpg"
  },
  {
    "id": "fac-dr-t-vijayakumar",
    "name": "Dr. Vijayakumar T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-vijayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4783.jpg"
  },
  {
    "id": "fac-dr-vijayakumaran-c",
    "name": "Dr. Vijayakumaran C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayakumaran-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayakumaran.jpg"
  },
  {
    "id": "fac-dr-e-vijayaragavan",
    "name": "Dr. Vijayaragavan E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-vijayaragavan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-08-at-2.12.45-PM-e1767861980507.jpeg"
  },
  {
    "id": "fac-dr-d-vinod",
    "name": "Dr. Vinod D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-vinod/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vinod.jpg"
  },
  {
    "id": "fac-p-visalakshi",
    "name": "Dr. Visalakshi P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-visalakshi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3835.jpg"
  },
  {
    "id": "fac-dr-yaaseen-masvood",
    "name": "Dr. Yaaseen Masvood",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yaaseen-masvood/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Masvood-New.jpg"
  },
  {
    "id": "fac-dr-b-yamini",
    "name": "Dr. Yamini B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-yamini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DSC_3803.jpg"
  },
  {
    "id": "fac-r-yamini",
    "name": "Dr. Yamini R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-yamini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Yamini.jpg"
  },
  {
    "id": "fac-dr-yogapriya-g",
    "name": "Dr. Yogapriya G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yogapriya-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/DR.Yohapriya-G.jpeg"
  },
  {
    "id": "fac-dr-s-yuvaraj",
    "name": "Dr. Yuvaraj S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-yuvaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101281-Dr.-S.-Yuvaraj.jpg"
  },
  {
    "id": "fac-dr-g-keerthiga",
    "name": "Dr.Keerthiga.G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-keerthiga/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Keerthiga-G.jpg"
  },
  {
    "id": "fac-anbarasu-d",
    "name": "Mr. Anbarasu D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/anbarasu-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/ANBU-PHOTO-1.jpg"
  },
  {
    "id": "fac-mr-anoop-menon",
    "name": "Mr. Anoop Menon",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-anoop-menon/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/AM.jpg"
  },
  {
    "id": "fac-mr-s-k-arun",
    "name": "Mr. Arun S.K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-k-arun/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Arun_.jpg"
  },
  {
    "id": "fac-mr-gajendran-t-2",
    "name": "Mr. Gajendran.T",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-gajendran-t-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Gajendran-1-scaled.jpg"
  },
  {
    "id": "fac-mr-karthick-k-a",
    "name": "Mr. Karthick K.A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-karthick-k-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/karthick-Picsart-BackgroundChanger.png"
  },
  {
    "id": "fac-mr-prashant-p",
    "name": "Mr. Prashant P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-prashant-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/srm-faculty-arch.jpg"
  },
  {
    "id": "fac-p-purnachandar",
    "name": "Mr. Purnachandar P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-purnachandar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-10.20.18-AM.jpeg"
  },
  {
    "id": "fac-mr-m-c-raja-muthaiah",
    "name": "Mr. Raja Muthaiah M C",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-c-raja-muthaiah/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/faculty-photo-shoot-1.jpg"
  },
  {
    "id": "fac-j-sabastian-satish",
    "name": "Mr. Sabastian Satish J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-sabastian-satish/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Sabastian-Satish-J-1.png"
  },
  {
    "id": "fac-k-ambiga",
    "name": "Mrs. Ambiga K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-ambiga/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Ambiga.-K.jpg"
  },
  {
    "id": "fac-mrs-m-angelin-dhanalakshmi",
    "name": "Mrs. Angelin Dhanalakshmi M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-angelin-dhanalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Angelin-Dhanalakshmi.jpg"
  },
  {
    "id": "fac-mrs-r-deenajothy",
    "name": "Mrs. Deenajothy R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-r-deenajothy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Deena-Jothy.jpg"
  },
  {
    "id": "fac-a-sheeba-jebakani",
    "name": "Mrs. Sheeba Jebakani A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-sheeba-jebakani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Sheebajebakani.-A.jpg"
  },
  {
    "id": "fac-benil-jeniffer-s",
    "name": "Benil Jeniffer S",
    "designation": "Assistant Professor Jr.G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/benil-jeniffer-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Benil-faculty-photos-srmist-15.jpg"
  },
  {
    "id": "fac-dr-abdul-azeez-n",
    "name": "Dr Abdul Azeez N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abdul-azeez-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Dr.-Abdul-Azeez-N.jpg"
  },
  {
    "id": "fac-dr-archana-r",
    "name": "Dr Archana R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-archana-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/ilr_Photo-2.jpg"
  },
  {
    "id": "fac-c-kanimozhi",
    "name": "Dr Kanimozhi C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-kanimozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ms.-Kanimozhi.jpg"
  },
  {
    "id": "fac-dr-m-abhishal",
    "name": "Dr M. Abhishal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-abhishal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-3.jpg"
  },
  {
    "id": "fac-dr-a-revathy",
    "name": "Dr Revathy. A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-revathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-06-at-13.13.51_0a1e3ce9.jpg"
  },
  {
    "id": "fac-dr-vijaykrishnaraj-r",
    "name": "Dr Vijaykrishnaraj R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijaykrishnaraj-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-c-g-anupama",
    "name": "Dr.  Anupama C.G",
    "designation": "Assistant Director International Relations, Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-c-g-anupama/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Untitled-1.jpg"
  },
  {
    "id": "fac-dr-vaidehi-nayantara-p",
    "name": "Dr.  Vaidehi Nayantara P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vaidehi-nayantara-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-a-andrew-roobert",
    "name": "Dr. A. Andrew Roobert",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-andrew-roobert/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-a-dinesh",
    "name": "Dr. A. Dinesh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-dinesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/srmist-faculty-23.jpg"
  },
  {
    "id": "fac-dr-a-g-krishnanunni",
    "name": "Dr. A. G. Krishnanunni",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-g-krishnanunni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-a-punitha",
    "name": "Dr. A. Punitha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-punitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-aathira-a-s",
    "name": "Dr. Aathira A S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aathira-a-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/14-scaled.jpg"
  },
  {
    "id": "fac-mr-i-aatthisugan",
    "name": "Dr. Aatthisugan I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-i-aatthisugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-18.jpg"
  },
  {
    "id": "fac-dr-abanah-shirley-j",
    "name": "Dr. Abanah Shirley J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abanah-shirley-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7044.jpg"
  },
  {
    "id": "fac-mr-abburi-lakshman-kumar",
    "name": "Dr. Abburi Lakshman Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-abburi-lakshman-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DSC_9010-scaled.jpg"
  },
  {
    "id": "fac-dr-abhijit-saha-2",
    "name": "Dr. Abhijit Saha",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhijit-saha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/abhijit.jpg"
  },
  {
    "id": "fac-dr-abhijit-saha",
    "name": "Dr. Abhijit saha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhijit-saha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3951.jpg"
  },
  {
    "id": "fac-dr-abhijit-sarkar",
    "name": "Dr. Abhijit Sarkar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhijit-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/ABHIJIT_IMAGE.jpeg"
  },
  {
    "id": "fac-dr-abhilash-pullanchiyodan",
    "name": "Dr. Abhilash Pullanchiyodan",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhilash-pullanchiyodan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3959.jpg"
  },
  {
    "id": "fac-dr-abhishek-banerjee",
    "name": "Dr. Abhishek Banerjee",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abhishek-banerjee/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5361.jpg"
  },
  {
    "id": "fac-dr-abijah-roseline",
    "name": "Dr. Abijah Roseline. S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abijah-roseline/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4449.jpg"
  },
  {
    "id": "fac-ms-abinaya-g",
    "name": "Dr. Abinaya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-abinaya-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/abinaya.jpg"
  },
  {
    "id": "fac-dr-c-abirami",
    "name": "Dr. Abirami C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-abirami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-7.jpg"
  },
  {
    "id": "fac-dr-abirami-t",
    "name": "Dr. Abirami T",
    "designation": "Assistant professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abirami-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Abirami-scaled.jpg"
  },
  {
    "id": "fac-dr-adhira-balan",
    "name": "Dr. Adhira Balan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-adhira-balan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Adhira-Balan-1.jpg"
  },
  {
    "id": "fac-dr-s-agnisri",
    "name": "Dr. Agnisri S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-agnisri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Agni-Photo-kurta-.jpg"
  },
  {
    "id": "fac-dr-aishwarya-r",
    "name": "Dr. Aishwarya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aishwarya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/aishwara.jpg"
  },
  {
    "id": "fac-dr-aiswaria-samyuktha-s",
    "name": "Dr. Aiswaria Samyuktha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aiswaria-samyuktha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Aiswaria-Samyuktha_Photo.jpg"
  },
  {
    "id": "fac-dr-ajanthaa-lakkshmanan",
    "name": "Dr. Ajanthaa Lakkshmanan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ajanthaa-lakkshmanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aajaatha.jpg"
  },
  {
    "id": "fac-dr-ajay-j",
    "name": "Dr. Ajay J",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ajay-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-43.jpg"
  },
  {
    "id": "fac-dr-ajoy-jose",
    "name": "Dr. Ajoy Jose",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ajoy-jose/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/WhiteBackground-2.png"
  },
  {
    "id": "fac-dr-akash-singh",
    "name": "Dr. Akash Singh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-akash-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5270.jpg"
  },
  {
    "id": "fac-dr-akash-tripathi",
    "name": "Dr. Akash Tripathi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-akash-tripathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-akella-s-narasimha-raju",
    "name": "Dr. Akella S Narasimha Raju",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-akella-s-narasimha-raju/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/allek.jpg"
  },
  {
    "id": "fac-dr-b-akila",
    "name": "Dr. Akila B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-akila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-3-scaled.jpg"
  },
  {
    "id": "fac-dr-akino-a",
    "name": "Dr. Akino A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-akino-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Akino-A-scaled-e1680764448966.jpg"
  },
  {
    "id": "fac-dr-akshaya-s-b",
    "name": "Dr. Akshaya S B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-akshaya-s-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Akshaya.jpg"
  },
  {
    "id": "fac-mrs-akshya-jothi",
    "name": "Dr. Akshya Jothi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-akshya-jothi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Akshya-Photo.webp"
  },
  {
    "id": "fac-dr-albina-narzary",
    "name": "Dr. Albina Narzary",
    "designation": "Assistant Professor (Research)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-albina-narzary/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/srmist-faculty-7.jpg"
  },
  {
    "id": "fac-dr-d-alice-ligoria",
    "name": "Dr. Alice Ligoria D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-alice-ligoria/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Alice.jpg"
  },
  {
    "id": "fac-dr-alladi-hemanth-kumar",
    "name": "Dr. Alladi Hemanth Kumar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-alladi-hemanth-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Hem_Profile_pic.jpg"
  },
  {
    "id": "fac-dr-k-allwyn",
    "name": "Dr. Allwyn K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-allwyn/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KA.jpg"
  },
  {
    "id": "fac-dr-alok-kumar",
    "name": "Dr. Alok Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-alok-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/alok-recent.jpg"
  },
  {
    "id": "fac-dr-amal-shaji",
    "name": "Dr. Amal Shaji",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-amal-shaji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/c0572043-3522-4329-84ae-8b161980cca4_20260811_082627_0000-scaled.jpg"
  },
  {
    "id": "fac-dr-amala-reddy",
    "name": "Dr. Amala Reddy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-amala-reddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0018_DSC_9295.jpg"
  },
  {
    "id": "fac-dr-amalendu-rana",
    "name": "Dr. Amalendu Rana",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-amalendu-rana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Amalendu-Rana.png"
  },
  {
    "id": "fac-dr-ambika-s",
    "name": "Dr. Ambika S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ambika-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ambi-2-scaled.jpg"
  },
  {
    "id": "fac-dr-ame-r",
    "name": "Dr. Ame R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ame-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/84.jpg-scaled.jpeg"
  },
  {
    "id": "fac-dr-amrit-das",
    "name": "Dr. Amrit Das",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-amrit-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Amrit-Das.jpg"
  },
  {
    "id": "fac-dr-amritha-r-krishnan",
    "name": "Dr. Amritha R Krishnan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-amritha-r-krishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/ARK-SRMIST-Photo.jpg.jpeg"
  },
  {
    "id": "fac-amutha-a-l",
    "name": "Dr. Amutha A.L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/amutha-a-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/A-L-Amutha-recent-photo.jpg"
  },
  {
    "id": "fac-dr-m-anand-2",
    "name": "Dr. Anand M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-anand-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4257.jpg"
  },
  {
    "id": "fac-mr-anand-m",
    "name": "Dr. Anand M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-anand-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anand.jpg"
  },
  {
    "id": "fac-dr-anand-mohan",
    "name": "Dr. Anand Mohan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anand-mohan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Passport.png"
  },
  {
    "id": "fac-dr-anand-mohan-shrivastav",
    "name": "Dr. Anand Mohan Shrivastav",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anand-mohan-shrivastav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5Y0A0902.jpg"
  },
  {
    "id": "fac-dr-anand-thiyagaraj",
    "name": "Dr. Anand Thiyagaraj",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anand-thiyagaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0044_DSC_9262.jpg"
  },
  {
    "id": "fac-mr-b-ananda-venkatesan",
    "name": "Dr. Ananda Venkatesan B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-b-ananda-venkatesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101333-Mr.-B.-Ananda-Venkatesan.jpg"
  },
  {
    "id": "fac-dr-s-anandh-2",
    "name": "Dr. Anandh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-anandh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-11-1.jpg"
  },
  {
    "id": "fac-mr-anandha-balaji-v",
    "name": "Dr. Anandha Balaji  V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-anandha-balaji-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/184-scaled.jpg"
  },
  {
    "id": "fac-dr-anandhakumar-s",
    "name": "Dr. Anandhakumar Sukeri",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anandhakumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3958.jpg"
  },
  {
    "id": "fac-dr-ananthi-claral-mary-t",
    "name": "Dr. Ananthi Claral Mary T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ananthi-claral-mary-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ananthi-1-scaled.jpg"
  },
  {
    "id": "fac-dr-ananya-mishra",
    "name": "Dr. Ananya Mishra",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ananya-mishra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/20250602_153254-scaled.jpg"
  },
  {
    "id": "fac-dr-ananya-parameswaran",
    "name": "Dr. Ananya Parameswaran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ananya-parameswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-15.jpg"
  },
  {
    "id": "fac-dr-anaswara-k",
    "name": "Dr. Anaswara K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anaswara-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-a-anbarasi",
    "name": "Dr. Anbarasi A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-anbarasi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbarasi.jpg"
  },
  {
    "id": "fac-dr-u-v-anbazhagu",
    "name": "Dr. Anbazhagu U V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-v-anbazhagu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbazhagu.jpg"
  },
  {
    "id": "fac-dr-a-anbu",
    "name": "Dr. Anbu A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-anbu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Anbu.Photo_-1.jpeg"
  },
  {
    "id": "fac-dr-anbukkarasi-k",
    "name": "Dr. Anbukkarasi Kaliyaperumal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anbukkarasi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anbu-1-scaled.jpg"
  },
  {
    "id": "fac-dr-angel-rubavathy-b",
    "name": "Dr. Angel Rubavathy B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-angel-rubavathy-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/95.jpg.jpeg"
  },
  {
    "id": "fac-dr-s-p-angelin-claret",
    "name": "Dr. Angelin Claret .S.P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-p-angelin-claret/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Angelin_Profile_Photo.jpg"
  },
  {
    "id": "fac-dr-aniji-m",
    "name": "Dr. Aniji M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-aniji-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5130-scaled.jpg"
  },
  {
    "id": "fac-dr-anil-kumar-pal",
    "name": "Dr. Anil Kumar Pal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anil-kumar-pal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-3.jpg"
  },
  {
    "id": "fac-mrs-a-anilet-bala",
    "name": "Dr. Anilet Bala A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-a-anilet-bala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101334-Mrs.-A.-Anilet-Bala.jpg"
  },
  {
    "id": "fac-dr-anisha-devi",
    "name": "Dr. Anisha Devi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anisha-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Anisha-1.png"
  },
  {
    "id": "fac-dr-anishiya-p",
    "name": "Dr. Anishiya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anishiya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/srmist-profile-photo.jpg"
  },
  {
    "id": "fac-dr-r-anita-jasmine",
    "name": "Dr. Anita Jasmine R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-anita-jasmine/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4294.jpg"
  },
  {
    "id": "fac-dr-anita-m",
    "name": "Dr. Anita M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anita-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Faculty-Photos-srmist-4.jpg"
  },
  {
    "id": "fac-r-anita",
    "name": "Dr. Anita R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-anita/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/anita.jpg"
  },
  {
    "id": "fac-anita-smiles-j",
    "name": "Dr. Anita Smiles J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/anita-smiles-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9407-scaled.jpg"
  },
  {
    "id": "fac-d-anitha",
    "name": "Dr. Anitha D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-anitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/DA-2025.jpg"
  },
  {
    "id": "fac-anitha-d",
    "name": "Dr. Anitha D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/anitha-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/College-profile-photo-1.jpg"
  },
  {
    "id": "fac-dr-g-anitha",
    "name": "Dr. Anitha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-anitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Profile_Bio-Tech_0063_DSC_9241-2.jpg"
  },
  {
    "id": "fac-dr-s-anitha",
    "name": "Dr. Anitha S",
    "designation": "Assistant Professor (SG)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-anitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0049_DSC_9361.jpg"
  },
  {
    "id": "fac-dr-anjan-das",
    "name": "Dr. Anjan Das",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anjan-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3957.jpg"
  },
  {
    "id": "fac-mrs-g-v-anjana",
    "name": "Dr. Anjana G V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-g-v-anjana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/36-300x300-1.jpg"
  },
  {
    "id": "fac-dr-t-anju",
    "name": "Dr. Anju T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-anju/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Anju.jpg"
  },
  {
    "id": "fac-dr-anju-v-g",
    "name": "Dr. Anju V G",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anju-v-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-2.jpg"
  },
  {
    "id": "fac-dr-ankit-kumar-srivastava",
    "name": "Dr. Ankit Kumar Srivastava",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ankit-kumar-srivastava/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_021013.jpg"
  },
  {
    "id": "fac-dr-ankita-rani",
    "name": "Dr. Ankita Rani",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ankita-rani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-annapoorani-s",
    "name": "Dr. Annapoorani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-annapoorani-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-_photo.jpg"
  },
  {
    "id": "fac-dr-annie-vimala-d",
    "name": "Dr. Annie Vimala D",
    "designation": "Assistant Professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-annie-vimala-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Annie-scaled.jpg"
  },
  {
    "id": "fac-dr-anousouya-devi-m",
    "name": "Dr. Anousouya Devi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anousouya-devi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4444.jpg"
  },
  {
    "id": "fac-ansu-elsa-joy",
    "name": "Dr. Ansu Elsa Joy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ansu-elsa-joy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ansu-scaled.jpg"
  },
  {
    "id": "fac-dr-antony-catherine-flora-l",
    "name": "Dr. Antony Catherine Flora L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-antony-catherine-flora-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/catherine.jpg"
  },
  {
    "id": "fac-dr-s-antony-raj",
    "name": "Dr. Antony Raj S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-antony-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/13-scaled.jpg"
  },
  {
    "id": "fac-dr-antony-sophia-n",
    "name": "Dr. Antony Sophia N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-antony-sophia-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4452.jpg"
  },
  {
    "id": "fac-dr-anupam-shome",
    "name": "Dr. Anupam Shome",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anupam-shome/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-c-anuradha",
    "name": "Dr. Anuradha C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-anuradha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.C.Anuradha-1.jpg"
  },
  {
    "id": "fac-dr-anusooya-v",
    "name": "Dr. Anusooya V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anusooya-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/anussoya.jpg"
  },
  {
    "id": "fac-ms-anusuya-k",
    "name": "Dr. Anusuya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-anusuya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC0192-.png"
  },
  {
    "id": "fac-dr-anwar-r-shaheen",
    "name": "Dr. Anwar R Shaheen",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anwar-r-shaheen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/12/1-scaled.jpg"
  },
  {
    "id": "fac-dr-apoorva-narain",
    "name": "Dr. Apoorva Narain",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-apoorva-narain/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/pic-apoorva-copy-e1763457056149.jpg"
  },
  {
    "id": "fac-mr-aqib",
    "name": "Dr. Aqib",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-aqib/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-48.jpg"
  },
  {
    "id": "fac-m-aravindan",
    "name": "Dr. Aravindan  M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-aravindan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100712-Mr.-M.-Aravindan.jpg"
  },
  {
    "id": "fac-aravindaraj-k",
    "name": "Dr. Aravindaraj K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/aravindaraj-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Profile_Photos_SRM.jpg"
  },
  {
    "id": "fac-dr-archana-arul",
    "name": "Dr. Archana Arul",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-archana-arul/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Archana-Arul.jpg"
  },
  {
    "id": "fac-dr-archana-h-a-2",
    "name": "Dr. Archana H A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-archana-h-a-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/SRM-image1-scaled.jpg"
  },
  {
    "id": "fac-ms-archana-r",
    "name": "Dr. Archana R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-archana-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-9.jpg"
  },
  {
    "id": "fac-dr-arijit-bardhan-roy",
    "name": "Dr. Arijit Bardhan Roy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arijit-bardhan-roy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102980-Dr.-Arijit-Bardhan-Roy.jpg"
  },
  {
    "id": "fac-dr-k-s-arikumar",
    "name": "Dr. Arikumar K S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-s-arikumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4254.jpg"
  },
  {
    "id": "fac-dr-arindam-chakraborty",
    "name": "Dr. Arindam Chakraborty",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arindam-chakraborty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/IMG_2356_AC-scaled.jpg"
  },
  {
    "id": "fac-arivarasan-j",
    "name": "Dr. Arivarasan J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/arivarasan-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr__Arivarasan_J.png"
  },
  {
    "id": "fac-dr-arivazhagan",
    "name": "Dr. Arivazhagan A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arivazhagan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Arivazhagan-A.png"
  },
  {
    "id": "fac-dr-arnab-ganguly",
    "name": "Dr. Arnab Ganguly",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arnab-ganguly/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4725.jpg"
  },
  {
    "id": "fac-dr-arnab-maity",
    "name": "Dr. Arnab Maity",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arnab-maity/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/arnab.jpg"
  },
  {
    "id": "fac-dr-arnob-ray",
    "name": "Dr. Arnob Ray",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arnob-ray/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Arnob_images.jpeg"
  },
  {
    "id": "fac-dr-arokiaprakash-a-2",
    "name": "Dr. Arokiaprakash A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arokiaprakash-a-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0795-3-scaled.jpg"
  },
  {
    "id": "fac-mr-s-arokya-agustin",
    "name": "Dr. Arokya Agustin S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-arokya-agustin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-12.jpg"
  },
  {
    "id": "fac-dr-arthy-m",
    "name": "Dr. Arthy M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arthy-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4292.jpg"
  },
  {
    "id": "fac-dr-s-arul-dayanand",
    "name": "Dr. Arul Dayanand S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-arul-dayanand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7352.jpg"
  },
  {
    "id": "fac-mr-s-arul-kumar",
    "name": "Dr. Arul Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-arul-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-22.jpg"
  },
  {
    "id": "fac-mr-a-arulprakash",
    "name": "Dr. Arul Prakash A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-a-arulprakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0035_DSC_9375.jpg"
  },
  {
    "id": "fac-m-arul-prakash",
    "name": "Dr. Arul Prakash M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-arul-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulprakash.jpg"
  },
  {
    "id": "fac-dr-arul-shantrinal-a",
    "name": "Dr. Arul Shantrinal A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arul-shantrinal-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-k-arul-varman",
    "name": "Dr. Arul Varman K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-arul-varman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Pic_SRM-3.jpeg"
  },
  {
    "id": "fac-mr-arulalan-v",
    "name": "Dr. Arulalan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-arulalan-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulalan.jpg"
  },
  {
    "id": "fac-dr-arulmurugan-a",
    "name": "Dr. Arulmurugan A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arulmurugan-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/arulmurugan.jpg"
  },
  {
    "id": "fac-dr-arumbu-v-n",
    "name": "Dr. Arumbu V N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arumbu-v-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Arumbu_photo_SRMIST.jpg"
  },
  {
    "id": "fac-mr-c-arun",
    "name": "Dr. Arun C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-c-arun/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4461.jpg"
  },
  {
    "id": "fac-mr-n-arun",
    "name": "Dr. Arun N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-arun/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.N.Arun_.jpg"
  },
  {
    "id": "fac-dr-arun-prakash-p",
    "name": "Dr. Arun Prakash P",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arun-prakash-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3952.jpg"
  },
  {
    "id": "fac-mr-kr-arun-prasad",
    "name": "Dr. Arun Prasad KR",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-kr-arun-prasad/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-11.jpg"
  },
  {
    "id": "fac-dr-arun-prasath-s",
    "name": "Dr. Arun Prasath S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arun-prasath-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-a-c-arun-raj",
    "name": "Dr. Arun Raj A C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-a-c-arun-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-103.jpg"
  },
  {
    "id": "fac-dr-arun-v",
    "name": "Dr. Arun V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arun-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arun-V.jpg"
  },
  {
    "id": "fac-dr-ar-aruna-rani",
    "name": "Dr. Arunarani A R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ar-aruna-rani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4382.jpg",
    "empId": "102975"
  },
  {
    "id": "fac-dr-s-arunarani-2",
    "name": "Dr. Arunarani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-arunarani-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-2-scaled.jpg"
  },
  {
    "id": "fac-dr-arunava-majumder",
    "name": "Dr. Arunava Majumder",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arunava-majumder/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-6.jpg"
  },
  {
    "id": "fac-dr-arunfred",
    "name": "Dr. Arunfred N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-arunfred/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/photo-my-white-background.jpg"
  },
  {
    "id": "fac-mr-c-arunkumar-2",
    "name": "Dr. Arunkumar C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-c-arunkumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-24.jpg"
  },
  {
    "id": "fac-dr-c-s-arunprabu",
    "name": "Dr. Arunprabu C S",
    "designation": "Assistant Professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-s-arunprabu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-21.39.12-1.jpeg"
  },
  {
    "id": "fac-dr-b-arunsundar",
    "name": "Dr. Arunsundar B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-arunsundar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4295.jpg"
  },
  {
    "id": "fac-dr-asath-alikhan-d-j",
    "name": "Dr. Asath Alikhan D J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-asath-alikhan-d-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0031.jpg"
  },
  {
    "id": "fac-mrs-asha-abraham",
    "name": "Dr. Asha Abraham",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-asha-abraham/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3795.jpg"
  },
  {
    "id": "fac-dr-ashish-mathew",
    "name": "Dr. Ashish Mathew",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ashish-mathew/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-ashok-kumar-p",
    "name": "Dr. Ashok Kumar P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ashok-kumar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-68.jpg"
  },
  {
    "id": "fac-dr-c-ashok-kumar",
    "name": "Dr. Ashokkumar C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-ashok-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashok-Kumar.jpg"
  },
  {
    "id": "fac-dr-ashwini-s",
    "name": "Dr. Ashwini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ashwini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashwini.jpg"
  },
  {
    "id": "fac-dr-a-asuntha",
    "name": "Dr. Asuntha A",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-asuntha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/VIN_244-copy-3.jpg"
  },
  {
    "id": "fac-ms-aswini-krishnan",
    "name": "Dr. Aswini Krishnan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-aswini-krishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-33.jpg"
  },
  {
    "id": "fac-dr-r-athilakshmi",
    "name": "Dr. Athilakshmi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-athilakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/athilakshmi_photo_new.jpg"
  },
  {
    "id": "fac-dr-atindra-kanti-mandal",
    "name": "Dr. Atindra Kanti Mandal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-atindra-kanti-mandal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-avinash-anand",
    "name": "Dr. Avinash Anand",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-avinash-anand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/photo.jpeg"
  },
  {
    "id": "fac-dr-avinash-vujji",
    "name": "Dr. Avinash Vujji",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-avinash-vujji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-5.jpg"
  },
  {
    "id": "fac-mr-awanish-kumar-tiwari",
    "name": "Dr. Awanish Kumar Tiwari",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-awanish-kumar-tiwari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Dr.-Avanish-Kumar-Tiwari.png"
  },
  {
    "id": "fac-dr-ayush-udeep",
    "name": "Dr. Ayush Udeep",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ayush-udeep/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-28.jpg"
  },
  {
    "id": "fac-ms-b-monika-nair",
    "name": "Dr. B. Monika Nair",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-b-monika-nair/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Website-Photo-Dr.-Monika-Nair-B-1.png"
  },
  {
    "id": "fac-dr-k-babu",
    "name": "Dr. Babu K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-babu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4425.jpg"
  },
  {
    "id": "fac-dr-badavath-anilkumar",
    "name": "Dr. Badavath Anilkumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-badavath-anilkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Dr.-AnilKumar-Badavath-1.jpg"
  },
  {
    "id": "fac-dr-r-bakiyalakshmi-2",
    "name": "Dr. Bakiya lakshmi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-bakiyalakshmi-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-11.jpg"
  },
  {
    "id": "fac-mrs-bakkialakshmi-v-s",
    "name": "Dr. Bakkialakshmi V S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-bakkialakshmi-v-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Bakk.jpeg"
  },
  {
    "id": "fac-dr-bala-ganesh-p",
    "name": "Dr. Bala Ganesh P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bala-ganesh-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/IMG_20250929_183340.png-e1781081248810.png"
  },
  {
    "id": "fac-t-balachander",
    "name": "Dr. Balachander T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-balachander/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4230.jpg"
  },
  {
    "id": "fac-dr-m-balaganesan",
    "name": "Dr. Balaganesan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-balaganesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5354.jpg"
  },
  {
    "id": "fac-dr-balaji-c",
    "name": "Dr. Balaji C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balaji-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Faculty-Photos-srmist-63-1.jpg"
  },
  {
    "id": "fac-dr-b-balakrithiga",
    "name": "Dr. Balakiruthiga B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-balakrithiga/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/DSC_3778.jpg"
  },
  {
    "id": "fac-dr-p-balakrishnan",
    "name": "Dr. Balakrishnan P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-balakrishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-27.jpg"
  },
  {
    "id": "fac-dr-balakumar-e",
    "name": "Dr. Balakumar Emayavaramban",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balakumar-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-5-1.jpg"
  },
  {
    "id": "fac-dr-balamurugan-d",
    "name": "Dr. Balamurugan D",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balamurugan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/faculty-photos-srmist-14.jpg"
  },
  {
    "id": "fac-dr-balamurugan-s",
    "name": "Dr. Balamurugan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balamurugan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/11-1.jpg"
  },
  {
    "id": "fac-dr-s-balamurugan",
    "name": "Dr. Balamurugan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-balamurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7348.jpg"
  },
  {
    "id": "fac-mr-s-balamurugan",
    "name": "Dr. Balamurugan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-balamurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-9.jpg"
  },
  {
    "id": "fac-balamurugan-srinivasan",
    "name": "Dr. Balamurugan Srinivasan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/balamurugan-srinivasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Bala-WebProfile-Final-e1783528549745.png"
  },
  {
    "id": "fac-dr-balasubramaniyan-p",
    "name": "Dr. Balasubramanian P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-balasubramaniyan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Passport-Photo-with-Blazer-scaled.jpg"
  },
  {
    "id": "fac-dr-banu-priya-p",
    "name": "Dr. Banu Priya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-banu-priya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3852.jpg"
  },
  {
    "id": "fac-dr-s-bashyam",
    "name": "Dr. Bashyam S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-bashyam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101223-Dr.-S.-Bashyam.jpg"
  },
  {
    "id": "fac-dr-baskar-b",
    "name": "Dr. Baskar B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-baskar-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/24.jpg"
  },
  {
    "id": "fac-dr-baskar-t",
    "name": "Dr. Baskar T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-baskar-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/bas-photo.jpg"
  },
  {
    "id": "fac-dr-beena-godbin-a",
    "name": "Dr. Beena Godbin A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-beena-godbin-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/photo.jpeg",
    "email": "beenagoa@srmist.edu.in",
    "phone": "6383637687"
  },
  {
    "id": "fac-dr-s-belina-v-j-sara",
    "name": "Dr. Belina V J Sara S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-belina-v-j-sara/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/7337-scaled.jpg"
  },
  {
    "id": "fac-dr-benisha",
    "name": "Dr. Benisha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-benisha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Dr.Benisha.jpeg"
  },
  {
    "id": "fac-dr-bhanu-pratap-yadav",
    "name": "Dr. Bhanu Pratap Yadav",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bhanu-pratap-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Bhanu_SRM-e1792640814594.png"
  },
  {
    "id": "fac-dr-bhanumathi-m",
    "name": "Dr. Bhanumathi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bhanumathi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-46.jpg"
  },
  {
    "id": "fac-dr-bharanitharan-k",
    "name": "Dr. Bharanitharan K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bharanitharan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/99404151601.jpg"
  },
  {
    "id": "fac-dr-bharathababu-k",
    "name": "Dr. Bharatha babu K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bharathababu-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Bharath-babu.jpg"
  },
  {
    "id": "fac-dr-bharathi-p",
    "name": "Dr. Bharathi P",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bharathi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-bharathi-r",
    "name": "Dr. Bharathi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/bharathi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/04.jpg"
  },
  {
    "id": "fac-dr-bharathi-s",
    "name": "Dr. Bharathi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bharathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-bhargavi-g",
    "name": "Dr. Bhargavi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-bhargavi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bhargavi.jpg"
  },
  {
    "id": "fac-a-bhargavi-haripriya",
    "name": "Dr. Bhargavi Haripriya  A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-bhargavi-haripriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/BhargaviProfilePic-scaled.jpg"
  },
  {
    "id": "fac-dr-bhaskar-chandra-behera",
    "name": "Dr. Bhaskar Chandra Behera",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bhaskar-chandra-behera/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4711.jpg"
  },
  {
    "id": "fac-ms-a-bhavani",
    "name": "Dr. Bhavani A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-bhavani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101722-Mrs.-A.-Bhavani.jpg"
  },
  {
    "id": "fac-bhuvaneshwari-m-2",
    "name": "Dr. Bhuvaneshwari M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/bhuvaneshwari-m-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-101.jpg"
  },
  {
    "id": "fac-mrs-d-bhuvaneshwari",
    "name": "Dr. Bhuvaneswari D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-d-bhuvaneshwari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/19-scaled.jpg"
  },
  {
    "id": "fac-dr-v-bibin-christopher",
    "name": "Dr. Bibin Christopher V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-bibin-christopher/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bibin.jpg"
  },
  {
    "id": "fac-dr-bibin-g-anand",
    "name": "Dr. Bibin G Anand",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bibin-g-anand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Picture1.png"
  },
  {
    "id": "fac-dr-bikash-koli-dey",
    "name": "Dr. Bikash Koli Dey",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bikash-koli-dey/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/bikash.jpg"
  },
  {
    "id": "fac-dr-binu-jerline-harrini-s",
    "name": "Dr. Binu Jerline Harrini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-binu-jerline-harrini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/BINU-PHOTO-LCS.jpg"
  },
  {
    "id": "fac-dr-bishal-chhetri",
    "name": "Dr. Bishal Chhetri",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-bishal-chhetri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/passport-photot-e1790918669592.jpeg"
  },
  {
    "id": "fac-dr-d-boopathi",
    "name": "Dr. Boopathi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-boopathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Boopathi-New.jpg"
  },
  {
    "id": "fac-ms-a-brindha",
    "name": "Dr. Brindha A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-brindha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-1-1.jpg"
  },
  {
    "id": "fac-mrs-r-brindha",
    "name": "Dr. Brindha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-r-brindha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R.jpg"
  },
  {
    "id": "fac-brindha-s",
    "name": "Dr. Brindha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/brindha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG-20231010-WA00101.jpg"
  },
  {
    "id": "fac-dr-brindha-k",
    "name": "Dr. Brindha.K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-brindha-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-briskilal-j",
    "name": "Dr. Briskilal J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-briskilal-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Briskilal.jpg"
  },
  {
    "id": "fac-dr-caleb-theodar-m",
    "name": "Dr. Caleb Theodar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-caleb-theodar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/2024-Caleb-scaled.jpg"
  },
  {
    "id": "fac-dr-carunaiselvane-c",
    "name": "Dr. Carunaiselvane C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-carunaiselvane-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Carunaiselvane-C.jpg"
  },
  {
    "id": "fac-dr-celine-prabha-s",
    "name": "Dr. Celine Prabha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-celine-prabha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-2.jpg"
  },
  {
    "id": "fac-dr-chagaleti-bharath-kumar",
    "name": "Dr. Chagaleti Bharath Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chagaleti-bharath-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/srm-faculty-1.jpg.jpeg"
  },
  {
    "id": "fac-mr-chandra-sekaran-d-s",
    "name": "Dr. Chandra Sekaran D S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-chandra-sekaran-d-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Chandra-Sekaran.jpg"
  },
  {
    "id": "fac-dr-chandrasekar-a",
    "name": "Dr. Chandrasekar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chandrasekar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Chandrasekar.-A.jpg"
  },
  {
    "id": "fac-dr-chandrasekaran-p-2",
    "name": "Dr. Chandrasekaran P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chandrasekaran-p-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Chan-1-scaled.jpg"
  },
  {
    "id": "fac-dr-p-chanthini",
    "name": "Dr. Chanthini P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-chanthini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/3-scaled.jpg"
  },
  {
    "id": "fac-dr-chinnadurai-m",
    "name": "Dr. Chinnadurai M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chinnadurai-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-chithambarathanu-m",
    "name": "Dr. Chithambarathanu M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-chithambarathanu-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-chithra-parameswaran",
    "name": "Dr. Chithra Parameswaran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-chithra-parameswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/chithra-photo-1.jpg"
  },
  {
    "id": "fac-dr-e-chitra",
    "name": "Dr. Chitra E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-chitra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100264-Dr.-E.-Chitra.jpg"
  },
  {
    "id": "fac-dr-chitra-n",
    "name": "Dr. Chitra N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chitra-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Dr.-N.-Chitra.png"
  },
  {
    "id": "fac-dr-chitra-r",
    "name": "Dr. Chitra R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-chitra-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Faculty-Photoshoot-19.png"
  },
  {
    "id": "fac-ms-christina-b",
    "name": "Dr. Christina Sweetline B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-christina-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-10-1.jpg"
  },
  {
    "id": "fac-dr-clament-sagaya-selvam",
    "name": "Dr. Clament Sagaya Selvam",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-clament-sagaya-selvam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3961.jpg"
  },
  {
    "id": "fac-dr-cross-t-asha-wise",
    "name": "Dr. Cross T. Asha Wise",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-cross-t-asha-wise/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Cross_T__Asha_Wise.png"
  },
  {
    "id": "fac-dr-damodar-panigrahy",
    "name": "Dr. Damodar Panigrahy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-damodar-panigrahy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102435-Dr.-Damodar-Panigrahy.jpg"
  },
  {
    "id": "fac-dr-dandumahanti-bhanu-priya",
    "name": "Dr. Dandumahanti Bhanu Priya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dandumahanti-bhanu-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Passport-Size-Photo-White-Background.png"
  },
  {
    "id": "fac-mr-j-daniel-glad-stephen",
    "name": "Dr. Daniel Glad Stephen J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-daniel-glad-stephen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-57.jpg"
  },
  {
    "id": "fac-dr-daryl-cresseda",
    "name": "Dr. Daryl Cressida G",
    "designation": "Assistant Professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-daryl-cresseda/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-scaled.jpg"
  },
  {
    "id": "fac-dr-dayana-d-s",
    "name": "Dr. Dayana D S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dayana-d-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3830-1.jpg"
  },
  {
    "id": "fac-dr-dayanand-sundaravadivelu",
    "name": "Dr. Dayanand Sundaravadivelu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dayanand-sundaravadivelu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-17-at-11.56.02-AM-e1786948082492.jpeg"
  },
  {
    "id": "fac-dr-debabrata-singh",
    "name": "Dr. Debabrata Singh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debabrata-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Debabrata.jpg"
  },
  {
    "id": "fac-dr-debanjan-kundu",
    "name": "Dr. Debanjan Kundu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debanjan-kundu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Debanjan_SRM-2.jpg"
  },
  {
    "id": "fac-debanjan-sarkar",
    "name": "Dr. Debanjan Sarkar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/debanjan-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7047.jpg"
  },
  {
    "id": "fac-dr-debarati-nath",
    "name": "Dr. Debarati Nath",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debarati-nath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/debarati-nath.jpg"
  },
  {
    "id": "fac-dr-debasis-haldar",
    "name": "Dr. Debasis Haldar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debasis-haldar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Photo.jpg"
  },
  {
    "id": "fac-dr-debdulal-ghosh",
    "name": "Dr. Debdulal Ghosh",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debdulal-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Debdulal_Ghosh_Photo-1.jpg"
  },
  {
    "id": "fac-dr-debie-shajie-a",
    "name": "Dr. Debie Shajie A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debie-shajie-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-17.jpg"
  },
  {
    "id": "fac-deboleena-sadhukhan",
    "name": "Dr. Deboleena Sadhukhan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/deboleena-sadhukhan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Biomedical-SRMIST-crop-Resize.jpg"
  },
  {
    "id": "fac-ms-deborah-serenade-stephen",
    "name": "Dr. Deborah Serenade Stephen",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-deborah-serenade-stephen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/DSS-SRM-profile.png"
  },
  {
    "id": "fac-dr-k-deepa",
    "name": "Dr. Deepa K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-deepa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/deepa-photo.jpg"
  },
  {
    "id": "fac-dr-n-deepa",
    "name": "Dr. Deepa N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-deepa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3790.jpg"
  },
  {
    "id": "fac-dr-deepa-r",
    "name": "Dr. Deepa R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepa-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/deepa.jpg"
  },
  {
    "id": "fac-dr-deepajothi",
    "name": "Dr. Deepajothi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepajothi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deepajoothi.jpg"
  },
  {
    "id": "fac-dr-deepak-bajhaiya",
    "name": "Dr. Deepak Bajhaiya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepak-bajhaiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-deepak-kumar-kashyap",
    "name": "Dr. Deepak Kumar Kashyap",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepak-kumar-kashyap/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Modified.jpg"
  },
  {
    "id": "fac-dr-deepak-kumar-yadav",
    "name": "Dr. Deepak Kumar Yadav",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepak-kumar-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Profile_SRMIST.png"
  },
  {
    "id": "fac-s-deepalakshmi",
    "name": "Dr. Deepalakshmi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-deepalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600479-new.jpg"
  },
  {
    "id": "fac-dr-a-deepan",
    "name": "Dr. Deepan A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-deepan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Deepan-scaled.jpg"
  },
  {
    "id": "fac-dr-deepika-d",
    "name": "Dr. Deepika D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepika-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3792.jpg"
  },
  {
    "id": "fac-dr-k-deepika",
    "name": "Dr. Deepika K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-deepika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-deepika-v",
    "name": "Dr. Deepika V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-deepika-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Deep-3-scaled-e1680760260209.jpg"
  },
  {
    "id": "fac-ms-delsi-robinsha-s",
    "name": "Dr. Delsi Robinsha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-delsi-robinsha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/srmist-faculty-14-3.jpg"
  },
  {
    "id": "fac-deluxni-n",
    "name": "Dr. Deluxni N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/deluxni-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deluxni-N.jpg"
  },
  {
    "id": "fac-dr-devagnanam-j",
    "name": "Dr. Devagnanam J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-devagnanam-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Devagnanam-J.jpg"
  },
  {
    "id": "fac-dr-devakirubakaran-s",
    "name": "Dr. Devakirubakaran S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-devakirubakaran-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Deivakirubakaran.jpg"
  },
  {
    "id": "fac-dr-devendran-m",
    "name": "Dr. Devendran M",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-devendran-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Devendran.jpg"
  },
  {
    "id": "fac-dr-devi-k",
    "name": "Dr. Devi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-devi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Devi.jpg"
  },
  {
    "id": "fac-ms-devi-s",
    "name": "Dr. Devi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-devi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/005.JPG-scaled-e1782362789351.jpeg"
  },
  {
    "id": "fac-dr-dhanalakshmi-j",
    "name": "Dr. Dhanalakshmi J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/4.jpg"
  },
  {
    "id": "fac-dr-dhanalakshmi-k-2",
    "name": "Dr. Dhanalakshmi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG-20251006-WA00011.jpg"
  },
  {
    "id": "fac-dr-dhanalakshmi-k",
    "name": "Dr. Dhanalakshmi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5269.jpg"
  },
  {
    "id": "fac-dr-dhanalakshmi-r",
    "name": "Dr. Dhanalakshmi. R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5291.jpg"
  },
  {
    "id": "fac-dr-g-dhanavathy",
    "name": "Dr. Dhanavathy G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-dhanavathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dhana.jpg"
  },
  {
    "id": "fac-dr-v-dharini",
    "name": "Dr. Dharini V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-dharini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-s-dhivya-devi",
    "name": "Dr. Dhivya Devi S",
    "designation": "Assistant Professor  & Program Chair - MBA Business Analytics",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-dhivya-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/21-1.jpg"
  },
  {
    "id": "fac-dr-dhivya-k-2",
    "name": "Dr. Dhivya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhivya-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Dhivya.jpg"
  },
  {
    "id": "fac-dr-dhivya-k",
    "name": "Dr. Dhivya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhivya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Dhivya.K.jpg"
  },
  {
    "id": "fac-ms-s-diana-emerald-aasha",
    "name": "Dr. Diana Emerald Aasha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-diana-emerald-aasha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101561-Mrs.-S.-Diana-Emerald-Aasha.jpg"
  },
  {
    "id": "fac-dr-dibyendu-dey",
    "name": "Dr. Dibyendu Dey",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dibyendu-dey/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-4.jpg"
  },
  {
    "id": "fac-dr-diksha-kurchaniya",
    "name": "Dr. Diksha Kurchaniya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-diksha-kurchaniya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Diksha.jpg"
  },
  {
    "id": "fac-dr-dinesh-g",
    "name": "Dr. Dinesh G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dinesh-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dinesh.jpeg"
  },
  {
    "id": "fac-dr-j-dinesh",
    "name": "Dr. Dinesh J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-dinesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0002_DSC_9417.jpg"
  },
  {
    "id": "fac-dr-dineshkumar-k",
    "name": "Dr. Dineshkumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dineshkumar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-44.jpg"
  },
  {
    "id": "fac-dr-diptesh-dey",
    "name": "Dr. Diptesh Dey",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-diptesh-dey/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-42.jpg"
  },
  {
    "id": "fac-ms-g-divya",
    "name": "Dr. Divya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-g-divya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3789.jpg"
  },
  {
    "id": "fac-dr-g-divya",
    "name": "Dr. Divya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-divya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Divya-G.png"
  },
  {
    "id": "fac-dr-divya-mohan",
    "name": "Dr. Divya Mohan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divya-mohan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/divya.jpg"
  },
  {
    "id": "fac-dr-divya-p",
    "name": "Dr. Divya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/DIVYA_SRMIST_Faculty.jpg.jpeg"
  },
  {
    "id": "fac-ms-divya-s",
    "name": "Dr. Divya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-divya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG_20251006_094817.jpg"
  },
  {
    "id": "fac-dr-durgadevi-e",
    "name": "Dr. Durgadevi E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-durgadevi-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Durga.png"
  },
  {
    "id": "fac-mr-e-elamaran",
    "name": "Dr. Elamaran E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-e-elamaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101292-Dr.-E.-Elamaran.jpg"
  },
  {
    "id": "fac-dr-elamathiyan-e",
    "name": "Dr. Elamathiyan E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elamathiyan-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/6-1-scaled.jpg"
  },
  {
    "id": "fac-dr-elangovan-d",
    "name": "Dr. Elangovan D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elangovan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/1261-scaled.jpg"
  },
  {
    "id": "fac-dr-elangovan-elamurugu",
    "name": "Dr. Elangovan Elamurugu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elangovan-elamurugu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/29.jpg"
  },
  {
    "id": "fac-dr-elangovan-v-r",
    "name": "Dr. Elangovan V R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elangovan-v-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9425-scaled.jpg"
  },
  {
    "id": "fac-dr-r-elavarasan",
    "name": "Dr. Elavarasan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-elavarasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Elavarasan-R.jpg"
  },
  {
    "id": "fac-dr-elavarasi-g",
    "name": "Dr. Elavarasi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-elavarasi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Dr.G.Elavarasi.jpeg"
  },
  {
    "id": "fac-mr-elumalaivasan-p",
    "name": "Dr. Elumalaivasan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-elumalaivasan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4258.jpg"
  },
  {
    "id": "fac-mr-eswara-vara-prasadarao",
    "name": "Dr. Eswara Vara Prasadarao Komarala",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-eswara-vara-prasadarao/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Website-Pic.jpg"
  },
  {
    "id": "fac-ms-k-ezhil",
    "name": "Dr. Ezhil K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-k-ezhil/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1415-transformed.png"
  },
  {
    "id": "fac-dr-farhath-sherin",
    "name": "Dr. Farhath Sherin",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-farhath-sherin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/PHOTO-2024-09-03-09-57-05-1.jpg"
  },
  {
    "id": "fac-franklin-m",
    "name": "Dr. Franklin M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/franklin-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/IMG-20220313-WA0003.jpg"
  },
  {
    "id": "fac-dr-fredrick-jorgenson-c",
    "name": "Dr. Fredrick Jorgenson C",
    "designation": "Assistant Professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-fredrick-jorgenson-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Dr.-Fredrick-Jorgenson-Photoroom.png"
  },
  {
    "id": "fac-mr-g-elavel-visuvanathan",
    "name": "Dr. G. Elavel Visuvanathan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-elavel-visuvanathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-19.jpg"
  },
  {
    "id": "fac-dr-g-latha",
    "name": "Dr. G. Latha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-latha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-g-madhumitha",
    "name": "Dr. G. Madhumitha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-madhumitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Madhumitha_Gnanasankaran.png"
  },
  {
    "id": "fac-dr-g-sowmiya",
    "name": "Dr. G. Sowmiya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-sowmiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-g-gajendran",
    "name": "Dr. Gajendran G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-gajendran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5246.jpg"
  },
  {
    "id": "fac-dr-ganaga-durga-devi-r",
    "name": "Dr. Ganaga Durga devi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganaga-durga-devi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/13.jpg"
  },
  {
    "id": "fac-mr-ganapathy-ramasamy",
    "name": "Dr. Ganapathy Ramasamy N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ganapathy-ramasamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-5-1.jpg"
  },
  {
    "id": "fac-dr-gandhi-sony-pears",
    "name": "Dr. Gandi Sony Pears",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gandhi-sony-pears/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/13-2-300x300-1.jpg"
  },
  {
    "id": "fac-dr-ganesamurthy-s",
    "name": "Dr. Ganesamurthy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganesamurthy-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-4.jpg"
  },
  {
    "id": "fac-dr-ganesan-g",
    "name": "Dr. Ganesan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganesan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-G.-Ganesan-Genetic-Department-4.jpeg"
  },
  {
    "id": "fac-dr-ganesh-s-2",
    "name": "Dr. Ganesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganesh-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ganesh-Sir-with-coat.jpg"
  },
  {
    "id": "fac-dr-ganeshkumar-m",
    "name": "Dr. Ganeshkumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganeshkumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Gk-Pic.png"
  },
  {
    "id": "fac-dr-ganeshkumar-n",
    "name": "Dr. Ganeshkumar N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ganeshkumar-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/700578_1743676640.jpg"
  },
  {
    "id": "fac-dr-p-ganesh-kumar",
    "name": "Dr. GaneshKumar Poongavanam",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-ganesh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/ganesh7.jpg"
  },
  {
    "id": "fac-dr-gangadhara-b",
    "name": "Dr. Gangadhara B",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gangadhara-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Photo_Profession.jpg"
  },
  {
    "id": "fac-ms-s-s-gayathri",
    "name": "Dr. Gayathri S. S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-s-gayathri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101994-Mrs.S.S.-Gayathri.jpg"
  },
  {
    "id": "fac-geetha-g",
    "name": "Dr. Geetha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/geetha-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-11-at-11.41.32.jpeg"
  },
  {
    "id": "fac-dr-geetha-jenifel-m",
    "name": "Dr. Geetha Jenifel M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-geetha-jenifel-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.Geetha-Jenifel.jpg"
  },
  {
    "id": "fac-dr-k-geetha",
    "name": "Dr. Geetha K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-geetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-K.jpg"
  },
  {
    "id": "fac-dr-geetha-p",
    "name": "Dr. Geetha P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-geetha-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr-P-Geetha.jpeg"
  },
  {
    "id": "fac-dr-r-geetha",
    "name": "Dr. Geetha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-geetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-R.jpg"
  },
  {
    "id": "fac-s-geethanjali",
    "name": "Dr. Geethanjali S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-geethanjali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/20230406_200425-scaled.jpg"
  },
  {
    "id": "fac-dr-gembali-vidyasagar",
    "name": "Dr. Gembali Vidyasagar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gembali-vidyasagar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-s-girirajan",
    "name": "Dr. Girirajan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-girirajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Girirajan.jpg"
  },
  {
    "id": "fac-dr-gisha-sivan",
    "name": "Dr. Gisha Sivan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gisha-sivan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-04-04-at-1.56.00-PM.jpeg"
  },
  {
    "id": "fac-dr-m-gobi",
    "name": "Dr. Gobi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-gobi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Dr.-M.-Gobi.jpg"
  },
  {
    "id": "fac-dr-gokul-raj-m",
    "name": "Dr. Gokul Raj M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gokul-raj-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Gokul-FSH_DPE-600x600-1.jpg"
  },
  {
    "id": "fac-dr-gokulnath-c",
    "name": "Dr. Gokulnath C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gokulnath-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulnath.jpg"
  },
  {
    "id": "fac-dr-gomathi-meena-s",
    "name": "Dr. Gomathi Meena S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gomathi-meena-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Dr.-S.-Gomathi-Meena-SRMFSH-2.jpeg"
  },
  {
    "id": "fac-dr-gopi-v",
    "name": "Dr. Gopi V",
    "designation": "Assistant Professor (Horticulture - Fruit Science)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gopi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/W.png"
  },
  {
    "id": "fac-dr-gopinath-n",
    "name": "Dr. Gopinath N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gopinath-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4420.jpg"
  },
  {
    "id": "fac-mr-gopinath-n",
    "name": "Dr. Gopinath N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-gopinath-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/1737269663534.jpg"
  },
  {
    "id": "fac-dr-s-gopinath-2",
    "name": "Dr. Gopinath S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-gopinath-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-31.jpg"
  },
  {
    "id": "fac-dr-gopirajan-pv",
    "name": "Dr. Gopirajan PV",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gopirajan-pv/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Gopirajan-Website.png"
  },
  {
    "id": "fac-dr-gouranga-dutta",
    "name": "Dr. Gouranga Dutta",
    "designation": "Assistant Professor Grade 1",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gouranga-dutta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-18-at-3.07.51-PM.jpeg"
  },
  {
    "id": "fac-p-gouthaman",
    "name": "Dr. Gouthaman P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-gouthaman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3779.jpg"
  },
  {
    "id": "fac-dr-govindharaj-i",
    "name": "Dr. Govindharaj I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-govindharaj-i/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-k-gowri",
    "name": "Dr. Gowri K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-gowri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/34-1.jpg"
  },
  {
    "id": "fac-dr-gowtham-p",
    "name": "Dr. Gowtham Padmanabhan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gowtham-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/gowtham.jpg"
  },
  {
    "id": "fac-dr-gracy-m",
    "name": "Dr. Gracy M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-gracy-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/gracy-profile.jpeg"
  },
  {
    "id": "fac-gulothungan-g",
    "name": "Dr. Gulothungan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/gulothungan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7021_GULOPHOTO-1.jpg"
  },
  {
    "id": "fac-dr-m-gunasekaran",
    "name": "Dr. Gunasekaran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-gunasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_8980-scaled.jpg"
  },
  {
    "id": "fac-mrs-s-hannah-pauline",
    "name": "Dr. Hannah Pauline S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-hannah-pauline/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101577-Mrs.S.-Hannah-Pauline.jpg"
  },
  {
    "id": "fac-mr-b-hari-narayana-rao",
    "name": "Dr. Hari Narayana Rao B",
    "designation": "Assistant Professor ( S. G )",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-b-hari-narayana-rao/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7355.jpg"
  },
  {
    "id": "fac-dr-m-harie-karthikeyan",
    "name": "Dr. Harie Karthikeyan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-harie-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/7-1-scaled.jpg"
  },
  {
    "id": "fac-dr-hariharan-r",
    "name": "Dr. Hariharan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-hariharan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/IMG_8349___-scaled-e1754234986373.jpg"
  },
  {
    "id": "fac-dr-a-hariharasudan",
    "name": "Dr. Hariharasudan A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-hariharasudan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/srmist-faculty-37.jpg"
  },
  {
    "id": "fac-dr-harinarayana-ankamreddy",
    "name": "Dr. Harinarayana Ankamreddy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-harinarayana-ankamreddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Profile_Bio-Tech_0098_DSC_9203.jpg"
  },
  {
    "id": "fac-dr-hariprasad-s",
    "name": "Dr. Hariprasad S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-hariprasad-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/5Y0A6197-copy-scaled-e1729236133115.jpg"
  },
  {
    "id": "fac-dr-harish-kumar-s",
    "name": "Dr. Harish Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-harish-kumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-harisudha-k-2",
    "name": "Dr. Harisudha K",
    "designation": "Assistant Professor (Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-harisudha-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100267-Dr.-K.-Harisudha.jpg"
  },
  {
    "id": "fac-dr-haroonhaider-homi-sidhwa",
    "name": "Dr. Haroonhaider H. Sidhwa",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-haroonhaider-homi-sidhwa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-27.jpg"
  },
  {
    "id": "fac-dr-harriet-linda-c",
    "name": "Dr. Harriet Linda C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-harriet-linda-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-43.jpg"
  },
  {
    "id": "fac-dr-harsha-gopala-krishnan",
    "name": "Dr. Harsha Gopalakrishnan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-harsha-gopala-krishnan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/5Y0A4123-removebg-preview.jpg"
  },
  {
    "id": "fac-ms-heartlin-maria-h",
    "name": "Dr. Heartlin Maria H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-heartlin-maria-h/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/IMG_1195.jpg"
  },
  {
    "id": "fac-t-r-hebzibah-beulah-sunganthi",
    "name": "Dr. Hebzibah Beulah Suganthi T.R.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-r-hebzibah-beulah-sunganthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-1-2-scaled.jpg"
  },
  {
    "id": "fac-dr-d-helen",
    "name": "Dr. Helen D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-helen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/5-scaled.jpg"
  },
  {
    "id": "fac-ms-m-hema",
    "name": "Dr. Hema M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-m-hema/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/M.-Hema.jpg"
  },
  {
    "id": "fac-dr-m-hemanathan",
    "name": "Dr. Hemanathan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-hemanathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/7-1-scaled.jpg"
  },
  {
    "id": "fac-dr-c-h-hemanth-kumar",
    "name": "Dr. Hemanth Kumar CH",
    "designation": "Research Assistant Professor Grade-II",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-h-hemanth-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/14.jpg"
  },
  {
    "id": "fac-dr-hemavathi-s",
    "name": "Dr. Hemavathi S",
    "designation": "ASSISTANT PROFESSOR",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-hemavathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-37.jpg"
  },
  {
    "id": "fac-mr-himadri-nirjhar-mandal",
    "name": "Dr. Himadri Nirjhar Mandal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-himadri-nirjhar-mandal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-13.jpg"
  },
  {
    "id": "fac-b-ida-seraphim",
    "name": "Dr. Ida Seraphim B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-ida-seraphim/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ida.jpg"
  },
  {
    "id": "fac-dr-ilakiya-t",
    "name": "Dr. Ilakiya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ilakiya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/T.Ilakiya-1.jpg"
  },
  {
    "id": "fac-dr-r-c-ilambirai",
    "name": "Dr. Ilambirai R C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-c-ilambirai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/R.C.ILAMBIRAI-2.jpg"
  },
  {
    "id": "fac-dr-ilankadhir",
    "name": "Dr. Ilankadhir M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ilankadhir/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0039_DSC_9371.jpg"
  },
  {
    "id": "fac-dr-illakiya-t",
    "name": "Dr. Illakiya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-illakiya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/photo.png"
  },
  {
    "id": "fac-mr-imran-hussain",
    "name": "Dr. Imran Hussain",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-imran-hussain/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Photo_Image_2024-07-20_at_12.08.04_e0e17882-removebg-preview.png"
  },
  {
    "id": "fac-mr-inamul-hussain",
    "name": "Dr. Inamul Hussain",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-inamul-hussain/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-71.jpg"
  },
  {
    "id": "fac-dr-indhushree-a",
    "name": "Dr. Indhushree A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-indhushree-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/IMG_20240417_105251-233x300-1.jpg"
  },
  {
    "id": "fac-mrs-s-indirani",
    "name": "Dr. Indirani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-indirani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Dr.Indirani.jpg"
  },
  {
    "id": "fac-mr-indra-bhooshan-sharma",
    "name": "Dr. Indra Bhooshan Sharma",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-indra-bhooshan-sharma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/faculty-photoshoot-1-14.jpg"
  },
  {
    "id": "fac-dr-indrajit-sahu",
    "name": "Dr. Indrajit Sahu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-indrajit-sahu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/12.Dr_.Indrajit-Saha-Medical-Research.jpg"
  },
  {
    "id": "fac-dr-indumathi-g",
    "name": "Dr. Indumathi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-indumathi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/faculty-photoshoot-1-3.jpg"
  },
  {
    "id": "fac-dr-b-infant-santhose",
    "name": "Dr. Infant Santhose B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-infant-santhose/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600306-scaled.jpg"
  },
  {
    "id": "fac-dr-ishwarya-k",
    "name": "Dr. Ishwarya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ishwarya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/1.jpg"
  },
  {
    "id": "fac-ms-iswarya-priya",
    "name": "Dr. Iswarya Priya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-iswarya-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/IswaryaPriya_2025.jpg"
  },
  {
    "id": "fac-dr-j-divya",
    "name": "Dr. J. Divya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-divya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-j-karisma",
    "name": "Dr. J. Karisma",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-karisma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/srmist-faculty-38.jpg"
  },
  {
    "id": "fac-mrs-a-jaba-deva-krupa",
    "name": "Dr. Jaba Deva Krupa A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-a-jaba-deva-krupa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-9.jpg"
  },
  {
    "id": "fac-a-jackulin-mahariba",
    "name": "Dr. Jackulin Mahariba A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-jackulin-mahariba/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4464.jpg"
  },
  {
    "id": "fac-dr-jagabandhu-paul",
    "name": "Dr. Jagabandhu Paul",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jagabandhu-paul/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-47.jpg"
  },
  {
    "id": "fac-dr-m-jagadeesan",
    "name": "Dr. Jagadeesan M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-jagadeesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/jaga_pto.png"
  },
  {
    "id": "fac-s-jagadeesan",
    "name": "Dr. Jagadeesan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-jagadeesan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jagathesan.jpg"
  },
  {
    "id": "fac-dr-jagadeesh-m",
    "name": "Dr. Jagadeesh M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jagadeesh-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Jagadeesh.jpg"
  },
  {
    "id": "fac-dr-jagadish-kumar-n",
    "name": "Dr. Jagadish Kumar N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jagadish-kumar-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/2.jpg"
  },
  {
    "id": "fac-dr-k-jagan-babu",
    "name": "Dr. Jagan Babu K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-jagan-babu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0036_DSC_9374.jpg"
  },
  {
    "id": "fac-mr-m-k-jaganathan",
    "name": "Dr. Jaganathan M. K.",
    "designation": "Assistant Professor ( Sr. G )",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-k-jaganathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Jaganathan_mk_photo.jpg"
  },
  {
    "id": "fac-s-jahira-parveen",
    "name": "Dr. Jahira Parveen S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-jahira-parveen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0006_DSC_9412.jpg"
  },
  {
    "id": "fac-dr-jain-jacob-m",
    "name": "Dr. Jain Jacob M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jain-jacob-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/09.jpg"
  },
  {
    "id": "fac-jaishree-d-2",
    "name": "Dr. Jaishree D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/jaishree-d-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-68.jpg"
  },
  {
    "id": "fac-dr-jaligam-murali-mohan",
    "name": "Dr. Jaligam Murali Mohan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jaligam-murali-mohan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Pic-1-e1745474921943.jpg"
  },
  {
    "id": "fac-ms-janani-m",
    "name": "Dr. Janani M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-janani-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Janani.jpg"
  },
  {
    "id": "fac-ms-janani-s",
    "name": "Dr. Janani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-janani-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-v-janani-2",
    "name": "Dr. Janani V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-janani-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-25-at-9.01.46-PM.jpeg"
  },
  {
    "id": "fac-dr-janeni-n",
    "name": "Dr. Janeni N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-janeni-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Faculty-Photos-srmist-20.jpg"
  },
  {
    "id": "fac-r-jansi",
    "name": "Dr. Jansi. R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-jansi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102956-Dr.R.-Jansi.jpg"
  },
  {
    "id": "fac-ms-jasmine-s",
    "name": "Dr. Jasmine S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jasmine-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-59.jpg"
  },
  {
    "id": "fac-dr-jauny-s",
    "name": "Dr. Jauny S",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jauny-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-33.jpg"
  },
  {
    "id": "fac-dr-jayapriya-t",
    "name": "Dr. Jaya Priya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jayapriya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/ChatGPT-Image-May-18-2026-04_07_16-PM-e1779642467194.png"
  },
  {
    "id": "fac-dr-j-j-jayakanth",
    "name": "Dr. Jayakanth J J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-j-jayakanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/J-J-Jayakanth.jpg"
  },
  {
    "id": "fac-dr-jayakrishnan-u",
    "name": "Dr. Jayakrishnan U",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jayakrishnan-u/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Untitled.jpg"
  },
  {
    "id": "fac-dr-jayantasamanta",
    "name": "Dr. Jayanta Samanta",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jayantasamanta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3923-e1713710940757.jpg"
  },
  {
    "id": "fac-dr-d-jayanthi",
    "name": "Dr. Jayanthi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-jayanthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/IMG_1504s.jpg"
  },
  {
    "id": "fac-l-jayanthi",
    "name": "Dr. Jayanthi L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/l-jayanthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0050_DSC_9360.jpg"
  },
  {
    "id": "fac-dr-m-jeevarathinam",
    "name": "Dr. Jeevarathinam M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-jeevarathinam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/extra-1-scaled.jpg"
  },
  {
    "id": "fac-dr-jeevitha-priya-m",
    "name": "Dr. Jeevitha Priya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jeevitha-priya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-20-1.jpg"
  },
  {
    "id": "fac-mr-jegadeesan-k",
    "name": "Dr. Jegadeesan  K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-jegadeesan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-15.00.46.jpeg"
  },
  {
    "id": "fac-dr-jegadeeswaran-m",
    "name": "Dr. Jegadeeswaran M",
    "designation": "Assistant Professor (Sr. Grade)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jegadeeswaran-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Jegadeeswaran.-M.jpg"
  },
  {
    "id": "fac-mr-p-jekan",
    "name": "Dr. Jekan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-jekan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/unnamed.png"
  },
  {
    "id": "fac-dr-jency-rubia-j",
    "name": "Dr. Jency Rubia J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jency-rubia-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Jelsi.jpg"
  },
  {
    "id": "fac-dr-jenesis-zodykha-v",
    "name": "Dr. Jenesis Zodykha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jenesis-zodykha-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-i-jerlina",
    "name": "Dr. Jerlina I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-i-jerlina/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7317.jpg"
  },
  {
    "id": "fac-dr-jesline-d",
    "name": "Dr. Jesline",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jesline-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jesline.jpg"
  },
  {
    "id": "fac-dr-jeyajothi-r-2",
    "name": "Dr. Jeyajothi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jeyajothi-r-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-R.-Jeyajothi.jpg"
  },
  {
    "id": "fac-dr-jeyanthi-a",
    "name": "Dr. Jeyanthi A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jeyanthi-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-22-at-10.36.26-AM-3.jpeg"
  },
  {
    "id": "fac-dr-m-jeyaselvi",
    "name": "Dr. Jeyaselvi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-jeyaselvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3804.jpg"
  },
  {
    "id": "fac-t-m-jeyashree-2",
    "name": "Dr. Jeyashree T.M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-m-jeyashree-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-13.jpg"
  },
  {
    "id": "fac-j-jeyasudha",
    "name": "Dr. Jeyasudha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-jeyasudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4499.jpg"
  },
  {
    "id": "fac-dr-jeyavim-sherin-r-c",
    "name": "Dr. Jeyavim Sherin R C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jeyavim-sherin-r-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Sherin_Photo.jpg"
  },
  {
    "id": "fac-jishnu-k-s",
    "name": "Dr. Jishnu K S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/jishnu-k-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Jishnu-K-S.jpg"
  },
  {
    "id": "fac-dr-jishnu-sen",
    "name": "Dr. Jishnu Sen",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jishnu-sen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-20-at-17.07.33.jpeg"
  },
  {
    "id": "fac-john-britto-m",
    "name": "Dr. John Britto M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/john-britto-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5122-scaled.jpg"
  },
  {
    "id": "fac-dr-john-deva-prasanna-d-s",
    "name": "Dr. John Deva Prasanna D S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-john-deva-prasanna-d-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/John_deva_Prasanna-Pic-1.jpg"
  },
  {
    "id": "fac-dr-john-joseph",
    "name": "Dr. John Joseph",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-john-joseph/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/1.jpg"
  },
  {
    "id": "fac-mr-joji-johnson",
    "name": "Dr. Joji Johnson",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-joji-johnson/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Joji-Johnson.jpg"
  },
  {
    "id": "fac-dr-jone-linton",
    "name": "Dr. Jone Linton",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jone-linton/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-22-at-10.55.18-AM.jpeg"
  },
  {
    "id": "fac-mr-s-joseph-james",
    "name": "Dr. Joseph James S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-joseph-james/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Joseh-Profile_photo.jpg"
  },
  {
    "id": "fac-mr-v-joseph-raymond",
    "name": "Dr. Joseph Raymond V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-joseph-raymond/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3821.jpg"
  },
  {
    "id": "fac-dr-josephine-mary-juliana-m",
    "name": "Dr. Josephine Mary Juliana M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-josephine-mary-juliana-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-jospeh-auxilius-jude-m",
    "name": "Dr. Jospeh Auxilius Jude M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-jospeh-auxilius-jude-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-joyentanuj-das",
    "name": "Dr. Joyentanuj Das",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-joyentanuj-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-15.png"
  },
  {
    "id": "fac-dr-juhi-reashma-s-r-k",
    "name": "Dr. Juhi Reashma S.R.K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-juhi-reashma-s-r-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-01-11-at-1.19.01-PM.jpeg"
  },
  {
    "id": "fac-dr-junaid-masud-laskar",
    "name": "Dr. Junaid Masud Laskar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-junaid-masud-laskar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Junaid-passport.jpg"
  },
  {
    "id": "fac-justina-michael-j",
    "name": "Dr. Justina Michael J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/justina-michael-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/justina.jpg"
  },
  {
    "id": "fac-mr-d-justus-reymond-2",
    "name": "Dr. Justus Reymond D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-d-justus-reymond-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-6.jpg"
  },
  {
    "id": "fac-dr-k-monikapani",
    "name": "Dr. K. Monikapani",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-monikapani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-k-s-anandh-2",
    "name": "Dr. K. S. Anandh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-s-anandh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/002.jpg-scaled.jpeg"
  },
  {
    "id": "fac-dr-kaaviya-priya-u",
    "name": "Dr. Kaaviya Priya U",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kaaviya-priya-u/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Dr-UKP-srmist-faculty-53-1.jpg"
  },
  {
    "id": "fac-dr-kala-k",
    "name": "Dr. Kala K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kala-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Dr.-Kala-K-Faculty-Profile-1.jpg"
  },
  {
    "id": "fac-dr-kalaiarasan-ponnusamy",
    "name": "Dr. Kalaiarasan Ponnusamy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kalaiarasan-ponnusamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-m-kalaivani",
    "name": "Dr. Kalaivani M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-kalaivani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Photo_MK-new-scaled.jpg"
  },
  {
    "id": "fac-mrs-kalaiyarasi-r",
    "name": "Dr. Kalaiyarasi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kalaiyarasi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/14-1.jpg"
  },
  {
    "id": "fac-dr-kalpana-c",
    "name": "Dr. Kalpana C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kalpana-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/kalpana-1.png"
  },
  {
    "id": "fac-dr-v-kalyanasundaram",
    "name": "Dr. Kalyanasundaram V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-kalyanasundaram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0646-scaled.jpg"
  },
  {
    "id": "fac-dr-kamalakannan-p",
    "name": "Dr. Kamalakannan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kamalakannan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Kamalakannan_Photo.jpg"
  },
  {
    "id": "fac-dr-kamalakkannan-r",
    "name": "Dr. Kamalakkannan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kamalakkannan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5316.jpg"
  },
  {
    "id": "fac-kamalanandhini-m",
    "name": "Dr. Kamalanandhini M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kamalanandhini-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-2.jpg"
  },
  {
    "id": "fac-dr-kanagaraj-palaniyandi",
    "name": "Dr. Kanagaraj Palaniyandi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kanagaraj-palaniyandi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0028_DSC_9281.jpg"
  },
  {
    "id": "fac-dr-kanaka-parvathi-k",
    "name": "Dr. Kanaka Parvathi .K",
    "designation": "Assistant Professor Grade-II",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kanaka-parvathi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/23.jpg"
  },
  {
    "id": "fac-mr-p-kanakaraj",
    "name": "Dr. Kanakaraj P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-kanakaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/5Y0A0384.jpg"
  },
  {
    "id": "fac-dr-m-kandan",
    "name": "Dr. Kandan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-kandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kandan.jpg"
  },
  {
    "id": "fac-dr-n-kanimozhi",
    "name": "Dr. Kanimozhi N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-kanimozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Kanimozhi_NEW.jpg"
  },
  {
    "id": "fac-dr-kanipriya-m",
    "name": "Dr. Kanipriya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kanipriya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4379.jpg"
  },
  {
    "id": "fac-dr-kanmani-g-r",
    "name": "Dr. Kanmani G R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kanmani-g-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/12.jpg"
  },
  {
    "id": "fac-dr-kanmani-k",
    "name": "Dr. Kanmani K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kanmani-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Faculty-Photos-srmist-24-1.jpg"
  },
  {
    "id": "fac-mrs-kanmani-sivagar",
    "name": "Dr. Kanmani S P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kanmani-sivagar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanmani.jpg"
  },
  {
    "id": "fac-dr-kannan-b-t",
    "name": "Dr. Kannan B T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kannan-b-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-BTK.jpg"
  },
  {
    "id": "fac-dr-kannan-d",
    "name": "Dr. Kannan D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kannan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/4583-Kannan.jpg"
  },
  {
    "id": "fac-dr-r-m-kannan",
    "name": "Dr. Kannan R.M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-m-kannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-6.jpg"
  },
  {
    "id": "fac-dr-karpagam-m",
    "name": "Dr. Karpagam M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karpagam-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-8-1.jpg"
  },
  {
    "id": "fac-dr-kathic-s",
    "name": "Dr. Karthic S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kathic-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/8.jpg"
  },
  {
    "id": "fac-dr-karthick-b",
    "name": "Dr. Karthick B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthick-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-33.jpg"
  },
  {
    "id": "fac-dr-karthick-s",
    "name": "Dr. Karthick S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthick-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5332.jpg"
  },
  {
    "id": "fac-dr-karthic-s",
    "name": "Dr. Karthick Subramani",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthic-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-15.jpg"
  },
  {
    "id": "fac-dr-karthick-s-a",
    "name": "Dr. Karthick. S. A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthick-s-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Karthick.jpg"
  },
  {
    "id": "fac-karthiga-s-2",
    "name": "Dr. Karthiga S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/karthiga-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/karthiga.jpeg"
  },
  {
    "id": "fac-dr-karthick-c",
    "name": "Dr. Karthik C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthick-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5299.jpg"
  },
  {
    "id": "fac-dr-karthik-d",
    "name": "Dr. Karthik D",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-karthik-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3995.jpg"
  },
  {
    "id": "fac-dr-k-karthik-sridar",
    "name": "Dr. Karthik Sridar K",
    "designation": "Assistant Professor (SG)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-karthik-sridar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/photo-profile-karthik-scaled.jpg"
  },
  {
    "id": "fac-karthika-p-c",
    "name": "Dr. Karthika P C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/karthika-p-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DR.P.C.KARTHIKA.jpg"
  },
  {
    "id": "fac-mrs-karthika-s",
    "name": "Dr. Karthika S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-karthika-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-3.jpg"
  },
  {
    "id": "fac-mr-karthikeyan-g",
    "name": "Dr. Karthikeyan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-karthikeyan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-h-karthikeyan",
    "name": "Dr. Karthikeyan H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/h-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4231.jpg"
  },
  {
    "id": "fac-dr-k-karthikeyan",
    "name": "Dr. Karthikeyan K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/srmist-faculty-photos-2.jpg"
  },
  {
    "id": "fac-dr-s-karthikeyan",
    "name": "Dr. Karthikeyan S",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3932.jpg"
  },
  {
    "id": "fac-dr-u-karthikeyan",
    "name": "Dr. Karthikeyan U",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan-U.jpg"
  },
  {
    "id": "fac-dr-v-karunanithi-2",
    "name": "Dr. Karunanithi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-karunanithi-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Karunanithi-V.png"
  },
  {
    "id": "fac-dr-kavi-priya-d",
    "name": "Dr. Kavi Priya D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavi-priya-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/My-Professionalphoto-latest.png"
  },
  {
    "id": "fac-dr-kaviarasan-b",
    "name": "Dr. Kaviarasan B",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kaviarasan-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/10-1.jpg"
  },
  {
    "id": "fac-ms-k-kavitha",
    "name": "Dr. Kavitha K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-k-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0022_DSC_9391-1.jpg"
  },
  {
    "id": "fac-mrs-kavitha-srisaran",
    "name": "Dr. Kavitha M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kavitha-srisaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7333.jpg"
  },
  {
    "id": "fac-dr-kavitha-r",
    "name": "Dr. Kavitha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavitha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/4.jpg"
  },
  {
    "id": "fac-dr-kavitha-s",
    "name": "Dr. Kavitha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavitha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/6-1.jpg"
  },
  {
    "id": "fac-mrs-kavitha-v",
    "name": "Dr. Kavitha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kavitha-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/KAVI-photo2-.jpg"
  },
  {
    "id": "fac-dr-kavitha-v",
    "name": "Dr. Kavitha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavitha-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/KAVI_-removebg-preview-1.png"
  },
  {
    "id": "fac-dr-kavitha-v-2",
    "name": "Dr. Kavitha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavitha-v-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4282.jpg"
  },
  {
    "id": "fac-dr-kayalvizhi-r",
    "name": "Dr. Kayalvizhi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kayalvizhi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-30.jpg"
  },
  {
    "id": "fac-mrs-s-kayalvizhi",
    "name": "Dr. Kayalvizhi S",
    "designation": "Assistant Professor- Senior Grade",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-kayalvizhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100243-Dr.-S.-Kayalvizhi.jpg"
  },
  {
    "id": "fac-dr-keerthana-r",
    "name": "Dr. Keerthana R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-keerthana-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/keerthana.jpg"
  },
  {
    "id": "fac-dr-keerthana-r-2",
    "name": "Dr. Keerthana R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-keerthana-r-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/keerthana.jpg"
  },
  {
    "id": "fac-dr-kella-alekhya",
    "name": "Dr. Kella Alekhya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kella-alekhya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/24.jpg"
  },
  {
    "id": "fac-kesavan-d",
    "name": "Dr. Kesavan D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kesavan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/kesav-removebg-preview.png"
  },
  {
    "id": "fac-dr-kesavan-m",
    "name": "Dr. Kesavan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kesavan-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-s-kiran",
    "name": "Dr. Kiran S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-kiran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Kiran-New.jpg"
  },
  {
    "id": "fac-dr-kirithiga-nandini",
    "name": "Dr. Kirithiga Nandini G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kirithiga-nandini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-6.jpg"
  },
  {
    "id": "fac-kiruthiga-r",
    "name": "Dr. Kiruthiga R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kiruthiga-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.R.Kiruthiga-scaled.jpg"
  },
  {
    "id": "fac-dr-kiruthika-m",
    "name": "Dr. Kiruthika M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kiruthika-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4497.jpg"
  },
  {
    "id": "fac-dr-k-kishore-anthuvan-sahayaraj",
    "name": "Dr. Kishore Anthuvan Sahayaraj K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-kishore-anthuvan-sahayaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kishore.jpg"
  },
  {
    "id": "fac-mrs-s-kolangiammal",
    "name": "Dr. Kolangiammal S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-kolangiammal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7027.jpg"
  },
  {
    "id": "fac-mr-s-kolli-balasivarama-reddy",
    "name": "Dr. Kolli Balasivarama Reddy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-kolli-balasivarama-reddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-58.jpg"
  },
  {
    "id": "fac-dr-kothai-g",
    "name": "Dr. Kothai G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kothai-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/Perfect-Profile-photo.png"
  },
  {
    "id": "fac-dr-kotteswari-k",
    "name": "Dr. Kotteswari. K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kotteswari-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-m-kousalya",
    "name": "Dr. Kousalya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-kousalya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5306.jpg"
  },
  {
    "id": "fac-dr-koushik-c-p",
    "name": "Dr. Koushik C P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-koushik-c-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Dr.-C-P.-Koushik-photo-new.jpg"
  },
  {
    "id": "fac-dr-m-kovendhan",
    "name": "Dr. Kovendhan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-kovendhan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4751.jpg"
  },
  {
    "id": "fac-dr-koyel-ghosh",
    "name": "Dr. Koyel Ghosh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-koyel-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-7-1.jpg"
  },
  {
    "id": "fac-dr-krishna-kumari-r",
    "name": "Dr. Krishna Kumari R",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krishna-kumari-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/krishna-photo.jpg"
  },
  {
    "id": "fac-mrs-n-krishna-prabha",
    "name": "Dr. Krishna Prabha N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-n-krishna-prabha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/39.jpg"
  },
  {
    "id": "fac-dr-krishnanunni-a-g",
    "name": "Dr. Krishnanunni A G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krishnanunni-a-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-c-krishnaveni",
    "name": "Dr. Krishnaveni C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-krishnaveni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-73-1.jpg"
  },
  {
    "id": "fac-dr-g-krishnaveni",
    "name": "Dr. Krishnaveni G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-krishnaveni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5326.jpg"
  },
  {
    "id": "fac-dr-krishnodas-goswami",
    "name": "Dr. Krishnodas Goswami",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krishnodas-goswami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5302.jpg"
  },
  {
    "id": "fac-ms-p-krithika-2",
    "name": "Dr. Krithika P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-p-krithika-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-56.jpg"
  },
  {
    "id": "fac-v-krithika",
    "name": "Dr. Krithika V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-krithika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mrs.-Krithika.png"
  },
  {
    "id": "fac-dr-krunal-dhanraj-randive",
    "name": "Dr. Krunal Dhanraj Randive",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krunal-dhanraj-randive/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/406117001-Photo.jpg"
  },
  {
    "id": "fac-v-kubendran",
    "name": "Dr. Kubendran V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-kubendran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-106.jpg"
  },
  {
    "id": "fac-dr-kuchimanchi-k-bhardwaj",
    "name": "Dr. Kuchimanchi K Bharadwaj",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kuchimanchi-k-bhardwaj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KKB-1.jpg"
  },
  {
    "id": "fac-dr-g-kumar",
    "name": "Dr. Kumar G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/PHOTO-1.jpg"
  },
  {
    "id": "fac-d-kumaran",
    "name": "Dr. Kumaran D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-kumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-21.jpg"
  },
  {
    "id": "fac-dr-kungumaselvan-t",
    "name": "Dr. Kungumaselvan T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kungumaselvan-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kun-copy.jpg"
  },
  {
    "id": "fac-dr-lakshmi-dhevi",
    "name": "Dr. Lakshmi Dhevi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lakshmi-dhevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3781.jpg"
  },
  {
    "id": "fac-dr-g-lakshmi",
    "name": "Dr. Lakshmi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Lakshmi-G-Photo-Full-Size-1-scaled.jpg"
  },
  {
    "id": "fac-dr-lakshmi-narayanan-k",
    "name": "Dr. Lakshmi Narayanan K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lakshmi-narayanan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-29.jpg"
  },
  {
    "id": "fac-dr-lakshmi-prabha-g",
    "name": "Dr. Lakshmi Prabha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lakshmi-prabha-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-lakshmi-prabha-p",
    "name": "Dr. Lakshmi Prabha.P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/lakshmi-prabha-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0052_DSC_9253-1.jpg"
  },
  {
    "id": "fac-dr-s-lakshmi-priya",
    "name": "Dr. Lakshmi Priya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-lakshmi-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/edit-LP-photo-scaled.jpg"
  },
  {
    "id": "fac-dr-s-lakshmi",
    "name": "Dr. Lakshmi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/2-scaled.jpg"
  },
  {
    "id": "fac-dr-lakshmi-thara",
    "name": "Dr. Lakshmi Thara R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lakshmi-thara/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/1.jpeg"
  },
  {
    "id": "fac-lakshmipriya-m",
    "name": "Dr. Lakshmipriya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/lakshmipriya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Priya-scaled.jpg"
  },
  {
    "id": "fac-dr-lalitha-s",
    "name": "Dr. Lalitha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lalitha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Dr.S.Lalitha_-Photo.jpg"
  },
  {
    "id": "fac-g-lavanya",
    "name": "Dr. Lavanya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-lavanya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5294.jpg"
  },
  {
    "id": "fac-dr-j-lavanya",
    "name": "Dr. Lavanya J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-lavanya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0032_DSC_9277.jpg"
  },
  {
    "id": "fac-mrs-r-lavanya",
    "name": "Dr. Lavanya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-r-lavanya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lavanya.jpg"
  },
  {
    "id": "fac-ms-lavanya-veeran",
    "name": "Dr. Lavanya Veeran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-lavanya-veeran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/14-scaled.jpg"
  },
  {
    "id": "fac-dr-lavina-sahijwani",
    "name": "Dr. Lavina Sahijwani",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lavina-sahijwani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Photo_SRM.jpg"
  },
  {
    "id": "fac-dr-laxmikanta-rana",
    "name": "Dr. Laxmikanta Rana",
    "designation": "Assistant Professor in Yoga",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-laxmikanta-rana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Laxmikanta-Rana.jpg"
  },
  {
    "id": "fac-dr-t-leelavathy",
    "name": "Dr. Leelavathy T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-leelavathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5313.jpg"
  },
  {
    "id": "fac-leena-nesamani-s",
    "name": "Dr. Leena Nesamani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/leena-nesamani-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/leena.jpg"
  },
  {
    "id": "fac-dr-s-lenin",
    "name": "Dr. Lenin S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-lenin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/9-scaled.jpg"
  },
  {
    "id": "fac-dr-c-likith-kumar",
    "name": "Dr. Likith Kumar C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-likith-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Likith-e1733911973320-234x300-1.jpg"
  },
  {
    "id": "fac-dr-lisa-sarkar",
    "name": "Dr. Lisa Sarkar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lisa-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Photo_63kb.jpg"
  },
  {
    "id": "fac-dr-logeshwaran-r",
    "name": "Dr. Logeshwaran R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-logeshwaran-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/gnhg.jpg"
  },
  {
    "id": "fac-dr-logeshwari-r",
    "name": "Dr. Logeshwari R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-logeshwari-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3810.jpg"
  },
  {
    "id": "fac-dr-lokesh-s",
    "name": "Dr. Lokesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lokesh-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/lokesh.jpg"
  },
  {
    "id": "fac-dr-lokesh-s-2",
    "name": "Dr. Lokesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lokesh-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2022-03-17-at-11.04.34-AM-Copy-1.png"
  },
  {
    "id": "fac-ms-lopamudra-mazumder",
    "name": "Dr. Lopamudra Mazumder",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-lopamudra-mazumder/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Lopamudra_picture-e1779877404559.jpeg"
  },
  {
    "id": "fac-dr-y-c-louis-raj",
    "name": "Dr. Louis Raj Y C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-y-c-louis-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0034-1.jpg"
  },
  {
    "id": "fac-ms-s-lourdu-jame",
    "name": "Dr. Lourdu Jame S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-lourdu-jame/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/jame-Faculty-Photos-srmist-32.jpg"
  },
  {
    "id": "fac-dr-lubin-balasubramanian",
    "name": "Dr. Lubin Balasubramanian",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-lubin-balasubramanian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lubin-Balasubramanian.jpg"
  },
  {
    "id": "fac-ms-m-nandhini",
    "name": "Dr. M. Nandhini",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-m-nandhini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/nandhini.png"
  },
  {
    "id": "fac-mr-s-madhan-kumar",
    "name": "Dr. Madhan Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-madhan-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Madhan-New.jpg"
  },
  {
    "id": "fac-madhanrajan-u",
    "name": "Dr. Madhanrajan Udayanan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/madhanrajan-u/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/DrMadhanrajan.jpg"
  },
  {
    "id": "fac-dr-madhumitha-haridoss",
    "name": "Dr. Madhumitha Haridoss",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-madhumitha-haridoss/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/033-1.jpg"
  },
  {
    "id": "fac-j-madhumitha",
    "name": "Dr. Madhumitha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-madhumitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600161-scaled.jpg"
  },
  {
    "id": "fac-dr-madhumithaa-n",
    "name": "Dr. Madhumithaa N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-madhumithaa-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/23.jpg"
  },
  {
    "id": "fac-dr-madhuparna",
    "name": "Dr. Madhuparna Karmakar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-madhuparna/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mkarmakar_photo.jpg"
  },
  {
    "id": "fac-mrs-madhura-r",
    "name": "Dr. Madhura R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-madhura-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/madhura.jpg"
  },
  {
    "id": "fac-dr-madhurima-d",
    "name": "Dr. Madhurima D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-madhurima-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Madhu-photo.jpeg"
  },
  {
    "id": "fac-dr-madhusudhanan-n",
    "name": "Dr. Madhusudhanan N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-madhusudhanan-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Madhusudhanan.jpg"
  },
  {
    "id": "fac-dr-m-magesh-kumar",
    "name": "Dr. Magesh Kumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-magesh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Magesh-Kumar-M.jpg"
  },
  {
    "id": "fac-dr-mahalakshmi-m",
    "name": "Dr. Mahalakshmi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3846.jpg"
  },
  {
    "id": "fac-mahalakshmi-p",
    "name": "Dr. Mahalakshmi P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mahalakshmi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3839.jpg"
  },
  {
    "id": "fac-dr-mahalakshmi-b",
    "name": "Dr. Mahalakshmi. B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-11-at-1.19.28-PM.jpeg"
  },
  {
    "id": "fac-dr-mahendra-perumal-g",
    "name": "Dr. Mahendra Perumal G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mahendra-perumal-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-GMP-scaled.jpg"
  },
  {
    "id": "fac-mr-k-mahendran",
    "name": "Dr. Mahendran K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-mahendran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7323.jpg"
  },
  {
    "id": "fac-mr-mahendran-m",
    "name": "Dr. Mahendran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mahendran-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Faculty-Photos-srmist-MAHENDRAN.jpg"
  },
  {
    "id": "fac-dr-r-mahendran",
    "name": "Dr. Mahendran R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-mahendran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5247.jpg"
  },
  {
    "id": "fac-mr-maheshwaran",
    "name": "Dr. Maheswaran N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-maheshwaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-16.jpg"
  },
  {
    "id": "fac-dr-k-maheswari",
    "name": "Dr. Maheswari K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-maheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0042_DSC_9368.jpg"
  },
  {
    "id": "fac-dr-maheswari-p",
    "name": "Dr. Maheswari P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maheswari-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/18.jpg"
  },
  {
    "id": "fac-mr-mahith-vidyasagar-g",
    "name": "Dr. Mahith Vidyasagar G.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mahith-vidyasagar-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Mr.-Mahith-Vidyasagar-G.jpg"
  },
  {
    "id": "fac-dr-maivizhi-r",
    "name": "Dr. Maivizhi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maivizhi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4426.jpg"
  },
  {
    "id": "fac-dr-malaikannan-g",
    "name": "Dr. Malaikannan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-malaikannan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/DSC_1311a.jpg"
  },
  {
    "id": "fac-s-malarmannan",
    "name": "Dr. Malarmannan.S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-malarmannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-15.13.39.jpeg"
  },
  {
    "id": "fac-ms-g-malarselvi",
    "name": "Dr. Malarselvi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-g-malarselvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Malarselvi_Profile.jpeg"
  },
  {
    "id": "fac-dr-maneesh-kumar-singh",
    "name": "Dr. Maneesh Kumar Singh",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maneesh-kumar-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/srmist-faculty_MKs.jpg"
  },
  {
    "id": "fac-dr-mangalagowri-r",
    "name": "Dr. Mangalagowri R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mangalagowri-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/mangalagowri-e1751944234658.jpg"
  },
  {
    "id": "fac-mr-mani-deepak-choudhry",
    "name": "Dr. Mani Deepak Choudhry",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mani-deepak-choudhry/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mani-scaled-e1715237963689.jpg"
  },
  {
    "id": "fac-dr-manickam-m",
    "name": "Dr. Manickam M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manickam-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3798.jpg"
  },
  {
    "id": "fac-mr-g-manikanda-raja",
    "name": "Dr. Manikanda Raja G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-manikanda-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_8998-scaled.jpg"
  },
  {
    "id": "fac-dr-manikandan-a",
    "name": "Dr. Manikandan A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikandan-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7034.jpg"
  },
  {
    "id": "fac-a-v-m-manikandan",
    "name": "Dr. Manikandan A.V.M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-v-m-manikandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100244-Mr.-A.V.M.-Manikandan.jpg"
  },
  {
    "id": "fac-dr-manikandan-g",
    "name": "Dr. Manikandan G",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikandan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/DSC_7339.jpg"
  },
  {
    "id": "fac-dr-manikandan-m-2",
    "name": "Dr. Manikandan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikandan-m-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/11.jpg"
  },
  {
    "id": "fac-dr-manikandan-r",
    "name": "Dr. Manikandan Ramamurthy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikandan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/photo1.png"
  },
  {
    "id": "fac-dr-s-manikandan",
    "name": "Dr. Manikandan S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-manikandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-25.jpg"
  },
  {
    "id": "fac-dr-manikkannan-d",
    "name": "Dr. Manikkannan D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manikkannan-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Manikkannan_srm_pic-scaled-e1780931508665.jpg"
  },
  {
    "id": "fac-dr-a-manimaran-2",
    "name": "Dr. Manimaran A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-manimaran-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr-A-MANIMARAN-101346-Profile-Photo-for-SRMIST-Website-3.jpg"
  },
  {
    "id": "fac-dr-manir-ahmed",
    "name": "Dr. Manir Ahmed",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manir-ahmed/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-maniraj-s-p",
    "name": "Dr. Maniraj S P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maniraj-s-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/21.jpg"
  },
  {
    "id": "fac-s-manivel-2",
    "name": "Dr. Manivel S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-manivel-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Image-1.jpg"
  },
  {
    "id": "fac-dr-a-manju",
    "name": "Dr. Manju A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-manju/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manju.jpg"
  },
  {
    "id": "fac-dr-r-manjula",
    "name": "Dr. Manjula R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-manjula/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manjula.jpg"
  },
  {
    "id": "fac-dr-manoj-kumar-mandal",
    "name": "Dr. Manoj Kumar Mandal",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manoj-kumar-mandal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/srmist-faculty-46.jpg"
  },
  {
    "id": "fac-dr-manoj-kumar-rana",
    "name": "Dr. Manoj Kumar Rana",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manoj-kumar-rana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoj.jpg"
  },
  {
    "id": "fac-mr-v-manoj-kumar",
    "name": "Dr. Manoj Kumar V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-manoj-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-96.jpg"
  },
  {
    "id": "fac-mr-manoj-kushwaha",
    "name": "Dr. Manoj Kushwaha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-manoj-kushwaha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/latest-Manoj-photo.jpg"
  },
  {
    "id": "fac-mr-r-manoj-samson",
    "name": "Dr. Manoj Samson R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-manoj-samson/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Manoj-Samson-R.png"
  },
  {
    "id": "fac-dr-manonmani-t",
    "name": "Dr. Manonmani T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manonmani-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-manoraj-p",
    "name": "Dr. Manoraj P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manoraj-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-2.jpg"
  },
  {
    "id": "fac-dr-manotosh-kumbhakar",
    "name": "Dr. Manotosh Kumbhakar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-manotosh-kumbhakar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/7.jpg"
  },
  {
    "id": "fac-dr-maranco-m",
    "name": "Dr. Maranco M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maranco-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3813.jpg"
  },
  {
    "id": "fac-dr-maravarman-m",
    "name": "Dr. Maravarman M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-maravarman-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-margaret-salomi-g",
    "name": "Dr. Margaret Salomi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-margaret-salomi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-a-maria-nancy",
    "name": "Dr. Maria Nancy A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-maria-nancy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-20.jpg"
  },
  {
    "id": "fac-dr-mariappan-m",
    "name": "Dr. Mariappan M",
    "designation": "Assistant Professor (S.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mariappan-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4011.jpg"
  },
  {
    "id": "fac-dr-marieswari-m",
    "name": "Dr. Marieswari M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-marieswari-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-4.jpg"
  },
  {
    "id": "fac-dr-mariya-fatma",
    "name": "Dr. Mariya Fatma",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mariya-fatma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Dr.-Mariya-Fatma.jpg"
  },
  {
    "id": "fac-dr-mary-christeena-thomas",
    "name": "Dr. Mary Christeena Thomas",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mary-christeena-thomas/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Dr.-Mary-PHOTO-scaled.jpg"
  },
  {
    "id": "fac-ms-mary-rebekah-sharmila-2",
    "name": "Dr. Mary Rebekah Sharmila S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-mary-rebekah-sharmila-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-58-1.jpg"
  },
  {
    "id": "fac-dr-mathan-kumar-m",
    "name": "Dr. Mathan Kumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mathan-kumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mathan-Kumar-M.jpg"
  },
  {
    "id": "fac-dr-m-mathew-arumai",
    "name": "Dr. Mathew Arumai M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-mathew-arumai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/600578-scaled.jpg"
  },
  {
    "id": "fac-dr-g-maya",
    "name": "Dr. Maya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-maya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0026_DSC_9384.jpg"
  },
  {
    "id": "fac-dr-md-jawaid-alam",
    "name": "Dr. Md Jawaid Alam",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-md-jawaid-alam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102962-Dr.-MD-Jawaid-Alam.jpg"
  },
  {
    "id": "fac-dr-md-shahnawaz-hussain",
    "name": "Dr. Md Shahnawaz Hussain",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-md-shahnawaz-hussain/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-10-1.jpg"
  },
  {
    "id": "fac-ms-meena-l-c",
    "name": "Dr. Meena L C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-meena-l-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Website-profile-picture-Meena.jpg"
  },
  {
    "id": "fac-meena-parvathy-sankar",
    "name": "Dr. Meena Parvathy Sankar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/meena-parvathy-sankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5277.jpg"
  },
  {
    "id": "fac-k-meenakshi",
    "name": "Dr. Meenakshi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-meenakshi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3832.jpg"
  },
  {
    "id": "fac-dr-meenakshi-m",
    "name": "Dr. Meenakshi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-meenakshi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-31.jpg"
  },
  {
    "id": "fac-dr-meenakshi-m-2",
    "name": "Dr. Meenakshi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-meenakshi-m-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Faculty-Profile-Pic.jpg"
  },
  {
    "id": "fac-dr-meenakshi-n",
    "name": "Dr. Meenakshi N",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-meenakshi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Meena-pic-Final-pic.jpg"
  },
  {
    "id": "fac-dr-s-meenakshi",
    "name": "Dr. Meenakshi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-meenakshi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Dr.S-Meenakshi.jpg"
  },
  {
    "id": "fac-dr-meenakshi-s",
    "name": "Dr. Meenakshi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-meenakshi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-s-meenakumari",
    "name": "Dr. Meenakumari S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-meenakumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0084_DSC_9219.jpg"
  },
  {
    "id": "fac-dr-meenal-deo",
    "name": "Dr. Meenal Deo",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-meenal-deo/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Photo.jpeg"
  },
  {
    "id": "fac-dr-megala-t",
    "name": "Dr. Megala T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-megala-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-04-at-3.48.28-PM.jpeg"
  },
  {
    "id": "fac-r-megavannan",
    "name": "Dr. Megavannan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-megavannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/IMG-20230315-WA0015-removebg-preview_2-removebg-preview-1.jpg"
  },
  {
    "id": "fac-dr-megha-mahajan",
    "name": "Dr. Megha Mahajan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-megha-mahajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Megha-Mahajan.jpg"
  },
  {
    "id": "fac-dr-melita-vinoliah",
    "name": "Dr. Melita Vinoliah",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-melita-vinoliah/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5325.jpg"
  },
  {
    "id": "fac-dr-menagadevi-m",
    "name": "Dr. Menagadevi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-menagadevi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/profile-pic.png"
  },
  {
    "id": "fac-dr-menaka-s",
    "name": "Dr. Menaka S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-menaka-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-Menaka.jpg"
  },
  {
    "id": "fac-dr-mercy-theresa",
    "name": "Dr. Mercy Theresa M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mercy-theresa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-Mercy-Theresa-M_DSBS.jpg"
  },
  {
    "id": "fac-merlyn-margaret-h",
    "name": "Dr. Merlyn Margaret H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/merlyn-margaret-h/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5251.jpg"
  },
  {
    "id": "fac-dr-mihir-ghosh",
    "name": "Dr. Mihir Ghosh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mihir-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Mihir-Academic-photo.jpeg"
  },
  {
    "id": "fac-dr-mithra-c",
    "name": "Dr. Mithra C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mithra-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-2-1.jpg"
  },
  {
    "id": "fac-mr-mitul-sudhirkumar-nagar",
    "name": "Dr. Mitul Sudhirkumar Nagar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mitul-sudhirkumar-nagar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/mitul.png"
  },
  {
    "id": "fac-mr-mohamed-jibri-k-p",
    "name": "Dr. Mohamed Jibri K P",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mohamed-jibri-k-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_0493.png"
  },
  {
    "id": "fac-dr-mohammad-ishtiyaq-qureshi",
    "name": "Dr. Mohammad Ishtiyaq Qureshi",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohammad-ishtiyaq-qureshi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/4-1.jpg"
  },
  {
    "id": "fac-dr-mohammed-ashraf-a",
    "name": "Dr. Mohammed Ashraf A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohammed-ashraf-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/90307-Dr.-A.-Mohammed-Ashraf-1.jpg"
  },
  {
    "id": "fac-dr-mohana-sundari-v",
    "name": "Dr. Mohana Sundari V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohana-sundari-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/22.jpg"
  },
  {
    "id": "fac-dr-mohanasundaram-s",
    "name": "Dr. Mohanasundaram S",
    "designation": "Assistant Professor (Biochemistry)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohanasundaram-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Photo-scaled.jpg"
  },
  {
    "id": "fac-dr-r-mohandas",
    "name": "Dr. Mohandas R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-mohandas/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/mohan.jpg"
  },
  {
    "id": "fac-dr-p-mohanraj",
    "name": "Dr. Mohanraj P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-mohanraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/0U1A2992.jpg"
  },
  {
    "id": "fac-dr-mohd-azmi",
    "name": "Dr. Mohd Azmi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohd-azmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-32.jpg"
  },
  {
    "id": "fac-dr-mohideen-abdulkader-m",
    "name": "Dr. Mohideen AbdulKader M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohideen-abdulkader-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/DSC_0299-copy-scaled-e1765262046648.jpg"
  },
  {
    "id": "fac-dr-mohit-saraf",
    "name": "Dr. Mohit Saraf",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohit-saraf/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/MOHIT-SRM-PHOTO.jpeg"
  },
  {
    "id": "fac-dr-m-monica-bhavani",
    "name": "Dr. Monica Bhavani M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-monica-bhavani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.Monica-Bavani.jpg"
  },
  {
    "id": "fac-dr-monica-k",
    "name": "Dr. Monica K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-monica-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/1693810321925-scaled.jpg"
  },
  {
    "id": "fac-ms-r-monika",
    "name": "Dr. Monika  R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-r-monika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101986-Mrs.-R.-Monika.jpg"
  },
  {
    "id": "fac-dr-monisha-m",
    "name": "Dr. Monisha M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-monisha-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr.-Monisha.jpg"
  },
  {
    "id": "fac-mr-moovendaran-k",
    "name": "Dr. Moovendaran Kalimuthu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-moovendaran-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Profile-photo-SRM-1.jpg"
  },
  {
    "id": "fac-mothilal-nehru-g",
    "name": "Dr. Mothilal Nehru G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mothilal-nehru-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5126-copy-scaled.jpg"
  },
  {
    "id": "fac-dr-mubasher-rashid-rather",
    "name": "Dr. Mubasher Rashid Rather",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mubasher-rashid-rather/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/my-photo.jpg"
  },
  {
    "id": "fac-dr-muhammed-roshan",
    "name": "Dr. Muhammad Roshan",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-muhammed-roshan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/imresizer-resize-Official_Photo_MRoshan41-e1793946626990.jpg"
  },
  {
    "id": "fac-dr-muhammed-iqshanullah-a",
    "name": "Dr. Muhammed Iqshanullah A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-muhammed-iqshanullah-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Muhammed-Iqshanullah.jpg"
  },
  {
    "id": "fac-dr-muralidhara-rao-maradana",
    "name": "Dr. Muralidhara Rao Maradana",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-muralidhara-rao-maradana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/18.-Dr.Muralidhara-Rao-Medical-Research.jpg"
  },
  {
    "id": "fac-dr-c-muralidharan",
    "name": "Dr. Muralidharan C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-muralidharan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muralidharan.jpg"
  },
  {
    "id": "fac-mr-muralidharan-s",
    "name": "Dr. Muralidharan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-muralidharan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-7.jpg"
  },
  {
    "id": "fac-murugan-m",
    "name": "Dr. Murugan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/murugan-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/02-1.jpg"
  },
  {
    "id": "fac-dr-n-murugan",
    "name": "Dr. Murugan N",
    "designation": "Assistant Professor & Farm Manager",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-murugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/dr-n-murugan.jpg"
  },
  {
    "id": "fac-mr-murugan-s-p",
    "name": "Dr. Murugan S P",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-murugan-s-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/SP-Murugan.png"
  },
  {
    "id": "fac-mrs-s-murugaveni",
    "name": "Dr. Murugaveni S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-murugaveni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100273-Dr.-S.-Murugaveni.jpg"
  },
  {
    "id": "fac-mr-murukessan-a-p",
    "name": "Dr. Murukessan A P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-murukessan-a-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/srmist-faculty-13.jpg"
  },
  {
    "id": "fac-dr-muthu-deepa-m",
    "name": "Dr. Muthu Deepa M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-muthu-deepa-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-1-scaled.jpg"
  },
  {
    "id": "fac-dr-s-muthu-kumar-2",
    "name": "Dr. Muthu Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-muthu-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/smk-Photo-srmist-86.jpg"
  },
  {
    "id": "fac-a-m-j-muthu-kumaran",
    "name": "Dr. Muthu Kumaran A M J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-m-j-muthu-kumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muthukumaran.jpg"
  },
  {
    "id": "fac-muthuganesan-r",
    "name": "Dr. Muthuganesan R",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/muthuganesan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Muthu-Photo.jpg"
  },
  {
    "id": "fac-b-muthukumaran",
    "name": "Dr. MuthuKumaran B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-muthukumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/MUTHU.JPJ_.jpeg"
  },
  {
    "id": "fac-dr-v-muthukumaran",
    "name": "Dr. Muthukumaran V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-muthukumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-08-at-7.48.58-PM.jpeg"
  },
  {
    "id": "fac-muthuram-a",
    "name": "Dr. Muthuram A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/muthuram-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/MUTHURAM-PHOTO-with-blazer.jpg"
  },
  {
    "id": "fac-mrs-s-mythreyikoppur",
    "name": "Dr. Mythreyi Koppur S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-mythreyikoppur/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/myth-new-pic.jpg"
  },
  {
    "id": "fac-dr-n-ashwin-kumar",
    "name": "Dr. N. Ashwin Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-ashwin-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Ashwin-Kumar-Narasimhan-2182-min.jpg"
  },
  {
    "id": "fac-dr-nadana-ravishankar",
    "name": "Dr. Nadana Ravishankar T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nadana-ravishankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4255.jpg"
  },
  {
    "id": "fac-nagajothi-r-2",
    "name": "Dr. Nagajothi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/nagajothi-r-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Naga-1-scaled.jpg"
  },
  {
    "id": "fac-dr-nagamani-abirami-d",
    "name": "Dr. Nagamani Abirami D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nagamani-abirami-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-52.jpg"
  },
  {
    "id": "fac-dr-nagaraj-c-m",
    "name": "Dr. Nagaraj C M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nagaraj-c-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-14.35.54.jpeg"
  },
  {
    "id": "fac-nagarajan-b",
    "name": "Dr. Nagarajan B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/nagarajan-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-10.05.16-AM.jpeg"
  },
  {
    "id": "fac-dr-ila-nakkeeran",
    "name": "Dr. Nakkeeran ILA",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ila-nakkeeran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/9-scaled.jpg"
  },
  {
    "id": "fac-dr-nalini-pusarla",
    "name": "Dr. Nalini Pusarla",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nalini-pusarla/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-53-1.png"
  },
  {
    "id": "fac-dr-nalini-s",
    "name": "Dr. Nalini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nalini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nalini.jpg"
  },
  {
    "id": "fac-mr-v-nallarasan",
    "name": "Dr. Nallarasan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-nallarasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4229.jpg"
  },
  {
    "id": "fac-dr-nanda-poddar",
    "name": "Dr. Nanda Poddar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nanda-poddar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-11.jpg"
  },
  {
    "id": "fac-dr-nandhini-s",
    "name": "Dr. Nandhini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nandhini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4284.jpg"
  },
  {
    "id": "fac-dr-nandimandalam-sai-supra-siddhu-k",
    "name": "Dr. Nandimandalam Sai Supra Siddhu K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nandimandalam-sai-supra-siddhu-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/NEW-IMAGE-e1783411932747.jpeg"
  },
  {
    "id": "fac-dr-j-narayanan",
    "name": "Dr. Narayanan J",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-narayanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/3-2.jpg"
  },
  {
    "id": "fac-mr-g-naresh",
    "name": "Dr. Naresh G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-naresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Naresh-New.jpg"
  },
  {
    "id": "fac-mr-natarajan-t",
    "name": "Dr. Natarajan T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-natarajan-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-9.55.51-AM-1.jpeg"
  },
  {
    "id": "fac-dr-nathiya-t",
    "name": "Dr. Nathiya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nathiya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-8.00.32-PM-1.jpeg"
  },
  {
    "id": "fac-dr-navaneetha-krishnan-m",
    "name": "Dr. Navaneetha Krishnan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-navaneetha-krishnan-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Photo-Coat.png"
  },
  {
    "id": "fac-dr-c-naveen",
    "name": "Dr. Naveen C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-naveen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/naveen.jpeg"
  },
  {
    "id": "fac-mr-naveen-p",
    "name": "Dr. Naveen P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-naveen-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/2-6.png"
  },
  {
    "id": "fac-dr-navin-k",
    "name": "Dr. Navin K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-navin-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-navneet-nayan",
    "name": "Dr. Navneet Nayan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-navneet-nayan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/navneet.jpg"
  },
  {
    "id": "fac-dr-nazim-sha-s",
    "name": "Dr. Nazim Sha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nazim-sha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0004_DSC_9414.jpg"
  },
  {
    "id": "fac-dr-m-neelaveni-ammal",
    "name": "Dr. Neelaveni Ammal M",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-neelaveni-ammal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-1.jpg"
  },
  {
    "id": "fac-ms-nidhi-agarwala",
    "name": "Dr. Nidhi Agarwala",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nidhi-agarwala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-nijisha-shajil",
    "name": "Dr. Nijisha Shajil",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nijisha-shajil/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/IMG_2431-scaled-e1744998620931.jpg"
  },
  {
    "id": "fac-dr-nikkath-bushra-s",
    "name": "Dr. Nikkath Bushra S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nikkath-bushra-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nikkath.jpg"
  },
  {
    "id": "fac-dr-nilay-kumar-mondal",
    "name": "Dr. Nilay Kumar Mondal",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nilay-kumar-mondal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Nilay_photo.jpg"
  },
  {
    "id": "fac-dr-nilotpal-biswas",
    "name": "Dr. Nilotpal Biswas",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nilotpal-biswas/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-nirenjen-s",
    "name": "Dr. Nirenjen S",
    "designation": "Assistant Professor (Grade I)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-nirenjen-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG_8522.JPEG-1.jpg"
  },
  {
    "id": "fac-ms-nirmal-varghese-babu",
    "name": "Dr. Nirmal Varghese Babu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nirmal-varghese-babu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-11-at-7.07.59-PM.jpeg"
  },
  {
    "id": "fac-dr-t-nirmala",
    "name": "Dr. Nirmala T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-nirmala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5324.jpg"
  },
  {
    "id": "fac-dr-r-nisha",
    "name": "Dr. Nisha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-nisha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Nisha-R.jpg"
  },
  {
    "id": "fac-dr-nisha-r",
    "name": "Dr. Nisha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nisha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.R.Nisha_-1-scaled.jpg"
  },
  {
    "id": "fac-dr-v-nisha",
    "name": "Dr. Nisha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-nisha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240328-WA0003.jpg"
  },
  {
    "id": "fac-s-nithiya",
    "name": "Dr. Nithiya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-nithiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Nithya.jpg"
  },
  {
    "id": "fac-dr-n-nithiyanandam",
    "name": "Dr. Nithiyanandam N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-nithiyanandam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithiyanandam.jpg"
  },
  {
    "id": "fac-c-nithya",
    "name": "Dr. Nithya C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-nithya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0608-scaled.jpg"
  },
  {
    "id": "fac-dr-nithya-paranthaman-r",
    "name": "Dr. Nithya Paranthaman R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nithya-paranthaman-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3775.jpg"
  },
  {
    "id": "fac-dr-nithya-s",
    "name": "Dr. Nithya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nithya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-30-at-3.54.33-PM.jpeg"
  },
  {
    "id": "fac-ms-nithya-t",
    "name": "Dr. Nithya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nithya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Nithya.jpg"
  },
  {
    "id": "fac-dr-nithyakalyani-k-2",
    "name": "Dr. Nithyakalyani K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nithyakalyani-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-12.32.49_851840b5-1.jpg"
  },
  {
    "id": "fac-p-nithyakani",
    "name": "Dr. Nithyakani P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-nithyakani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyakani.jpg"
  },
  {
    "id": "fac-dr-j-nithyashri",
    "name": "Dr. Nithyashri J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-nithyashri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyasri.jpg"
  },
  {
    "id": "fac-dr-nitish-gupta",
    "name": "Dr. Nitish Gupta",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nitish-gupta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Profile-Pic-Nitish-New-150-150.jpg"
  },
  {
    "id": "fac-dr-nitya-nandkishore",
    "name": "Dr. Nitya Nandkishore",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nitya-nandkishore/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/nitya.jpg"
  },
  {
    "id": "fac-dr-nivedhitha-m",
    "name": "Dr. Nivedhitha M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-nivedhitha-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4218.jpg"
  },
  {
    "id": "fac-mr-e-nobel-kennedy",
    "name": "Dr. Noble Kennedy E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-e-nobel-kennedy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0034_DSC_9376.jpg"
  },
  {
    "id": "fac-s-oliver-nesa-raj",
    "name": "Dr. Oliver Nesa Raj S",
    "designation": "Assistant Professor (Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-oliver-nesa-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-40.jpg"
  },
  {
    "id": "fac-dr-p-g-om-prakash",
    "name": "Dr. Om Prakash P G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-g-om-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/8.png"
  },
  {
    "id": "fac-dr-kavitha-p-m",
    "name": "Dr. P M Kavitha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-kavitha-p-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/PMK-5-1.jpeg"
  },
  {
    "id": "fac-dr-p-justin-jesuraj",
    "name": "Dr. P. Justin Jesuraj",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-justin-jesuraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Justin-SRM-pic.jpg"
  },
  {
    "id": "fac-dr-p-sivakumar",
    "name": "Dr. P. Sivakumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-sivakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PSK.jpg"
  },
  {
    "id": "fac-dr-v-padma",
    "name": "Dr. Padma V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-padma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5258.jpg"
  },
  {
    "id": "fac-mrs-v-padmajothi",
    "name": "Dr. Padmajothi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-v-padmajothi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100255-Mrs.-V.-Padmajothi-1.jpg"
  },
  {
    "id": "fac-dr-palani-s",
    "name": "Dr. Palani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-palani-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Palani-s-photo-e1788947487973.jpeg"
  },
  {
    "id": "fac-dr-palanisamy-l",
    "name": "Dr. Palanisamy L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-palanisamy-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Photo.jpg"
  },
  {
    "id": "fac-m-palanivendhan",
    "name": "Dr. Palanivendhan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-palanivendhan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Palanivendhan-New.jpg"
  },
  {
    "id": "fac-dr-pandiaraj-a",
    "name": "Dr. Pandiaraj A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pandiaraj-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandiraj.jpg"
  },
  {
    "id": "fac-dr-m-pandiyan",
    "name": "Dr. Pandiyan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-pandiyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/13-scaled.jpg"
  },
  {
    "id": "fac-k-panimalar",
    "name": "Dr. Panimalar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-panimalar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.Panimalar.jpg"
  },
  {
    "id": "fac-dr-papitha-christobel-t",
    "name": "Dr. Papitha Christobel T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-papitha-christobel-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Dr.Papitha-e1771399381840.jpeg"
  },
  {
    "id": "fac-g-parimala",
    "name": "Dr. Parimala G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-parimala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4206.jpg"
  },
  {
    "id": "fac-dr-parivallal-a",
    "name": "Dr. Parivallal A",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-parivallal-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-37.jpg"
  },
  {
    "id": "fac-dr-parthiban-i",
    "name": "Dr. Parthiban I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-parthiban-i/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/partiban.jpg"
  },
  {
    "id": "fac-dr-parthipan-p",
    "name": "Dr. Parthipan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-parthipan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/6-scaled.jpg"
  },
  {
    "id": "fac-dr-parvathi-s",
    "name": "Dr. Parvathi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-parvathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/12/IMG_5423-scaled.jpg"
  },
  {
    "id": "fac-mr-parveen-yadav",
    "name": "Dr. Parveen Yadav",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-parveen-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/15-scaled.jpg"
  },
  {
    "id": "fac-dr-pavithra-c",
    "name": "Dr. Pavithra C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pavithra-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Dr-Pavithra-Maths.png"
  },
  {
    "id": "fac-pavithra-c-2",
    "name": "Dr. Pavithra Chandramouli",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/pavithra-c-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0743-scaled.jpg"
  },
  {
    "id": "fac-dr-pavithra-guru",
    "name": "Dr. Pavithra Guru R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pavithra-guru/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-42.jpg"
  },
  {
    "id": "fac-dr-pavithra-j",
    "name": "Dr. Pavithra J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pavithra-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/05.jpg"
  },
  {
    "id": "fac-ms-pavithra-j",
    "name": "Dr. Pavithra J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-pavithra-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/28.jpg"
  },
  {
    "id": "fac-dr-pavithra-l",
    "name": "Dr. Pavithra L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pavithra-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-pavithra-s",
    "name": "Dr. Pavithra S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pavithra-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Pavi.jpeg"
  },
  {
    "id": "fac-dr-payel-bandyopadhyay",
    "name": "Dr. Payel Bandyopadhyay",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-payel-bandyopadhyay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4721.jpg"
  },
  {
    "id": "fac-dr-periyadurai-k",
    "name": "Dr. Periyadurai K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-periyadurai-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/kperiyadurai_photo.jpg"
  },
  {
    "id": "fac-dr-phani-teja-bankupalli",
    "name": "Dr. Phani Teja Bankupalli",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-phani-teja-bankupalli/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Phani-Photo.jpg"
  },
  {
    "id": "fac-dr-b-pitchai-manickam",
    "name": "Dr. Pitchai Manickam B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-pitchai-manickam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4344.jpg"
  },
  {
    "id": "fac-dr-piyush-agrawal",
    "name": "Dr. Piyush Agrawal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-piyush-agrawal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PHOTO-2024-05-17-16-31-09.jpg"
  },
  {
    "id": "fac-dr-a-pon-ezhil-buvani",
    "name": "Dr. Pon Ezhil Buvani A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-pon-ezhil-buvani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-24.jpg"
  },
  {
    "id": "fac-dr-pooja-r",
    "name": "Dr. Pooja R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pooja-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-poojasree-v",
    "name": "Dr. Poojasree V.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-poojasree-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Dr.-Poojasree-V.jpg"
  },
  {
    "id": "fac-dr-poongodisathiya-s",
    "name": "Dr. Poongodisathiya S",
    "designation": "Assistant Professor,",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-poongodisathiya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Poongodisathiya.jpg"
  },
  {
    "id": "fac-dr-e-poongothai",
    "name": "Dr. Poongothai E",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-e-poongothai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4364-1.jpg"
  },
  {
    "id": "fac-dr-v-poongothai",
    "name": "Dr. Poongothai V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-poongothai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5317.jpg"
  },
  {
    "id": "fac-dr-p-poonguzhali",
    "name": "Dr. Poonguzhali  P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-poonguzhali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0003_DSC_9415.jpg"
  },
  {
    "id": "fac-ms-poonguzhali-e",
    "name": "Dr. Poonguzhali E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-poonguzhali-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonguzhali-E-1.jpg"
  },
  {
    "id": "fac-mrs-poonkodi-s",
    "name": "Dr. Poonkodi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-poonkodi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poonkodi.jpg"
  },
  {
    "id": "fac-p-u-poornima",
    "name": "Dr. Poornima P U",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-u-poornima/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/poornimaprofile.jpg"
  },
  {
    "id": "fac-dr-poorvadevi-r",
    "name": "Dr. Poorvadevi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-poorvadevi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Poorva-photo.jpg"
  },
  {
    "id": "fac-dr-prabahan-chakraborty",
    "name": "Dr. Prabahan Chakraborty",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabahan-chakraborty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Prabahan-Chakraborty_passport-photo-scaled.jpg"
  },
  {
    "id": "fac-dr-prabakar-d",
    "name": "Dr. Prabakar D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabakar-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4297.jpg"
  },
  {
    "id": "fac-dr-prabakaran-d-s",
    "name": "Dr. Prabakaran D S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabakaran-d-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Prabakaran.jpg"
  },
  {
    "id": "fac-mr-j-prabakaran",
    "name": "Dr. Prabakaran J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-prabakaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3816.jpg"
  },
  {
    "id": "fac-dr-k-prabakaran",
    "name": "Dr. Prabakaran K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-prabakaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5285.jpg"
  },
  {
    "id": "fac-dr-prabhu-dass-batvari-b",
    "name": "Dr. Prabhu Dass Batvari B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabhu-dass-batvari-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Prabhu-1.jpg"
  },
  {
    "id": "fac-dr-b-prabhu-kavin",
    "name": "Dr. Prabhu kavin B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-prabhu-kavin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4301.jpg"
  },
  {
    "id": "fac-mr-p-prabhu",
    "name": "Dr. Prabhu P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-prabhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101993-Dr.-P.-Prabhu.jpg"
  },
  {
    "id": "fac-dr-prabhu-r",
    "name": "Dr. Prabhu R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prabhu-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-g-prabu",
    "name": "Dr. Prabu G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-prabu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/21.jpg"
  },
  {
    "id": "fac-mr-prabu-s",
    "name": "Dr. Prabu S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-prabu-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Prabu-2.jpg"
  },
  {
    "id": "fac-mr-k-c-prabu-shankar",
    "name": "Dr. Prabu Shankar K C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-c-prabu-shankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabushankar.jpg"
  },
  {
    "id": "fac-mr-s-pradeep-2",
    "name": "Dr. Pradeep S",
    "designation": "Assistant Director - Student Affairs",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-pradeep-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-67-1.jpg"
  },
  {
    "id": "fac-dr-b-prakash",
    "name": "Dr. Prakash B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prakash-B.jpg"
  },
  {
    "id": "fac-mr-s-prakash-chandar",
    "name": "Dr. Prakash Chandar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-prakash-chandar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Dr.S.PRAKASH-CHANDAR-1.jpg"
  },
  {
    "id": "fac-dr-prakash-kar",
    "name": "Dr. Prakash Kar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prakash-kar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/1000086905-1.jpg"
  },
  {
    "id": "fac-mr-u-m-prakash",
    "name": "Dr. Prakash U M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-u-m-prakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prakash.jpg"
  },
  {
    "id": "fac-dr-prakash-v",
    "name": "Dr. Prakash V",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prakash-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Prakash-V1-scaled-e1756130625447.jpg"
  },
  {
    "id": "fac-dr-pramit-roy",
    "name": "Dr. Pramit Roy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pramit-roy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-prasad-c",
    "name": "Dr. Prasad C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prasad-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Recent-Photo.jpg"
  },
  {
    "id": "fac-dr-prasanna-r",
    "name": "Dr. Prasanna R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prasanna-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Prasanna-1.jpg"
  },
  {
    "id": "fac-dr-prasanna-v",
    "name": "Dr. Prasanna V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prasanna-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4288.jpg"
  },
  {
    "id": "fac-dr-n-prasanth-bhatt",
    "name": "Dr. Prasanth Bhatt N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-prasanth-bhatt/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/1-5.jpg"
  },
  {
    "id": "fac-dr-prasanth-p-s",
    "name": "Dr. Prasanth P S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prasanth-p-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Prasanth-P-S-Photo-4.png"
  },
  {
    "id": "fac-dr-pratishtha-yadav",
    "name": "Dr. Pratishtha Yadav",
    "designation": "Assistant Professor (Grade-II)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pratishtha-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Pratishtha-Yadav.png"
  },
  {
    "id": "fac-praveen-chandrasekar",
    "name": "Dr. Praveen Chandrasekar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/praveen-chandrasekar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Praveen-faculty-photo.jpg"
  },
  {
    "id": "fac-dr-k-b-praveen",
    "name": "Dr. Praveen K B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-b-praveen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-K-B-Praveen-scaled.jpg"
  },
  {
    "id": "fac-dr-praveen-kumar-b",
    "name": "Dr. Praveen Kumar B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-praveen-kumar-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/praveen-photo.jpg"
  },
  {
    "id": "fac-mr-praveen-kumar",
    "name": "Dr. Praveen Kumar P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-praveen-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/praveen-1.jpeg"
  },
  {
    "id": "fac-s-praveen-kumar",
    "name": "Dr. Praveen Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-praveen-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101279-Dr.S.-Praveen-Kumar.jpg"
  },
  {
    "id": "fac-dr-praveen-kumar-s",
    "name": "Dr. Praveen Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-praveen-kumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4261-1.jpg"
  },
  {
    "id": "fac-dr-praveena",
    "name": "Dr. Praveena",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-praveena/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-praveena-akki",
    "name": "Dr. Praveena Akki",
    "designation": "Assistant  Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-praveena-akki/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3801.jpg"
  },
  {
    "id": "fac-dr-praveena-s",
    "name": "Dr. Praveena S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-praveena-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-m-preetha",
    "name": "Dr. Preetha. M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-preetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7311.jpg"
  },
  {
    "id": "fac-dr-preethiya-t",
    "name": "Dr. Preethiya T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-preethiya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3859.jpg"
  },
  {
    "id": "fac-mr-prem-chand-bhargaw",
    "name": "Dr. Prem Chand Bhargaw R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-prem-chand-bhargaw/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Prem-Chand-Bhargaw.jpg"
  },
  {
    "id": "fac-dr-g-premalatha",
    "name": "Dr. Premalatha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-premalatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4504.jpg"
  },
  {
    "id": "fac-dr-premkumar-m",
    "name": "Dr. Premkumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-premkumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Photo-Front-JPEG-480.jpg"
  },
  {
    "id": "fac-dr-premkumar-n",
    "name": "Dr. Premkumar N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-premkumar-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-48.jpg"
  },
  {
    "id": "fac-d-premnath",
    "name": "Dr. Premnath D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-premnath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-16.jpg"
  },
  {
    "id": "fac-dr-pressila-daissy-s",
    "name": "Dr. Pressila Daissy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pressila-daissy-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Prisci-Photo-SRM-1-scaled.jpg"
  },
  {
    "id": "fac-dr-prince-chelladurai-s",
    "name": "Dr. Prince Chelladurai S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prince-chelladurai-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.-Prince-Chelladurai-S.jpg"
  },
  {
    "id": "fac-dr-pritam-khan",
    "name": "Dr. Pritam Khan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pritam-khan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4416.jpg"
  },
  {
    "id": "fac-dr-prithi-s",
    "name": "Dr. Prithi Samuel",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prithi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-2.jpg"
  },
  {
    "id": "fac-dr-r-prithivi-raj",
    "name": "Dr. Prithiviraj Rajalingam",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-prithivi-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101504-Dr.-R.-Prithiviraj.jpg"
  },
  {
    "id": "fac-dr-prithvi-c",
    "name": "Dr. Prithvi Krishna Chittoor",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-prithvi-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-19.png"
  },
  {
    "id": "fac-ms-priya-k",
    "name": "Dr. Priya  K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Screenshot-2025-01-15-at-22-44-29-Edit-Post-Dr.-Priya-K-\u2039-SRMIST-\u2014-WordPress.png"
  },
  {
    "id": "fac-dr-d-priya",
    "name": "Dr. Priya D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Re.jpg"
  },
  {
    "id": "fac-s-priya",
    "name": "Dr. Priya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0019_DSC_9394.jpg"
  },
  {
    "id": "fac-priya-swaminathan",
    "name": "Dr. Priya Swaminathan",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/priya-swaminathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0091_DSC_9211.jpg"
  },
  {
    "id": "fac-dr-u-priya",
    "name": "Dr. Priya U",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-u-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/8-1-1-scaled.jpg"
  },
  {
    "id": "fac-dr-priya-xavier",
    "name": "Dr. Priya Xavier",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-priya-xavier/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0040_DSC_9370-1.jpg"
  },
  {
    "id": "fac-dr-a-priyadharshini",
    "name": "Dr. Priyadharshini A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-priyadharshini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/35.jpg"
  },
  {
    "id": "fac-ms-priyadharshini-b",
    "name": "Dr. Priyadharshini B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyadharshini-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Photo.jpeg"
  },
  {
    "id": "fac-mrs-priyadharshini-g",
    "name": "Dr. Priyadharshini G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-priyadharshini-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4439-1.jpg"
  },
  {
    "id": "fac-dr-priyadharshini-k",
    "name": "Dr. Priyadharshini K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-priyadharshini-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Priyadharshini.jpg"
  },
  {
    "id": "fac-dr-priyajit-mondal",
    "name": "Dr. Priyajit Mondal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-priyajit-mondal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5301.jpg"
  },
  {
    "id": "fac-mrs-b-priyalakshmi",
    "name": "Dr. Priyalakshmi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-b-priyalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/current-website-photo.png"
  },
  {
    "id": "fac-priyanga-s",
    "name": "Dr. Priyanga S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/priyanga-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4220.jpg"
  },
  {
    "id": "fac-dr-priyanka-r",
    "name": "Dr. Priyanka R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-priyanka-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3777.jpg"
  },
  {
    "id": "fac-r-priyanka",
    "name": "Dr. Priyanka R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-priyanka/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20230304-WA0053-removebg-preview-2.png"
  },
  {
    "id": "fac-mr-priyaranjan-kumar",
    "name": "Dr. Priyaranjan Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-priyaranjan-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/srmist-faculty-50.jpg"
  },
  {
    "id": "fac-provanjan-mallick",
    "name": "Dr. Provanjan Mallick",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/provanjan-mallick/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5273.jpg"
  },
  {
    "id": "fac-dr-pulkit-singh",
    "name": "Dr. Pulkit Singh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pulkit-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/pulkit-singh.jpg"
  },
  {
    "id": "fac-dr-punit-kumar-yadav",
    "name": "Dr. Punit Kumar Yadav",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-punit-kumar-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-10-at-10.35.25-1.jpeg"
  },
  {
    "id": "fac-ms-pushpam-k",
    "name": "Dr. Pushpam K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-pushpam-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/srm-faculty-1-9.jpg"
  },
  {
    "id": "fac-dr-r-geetha-2",
    "name": "Dr. R. Geetha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-geetha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/GR_PHOTO_1.jpg"
  },
  {
    "id": "fac-dr-r-rajarajeswari",
    "name": "Dr. R.Rajarajeswari",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-rajarajeswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/RR-NEW.png"
  },
  {
    "id": "fac-dr-senthil-kumaran-r",
    "name": "Dr. R.Senthil Kumaran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/rsk.jpeg"
  },
  {
    "id": "fac-dr-raajasree-k",
    "name": "Dr. Raajasree K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-raajasree-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-p-radha",
    "name": "Dr. Radha P",
    "designation": "Assistant Professor (Sr. Gr)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-p-radha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0010_DSC_9303.jpg"
  },
  {
    "id": "fac-r-radha",
    "name": "Dr. Radha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-radha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4269.jpg"
  },
  {
    "id": "fac-dr-a-v-radhamani",
    "name": "Dr. Radhamani  A. V",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-v-radhamani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Radhamani-photo_24th-April-24.jpg"
  },
  {
    "id": "fac-dr-p-radhika",
    "name": "Dr. Radhika P",
    "designation": "Assistant Professor (Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-radhika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100236-Dr.-P.-Radhika.jpg"
  },
  {
    "id": "fac-v-raghavendra-rao",
    "name": "Dr. Raghavendra Rao V",
    "designation": "Assistant Professor (Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-raghavendra-rao/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-19.jpg"
  },
  {
    "id": "fac-dr-raghavendra-v",
    "name": "Dr. Raghavendra V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-raghavendra-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Raghavendra-V.jpg"
  },
  {
    "id": "fac-dr-raghul-gandhi-v",
    "name": "Dr. Raghul Gandhi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-raghul-gandhi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/5Y0A7573-1-e1760610709776.jpg"
  },
  {
    "id": "fac-dr-ragul-gandhi-t",
    "name": "Dr. Ragul Gandhi T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ragul-gandhi-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Dr.-Ragulgandhi-T-Profile-Photo-2026.jpg"
  },
  {
    "id": "fac-dr-ragunathan-t",
    "name": "Dr. Ragunathan  T",
    "designation": "Assistant Professor of Mathematics",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ragunathan-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/07/0U1A29944.jpg"
  },
  {
    "id": "fac-dr-t-ragunthar",
    "name": "Dr. Ragunthar T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-ragunthar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/raguthar.jpg"
  },
  {
    "id": "fac-dr-ragupathi-t",
    "name": "Dr. Ragupathi T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ragupathi-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4249.jpg"
  },
  {
    "id": "fac-dr-rahul-dev-mukhopadhyay",
    "name": "Dr. Rahul Dev Mukhopadhyay",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rahul-dev-mukhopadhyay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3984.jpg"
  },
  {
    "id": "fac-dr-rahul-gowtham-poola",
    "name": "Dr. Rahul Gowtham Poola",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rahul-gowtham-poola/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Rahul-Gowtham-1.png"
  },
  {
    "id": "fac-dr-rahul-narayanan",
    "name": "Dr. Rahul Narayanan",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rahul-narayanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3965.jpg"
  },
  {
    "id": "fac-dr-rahul-v",
    "name": "Dr. Rahul V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rahul-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Rahul-Photo-SRMIST.jpg"
  },
  {
    "id": "fac-mr-d-raja",
    "name": "Dr. Raja D",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-d-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-44.jpg"
  },
  {
    "id": "fac-ganesan-r",
    "name": "Dr. Raja Ganesan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ganesan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Raja-Ganesan.jpg"
  },
  {
    "id": "fac-mr-raja-r",
    "name": "Dr. Raja Rajendran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-raja-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-26.jpg"
  },
  {
    "id": "fac-raja-rajeshwaran",
    "name": "Dr. Raja Rajeshwaran T S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/raja-rajeshwaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/AVM-Studio-Copy_Fotor-3-scaled.jpg"
  },
  {
    "id": "fac-dr-v-raja",
    "name": "Dr. Raja V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5253.jpg"
  },
  {
    "id": "fac-dr-g-y-rajaa-vikhram",
    "name": "Dr. Rajaa Vikhram G Y",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-y-rajaa-vikhram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DrRajaa.jpg"
  },
  {
    "id": "fac-dr-rajakani-m",
    "name": "Dr. Rajakani M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajakani-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4296.jpg"
  },
  {
    "id": "fac-dr-rajalakshmi-a",
    "name": "Dr. Rajalakshmi A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajalakshmi-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-12.jpg"
  },
  {
    "id": "fac-dr-rajalakshmi-d",
    "name": "Dr. Rajalakshmi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajalakshmi-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4287.jpg"
  },
  {
    "id": "fac-dr-j-rajalakshmi",
    "name": "Dr. Rajalakshmi J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-rajalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0048_DSC_9362.jpg"
  },
  {
    "id": "fac-m-rajalakshmi",
    "name": "Dr. Rajalakshmi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-rajalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajalakshmi.jpg"
  },
  {
    "id": "fac-dr-rajalakshmi",
    "name": "Dr. Rajalakshmi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/rajalakshmi.jpg"
  },
  {
    "id": "fac-dr-rajalakshmi-t",
    "name": "Dr. Rajalakshmi T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajalakshmi-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-rajasekar-l",
    "name": "Dr. Rajasekar L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajasekar-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-19.jpg"
  },
  {
    "id": "fac-dr-rajasekar-m",
    "name": "Dr. Rajasekar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajasekar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/DSC_0248-copy.jpg"
  },
  {
    "id": "fac-v-rajasekar",
    "name": "Dr. Rajasekar V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-rajasekar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-36.jpg"
  },
  {
    "id": "fac-mr-p-rajasekaran",
    "name": "Dr. Rajasekaran P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-rajasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajasekaran.jpg"
  },
  {
    "id": "fac-dr-rajathi-v",
    "name": "Dr. Rajathi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajathi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-4.58.36-PM.jpeg"
  },
  {
    "id": "fac-dr-rajesh-kannan-k",
    "name": "Dr. Rajesh Kannan K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajesh-kannan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/RAJESH-KANNAN-K.jpg"
  },
  {
    "id": "fac-dr-rajeshkumar-a-2",
    "name": "Dr. Rajeshkumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajeshkumar-a-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajesh-kumar.jpeg"
  },
  {
    "id": "fac-dr-rajeshkumar-k",
    "name": "Dr. Rajeshkumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajeshkumar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-3.jpg"
  },
  {
    "id": "fac-ms-rajeswari-d",
    "name": "Dr. Rajeswari D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-rajeswari-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-49.jpg"
  },
  {
    "id": "fac-dr-raji-lenin",
    "name": "Dr. Raji Lenin",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-raji-lenin/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/15.Dr_.Raji-medical-Research.jpg"
  },
  {
    "id": "fac-dr-rajiv-g",
    "name": "Dr. Rajiv G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajiv-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Rajiv.jpg"
  },
  {
    "id": "fac-dr-a-rajkamal",
    "name": "Dr. Rajkamal A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-rajkamal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-rajkhanna-r-k",
    "name": "Dr. Rajkhanna R K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajkhanna-r-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/DSC_2454-2.jpg"
  },
  {
    "id": "fac-dr-rajkumar-k",
    "name": "Dr. Rajkumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajkumar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4260.jpg"
  },
  {
    "id": "fac-r-raj-kumar",
    "name": "Dr. Rajkumar R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-raj-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/MY-PHOTO-2-3.jpeg"
  },
  {
    "id": "fac-dr-s-rajkumar",
    "name": "Dr. Rajkumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-rajkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_3849.jpg"
  },
  {
    "id": "fac-dr-rajmohan-r",
    "name": "Dr. Rajmohan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajmohan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajmohan.jpg"
  },
  {
    "id": "fac-dr-rajorshi-das",
    "name": "Dr. Rajorshi Das",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rajorshi-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3956.jpg"
  },
  {
    "id": "fac-mr-j-rajprasad",
    "name": "Dr. Rajprasad J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-rajprasad/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-66.jpg"
  },
  {
    "id": "fac-dr-rama-p",
    "name": "Dr. Rama P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rama-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rama-P.jpg"
  },
  {
    "id": "fac-mr-ramachandiran-r",
    "name": "Dr. Ramachandiran R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ramachandiran-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-8.43.03-AM.jpeg"
  },
  {
    "id": "fac-dr-ramadevi-b",
    "name": "Dr. Ramadevi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramadevi-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-ramakrishnan-ramani",
    "name": "Dr. Ramakrishnan Ramani",
    "designation": "Adjunct Faculty",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramakrishnan-ramani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/RAM_F.jpg"
  },
  {
    "id": "fac-mrs-j-ramaprabha-2",
    "name": "Dr. Ramaprabha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-j-ramaprabha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Ramaprabha.jpg"
  },
  {
    "id": "fac-dr-ramasamy-s",
    "name": "Dr. Ramasamy Subramaniyam",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramasamy-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Ramasamy-Photo-1.jpg"
  },
  {
    "id": "fac-dr-ramazeame-l",
    "name": "Dr. Ramazeame L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramazeame-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Rama-2-scaled.jpg"
  },
  {
    "id": "fac-s-ramesh-2",
    "name": "Dr. Ramesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-ramesh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/ramesh.jpg"
  },
  {
    "id": "fac-dr-s-ramesh",
    "name": "Dr. Ramesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramesh.jpg"
  },
  {
    "id": "fac-dr-ramesh",
    "name": "Dr. Ramesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3759.jpg"
  },
  {
    "id": "fac-dr-rameshkumar-d",
    "name": "Dr. Rameshkumar D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rameshkumar-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr__Rameshkumar_D.png"
  },
  {
    "id": "fac-dr-ramkumar-jayaraman",
    "name": "Dr. Ramkumar Jayaraman",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramkumar-jayaraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramkumar.jpg"
  },
  {
    "id": "fac-dr-ramkumar-a",
    "name": "Dr. Ramkumar. A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ramkumar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.Ramkumar-updated-1.jpg"
  },
  {
    "id": "fac-dr-m-ramprasath",
    "name": "Dr. Ramprasath M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-ramprasath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4256.jpg"
  },
  {
    "id": "fac-ms-a-ramya",
    "name": "Dr. Ramya A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101585-Mrs.-A.-Ramya.jpg"
  },
  {
    "id": "fac-dr-k-t-ramya-devi",
    "name": "Dr. Ramya Devi K T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-t-ramya-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/KTR-photo.jpg"
  },
  {
    "id": "fac-dr-g-ramya-2",
    "name": "Dr. Ramya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-ramya-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-34-1.jpg"
  },
  {
    "id": "fac-dr-g-ramya",
    "name": "Dr. Ramya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-G.jpg"
  },
  {
    "id": "fac-mrs-ramya-m",
    "name": "Dr. Ramya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-ramya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-M-1.jpg"
  },
  {
    "id": "fac-mrs-ramya-p",
    "name": "Dr. Ramya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-ramya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Ramya-p.jpg"
  },
  {
    "id": "fac-ms-t-ramya",
    "name": "Dr. Ramya T",
    "designation": "Assistant Professor(Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-t-ramya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100254-Ms.T.-Ramya.jpg"
  },
  {
    "id": "fac-ms-m-ranjani",
    "name": "Dr. Ranjani M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-m-ranjani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/ranjana.jpg"
  },
  {
    "id": "fac-dr-rasool-p",
    "name": "Dr. Rasool P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rasool-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/130.jpg.jpeg"
  },
  {
    "id": "fac-dr-ravi-eswar-k-m",
    "name": "Dr. Ravi Eswar K M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ravi-eswar-k-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/1745389400197.jpg"
  },
  {
    "id": "fac-dr-ravikumar-v",
    "name": "Dr. Ravi Kumar V",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ravikumar-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/My_Photo_Royal_Society_600dpi-2.jpg"
  },
  {
    "id": "fac-ravichandrakumar-k-b",
    "name": "Dr. Ravichandrakumar K B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ravichandrakumar-k-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Ravichandrakumar-Passport-size-photo.jpg"
  },
  {
    "id": "fac-mr-d-ravichandran",
    "name": "Dr. Ravichandran D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-d-ravichandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/My_Photo_SRMIST-1.jpg"
  },
  {
    "id": "fac-dr-y-ravichandran",
    "name": "Dr. Ravichandran Y",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-y-ravichandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0012_DSC_9301.jpg"
  },
  {
    "id": "fac-dr-ravikirana",
    "name": "Dr. Ravikirana",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ravikirana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4729.jpg"
  },
  {
    "id": "fac-dr-ravindra-kumar",
    "name": "Dr. Ravindra Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ravindra-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/profile-picture1.jpg"
  },
  {
    "id": "fac-dr-ravindran-e",
    "name": "Dr. Ravindran E",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-ravindran-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3930.jpg"
  },
  {
    "id": "fac-dr-s-razia-begum",
    "name": "Dr. Razia Begum S.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-razia-begum/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Razia-Photo.jpg"
  },
  {
    "id": "fac-dr-reebur-seba-gowloog-lepcha",
    "name": "Dr. Reebur Seba Gowloog Lepcha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-reebur-seba-gowloog-lepcha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/srmist-faculty-20.jpg"
  },
  {
    "id": "fac-dr-reena-rose-k",
    "name": "Dr. Reena Rose R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-reena-rose-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/reena-rose.jpg"
  },
  {
    "id": "fac-dr-rehash-rushmi-pavitra-a",
    "name": "Dr. Rehash Rushmi Pavitra A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rehash-rushmi-pavitra-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4286.jpg"
  },
  {
    "id": "fac-dr-remya-raj",
    "name": "Dr. Remya Raj",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-remya-raj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/IMG_2376-_remya-e1745315987713.jpg"
  },
  {
    "id": "fac-dr-renuka-devi-p",
    "name": "Dr. Renuka Devi P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-renuka-devi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Renuka-devi-P.jpg"
  },
  {
    "id": "fac-dr-a-k-reshmy",
    "name": "Dr. Reshmy A K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-k-reshmy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/12.jpg"
  },
  {
    "id": "fac-ms-revathi-devi-s",
    "name": "Dr. Revathi Devi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-revathi-devi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/revathi.jpg"
  },
  {
    "id": "fac-mrs-m-revathi",
    "name": "Dr. Revathi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-revathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/revathi-m.jpg"
  },
  {
    "id": "fac-dr-revathi-s",
    "name": "Dr. Revathi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-revathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/IMG-20240111-WA0002.jpg"
  },
  {
    "id": "fac-dr-revathy-m",
    "name": "Dr. Revathy M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-revathy-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Revathy.jpg"
  },
  {
    "id": "fac-dr-revathy-s",
    "name": "Dr. Revathy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-revathy-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-06-at-7.00.26-PM-1-2.jpeg"
  },
  {
    "id": "fac-dr-s-revathy",
    "name": "Dr. Revathy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-revathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/07.jpg"
  },
  {
    "id": "fac-dr-b-rex",
    "name": "Dr. Rex. B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-rex/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rex.-B.png"
  },
  {
    "id": "fac-rini-p-l",
    "name": "Dr. Rini P L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/rini-p-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-robert-p",
    "name": "Dr. Robert P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-robert-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/41705.jpg"
  },
  {
    "id": "fac-mr-rohan-kumar-gupta",
    "name": "Dr. Rohan Kumar Gupta",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-rohan-kumar-gupta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Dr-Rohan-Kumar.jpeg"
  },
  {
    "id": "fac-dr-rohini-r",
    "name": "Dr. Rohini R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rohini-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Rohini-CDC.jpg"
  },
  {
    "id": "fac-dr-rohit-chakraborty",
    "name": "Dr. Rohit Chakraborty",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rohit-chakraborty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/rohit.jpg"
  },
  {
    "id": "fac-dr-rohit-gupta",
    "name": "Dr. Rohit Gupta",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rohit-gupta/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Rohit-Gupta.png"
  },
  {
    "id": "fac-mr-p-roland-rencewigg",
    "name": "Dr. Roland Rencewigg P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-roland-rencewigg/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7305.jpg"
  },
  {
    "id": "fac-dr-rubeka-idrishi",
    "name": "Dr. Rubeka Idrishi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rubeka-idrishi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-rudra-banerjee",
    "name": "Dr. Rudra Banerjee",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rudra-banerjee/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/DSC_4717.jpg"
  },
  {
    "id": "fac-dr-rushendran-r",
    "name": "Dr. Rushendran R",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-rushendran-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG_0362-scaled.jpg"
  },
  {
    "id": "fac-dr-s-aswath",
    "name": "Dr. S. Aswath",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-aswath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Dr.S.Aswath-1.png"
  },
  {
    "id": "fac-dr-s-deepika",
    "name": "Dr. S. Deepika",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-deepika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-s-kamalakannan",
    "name": "Dr. S. Kamalakannan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-kamalakannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-s-sasikumar",
    "name": "Dr. S. Sasikumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-sasikumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mech-Photos-81.jpg"
  },
  {
    "id": "fac-dr-s-varshavardhini",
    "name": "Dr. S. Varshavardhini",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-varshavardhini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-l-sabari-giri",
    "name": "Dr. Sabarigirivasan L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/l-sabari-giri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Passport-Pic-2.jpg"
  },
  {
    "id": "fac-dr-sabeen-s",
    "name": "Dr. Sabeen S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sabeen-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/sabeen-srm-profile-photo-1.jpg"
  },
  {
    "id": "fac-dr-sabenabanu-a",
    "name": "Dr. Sabenabanu A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sabenabanu-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/87.jpg-scaled.jpeg"
  },
  {
    "id": "fac-m-sadees",
    "name": "Dr. Sadees M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-sadees/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Untitled.png"
  },
  {
    "id": "fac-dr-safiya-parvin-a",
    "name": "Dr. Safiya Parvin A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-safiya-parvin-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/SRMIST-Faculty-11.jpg"
  },
  {
    "id": "fac-sageengrana-s",
    "name": "Dr. Sageengrana S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sageengrana-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-30.jpg"
  },
  {
    "id": "fac-dr-sahadeb-kuila",
    "name": "Dr. Sahadeb Kuila",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sahadeb-kuila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/0b9c1c85-ec3e-4546-b812-6a95ea75dbe5.png"
  },
  {
    "id": "fac-saillaja-v",
    "name": "Dr. Saillaja V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/saillaja-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/10.jpg"
  },
  {
    "id": "fac-mrs-saisanthiya",
    "name": "Dr. Saisanthiya D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-saisanthiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DSC_3788.jpg"
  },
  {
    "id": "fac-saithu-mohammed",
    "name": "Dr. Saithu Mohammed",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/saithu-mohammed/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/20.jpg"
  },
  {
    "id": "fac-mr-sakthi-prasath-gb",
    "name": "Dr. Sakthi Prasath G.B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sakthi-prasath-gb/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sakthi-Prasath-G-B.jpg"
  },
  {
    "id": "fac-dr-sakthi-priyadharshini-s",
    "name": "Dr. Sakthi Priyadarsini S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sakthi-priyadharshini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/38.jpg"
  },
  {
    "id": "fac-dr-sakthipriya-s",
    "name": "Dr. Sakthipriya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sakthipriya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/21-300x300-1.jpg"
  },
  {
    "id": "fac-dr-sakthitharan-s",
    "name": "Dr. Sakthitharan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sakthitharan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sakthi.png"
  },
  {
    "id": "fac-mr-r-sakthivel",
    "name": "Dr. Sakthivel R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-sakthivel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sakthi-Photo.jpg"
  },
  {
    "id": "fac-dr-m-salomi",
    "name": "Dr. Salomi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-salomi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/SalomiSamsudeen-PP-Snap-copy-2.jpg"
  },
  {
    "id": "fac-dr-s-sam-david",
    "name": "Dr. Sam David Swaminathan",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sam-david/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Website-photo-Sam-1.jpg"
  },
  {
    "id": "fac-dr-sam-israel-s",
    "name": "Dr. Sam Israel S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sam-israel-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/5133-scaled.jpg"
  },
  {
    "id": "fac-dr-j-sam-jeba-kumar",
    "name": "Dr. Sam Jeba Kumar J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-sam-jeba-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-22.jpg"
  },
  {
    "id": "fac-dr-sameera-fathimal-m-2",
    "name": "Dr. Sameera Fathimal M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sameera-fathimal-m-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/SAMEERA-PHOTO.jpg"
  },
  {
    "id": "fac-mr-s-saminathan",
    "name": "Dr. Saminathan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-saminathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saminathan.jpg"
  },
  {
    "id": "fac-mr-t-saminathan",
    "name": "Dr. Saminathan T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-t-saminathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101495-Mr.-T.-Saminathan.jpg"
  },
  {
    "id": "fac-dr-sammy-f",
    "name": "Dr. Sammy F",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sammy-f/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Faculty-Photos-srmist-15.jpg"
  },
  {
    "id": "fac-sampath-kumar-s",
    "name": "Dr. Sampath Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sampath-kumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/SAMPATH-6.png"
  },
  {
    "id": "fac-dr-samsudeen-s",
    "name": "Dr. Samsudeen S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-samsudeen-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/srm-faculty-41.jpg"
  },
  {
    "id": "fac-dr-b-samuel-jacob",
    "name": "Dr. Samuel Jacob B",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-samuel-jacob/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0006_DSC_9307.jpg"
  },
  {
    "id": "fac-dr-samuel-joshua-prakasam",
    "name": "Dr. Samuel Joshua Pragasam S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-samuel-joshua-prakasam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Samuel-Photo.png"
  },
  {
    "id": "fac-sandeep-k-lakhera",
    "name": "Dr. Sandeep K. Lakhera",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sandeep-k-lakhera/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4773.jpg"
  },
  {
    "id": "fac-dr-sandeep-kumar-p",
    "name": "Dr. Sandeep Kumar P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sandeep-kumar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102192-Dr.-Sandeep-Kumar-P.jpg"
  },
  {
    "id": "fac-dr-sandhiya-devi-g",
    "name": "Dr. Sandhiya Devi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sandhiya-devi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/oioi.jpg"
  },
  {
    "id": "fac-dr-sandipan-roy",
    "name": "Dr. Sandipan Roy",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sandipan-roy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.Sandipan-Roy.jpg"
  },
  {
    "id": "fac-dr-g-sangeetha",
    "name": "Dr. Sangeetha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-sangeetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/15-scaled.jpg"
  },
  {
    "id": "fac-dr-sangili-a",
    "name": "Dr. Sangili A",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sangili-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/SRMIST-Faculty-15-5.jpg"
  },
  {
    "id": "fac-__trashed-3",
    "name": "Dr. Sanjay Kumar Sahoo",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/__trashed-3/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-sanjay-kumar-sahu",
    "name": "Dr. Sanjay Kumar Sahu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-sahu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102992-Dr.-Sanjay-Kumar-Sahu.jpg"
  },
  {
    "id": "fac-dr-sankar-k",
    "name": "Dr. Sankar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sankar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/AY2A8993-copy-copy.jpg"
  },
  {
    "id": "fac-dr-sankara-narayanan-s",
    "name": "Dr. Sankara Narayanan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sankara-narayanan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/sankara.jpg"
  },
  {
    "id": "fac-dr-sankaran-m",
    "name": "Dr. Sankaran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sankaran-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/unnamed-2-1.png"
  },
  {
    "id": "fac-mrs-k-santhi",
    "name": "Dr. Santhi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-santhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG-20240425-WA0005.jpg"
  },
  {
    "id": "fac-dr-santhiya-p",
    "name": "Dr. Santhiya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-santhiya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-4.jpg"
  },
  {
    "id": "fac-dr-santhiya-r",
    "name": "Dr. Santhiya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-santhiya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/132.jpg.jpeg"
  },
  {
    "id": "fac-santi-prasad-rath",
    "name": "Dr. Santi Prasad Rath",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/santi-prasad-rath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-38-2.jpg"
  },
  {
    "id": "fac-dr-santhosh-kumar-singh",
    "name": "Dr. Santosh Kumar Singh",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-santhosh-kumar-singh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-38.jpg"
  },
  {
    "id": "fac-dr-v-sarada",
    "name": "Dr. Sarada V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-sarada/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100263-Dr.-V.-Sarada.jpg"
  },
  {
    "id": "fac-ms-g-saranya",
    "name": "Dr. Saranya G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-g-saranya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3766.jpg"
  },
  {
    "id": "fac-mrs-saranya-p",
    "name": "Dr. Saranya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-saranya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4358.jpg"
  },
  {
    "id": "fac-s-s-saranya",
    "name": "Dr. Saranya S S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-s-saranya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-S-S.jpg"
  },
  {
    "id": "fac-ms-saranya-v-g",
    "name": "Dr. Saranya V G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-saranya-v-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-18.jpg"
  },
  {
    "id": "fac-mrs-saranya-v-s",
    "name": "Dr. Saranya V S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-saranya-v-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-V-S.jpg"
  },
  {
    "id": "fac-s-saraswathy",
    "name": "Dr. Saraswathy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-saraswathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/4-1-scaled.jpg"
  },
  {
    "id": "fac-dr-saravana-kumar-m",
    "name": "Dr. Saravana Kumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saravana-kumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/saravana-photo-1-scaled.jpg"
  },
  {
    "id": "fac-dr-saravanakumar-a",
    "name": "Dr. Saravanakumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saravanakumar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Saravanakumar-A.jpeg"
  },
  {
    "id": "fac-dr-k-saravanakumar",
    "name": "Dr. Saravanakumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-saravanakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/68.jpg"
  },
  {
    "id": "fac-r-saravanakumar",
    "name": "Dr. Saravanakumar R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-saravanakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/Sara-SRM-photo-1.png"
  },
  {
    "id": "fac-dr-saravanakumar-s",
    "name": "Dr. Saravanakumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saravanakumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/12/saravanan.jpg"
  },
  {
    "id": "fac-dr-saravanakumar-t",
    "name": "Dr. Saravanakumar T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saravanakumar-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/saravana-.jpg"
  },
  {
    "id": "fac-dr-p-saravanan-3",
    "name": "Dr. Saravanan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-saravanan-3/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan-P.jpg"
  },
  {
    "id": "fac-dr-saravanan-p",
    "name": "Dr. Saravanan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saravanan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Saravanan.jpg"
  },
  {
    "id": "fac-dr-sasikumar-a",
    "name": "Dr. Sasikumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sasikumar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4243.jpg"
  },
  {
    "id": "fac-dr-sasikumar-p",
    "name": "Dr. Sasikumar P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sasikumar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Screenshot_2023-01-23-05-54-33-880_com.google.android.gm_.jpg"
  },
  {
    "id": "fac-dr-sasmitha-r",
    "name": "Dr. Sasmitha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sasmitha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.Sasmitha-R.jpg"
  },
  {
    "id": "fac-dr-sathaiah-m",
    "name": "Dr. Sathaiah M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathaiah-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Sathaiah.png"
  },
  {
    "id": "fac-dr-sathees-kumar-k-2",
    "name": "Dr. Sathees Kumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathees-kumar-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/0U1A299444.jpg"
  },
  {
    "id": "fac-dr-sathish-b-r",
    "name": "Dr. Sathish B R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathish-b-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-24.jpg"
  },
  {
    "id": "fac-mr-sathishkumar-a",
    "name": "Dr. Sathishkumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sathishkumar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Screenshot-2025-04-22-090537.png"
  },
  {
    "id": "fac-dr-sathishkumar-m",
    "name": "Dr. Sathishkumar M",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathishkumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/sathish.jpg"
  },
  {
    "id": "fac-dr-s-sathiyan",
    "name": "Dr. Sathiyan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sathiyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102251-Dr.-S.-Sathiyan.jpg"
  },
  {
    "id": "fac-dr-sathya-k",
    "name": "Dr. Sathya K",
    "designation": "ASSISTANT PROFESSOR",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/5119-1-scaled.jpg"
  },
  {
    "id": "fac-dr-sathya-r-2",
    "name": "Dr. Sathya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathya-r-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Sathya.jpg"
  },
  {
    "id": "fac-dr-sathya-r",
    "name": "Dr. Sathya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sathya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Sath-1-scaled.jpg"
  },
  {
    "id": "fac-dr-l-sathyapriya",
    "name": "Dr. Sathyapriya L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-sathyapriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sathyapriya.jpg"
  },
  {
    "id": "fac-satish-kumar-r",
    "name": "Dr. Satish Kumar Rajasekharan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/satish-kumar-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SKR-7.1.png"
  },
  {
    "id": "fac-dr-satya-ranjan-das",
    "name": "Dr. Satya Ranjan Das",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-satya-ranjan-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/faculty-photoshoot-1-7.jpg"
  },
  {
    "id": "fac-dr-saurabh-kumar",
    "name": "Dr. Saurabh Kumar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saurabh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Saurab.png"
  },
  {
    "id": "fac-savaridassan-p",
    "name": "Dr. Savaridassan P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/savaridassan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3822.jpg"
  },
  {
    "id": "fac-mrs-d-saveetha",
    "name": "Dr. Saveetha.D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-d-saveetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3826.jpg"
  },
  {
    "id": "fac-dr-saviour-prakash-g-l",
    "name": "Dr. Saviour Prakash G L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-saviour-prakash-g-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-05-at-10.00.26-AM.jpeg"
  },
  {
    "id": "fac-dr-savitha-t",
    "name": "Dr. Savitha T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-savitha-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/144.jpg.jpeg"
  },
  {
    "id": "fac-mrs-sayantani-bhattacharya",
    "name": "Dr. Sayantani Bhattacharya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-sayantani-bhattacharya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7042-1.jpg"
  },
  {
    "id": "fac-seeja-r-d",
    "name": "Dr. Seeja R D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/seeja-r-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/seeja.jpg"
  },
  {
    "id": "fac-dr-seethal-kuttappan",
    "name": "Dr. Seethal Kuttappan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-seethal-kuttappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/2019.jpg"
  },
  {
    "id": "fac-dr-selladurai-m",
    "name": "Dr. Selladurai M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selladurai-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/srmist-faculty-photos-5.jpg"
  },
  {
    "id": "fac-d-selvabharathi",
    "name": "Dr. Selvabharathi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-selvabharathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-61.jpg"
  },
  {
    "id": "fac-dr-k-selvakumar",
    "name": "Dr. Selvakumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-selvakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1419-1-scaled-e1678075283775.jpg"
  },
  {
    "id": "fac-dr-selvam-a-s",
    "name": "Dr. Selvam A S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selvam-a-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Selvam-A-S.jpg"
  },
  {
    "id": "fac-k-selvam",
    "name": "Dr. Selvam K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-selvam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvam-K.jpg"
  },
  {
    "id": "fac-dr-y-selvamani",
    "name": "Dr. Selvamani.Y",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-y-selvamani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Y.-Selvamani.jpg"
  },
  {
    "id": "fac-dr-selvin-pradeep-kumar-s",
    "name": "Dr. Selvin Pradeep Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selvin-pradeep-kumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Selvin-Pradeep-Kumar-S.jpg"
  },
  {
    "id": "fac-dr-selwyn-jebadurai-d",
    "name": "Dr. Selwyn Jebadurai D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-selwyn-jebadurai-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/SelwynJebadurai-IIT.jpg"
  },
  {
    "id": "fac-senbagam-d",
    "name": "Dr. Senbagam D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/senbagam-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/IMG_54271-scaled.jpg"
  },
  {
    "id": "fac-senkathir-s",
    "name": "Dr. Senkathir S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/senkathir-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-99.jpg"
  },
  {
    "id": "fac-k-senthil-kumar",
    "name": "Dr. Senthil Kumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthilkumar-K.jpg"
  },
  {
    "id": "fac-mr-k-senthil-kumar",
    "name": "Dr. Senthil Kumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-13-1.jpg"
  },
  {
    "id": "fac-dr-r-senthil-kumar",
    "name": "Dr. Senthil Kumar R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Clickzone-21769-copy-2.jpg"
  },
  {
    "id": "fac-dr-r-senthil-kumar-2",
    "name": "Dr. Senthil Kumar R",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/DSC_8949-scaled.jpg"
  },
  {
    "id": "fac-dr-senthil-kumaran-j",
    "name": "Dr. Senthil Kumaran Jayaraman",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Senthil-Kumaran-J.jpg"
  },
  {
    "id": "fac-m-senthil-raja",
    "name": "Dr. Senthil Raja M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-senthil-raja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Raja.jpg"
  },
  {
    "id": "fac-l-s-senthilkumar",
    "name": "Dr. Senthilkumar L.S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/l-s-senthilkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/resize-16395919231449480155DSC0650copy.jpg"
  },
  {
    "id": "fac-dr-c-senthilnathan",
    "name": "Dr. Senthilnathan C",
    "designation": "Assistant Professor -Senior Grade",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-senthilnathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0053_DSC_9356.jpg"
  },
  {
    "id": "fac-dr-k-shadak-alee",
    "name": "Dr. Shadak Alee K",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-shadak-alee/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/shadak-2-1.jpeg"
  },
  {
    "id": "fac-dr-shafiya-m",
    "name": "Dr. Shafiya M",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shafiya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5315.jpg"
  },
  {
    "id": "fac-mr-shaik-niyazuddin-guntakal",
    "name": "Dr. Shaik Niyazuddin Guntakal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-shaik-niyazuddin-guntakal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WEBSITE-PHOTO.jpg"
  },
  {
    "id": "fac-dr-shailendra-k-saxena",
    "name": "Dr. Shailendra K. Saxena",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shailendra-k-saxena/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4724.jpg"
  },
  {
    "id": "fac-dr-shakila-s",
    "name": "Dr. Shakila S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shakila-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Shak-2-scaled.jpg"
  },
  {
    "id": "fac-dr-shalini-infanta-l",
    "name": "Dr. Shalini Infanta L",
    "designation": "Assistant Professor & Research Advisor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shalini-infanta-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/3-1-scaled.jpg"
  },
  {
    "id": "fac-ms-shamayita-sen",
    "name": "Dr. Shamayita Sen",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-shamayita-sen/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/ChatGPT-Image-Aug-20-2026-05_26_26-PM.png"
  },
  {
    "id": "fac-dr-shankar-v",
    "name": "Dr. Shankar V",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shankar-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/DSC_4029-2-scaled.jpg"
  },
  {
    "id": "fac-dr-shanmugam-k",
    "name": "Dr. Shanmugam K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shanmugam-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-s-shanmugam",
    "name": "Dr. Shanmugam S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-shanmugam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shanmugan.jpg"
  },
  {
    "id": "fac-mr-shanmuganathan-v",
    "name": "Dr. Shanmuganathan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-shanmuganathan-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Mr.-Shanmuganathan-V.jpg"
  },
  {
    "id": "fac-dr-s-shanmugapriya",
    "name": "Dr. Shanmugapriya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-shanmugapriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0624-scaled.jpg"
  },
  {
    "id": "fac-dr-b-shanthakumar",
    "name": "Dr. ShanthaKumar B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-shanthakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/15-3.jpg"
  },
  {
    "id": "fac-dr-shanthi-r",
    "name": "Dr. Shanthi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shanthi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/4-scaled.jpg"
  },
  {
    "id": "fac-dr-shanthini-s",
    "name": "Dr. Shanthini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shanthini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/shan.jpg"
  },
  {
    "id": "fac-mrs-sharanya-s",
    "name": "Dr. Sharanya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-sharanya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-12.jpg"
  },
  {
    "id": "fac-dr-sharmi-rachel-c-m",
    "name": "Dr. Sharmi Rachel C M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sharmi-rachel-c-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/srmist-faculty-30-2.jpg"
  },
  {
    "id": "fac-ms-sharmila-b",
    "name": "Dr. Sharmila B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sharmila-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/srmist-faculty-23.jpg"
  },
  {
    "id": "fac-dr-sharon-samson",
    "name": "Dr. Sharon Samson",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sharon-samson/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/11-scaled.jpg"
  },
  {
    "id": "fac-dr-shayna-kumari",
    "name": "Dr. Shayna Kumari",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shayna-kumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/shyana.jpg"
  },
  {
    "id": "fac-dr-sheeba-t-m",
    "name": "Dr. Sheeba T M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sheeba-t-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/66.jpg.jpeg"
  },
  {
    "id": "fac-dr-g-sheeja",
    "name": "Dr. Sheeja G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-sheeja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5296.jpg"
  },
  {
    "id": "fac-dr-p-sheela",
    "name": "Dr. Sheela. P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-sheela/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Shee-2-scaled.jpg"
  },
  {
    "id": "fac-dr-sheerinsithara-a",
    "name": "Dr. Sheerinsithara A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sheerinsithara-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/98.jpg.jpeg"
  },
  {
    "id": "fac-dr-c-sherin-shibi",
    "name": "Dr. Sherin Shibi C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-sherin-shibi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-28-at-16.33.42.jpeg"
  },
  {
    "id": "fac-dr-sheryl-oliver-a",
    "name": "Dr. Sheryl Oliver A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sheryl-oliver-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4372.jpg"
  },
  {
    "id": "fac-dr-n-v-shibu",
    "name": "Dr. Shibu N V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-v-shibu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shibu.jpg"
  },
  {
    "id": "fac-shiju-kumar-p-s",
    "name": "Dr. Shiju Kumar P S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/shiju-kumar-p-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Shiju-Kumar-P-S-1.jpg"
  },
  {
    "id": "fac-dr-shiny-pj",
    "name": "Dr. Shiny PJ",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shiny-pj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-k-r-shiva-shankaran",
    "name": "Dr. Shiva Shankaran K.R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-r-shiva-shankaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Shiva.png"
  },
  {
    "id": "fac-dr-l-k-shoba",
    "name": "Dr. Shoba LK",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-l-k-shoba/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shoba.jpg"
  },
  {
    "id": "fac-dr-c-shravan-kumar",
    "name": "Dr. Shravankumar C.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-shravan-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-95.jpg"
  },
  {
    "id": "fac-dr-sv-shri-bharathi",
    "name": "Dr. Shri Bharathi SV",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sv-shri-bharathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4502.jpg"
  },
  {
    "id": "fac-mr-shwet-kashyap",
    "name": "Dr. Shwet Kashyap",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-shwet-kashyap/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-3.jpg"
  },
  {
    "id": "fac-dr-shyju-wilson",
    "name": "Dr. Shyju Wilson",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shyju-wilson/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-45.jpg"
  },
  {
    "id": "fac-dr-shyni-shajahan",
    "name": "Dr. Shyni Shajahan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shyni-shajahan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Shyni.jpg"
  },
  {
    "id": "fac-mr-sibi-amaran",
    "name": "Dr. Sibi Amaran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sibi-amaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sibi-Amaran.jpg"
  },
  {
    "id": "fac-dr-s-sindhu",
    "name": "Dr. Sindhu S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sindhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4263.jpg"
  },
  {
    "id": "fac-dr-sindhuja-m",
    "name": "Dr. Sindhuja M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sindhuja-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-d-siva-krishna-reddy",
    "name": "Dr. Siva Krishna Reddy D",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-siva-krishna-reddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-75.jpg"
  },
  {
    "id": "fac-dr-a-siva-kumar",
    "name": "Dr. Siva Kumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-siva-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4259.jpg"
  },
  {
    "id": "fac-dr-siva-m",
    "name": "Dr. Siva M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-siva-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/siva.jpg"
  },
  {
    "id": "fac-ms-s-sivakavitha",
    "name": "Dr. Sivakavitha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-sivakavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-scaled.jpg"
  },
  {
    "id": "fac-mr-sivakumar-e",
    "name": "Dr. Sivakumar E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sivakumar-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100266-Dr.-E.-Sivakumar.jpg"
  },
  {
    "id": "fac-dr-sivakumar-m",
    "name": "Dr. Sivakumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivakumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3753.jpg"
  },
  {
    "id": "fac-dr-narsu-sivakumar",
    "name": "Dr. Sivakumar Narsu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-narsu-sivakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5284.jpg"
  },
  {
    "id": "fac-dr-s-sivakumar-3",
    "name": "Dr. Sivakumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-3/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sivakumar.jpg"
  },
  {
    "id": "fac-dr-sivakumar-s-2",
    "name": "Dr. Sivakumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivakumar-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Dr.S.Sivakumar-600669.jpg"
  },
  {
    "id": "fac-dr-s-sivakumar-2",
    "name": "Dr. Sivakumar S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/7-3-scaled.jpg"
  },
  {
    "id": "fac-dr-sivakumar-s",
    "name": "Dr. Sivakumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivakumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-04-12-at-2.37.58-AM.jpeg"
  },
  {
    "id": "fac-t-k-sivakumar",
    "name": "Dr. Sivakumar T K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/t-k-sivakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sivakumar-T-K.jpg"
  },
  {
    "id": "fac-dr-sivamohan-s",
    "name": "Dr. Sivamohan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivamohan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/sivamohan.jpg"
  },
  {
    "id": "fac-dr-k-sivaperumal",
    "name": "Dr. Sivaperumal K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-sivaperumal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/13-2-scaled.jpg"
  },
  {
    "id": "fac-sivaprakash-g-2",
    "name": "Dr. Sivaprakash G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sivaprakash-g-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/siva_nptel.jpg"
  },
  {
    "id": "fac-dr-sivaraj-mohana-sundaram",
    "name": "Dr. Sivaraj Mohana Sundaram",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivaraj-mohana-sundaram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/19.Dr_.M.S.-Sivaraj-Medical-Research.jpg"
  },
  {
    "id": "fac-dr-sreejith-s",
    "name": "Dr. Sivaramapanicker Sreejith",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sreejith-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreejith-Image-SRM-1-1.jpg"
  },
  {
    "id": "fac-dr-sivaranjini-s",
    "name": "Dr. Sivaranjini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivaranjini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Sivaranjini-College-Photo-e1745377415793.png"
  },
  {
    "id": "fac-dr-sivasakthi-selvan-s",
    "name": "Dr. Sivasakthiselvan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivasakthi-selvan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/SSS.jpg"
  },
  {
    "id": "fac-dr-m-sivasankari",
    "name": "Dr. Sivasankari M",
    "designation": "Assistant Professor and Head (Dept. of Corporate Secretaryship and Accounting & Finance-FSH)",
    "department": "Dept. of Corporate Secretaryship and Accounting & Finance-FSH)",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sivasankari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/8-scaled.jpg"
  },
  {
    "id": "fac-dr-sivashankar-g",
    "name": "Dr. Sivashankar G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sivashankar-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4460.jpg"
  },
  {
    "id": "fac-mr-m-sivashankar",
    "name": "Dr. Sivashankar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-sivashankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/DSC_8971-scaled.jpg"
  },
  {
    "id": "fac-dr-t-r-sivashankari",
    "name": "Dr. Sivashankari T. R.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-r-sivashankari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0082_DSC_9221.jpg"
  },
  {
    "id": "fac-dr-snehasish-ghosh-2",
    "name": "Dr. Snehasish Ghosh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-snehasish-ghosh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Snehasish-Ghosh.jpg"
  },
  {
    "id": "fac-k-sofiya",
    "name": "Dr. Sofiya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-sofiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Sofiya-K-1.jpg"
  },
  {
    "id": "fac-dr-soji",
    "name": "Dr. Soji S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-soji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/SOJI-SRM.jpeg"
  },
  {
    "id": "fac-dr-j-soloman-thangadurai",
    "name": "Dr. Solomon Thangadurai J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-soloman-thangadurai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/9516-2-scaled.jpg"
  },
  {
    "id": "fac-dr-somia-sharma",
    "name": "Dr. Somia Sharma",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-somia-sharma/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-k-sorna-lakshmi",
    "name": "Dr. Sorna Lakshmi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-sorna-lakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sornalakshmi-scaled.jpg"
  },
  {
    "id": "fac-mrs-soshya-joshi",
    "name": "Dr. Soshya Joshi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-soshya-joshi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Soshya-Joshi.jpg"
  },
  {
    "id": "fac-dr-soumyaranjan-routray",
    "name": "Dr. Soumyaranjan Routray",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-soumyaranjan-routray/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102437-Dr.-Soumyaranjan-Routray.jpg"
  },
  {
    "id": "fac-dr-sounik-kiran-kumar-dash",
    "name": "Dr. Sounik Kiran Kumar Dash",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sounik-kiran-kumar-dash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102812-Dr.-Sounik-Kiran-Dash.jpg"
  },
  {
    "id": "fac-dr-sourya-bandyopadhyay",
    "name": "Dr. Sourya Bandyopadhyay",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sourya-bandyopadhyay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-souvik-mandal",
    "name": "Dr. Souvik Mandal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-souvik-mandal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/photo-for-website.jpg"
  },
  {
    "id": "fac-b-sowmiya",
    "name": "Dr. Sowmiya B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-sowmiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sowmiya.jpg"
  },
  {
    "id": "fac-ms-sowmya-n",
    "name": "Dr. Sowmya N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sowmya-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/sowmya.jpg"
  },
  {
    "id": "fac-dr-shabothrei-k",
    "name": "Dr. Sravaitri Chaudhuri",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-shabothrei-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/sravaitri-picture.png"
  },
  {
    "id": "fac-dr-sreejith-p-m",
    "name": "Dr. Sreejith P Madhusudanan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sreejith-p-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/IMG_8474.jpg"
  },
  {
    "id": "fac-dr-sreekrishna-m",
    "name": "Dr. Sreekrishna M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sreekrishna-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/sreekrishna-photo-2.jpg"
  },
  {
    "id": "fac-dr-sreyass-k-s",
    "name": "Dr. Sreyass K S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sreyass-k-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Srey-1-scaled.jpg"
  },
  {
    "id": "fac-dr-sridevi-ponmalar-p",
    "name": "Dr. Sridevi Ponmalar. P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sridevi-ponmalar-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4352.jpg"
  },
  {
    "id": "fac-dr-sridhar-m-b",
    "name": "Dr. Sridhar M.B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sridhar-m-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/SRI_15.4.25.jpg"
  },
  {
    "id": "fac-mr-srijeet-tripathy",
    "name": "Dr. Srijeet Tripathy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-srijeet-tripathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/pic01.jpg"
  },
  {
    "id": "fac-mrs-m-k-srilekha",
    "name": "Dr. Srilekha M K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-k-srilekha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101124-Mrs.-M.K.-Srilekha.jpg"
  },
  {
    "id": "fac-dr-srinath-r",
    "name": "Dr. Srinath.R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srinath-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/01-2.jpg"
  },
  {
    "id": "fac-m-srinivasan",
    "name": "Dr. Srinivasan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-srinivasan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0037_DSC_9373.jpg"
  },
  {
    "id": "fac-mr-a-sriram",
    "name": "Dr. Sriram A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-a-sriram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101594-Mr.-A.-Sriram.jpg"
  },
  {
    "id": "fac-dr-m-sriram",
    "name": "Dr. Sriram M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sriram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0031_DSC_9379.jpg"
  },
  {
    "id": "fac-srividhya-b",
    "name": "Dr. Srividhya B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/srividhya-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-12.47.52-1.jpeg"
  },
  {
    "id": "fac-srividhya-s",
    "name": "Dr. Srividhya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/srividhya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4272.jpg"
  },
  {
    "id": "fac-dr-srividya-n",
    "name": "Dr. Srividya N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srividya-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/133.jpg.jpeg"
  },
  {
    "id": "fac-dr-sruthi-ann-alex",
    "name": "Dr. Sruthi Ann Alex",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sruthi-ann-alex/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Dr.-Sruthi.png"
  },
  {
    "id": "fac-ms-sruthi-m",
    "name": "Dr. Sruthi Laakshmi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sruthi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Sruthi_SRM_Photo.jpg"
  },
  {
    "id": "fac-dr-stephen-das-a",
    "name": "Dr. Stephen Dass A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-stephen-das-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-6.jpg"
  },
  {
    "id": "fac-mrs-subashini-b",
    "name": "Dr. Subashini B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-subashini-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4278-1.jpg"
  },
  {
    "id": "fac-dr-subha-j",
    "name": "Dr. Subha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subha-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/subha-J-photo.jpg"
  },
  {
    "id": "fac-dr-subha-k-j",
    "name": "Dr. Subha K J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subha-k-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-32-1.jpg"
  },
  {
    "id": "fac-ms-subha-s",
    "name": "Dr. Subha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-subha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-27.jpg"
  },
  {
    "id": "fac-dr-k-subha-sharmini",
    "name": "Dr. Subha Sharmini K",
    "designation": "Assistant Professor (Sr.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-subha-sharmini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/IMG-20261005-WA0008-Picsart-BackgroundChanger.jpg-4-2.png"
  },
  {
    "id": "fac-dr-subhan-kumar-pal",
    "name": "Dr. Subhan Kumar Pal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subhan-kumar-pal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Subhan-kumar-pal-resume.jpg"
  },
  {
    "id": "fac-s-subhashini",
    "name": "Dr. Subhashini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-subhashini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0007_DSC_9306.jpg"
  },
  {
    "id": "fac-dr-subhashis-pal",
    "name": "Dr. Subhashis Pal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subhashis-pal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-subhojyoti-sinha",
    "name": "Dr. Subhojyoti Sinha",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/subhojyoti-sinha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-3.jpg"
  },
  {
    "id": "fac-dr-subramanian-k",
    "name": "Dr. Subramanian K",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subramanian-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-22.jpg"
  },
  {
    "id": "fac-dr-subrata-maiti",
    "name": "Dr. Subrata Maiti",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-subrata-maiti/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5280.jpg"
  },
  {
    "id": "fac-sudestna-nahak",
    "name": "Dr. Sudestna Nahak",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sudestna-nahak/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5182.jpg"
  },
  {
    "id": "fac-b-sudha",
    "name": "Dr. Sudha B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/b-sudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5343.jpg"
  },
  {
    "id": "fac-ms-c-sudha",
    "name": "Dr. Sudha C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-c-sudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-21.37.39_2f9351fc.jpg"
  },
  {
    "id": "fac-dr-sudha-d",
    "name": "Dr. Sudha D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sudha-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-4.jpg"
  },
  {
    "id": "fac-dr-g-sudha",
    "name": "Dr. Sudha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-sudha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5345.jpg"
  },
  {
    "id": "fac-sudha-l",
    "name": "Dr. Sudha L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sudha-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/15.jpg"
  },
  {
    "id": "fac-ms-sudha-m-r",
    "name": "Dr. Sudha M R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sudha-m-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-2-scaled.jpg"
  },
  {
    "id": "fac-dr-sudhanya-p",
    "name": "Dr. Sudhanya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sudhanya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102954-Dr.P.-Sudhanya.jpg"
  },
  {
    "id": "fac-dr-sudipta-sarkar",
    "name": "Dr. Sudipta Sarkar",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sudipta-sarkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/srmist-faculty-10.jpg"
  },
  {
    "id": "fac-dr-sugan-j",
    "name": "Dr. Sugan J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sugan-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-10.jpg"
  },
  {
    "id": "fac-dr-m-suganiya",
    "name": "Dr. Suganiya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-suganiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suganiya.jpg"
  },
  {
    "id": "fac-mrs-g-suganthi-brindha",
    "name": "Dr. Suganthi Brindha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-g-suganthi-brindha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101583-Mrs.G.-Suganthi-Brindha.jpg"
  },
  {
    "id": "fac-dr-k-suganthi",
    "name": "Dr. Suganthi K",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-suganthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100241-Dr.-K.-Suganthi.jpg"
  },
  {
    "id": "fac-ms-suganthi-m",
    "name": "Dr. Suganthi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-suganthi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Suganthi-Photo-1.jpg"
  },
  {
    "id": "fac-dr-suganya-a",
    "name": "Dr. Suganya A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suganya-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Suganya.jpg"
  },
  {
    "id": "fac-mrs-a-suganya",
    "name": "Dr. Suganya A",
    "designation": "Assistant Professor (O.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-a-suganya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0025_DSC_9387.jpg"
  },
  {
    "id": "fac-dr-suganya-p",
    "name": "Dr. Suganya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suganya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/suganya-faculty-photos-srmist-11.jpg"
  },
  {
    "id": "fac-suganya-sundaramoorthy",
    "name": "Dr. Suganya Sundaramoorthy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/suganya-sundaramoorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/faculty-photos-srmist-10.jpg"
  },
  {
    "id": "fac-suganya-i",
    "name": "Dr. Suganya. I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/suganya-i/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Suganya.png"
  },
  {
    "id": "fac-dr-suganyadevi-s",
    "name": "Dr. Suganyadevi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suganyadevi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-suhasini-p",
    "name": "Dr. Suhasini P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suhasini-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-k-suja",
    "name": "Dr. Suja K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-suja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5264.jpg"
  },
  {
    "id": "fac-mrs-sujatha-r",
    "name": "Dr. Sujatha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-sujatha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4209.jpg"
  },
  {
    "id": "fac-dr-v-sujatha",
    "name": "Dr. Sujatha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-sujatha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/Sujatha_V.jpg"
  },
  {
    "id": "fac-dr-sujit-kumar",
    "name": "Dr. Sujit Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sujit-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/sujit.jpg"
  },
  {
    "id": "fac-dr-sujithra-j",
    "name": "Dr. Sujithra J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sujithra-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Sujithra-Photo.jpg"
  },
  {
    "id": "fac-dr-sujoy-kumar-ghosh",
    "name": "Dr. Sujoy Kumar Ghosh",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sujoy-kumar-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/5-1.jpg"
  },
  {
    "id": "fac-dr-sukanya-ghosh",
    "name": "Dr. Sukanya Ghosh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sukanya-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/profile_picture.jpg"
  },
  {
    "id": "fac-mr-sukumar-r",
    "name": "Dr. Sukumar R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sukumar-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Sukumarr.jpeg"
  },
  {
    "id": "fac-dr-sulagna-mohanty",
    "name": "Dr. Sulagna Mohanty",
    "designation": "Assistant Professor of English",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sulagna-mohanty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sulgana.png"
  },
  {
    "id": "fac-dr-sumana-ghosh",
    "name": "Dr. Sumana Ghosh",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumana-ghosh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5357.jpg"
  },
  {
    "id": "fac-mrs-s-sumathi",
    "name": "Dr. Sumathi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-sumathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7356.jpg"
  },
  {
    "id": "fac-dr-sumathy-m",
    "name": "Dr. Sumathy M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumathy-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/DSC_7380-scaled.jpg"
  },
  {
    "id": "fac-dr-sumi-kar",
    "name": "Dr. Sumi Kar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sumi-kar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Photo_Sumi.jpg"
  },
  {
    "id": "fac-sumitra-v",
    "name": "Dr. Sumitra V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sumitra-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7035.jpg"
  },
  {
    "id": "fac-dr-sundar-singh-d",
    "name": "Dr. Sundar Singh D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sundar-singh-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Sundar.jpg"
  },
  {
    "id": "fac-sundar-singh-sivam-s-p",
    "name": "Dr. Sundar Singh Sivam S P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sundar-singh-sivam-s-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-46.jpg"
  },
  {
    "id": "fac-dr-sundaram-p",
    "name": "Dr. Sundaram P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sundaram-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/DSC_9003-868x1024-1.jpg"
  },
  {
    "id": "fac-ms-sundari-k",
    "name": "Dr. Sundari K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sundari-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/22.jpg"
  },
  {
    "id": "fac-dr-sundarrajan-m",
    "name": "Dr. Sundarrajan M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sundarrajan-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3771.jpg"
  },
  {
    "id": "fac-dr-sunil-venkanna-pogu",
    "name": "Dr. Sunil Venkanna Pogu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sunil-venkanna-pogu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Profile_Picture-1.jpg"
  },
  {
    "id": "fac-dr-sunithamani-s",
    "name": "Dr. Sunithamani S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sunithamani-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/dr-S-Sunithamani.jpg"
  },
  {
    "id": "fac-ms-supraja-g",
    "name": "Dr. Supraja G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-supraja-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-35.jpg"
  },
  {
    "id": "fac-dr-supriti-laha",
    "name": "Dr. Supriti Laha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-supriti-laha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Dr.-Supriti-Laha.png"
  },
  {
    "id": "fac-dr-m-suresh-anand",
    "name": "Dr. Suresh Anand M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-suresh-anand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/SURESH-ANAND-M.jpg"
  },
  {
    "id": "fac-dr-suresh-c",
    "name": "Dr. Suresh C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suresh-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-03-04-at-11.47.24-AM.jpeg"
  },
  {
    "id": "fac-dr-k-suresh-2",
    "name": "Dr. Suresh K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-suresh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr_K_Suresh_Photo.jpeg"
  },
  {
    "id": "fac-dr-suresh-kumar-s",
    "name": "Dr. Suresh Kumar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suresh-kumar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-36.jpg"
  },
  {
    "id": "fac-dr-m-sures",
    "name": "Dr. Suresh M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-sures/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suresh.jpg"
  },
  {
    "id": "fac-dr-suresh-p",
    "name": "Dr. Suresh P",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suresh-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Suresh-Photo-scaled.jpg"
  },
  {
    "id": "fac-dr-p-suresh-2",
    "name": "Dr. Suresh P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-suresh-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.P.Suresh-1-scaled.jpg"
  },
  {
    "id": "fac-dr-v-suresh",
    "name": "Dr. Suresh V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-suresh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0045_DSC_9365.jpg"
  },
  {
    "id": "fac-mr-a-sureshkumar",
    "name": "Dr. Sureshkumar A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-a-sureshkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Sureshkumar.jpg"
  },
  {
    "id": "fac-dr-suruthi-s",
    "name": "Dr. Suruthi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suruthi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Suruthi-Photo_SRM-1.jpeg"
  },
  {
    "id": "fac-dr-suryanarayanan-c",
    "name": "Dr. Suryanarayanan C",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suryanarayanan-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/image.jpg"
  },
  {
    "id": "fac-mr-p-susai-manickam",
    "name": "Dr. Susai Manickam P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-susai-manickam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-84.jpg"
  },
  {
    "id": "fac-dr-sushobhan-maity",
    "name": "Dr. Sushobhan Maity",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sushobhan-maity/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5274.jpg"
  },
  {
    "id": "fac-dr-susnata-pramanik",
    "name": "Dr. Susnata Pramanik",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-susnata-pramanik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/photoSusnataPramanik-2.jpg"
  },
  {
    "id": "fac-dr-suthanthira-devi-p-2",
    "name": "Dr. Suthanthira Devi P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-suthanthira-devi-p-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-12.34.06-PM.jpeg"
  },
  {
    "id": "fac-dr-v-suvitha",
    "name": "Dr. Suvitha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-suvitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-39.jpg"
  },
  {
    "id": "fac-dr-swadesh-paul",
    "name": "Dr. Swadesh Pal",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-swadesh-paul/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-48.jpg"
  },
  {
    "id": "fac-dr-swarup-barik",
    "name": "Dr. Swarup Barik",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-swarup-barik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-24.jpg"
  },
  {
    "id": "fac-mr-swatantra-kumar-jaiswal",
    "name": "Dr. Swatantra Kumar Jaiswal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-swatantra-kumar-jaiswal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/11/faculty-photos-srmist-6.jpg"
  },
  {
    "id": "fac-swathi-mirthika-g-l",
    "name": "Dr. Swathi Mirthika G L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/swathi-mirthika-g-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Swathi-Mirthika-G-L.jpg"
  },
  {
    "id": "fac-dr-swathy-r",
    "name": "Dr. Swathy R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-swathy-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3763.jpg"
  },
  {
    "id": "fac-dr-sweta-s",
    "name": "Dr. Sweta S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sweta-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-8.jpg"
  },
  {
    "id": "fac-dr-m-l-sworna-kokila",
    "name": "Dr. Sworna Kokila M. L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-l-sworna-kokila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sworna.jpg"
  },
  {
    "id": "fac-mr-s-syed-abdul-rahman-2",
    "name": "Dr. Syed Abdul Rahman S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-syed-abdul-rahman-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/01.jpg"
  },
  {
    "id": "fac-mr-syed-abuthahir-s",
    "name": "Dr. Syed Abuthahir S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-syed-abuthahir-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Syed-Photo.jpg"
  },
  {
    "id": "fac-dr-syed-anwar-hussainy-f",
    "name": "Dr. Syed Anwar Hussainy F",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-syed-anwar-hussainy-f/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/DSC_4297-copy-2.jpg"
  },
  {
    "id": "fac-dr-syed-ismail-a",
    "name": "Dr. Syed Ismail Abdul Lathif",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-syed-ismail-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4252.jpg"
  },
  {
    "id": "fac-dr-t-chinnadurai",
    "name": "Dr. T. Chinnadurai",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-chinnadurai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-27-at-16.10.33.jpeg"
  },
  {
    "id": "fac-dr-grace-shalini-t",
    "name": "Dr. T.Grace Shalini",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-grace-shalini-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/9.png"
  },
  {
    "id": "fac-dr-tamanna-yadav",
    "name": "Dr. Tamanna Yadav",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tamanna-yadav/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-12.png"
  },
  {
    "id": "fac-ms-tamilselvi-s",
    "name": "Dr. Tamil Selvi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-tamilselvi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-36.jpg"
  },
  {
    "id": "fac-dr-tamilmani-g",
    "name": "Dr. Tamilmani G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tamilmani-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4451.jpg"
  },
  {
    "id": "fac-tamilselvan-appadurai",
    "name": "Dr. Tamilselvan Appadurai",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/tamilselvan-appadurai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4769.jpg"
  },
  {
    "id": "fac-dr-tamilselvi-s",
    "name": "Dr. Tamilselvi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tamilselvi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/tom.jpg"
  },
  {
    "id": "fac-dr-c-tamizhselvan",
    "name": "Dr. Tamizhselvan C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-tamizhselvan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4298.jpg"
  },
  {
    "id": "fac-dr-tanay-kundu",
    "name": "Dr. Tanay Kundu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tanay-kundu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3943.jpg"
  },
  {
    "id": "fac-dr-tanmoy-chakraborty",
    "name": "Dr. Tanmoy Chakraborty",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tanmoy-chakraborty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5276.jpg"
  },
  {
    "id": "fac-dr-tapan-kumar-mistri",
    "name": "Dr. Tapan Kumar Mistri",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tapan-kumar-mistri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3936.jpg"
  },
  {
    "id": "fac-dr-tapas-barman",
    "name": "Dr. Tapas Barman",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tapas-barman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5242.jpg"
  },
  {
    "id": "fac-dr-tapas-mondal",
    "name": "Dr. Tapas Mondal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tapas-mondal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Myphoto.jpg"
  },
  {
    "id": "fac-ms-tapasi-mohanty",
    "name": "Dr. Tapasi Mohanty",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-tapasi-mohanty/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-7.jpg"
  },
  {
    "id": "fac-dr-tarak-nath-mandal",
    "name": "Dr. Tarak Nath Mandal",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tarak-nath-mandal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3955.jpg"
  },
  {
    "id": "fac-dr-tasrin-shahnaz",
    "name": "Dr. Tasrin Shahnaz",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tasrin-shahnaz/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-10-at-22.54.20.jpeg"
  },
  {
    "id": "fac-dr-s-k-tamilvanan",
    "name": "Dr. Thamilvanan S.K.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-k-tamilvanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5241.jpg"
  },
  {
    "id": "fac-dr-r-thamizhamuthu",
    "name": "Dr. Thamizhamuthu R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-thamizhamuthu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thamizhamuthu.jpg"
  },
  {
    "id": "fac-dr-thanga-selvi-r",
    "name": "Dr. Thanga Selvi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thanga-selvi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-35-1.jpg"
  },
  {
    "id": "fac-mr-thanigaivelu-p-s",
    "name": "Dr. Thanigaivelu P S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-thanigaivelu-p-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thanigaivelu-P-S.jpg"
  },
  {
    "id": "fac-dr-tharani-d",
    "name": "Dr. Tharani D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tharani-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7039.jpg"
  },
  {
    "id": "fac-dr-tharani",
    "name": "Dr. Tharani K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tharani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-thavamani-j",
    "name": "Dr. Thavamani J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thavamani-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-97.jpg"
  },
  {
    "id": "fac-dr-thenmozhi-s",
    "name": "Dr. Thenmozhi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thenmozhi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5307.jpg",
    "empId": "103240"
  },
  {
    "id": "fac-mr-h-thiagu-2",
    "name": "Dr. Thiagu H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-h-thiagu-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-103.jpg"
  },
  {
    "id": "fac-dr-r-thilagavathy",
    "name": "Dr. Thilagavathy R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/6-2-scaled.jpg"
  },
  {
    "id": "fac-dr-s-thilagavathy",
    "name": "Dr. Thilagavathy S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-thilagavathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/compressed-Thilaga-Photo.jpg"
  },
  {
    "id": "fac-dr-thilaka-a",
    "name": "Dr. Thilaka A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thilaka-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/thilaka.jpeg"
  },
  {
    "id": "fac-dr-m-thineshkumar",
    "name": "Dr. Thineshkumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-thineshkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/5-scaled.jpg"
  },
  {
    "id": "fac-dr-t-thirumaleswari",
    "name": "Dr. Thirumaleswari T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-thirumaleswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/03.jpg"
  },
  {
    "id": "fac-dr-d-thirumurugan",
    "name": "Dr. Thirumurugan D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-d-thirumurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/photo-e1711285828803.png"
  },
  {
    "id": "fac-dr-thirunavukkarasu-m",
    "name": "Dr. Thirunavukkarasu M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thirunavukkarasu-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-j-thiyagarajan",
    "name": "Dr. Thiyagarajan J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-thiyagarajan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/5Y0A6947.jpg"
  },
  {
    "id": "fac-dr-thomas-alwa-edison-k",
    "name": "Dr. Thomas Alwa Edison. K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-thomas-alwa-edison-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Thomas.png"
  },
  {
    "id": "fac-dr-trilochan-sahoo",
    "name": "Dr. Trilochan Sahoo",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-trilochan-sahoo/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4771.jpg"
  },
  {
    "id": "fac-dr-tulika-srivastava",
    "name": "Dr. Tulika Srivastava",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tulika-srivastava/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7040-1.jpg"
  },
  {
    "id": "fac-dr-tumpa-sadhukhan",
    "name": "Dr. Tumpa Sadhukhan",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-tumpa-sadhukhan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3989.jpg"
  },
  {
    "id": "fac-tushar-h-rana",
    "name": "Dr. Tushar H. Rana",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/tushar-h-rana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4689.jpg"
  },
  {
    "id": "fac-dr-udaratta-bhattacharjee",
    "name": "Dr. Udaratta Bhattacharjee",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-udaratta-bhattacharjee/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-14.jpg"
  },
  {
    "id": "fac-mr-p-udayakumar",
    "name": "Dr. Udayakumar P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-udayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-76.jpg"
  },
  {
    "id": "fac-mr-udendhran",
    "name": "Dr. Udendhran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-udendhran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-udhaya-karthika",
    "name": "Dr. Udhaya Karthika",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-udhaya-karthika/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Dr.-Udhaya-Karthika_SRM_Prof-Photo.jpg"
  },
  {
    "id": "fac-dr-p-uma-maheswari",
    "name": "Dr. Uma Maheswari P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-uma-maheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5330.jpg"
  },
  {
    "id": "fac-dr-s-umamageshwari",
    "name": "Dr. Umamageshwari S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-umamageshwari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_27781.jpg"
  },
  {
    "id": "fac-dr-s-umamaheswari",
    "name": "Dr. Umamaheswari S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-umamaheswari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102136-Dr.S.-Uma-maheswari.jpg"
  },
  {
    "id": "fac-v-g-umasekar",
    "name": "Dr. Umasekar V G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-g-umasekar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-53.jpg"
  },
  {
    "id": "fac-dr-s-usha-2",
    "name": "Dr. Usha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-usha-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/usha-2.jpeg"
  },
  {
    "id": "fac-dr-usharani-r",
    "name": "Dr. Usharani R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-usharani-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4346.jpg"
  },
  {
    "id": "fac-mrs-uthra-r",
    "name": "Dr. Uthra R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-uthra-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/RU.jpg"
  },
  {
    "id": "fac-mr-v-ganesh",
    "name": "Dr. V. Ganesh",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-ganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Ganesh-V.jpg"
  },
  {
    "id": "fac-mr-vaddi-venkata-narayana",
    "name": "Dr. Vaddi Venkata Narayana",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vaddi-venkata-narayana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-58.jpg"
  },
  {
    "id": "fac-dr-vadivel-s",
    "name": "Dr. Vadivel S",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vadivel-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3928.jpg"
  },
  {
    "id": "fac-dr-vadivel-s-2",
    "name": "Dr. Vadivel S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vadivel-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-7.jpg"
  },
  {
    "id": "fac-dr-k-vadivukkarasi",
    "name": "Dr. Vadivukkarasi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-vadivukkarasi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100272-Dr.-K.-Vadivukkarasi.jpg"
  },
  {
    "id": "fac-m-vaidhehi",
    "name": "Dr. Vaidhehi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-vaidhehi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Vaidhehi.jpg"
  },
  {
    "id": "fac-dr-vaishnavi-j",
    "name": "Dr. Vaishnavi J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vaishnavi-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Vaishnav.jpg"
  },
  {
    "id": "fac-dr-vaissnave-v",
    "name": "Dr. Vaissnave V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vaissnave-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/vaishnavee.jpg"
  },
  {
    "id": "fac-m-valarmathi",
    "name": "Dr. Valarmathi M",
    "designation": "Assistant Professor (S.G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-valarmathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100265-Mrs.-M.-Valarmathi.jpg"
  },
  {
    "id": "fac-dr-valli-t",
    "name": "Dr. Valli T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-valli-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-vamsi-krishna-dommeti",
    "name": "Dr. Vamsi Krishna Dommeti",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vamsi-krishna-dommeti/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-70.jpg"
  },
  {
    "id": "fac-dr-j-vanitha",
    "name": "Dr. Vanitha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-j-vanitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Vani-1-scaled.jpg"
  },
  {
    "id": "fac-dr-vanitha-s",
    "name": "Dr. Vanitha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vanitha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/101-resized.jpg-scaled.jpeg"
  },
  {
    "id": "fac-dr-vanthana-sree-g",
    "name": "Dr. Vanthana Sree G",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vanthana-sree-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/pic_page-0001.jpg"
  },
  {
    "id": "fac-d-vanusha",
    "name": "Dr. Vanusha D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-vanusha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Vanusha-website-pic.png"
  },
  {
    "id": "fac-dr-varun-p",
    "name": "Dr. Varun P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-varun-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4299.jpg"
  },
  {
    "id": "fac-mr-vasanth-kumar-ch",
    "name": "Dr. Vasanth Kumar.CH",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vasanth-kumar-ch/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/srmist-faculty-13.jpg"
  },
  {
    "id": "fac-s-vasanth",
    "name": "Dr. Vasanth S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-vasanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/S_Vasanth.png"
  },
  {
    "id": "fac-dr-s-vasanthadev-suryakala",
    "name": "Dr. Vasanthadev Suryakala S",
    "designation": "Assistant Professor (Sr. G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vasanthadev-suryakala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100252-Dr.-S.-Vasanthadev-Suryakala.jpg"
  },
  {
    "id": "fac-dr-r-vasantharekha",
    "name": "Dr. Vasantharekha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-vasantharekha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0005_DSC_9308.jpg"
  },
  {
    "id": "fac-dr-vasudevan-b",
    "name": "Dr. Vasudevan B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vasudevan-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/02/Screenshot-2024-02-11-162849-1.jpg"
  },
  {
    "id": "fac-mr-vasudevan-n",
    "name": "Dr. Vasudevan N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vasudevan-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4321.jpg"
  },
  {
    "id": "fac-d-vathana",
    "name": "Dr. Vathana D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/d-vathana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vathana.jpg"
  },
  {
    "id": "fac-dr-vattikondala-ganesh",
    "name": "Dr. Vattikondala Ganesh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vattikondala-ganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4710.jpg"
  },
  {
    "id": "fac-dr-vedhanarayanan-b",
    "name": "Dr. Vedhanarayanan B",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vedhanarayanan-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3944-e1713439979706.jpg"
  },
  {
    "id": "fac-dr-t-r-vedhavathy",
    "name": "Dr. Vedhavathy T R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-r-vedhavathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3802.jpg"
  },
  {
    "id": "fac-dr-veerchandra",
    "name": "Dr. Veer Chandra",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-veerchandra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/pic2.jpeg"
  },
  {
    "id": "fac-mr-veeranaath-v",
    "name": "Dr. Veeranaath V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-veeranaath-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-88.jpg"
  },
  {
    "id": "fac-dr-s-velliangiri",
    "name": "Dr. Velliangiri S",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-velliangiri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Velliangiri_102887-1.jpg"
  },
  {
    "id": "fac-dr-velmurugan-g",
    "name": "Dr. Velmurugan G",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-velmurugan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/srmist-faculty-21.jpg"
  },
  {
    "id": "fac-dr-t-velmurugan",
    "name": "Dr. Velmurugan T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-t-velmurugan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0011_DSC_9404.jpg"
  },
  {
    "id": "fac-velupula-krishnaiah",
    "name": "Dr. Velupula Krishnaiah",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/velupula-krishnaiah/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-1-2.jpg"
  },
  {
    "id": "fac-dr-veneeswari-j",
    "name": "Dr. Veneeswari J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-veneeswari-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-s-a-vengadesh-subramanian-2",
    "name": "Dr. Vengadesh Subramanian S.A.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-a-vengadesh-subramanian-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-3.jpg"
  },
  {
    "id": "fac-mrs-n-veni",
    "name": "Dr. Veni  N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-n-veni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101988-Mrs.-N.Veni_.jpg"
  },
  {
    "id": "fac-dr-venkata-ravindra-a",
    "name": "Dr. Venkata Ravindra A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-venkata-ravindra-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Passport-Pic_Dr.-Venkata-Ravindra-A_2-e1791871503414.png"
  },
  {
    "id": "fac-dr-venkatesan-g",
    "name": "Dr. Venkatesan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-venkatesan-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/WhatsApp-Image-2026-09-25-at-6.03.07-PM.jpeg"
  },
  {
    "id": "fac-dr-m-venkatesh-prabhu",
    "name": "Dr. Venkatesh Prabhu M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-venkatesh-prabhu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0069_DSC_9234.jpg"
  },
  {
    "id": "fac-dr-venkatesh-s",
    "name": "Dr. Venkatesh S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-venkatesh-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4323.jpg"
  },
  {
    "id": "fac-dr-a-venmani",
    "name": "Dr. Venmani A",
    "designation": "Associate  Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-a-venmani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600420-scaled.jpg"
  },
  {
    "id": "fac-vetriselvi-d",
    "name": "Dr. Vetriselvi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vetriselvi-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vetriselvi-D.jpg"
  },
  {
    "id": "fac-dr-vibha-k",
    "name": "Dr. Vibha K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vibha-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Dr.Vibha_.jpg"
  },
  {
    "id": "fac-dr-vidhya-b",
    "name": "Dr. Vidhya B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vidhya-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-design.png",
    "empId": "103387"
  },
  {
    "id": "fac-dr-s-vidhya",
    "name": "Dr. Vidhya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vidhya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-S.jpg",
    "empId": "102939"
  },
  {
    "id": "fac-dr-vidhya-v",
    "name": "Dr. Vidhya V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vidhya-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5255.jpg"
  },
  {
    "id": "fac-dr-v-g-vidhya",
    "name": "Dr. Vidhya V.G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-v-g-vidhya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600087-3-scaled.jpg"
  },
  {
    "id": "fac-ms-vidhyalakshmi-a-m",
    "name": "Dr. Vidhyalakshmi A M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vidhyalakshmi-a-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-38.jpg"
  },
  {
    "id": "fac-dr-s-vidyanandini",
    "name": "Dr. Vidyanandini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vidyanandini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5278.jpg"
  },
  {
    "id": "fac-dr-s-vidyasagar",
    "name": "Dr. Vidyasagar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vidyasagar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/SVS-photo-new-scaled.jpg"
  },
  {
    "id": "fac-dr-k-s-vignesh",
    "name": "Dr. Vignesh K S",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-s-vignesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-15-at-11.42.37-AM-e1743743585404.jpeg"
  },
  {
    "id": "fac-dr-m-vignesh-kumar",
    "name": "Dr. Vignesh Kumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-vignesh-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-MVK.jpg"
  },
  {
    "id": "fac-dr-p-vignesh",
    "name": "Dr. Vignesh P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-vignesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5331.jpg"
  },
  {
    "id": "fac-s-m-vignesh",
    "name": "Dr. Vignesh SM",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-m-vignesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Vignesh_S_M.png"
  },
  {
    "id": "fac-mr-n-vijay-krishna",
    "name": "Dr. Vijay Krishna N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-vijay-krishna/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/014-1.png"
  },
  {
    "id": "fac-dr-vijay-pal-bajiya",
    "name": "Dr. Vijay Pal Bajiya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijay-pal-bajiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Vijay_photo1.jpg"
  },
  {
    "id": "fac-mr-vijay-v",
    "name": "Dr. Vijay V",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vijay-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_0410.jpg"
  },
  {
    "id": "fac-mr-vijayakumar-m",
    "name": "Dr. Vijayakumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vijayakumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/srmist-faculty-3.png"
  },
  {
    "id": "fac-dr-vijayalakshmi-b",
    "name": "Dr. Vijayalakshmi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-21.jpg"
  },
  {
    "id": "fac-ms-d-vijayalakshmi",
    "name": "Dr. Vijayalakshmi D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-d-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/srmist-faculty-photos-25.jpg"
  },
  {
    "id": "fac-dr-g-vijayalakshmi",
    "name": "Dr. Vijayalakshmi G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5279.jpg"
  },
  {
    "id": "fac-dr-k-vijayalakshmi",
    "name": "Dr. Vijayalakshmi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-k-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4361-1.jpg"
  },
  {
    "id": "fac-dr-vijayalakshmi-k",
    "name": "Dr. Vijayalakshmi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/viks-photo.jpeg"
  },
  {
    "id": "fac-vijayalakshmi-m",
    "name": "Dr. Vijayalakshmi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vijayalakshmi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayalakshmi.jpg"
  },
  {
    "id": "fac-dr-s-vijayalakshmi",
    "name": "Dr. Vijayalakshmi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/My-photo-2-1.png"
  },
  {
    "id": "fac-dr-vijayalakshmi-t",
    "name": "Dr. Vijayalakshmi T",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5298.jpg"
  },
  {
    "id": "fac-ms-v-vijayalakshmi",
    "name": "Dr. Vijayalakshmi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-v-vijayalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/SRMIST-Faculty-9.jpg"
  },
  {
    "id": "fac-dr-vijayalakshmi-v-2",
    "name": "Dr. Vijayalakshmi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-v-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4268.jpg"
  },
  {
    "id": "fac-ms-d-viji",
    "name": "Dr. Viji D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-d-viji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/VIJI.jpg"
  },
  {
    "id": "fac-dr-vijiyakumar-k",
    "name": "Dr. Vijiyakumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vijiyakumar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijiyakumar.jpg"
  },
  {
    "id": "fac-dr-s-vimal",
    "name": "Dr. Vimal S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-s-vimal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20240418_214225-1.jpg"
  },
  {
    "id": "fac-dr-c-vimala",
    "name": "Dr. Vimala C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-c-vimala/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101107-Dr.C.-Vimala.jpg"
  },
  {
    "id": "fac-dr-m-vimaladevi",
    "name": "Dr. Vimaladevi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-m-vimaladevi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4362.jpg"
  },
  {
    "id": "fac-mr-g-vimalanandan",
    "name": "Dr. Vimalanandan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-vimalanandan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-12-1.jpg"
  },
  {
    "id": "fac-dr-vimalastarbino-a",
    "name": "Dr. Vimalastarbino A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vimalastarbino-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Vimala_Starbino.png"
  },
  {
    "id": "fac-dr-vinay-kishnani",
    "name": "Dr. Vinay Kishnani",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinay-kishnani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Vinay-Kishnani.jpg"
  },
  {
    "id": "fac-ms-vineetha-r",
    "name": "Dr. Vineetha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vineetha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/ChatGPT-Image-Jul-14-2026-11_01_07-AM.png"
  },
  {
    "id": "fac-dr-vinitha-a",
    "name": "Dr. Vinitha A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinitha-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-vinitha-k",
    "name": "Dr. Vinitha K",
    "designation": "Program Chair - MBA Financial Services & Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinitha-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Dr.Vinitha.jpeg"
  },
  {
    "id": "fac-vinoth-a",
    "name": "Dr. Vinoth A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vinoth-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-93.jpg"
  },
  {
    "id": "fac-dr-vinoth-e",
    "name": "Dr. Vinoth E",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinoth-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Photo-Vinoth.jpg"
  },
  {
    "id": "fac-dr-vinoth-k",
    "name": "Dr. Vinoth K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinoth-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/005-1-1.jpg"
  },
  {
    "id": "fac-mr-vinoth-n-a-s-2",
    "name": "Dr. Vinoth N A S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vinoth-n-a-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/vinoth.jpg"
  },
  {
    "id": "fac-dr-vinoth-palanisamy",
    "name": "Dr. Vinoth Palanisamy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinoth-palanisamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/upscalemedia-transformed-scaled.jpeg"
  },
  {
    "id": "fac-dr-vinotheni-c",
    "name": "Dr. Vinotheni C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinotheni-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/vinophoto-1.jpg"
  },
  {
    "id": "fac-ms-vinothini-r",
    "name": "Dr. Vinothini R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vinothini-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Vinothini.jpg"
  },
  {
    "id": "fac-dr-n-vinothini",
    "name": "Dr. Vinothini. N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-n-vinothini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Vino-4-1-scaled.jpg"
  },
  {
    "id": "fac-mr-b-vinothkumar",
    "name": "Dr. Vinothkumar B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-b-vinothkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0650-scaled.jpg"
  },
  {
    "id": "fac-dr-vinston-raja-r",
    "name": "Dr. Vinston Raja R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinston-raja-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-13-at-11.51.34-e1736749766875.jpeg"
  },
  {
    "id": "fac-mr-k-c-vinu-prakash-2",
    "name": "Dr. Vinu Prakash K. C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-c-vinu-prakash-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-64.jpg"
  },
  {
    "id": "fac-dr-vinu-s",
    "name": "Dr. Vinu S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vinu-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/srm-faculty-27.jpg"
  },
  {
    "id": "fac-dr-vishalakshi-r",
    "name": "Dr. Vishalakshi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vishalakshi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Visha_Photo-100-kb.jpg"
  },
  {
    "id": "fac-vishvas-kumar",
    "name": "Dr. Vishvas Kumar",
    "designation": "Assistant Professor (Semiconductor Material and Thin Film Solar Cell)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vishvas-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7029.jpg"
  },
  {
    "id": "fac-mr-viswanathan-v",
    "name": "Dr. Viswanathan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-viswanathan-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/viswananthan.jpg"
  },
  {
    "id": "fac-dr-vivek-devendra-kachhatiya",
    "name": "Dr. Vivek Devendra Kachhatiya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vivek-devendra-kachhatiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102985-Dr.-Vivek-Devendra-Kachhatiya.jpg"
  },
  {
    "id": "fac-dr-vivek-justus",
    "name": "Dr. Vivek Justus",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vivek-justus/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Vivek.jpg"
  },
  {
    "id": "fac-dr-vivek-kumar",
    "name": "Dr. Vivek Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-vivek-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Faculty-Photos-srmist-3-1.jpg"
  },
  {
    "id": "fac-ms-viveka-s",
    "name": "Dr. Viveka S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-viveka-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/viveka.jpg"
  },
  {
    "id": "fac-dr-waseem-bashir",
    "name": "Dr. Waseem Bashir",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-waseem-bashir/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/srmist-faculty-photos-6.jpg"
  },
  {
    "id": "fac-dr-wilson-prakash-s",
    "name": "Dr. Wilson Prakash S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-wilson-prakash-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4246.jpg"
  },
  {
    "id": "fac-dr-xavier-reni-prasad-a",
    "name": "Dr. Xavier Reni Prasad A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-xavier-reni-prasad-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-50.jpg"
  },
  {
    "id": "fac-yantsubeni-ngullie",
    "name": "Dr. Yantsubeni Ngullie",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/yantsubeni-ngullie/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/B612_20240705_100650_229.jpg"
  },
  {
    "id": "fac-ms-yashmin-khatun",
    "name": "Dr. Yashmin Khatun",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-yashmin-khatun/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-10-at-14.41.44_0b1da070-1.jpg"
  },
  {
    "id": "fac-dr-yasotha-b",
    "name": "Dr. Yasotha B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yasotha-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/yasotha-photo2.jpg"
  },
  {
    "id": "fac-dr-yazhinian-s",
    "name": "Dr. Yazhinian S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yazhinian-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Yazhinian.jpg"
  },
  {
    "id": "fac-p-yogalakshmi",
    "name": "Dr. Yoga Lakshmi P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-yogalakshmi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-2-scaled.jpg"
  },
  {
    "id": "fac-dr-yoganandhan-v",
    "name": "Dr. Yoganandhan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yoganandhan-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG-20251006-WA0001.jpg"
  },
  {
    "id": "fac-mr-s-yokeshwaran",
    "name": "Dr. Yokeshwaran S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-yokeshwaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Yokeshwaran-S.jpg"
  },
  {
    "id": "fac-dr-yuvaraj-r",
    "name": "Dr. Yuvaraj R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yuvaraj-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-yuvasri",
    "name": "Dr. Yuvasri R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yuvasri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/WhatsApp-Image-2025-06-29-at-7.22.06-PM.jpeg"
  },
  {
    "id": "fac-ms-zorah-susan-abraham",
    "name": "Dr. Zorah Susan Abraham",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-zorah-susan-abraham/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Ms.-Zorah-Susan-Abraham.jpg"
  },
  {
    "id": "fac-dr-b-jeevashri",
    "name": "Dr.B.Jeevashri",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-b-jeevashri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-k-gayathri",
    "name": "Dr.Gayathiri K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-gayathri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/17-2.jpg"
  },
  {
    "id": "fac-dr-varalakshmi-i",
    "name": "Dr.I.Varalakshmi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-varalakshmi-i/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-kavitha-d",
    "name": "Dr.Kavitha D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kavitha-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/20-06-2025-faculty-profile-14-1.jpg"
  },
  {
    "id": "fac-e-kavitha",
    "name": "Dr.Kavitha.E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/e-kavitha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/profile-photo.jpeg"
  },
  {
    "id": "fac-mr-moorthi-k",
    "name": "Dr.Moorthi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-moorthi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Moorthi-Photo1.jpeg"
  },
  {
    "id": "fac-s-t-aarthy",
    "name": "Dr.S.T. Aarthy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-t-aarthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100246-Mrs.-S.T.-Aarthy.jpg"
  },
  {
    "id": "fac-dr-felcy-e",
    "name": "E.Felcy Gunaranjitham",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-felcy-e/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/website-photo.jpeg"
  },
  {
    "id": "fac-mr-manimaran-r",
    "name": "Manimaran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-manimaran-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Photograph.jpg"
  },
  {
    "id": "fac-mr-hemachandran-g",
    "name": "Mr.  Hemachandran G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-hemachandran-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SRM-College-of-Occupational-Therapy-photos-14.jpg"
  },
  {
    "id": "fac-mr-srinivasan-s",
    "name": "Mr.  Srinivasan Sridharan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-srinivasan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-5.jpg"
  },
  {
    "id": "fac-mr-aarash-pirzada",
    "name": "Mr. Aarash Pirzada",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-aarash-pirzada/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Mr.-Aarash-Pirzada.png"
  },
  {
    "id": "fac-mr-abdur-rasheed",
    "name": "Mr. Abdur Rasheed",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-abdur-rasheed/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-akilarasan-vinayagam",
    "name": "Mr. AkilArasan Vinayagam",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-akilarasan-vinayagam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/IMG_6063-scaled-e1789980276799.jpg"
  },
  {
    "id": "fac-mr-alankar-upadhyay",
    "name": "Mr. Alankar Upadhyay",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-alankar-upadhyay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/IMG_20260315_192557-1-scaled.jpg"
  },
  {
    "id": "fac-m-anand-2",
    "name": "Mr. Anand M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-anand-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Anand_Passport-size-7.2cm-x-8.5cm.jpg"
  },
  {
    "id": "fac-mr-anand-shukla",
    "name": "Mr. Anand Shukla",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-anand-shukla/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Mr.-Anand-Shukla.jpg"
  },
  {
    "id": "fac-mr-anoop-ajith-m",
    "name": "Mr. Anoop Ajith M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-anoop-ajith-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aj-.jpg"
  },
  {
    "id": "fac-mr-m-ari-ganapathi",
    "name": "Mr. Ari Ganapathy M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-ari-ganapathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7340.jpg"
  },
  {
    "id": "fac-mr-s-arun-prasath",
    "name": "Mr. Arun Prasath S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-arun-prasath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-87.jpg"
  },
  {
    "id": "fac-mr-arunkumar-j",
    "name": "Mr. Arunkumar J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-arunkumar-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Arun-itkm.jpg"
  },
  {
    "id": "fac-arvind-m",
    "name": "Mr. Arvind M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/arvind-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-8.jpg"
  },
  {
    "id": "fac-mr-azhar-r-asharaf",
    "name": "Mr. Azhar R Asharaf",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-azhar-r-asharaf/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-14-at-2.12.03-PM.jpeg"
  },
  {
    "id": "fac-mr-jai-ganesh-b",
    "name": "Mr. B. Jai Ganesh",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-jai-ganesh-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-9.33.31-AM.jpeg"
  },
  {
    "id": "fac-mr-balachander-s",
    "name": "Mr. Balachander S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-balachander-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/SRMIST_Faculty_Profile_800x1000.jpg"
  },
  {
    "id": "fac-g-balakumaran",
    "name": "Mr. Balakumaran G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-balakumaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Balakumaran.png"
  },
  {
    "id": "fac-prof-balamaheshwaran-renganathan",
    "name": "Mr. Balamaheshwaran Renganathan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prof-balamaheshwaran-renganathan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Bala_.jpg"
  },
  {
    "id": "fac-mr-barathraj-r-k",
    "name": "Mr. Barathraj R K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-barathraj-r-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Barath_Latest_Passport_pic_crop.jpg"
  },
  {
    "id": "fac-j-beno-jones",
    "name": "Mr. Beno Jones J",
    "designation": "Assistant Professor and Head of the Department",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-beno-jones/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/DSC_9979.-scaled.jpg"
  },
  {
    "id": "fac-bharat-n",
    "name": "Mr. Bharat N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/bharat-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Bharat.jpg"
  },
  {
    "id": "fac-busareddy-vijaya-kumar",
    "name": "Mr. Busareddy Vijaya Kumar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/busareddy-vijaya-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/busareddy.jpg"
  },
  {
    "id": "fac-chandrakumar-k",
    "name": "Mr. Chandrakumar K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/chandrakumar-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-56.jpg"
  },
  {
    "id": "fac-m-chandrasekaran",
    "name": "Mr. Chandrasekaran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-chandrasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Chandrasekaran.png"
  },
  {
    "id": "fac-chezhiyan-s-2",
    "name": "Mr. Chezhiyan S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/chezhiyan-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/photo-4.0-for-faculty-profile-1-scaled.jpg"
  },
  {
    "id": "fac-mr-daksh-saroha",
    "name": "Mr. Daksh Saroha",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-daksh-saroha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/PXL_20210325_064017695-01.jpeg"
  },
  {
    "id": "fac-mr-m-dhanasekaran",
    "name": "Mr. Dhanasekaran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-dhanasekaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-101.jpg"
  },
  {
    "id": "fac-dhinesh-k-s",
    "name": "Mr. Dhinesh K S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dhinesh-k-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dhinesh.-K.-S.jpg"
  },
  {
    "id": "fac-mr-ganesh-shanker-s",
    "name": "Mr. Ganesh Shanker S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ganesh-shanker-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-2.jpg"
  },
  {
    "id": "fac-ganeshamoorthy-j",
    "name": "Mr. Ganeshamoorthy J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ganeshamoorthy-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ganeshamoorty.jpg"
  },
  {
    "id": "fac-mr-giridharan-n",
    "name": "Mr. Giridharan N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-giridharan-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Giridharan.jpg"
  },
  {
    "id": "fac-mr-gopal-acharya",
    "name": "Mr. Gopal Acharya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-gopal-acharya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Photo.jpg"
  },
  {
    "id": "fac-mr-gopinath-g-p",
    "name": "Mr. Gopinath G P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-gopinath-g-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-10.jpg"
  },
  {
    "id": "fac-gowtham-r",
    "name": "Mr. Gowtham Rajendiran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/gowtham-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/My-photo-new1-1.png"
  },
  {
    "id": "fac-mr-guruswaminathan-j",
    "name": "Mr. Guruswaminathan J",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-guruswaminathan-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Myphoto-e1767760226414.jpg"
  },
  {
    "id": "fac-mr-i-harinath",
    "name": "Mr. Harinath I",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-i-harinath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7342.jpg"
  },
  {
    "id": "fac-mr-r-harris-samuel",
    "name": "Mr. Harris Samuel R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-harris-samuel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-85.jpg"
  },
  {
    "id": "fac-mr-hemachalam-s",
    "name": "Mr. Hemachalam S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-hemachalam-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-8.jpg"
  },
  {
    "id": "fac-iynthezhuthon-k",
    "name": "Mr. Iynthezhuthon K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/iynthezhuthon-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Iynthezhuthon.jpg"
  },
  {
    "id": "fac-jai-ganesh",
    "name": "Mr. Jai Ganesh M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/jai-ganesh/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Mr.-Jai-Ganesh-M.jpg"
  },
  {
    "id": "fac-mr-janeshwar-raj-y",
    "name": "Mr. Janeshwar Raj Y",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-janeshwar-raj-y/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/IMG-20231205-WA0000-1.jpg"
  },
  {
    "id": "fac-mr-m-p-jeremia",
    "name": "Mr. Jeremia M P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-p-jeremia/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7361.jpg"
  },
  {
    "id": "fac-josin-hippolitus-a",
    "name": "Mr. Josin Hippolitus A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/josin-hippolitus-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/profile-pic.png"
  },
  {
    "id": "fac-kamaraj-dharmalingam",
    "name": "Mr. Kamaraj Dharmalingam",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kamaraj-dharmalingam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Kama-2-scaled-e1693997889438.jpg"
  },
  {
    "id": "fac-mr-karthik-raj-m",
    "name": "Mr. Karthik Raj M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-karthik-raj-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.karthik-Raj.jpg"
  },
  {
    "id": "fac-mr-karthikeyan-g-2",
    "name": "Mr. Karthikeyan G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-karthikeyan-g-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-n-karthikeyan",
    "name": "Mr. Karthikeyan N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-karthikeyan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-39.jpg"
  },
  {
    "id": "fac-mr-kaviyaraj-r",
    "name": "Mr. Kaviyaraj R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-kaviyaraj-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/Profile-Photo2025.jpg"
  },
  {
    "id": "fac-mr-lakshmi-srinivas-a",
    "name": "Mr. Lakshmi Srinivas A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-lakshmi-srinivas-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Lakshmi_Srinivas.png"
  },
  {
    "id": "fac-mr-s-logeshwaran",
    "name": "Mr. Logeshwaran S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-logeshwaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Logeshwaran-New.png"
  },
  {
    "id": "fac-mr-mahesh-krishna",
    "name": "Mr. Mahesh Krishna",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mahesh-krishna/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Passport-photo-compressed.jpeg"
  },
  {
    "id": "fac-mr-mangalacharan-patra",
    "name": "Mr. Mangalacharan Patra",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mangalacharan-patra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6.jpg"
  },
  {
    "id": "fac-mr-manikandan-j",
    "name": "Mr. Manikandan J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-manikandan-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-manova-prasanna-kumar",
    "name": "Mr. Manova Prasanna Kumar D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/manova-prasanna-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-57.jpg"
  },
  {
    "id": "fac-mr-k-murali",
    "name": "Mr. Murali K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-murali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7310.jpg"
  },
  {
    "id": "fac-mr-muralidhar-barik-h",
    "name": "Mr. Muralidhar Barik H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-muralidhar-barik-h/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/srm-faculty-1-11.jpg"
  },
  {
    "id": "fac-e-muthu",
    "name": "Mr. Muthu E",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/e-muthu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/emuthu.jpg"
  },
  {
    "id": "fac-mr-j-muthumanivannan",
    "name": "Mr. Muthumanivannan J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-j-muthumanivannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7304.jpg"
  },
  {
    "id": "fac-mr-nagarajan-s",
    "name": "Mr. Nagarajan S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-nagarajan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/02nagarrb1-1.jpg",
    "empId": "103622"
  },
  {
    "id": "fac-mr-nandhakumar-v",
    "name": "Mr. Nandhakumar Vijayan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-nandhakumar-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Nandhakumar.jpg"
  },
  {
    "id": "fac-mr-niranjan-r",
    "name": "Mr. Niranjan R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-niranjan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/photo_2026-07-28_13-45-09.jpg"
  },
  {
    "id": "fac-nishanth-j",
    "name": "Mr. Nishanth J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/nishanth-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/passport-photo-2.jpg"
  },
  {
    "id": "fac-mr-s-panneerselvam",
    "name": "Mr. Panneerselvam S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-panneerselvam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-51.jpg"
  },
  {
    "id": "fac-mr-p-partheeswaran",
    "name": "Mr. Partheeswaran P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-partheeswaran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Partheeswaran-P-edited.png"
  },
  {
    "id": "fac-mr-prabhakaran-s",
    "name": "Mr. Prabhakaran S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-prabhakaran-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4455.jpg"
  },
  {
    "id": "fac-mr-r-prathap-chandran",
    "name": "Mr. Prathap Chandran R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-prathap-chandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7341.jpg"
  },
  {
    "id": "fac-mr-prem-nasir",
    "name": "Mr. Prem Nasir",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-prem-nasir/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-11.jpg"
  },
  {
    "id": "fac-mr-p-priyanand",
    "name": "Mr. Priyanand",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-p-priyanand/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/2023-08-02-12-17-41-162.jpg"
  },
  {
    "id": "fac-mr-pulkit-sharma-2",
    "name": "Mr. Pulkit Sharma",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-pulkit-sharma-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Pulkit-Sharma.jpg"
  },
  {
    "id": "fac-mr-raghavendran-m",
    "name": "Mr. Raghavendran M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-raghavendran-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/said-pic-raghav.jpg"
  },
  {
    "id": "fac-rajasekar-s",
    "name": "Mr. Rajasekar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/rajasekar-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0038_DSC_9372.jpg"
  },
  {
    "id": "fac-rajkumar-m",
    "name": "Mr. Rajkumar M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/rajkumar-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-55.jpg"
  },
  {
    "id": "fac-mr-n-rajkumar",
    "name": "Mr. Rajkumar N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-rajkumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7345.jpg"
  },
  {
    "id": "fac-mr-ramraj-r",
    "name": "Mr. Ramraj R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ramraj-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-rengarajan-n",
    "name": "Mr. Rengarajan.N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-rengarajan-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/rengarajan-said-photograph-scaled-e1684859765672.jpg"
  },
  {
    "id": "fac-rohit-ravi",
    "name": "Mr. Rohit Ravi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/rohit-ravi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5217.jpg"
  },
  {
    "id": "fac-mr-m-sachidhanandam",
    "name": "Mr. Sachidhanandam M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-sachidhanandam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-64.jpg"
  },
  {
    "id": "fac-mr-sai-prasanth",
    "name": "Mr. Sai Prasanth D",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sai-prasanth/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Sai-Id-Photo.jpeg"
  },
  {
    "id": "fac-mr-k-sakthivel",
    "name": "Mr. Sakthivel K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-sakthivel/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/12.jpg"
  },
  {
    "id": "fac-k-saravanan",
    "name": "Mr. Saravanan K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/K__Saravanan.png"
  },
  {
    "id": "fac-mr-saravanan-n",
    "name": "Mr. Saravanan N",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-saravanan-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Saravanan-Photo-.jpg"
  },
  {
    "id": "fac-mr-k-sathiyamoorthy",
    "name": "Mr. Sathiyamoorthy K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-k-sathiyamoorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-31.jpg"
  },
  {
    "id": "fac-mr-g-senthil-kumar-2",
    "name": "Mr. Senthil Kumar G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-g-senthil-kumar-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/G.Senthil-kumar-2-scaled.jpg"
  },
  {
    "id": "fac-senthilkumar-m-k-s",
    "name": "Mr. Senthilkumar M K S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/senthilkumar-m-k-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5.png"
  },
  {
    "id": "fac-shyamsundar-g",
    "name": "Mr. Shyamsundar G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/shyamsundar-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/photojpeg.jpg"
  },
  {
    "id": "fac-mr-shyamsundar",
    "name": "Mr. Shyamsundar G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-shyamsundar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/photojpeg.jpg"
  },
  {
    "id": "fac-dr-srihari-v",
    "name": "Mr. Srihari V",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-srihari-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-21.png"
  },
  {
    "id": "fac-c-subramanian",
    "name": "Mr. Subramanian C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/c-subramanian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-33.jpg"
  },
  {
    "id": "fac-s-sundar",
    "name": "Mr. Sundar S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-sundar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-30.jpg"
  },
  {
    "id": "fac-mr-thamizhazhagan-s",
    "name": "Mr. Thamizhazhagan S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-thamizhazhagan-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-m-thirugnanam",
    "name": "Mr. Thirugnanam M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-thirugnanam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr_M_Thirugnanam.png"
  },
  {
    "id": "fac-mr-vasanth-m",
    "name": "Mr. Vasanth M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vasanth-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Vasanth-Photo-copy.jpg"
  },
  {
    "id": "fac-j-venkata-subramanian",
    "name": "Mr. Venkata Subramanian J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-venkata-subramanian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-3-scaled.jpg"
  },
  {
    "id": "fac-mr-venkatesh-c",
    "name": "Mr. Venkatesh C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-venkatesh-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Venkatesh.jpg"
  },
  {
    "id": "fac-mr-vignaeshwar-c",
    "name": "Mr. Vignaeshwar C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vignaeshwar-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/vigneshwaran.jpg"
  },
  {
    "id": "fac-mr-vignesh-r",
    "name": "Mr. Vignesh R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vignesh-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-21-at-10.17.13-AM.jpeg"
  },
  {
    "id": "fac-mr-vijay-muthumanickam",
    "name": "Mr. Vijay Muthumanickam",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vijay-muthumanickam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-vinayak-malhotra",
    "name": "Mr. Vinayak Malhotra",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vinayak-malhotra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Vinayak-Malhotra.jpeg"
  },
  {
    "id": "fac-mr-vivek-a",
    "name": "Mr. Vivek A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vivek-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-vivek-kumar-pandey",
    "name": "Mr. Vivek Kumar Pandey",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-vivek-kumar-pandey/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-tamil-selvan-b",
    "name": "Mr.Tamilselvan B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-tamil-selvan-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-9.jpg"
  },
  {
    "id": "fac-mrs-aarthy-k",
    "name": "Mrs. Aarthy K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-aarthy-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4419.jpg"
  },
  {
    "id": "fac-ms-r-abirami",
    "name": "Mrs. Abirami R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-r-abirami/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3780.jpg"
  },
  {
    "id": "fac-ms-agalya-a",
    "name": "Mrs. Agalya A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-agalya-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-21.jpg"
  },
  {
    "id": "fac-mrs-p-ami-femila",
    "name": "Mrs. Ami Femila P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-p-ami-femila/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7324.jpg"
  },
  {
    "id": "fac-babeetha-s",
    "name": "Mrs. Babeetha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/babeetha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Photo-Babeetha-1.jpg"
  },
  {
    "id": "fac-ms-bagiyalakshmi-n",
    "name": "Mrs. Bagiyalakshmi N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-bagiyalakshmi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-17.jpg"
  },
  {
    "id": "fac-h-balaguru",
    "name": "Mrs. Balaguru H. (Margaret Magizhini)",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/h-balaguru/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/2-scaled.jpg"
  },
  {
    "id": "fac-ms-bharani-h",
    "name": "Mrs. Bharani H",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-bharani-h/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Bharani.jpg"
  },
  {
    "id": "fac-ms-r-chandralega",
    "name": "Mrs. Chandralega R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-r-chandralega/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Mrs.-Chandralega-R-2-3.jpg"
  },
  {
    "id": "fac-ms-dhwarithaa-r",
    "name": "Mrs. Dhwarithaa R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-dhwarithaa-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4219.jpg"
  },
  {
    "id": "fac-mrs-j-ezhilarasi",
    "name": "Mrs. Ezhilarasi J",
    "designation": "Assistant Professor (Jr)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-j-ezhilarasi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4414.jpg"
  },
  {
    "id": "fac-k-geetha",
    "name": "Mrs. Geetha K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-geetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Geetha.K.jpg"
  },
  {
    "id": "fac-ms-gokila-k",
    "name": "Mrs. Gokila K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gokila-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Gokila.jpg"
  },
  {
    "id": "fac-mrs-gomathi-v",
    "name": "Mrs. Gomathi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-gomathi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Gomathi-V-Cintel.jpeg"
  },
  {
    "id": "fac-mrs-jasmine-r-l",
    "name": "Mrs. Jasmine R L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-jasmine-r-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/Jasmine-Photo.jpg"
  },
  {
    "id": "fac-ms-jayanthi-v",
    "name": "Mrs. Jayanthi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jayanthi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-8.jpg"
  },
  {
    "id": "fac-ms-jeeva-k",
    "name": "Mrs. Jeeva K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jeeva-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Jeeva.jpg"
  },
  {
    "id": "fac-g-kalaimagal",
    "name": "Mrs. Kalaimagal G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/g-kalaimagal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101291-Mrs.-G.-Kalaimagal.jpg"
  },
  {
    "id": "fac-mrs-kalaiyarasi-b",
    "name": "Mrs. Kalaiyarasi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kalaiyarasi-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-kanmani-k",
    "name": "Mrs. Kanmani K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-kanmani-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-K.-Kanmani.jpg"
  },
  {
    "id": "fac-mrs-karthiga-r",
    "name": "Mrs. Karthiga R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-karthiga-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/MY-PROFILE-PICTURE.jpg"
  },
  {
    "id": "fac-ms-kavipriya-j",
    "name": "Mrs. Kavipriya J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kavipriya-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-24.jpg"
  },
  {
    "id": "fac-ms-s-latha",
    "name": "Mrs. Latha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-latha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG-20230420-WA0001.jpg"
  },
  {
    "id": "fac-v-lavanya",
    "name": "Mrs. Lavanya V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-lavanya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3849.jpg"
  },
  {
    "id": "fac-ms-leela-ranganayagi-k",
    "name": "Mrs. Leela Ranganayagi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-leela-ranganayagi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-29.jpg"
  },
  {
    "id": "fac-ms-k-magdalene-sowmya",
    "name": "Mrs. Magdalene Sowmya K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-k-magdalene-sowmya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1381-transformed.png"
  },
  {
    "id": "fac-manju-rekha-a",
    "name": "Mrs. Manju Rekha A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/manju-rekha-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1390-transformed.png"
  },
  {
    "id": "fac-mrs-s-f-mariyam-farzana",
    "name": "Mrs. Mariyam Farzana S.F",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-f-mariyam-farzana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-17.jpg"
  },
  {
    "id": "fac-mrs-d-mehernissa",
    "name": "Mrs. Mehernissa D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-d-mehernissa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7353.jpg"
  },
  {
    "id": "fac-mrs-nithya-p-2",
    "name": "Mrs. Nithya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-nithya-p-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/New-Photo.jpg"
  },
  {
    "id": "fac-mrs-g-poorani",
    "name": "Mrs. Poorani G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-g-poorani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7314.jpg"
  },
  {
    "id": "fac-ms-praveena-s",
    "name": "Mrs. Praveena S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-praveena-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-preethi-v",
    "name": "Mrs. Preethi V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-preethi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3794.jpg"
  },
  {
    "id": "fac-ms-v-prithiha",
    "name": "Mrs. Prithiha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-v-prithiha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/311-prithiha.jpg"
  },
  {
    "id": "fac-ms-priya-lakshmi-p",
    "name": "Mrs. Priya Lakshmi P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priya-lakshmi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Priya-Lakshmi.jpg"
  },
  {
    "id": "fac-mrs-v-priya",
    "name": "Mrs. Priya V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-v-priya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-V.Priya_.jpg"
  },
  {
    "id": "fac-m-priyadharsini",
    "name": "Mrs. Priyadharsini M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-priyadharsini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-M.-Priyadharshini.jpg"
  },
  {
    "id": "fac-ms-priyanka-b-2",
    "name": "Mrs. Priyanka B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyanka-b-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-10.jpg"
  },
  {
    "id": "fac-mrs-ramya-b",
    "name": "Mrs. Ramya B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-ramya-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/05/Ramya-B.jpg"
  },
  {
    "id": "fac-m-ratna-kumari",
    "name": "Mrs. Ratna kumari M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-ratna-kumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/06/DSC_4475-2.jpg"
  },
  {
    "id": "fac-mrs-rebecca-charles",
    "name": "Mrs. Rebecca Charles",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-rebecca-charles/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7338.jpg"
  },
  {
    "id": "fac-mrs-rekha-g",
    "name": "Mrs. Rekha G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-rekha-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rekha.jpg"
  },
  {
    "id": "fac-p-r-rekhaa",
    "name": "Mrs. Rekhaa P R",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/p-r-rekhaa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Rekhaas-scaled.jpg"
  },
  {
    "id": "fac-ms-sandhiya-priyadarshini-d",
    "name": "Mrs. Sandhiya Priyadarshini D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sandhiya-priyadarshini-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/Sandhiya-Priyadarshini-D-Photo.jpg"
  },
  {
    "id": "fac-mrs-k-sangeetha",
    "name": "Mrs. Sangeetha K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-sangeetha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7335.jpg"
  },
  {
    "id": "fac-ms-saranya-r",
    "name": "Mrs. Saranya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-saranya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-29.jpg"
  },
  {
    "id": "fac-mrs-selvameena-p",
    "name": "Mrs. Selvameena P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-selvameena-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvameena-P.jpg"
  },
  {
    "id": "fac-mrs-shaik-rasheeda-begum",
    "name": "Mrs. Shaik Rasheeda Begum",
    "designation": "Assistant Professor (Jr)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-shaik-rasheeda-begum/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4443.jpg"
  },
  {
    "id": "fac-mrs-sharmila-v",
    "name": "Mrs. Sharmila V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-sharmila-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Sharmila.-Profile-Photo.png"
  },
  {
    "id": "fac-ms-s-shrisruthi",
    "name": "Mrs. Shrisruthi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-s-shrisruthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.47-AM.jpeg"
  },
  {
    "id": "fac-ms-sivakamasundari-p",
    "name": "Mrs. Sivakamasundari P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sivakamasundari-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Sivakamasundari.jpg"
  },
  {
    "id": "fac-ms-sony-priya-s",
    "name": "Mrs. Sony Priya S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sony-priya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-32.jpg"
  },
  {
    "id": "fac-mrs-m-sowmiya",
    "name": "Mrs. Sowmiya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-m-sowmiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-09.59.44.jpeg"
  },
  {
    "id": "fac-mrs-r-sri-devi",
    "name": "Mrs. Sri Devi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-r-sri-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Passport-size-photo-50-kb-1.jpeg"
  },
  {
    "id": "fac-mrs-subicha-t-s",
    "name": "Mrs. Subicha T S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-subicha-t-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-16.jpg"
  },
  {
    "id": "fac-mrs-s-sudhandira-devi",
    "name": "Mrs. Sudhandiradevi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-sudhandira-devi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7362.jpg"
  },
  {
    "id": "fac-mrs-k-suganthi",
    "name": "Mrs. Suganthi K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-suganthi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-K.-Suganthi.jpg"
  },
  {
    "id": "fac-ms-sujatha-v",
    "name": "Mrs. Sujatha V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sujatha-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-8.jpg"
  },
  {
    "id": "fac-mrs-sukanya-varshini-k",
    "name": "Mrs. Sukanya  Varshini K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-sukanya-varshini-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sukanya-Photo-1.jpg"
  },
  {
    "id": "fac-ms-sukanya-vijayan",
    "name": "Mrs. Sukanya Vijayan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sukanya-vijayan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/IMG_2629-scaled.jpg"
  },
  {
    "id": "fac-ms-sumathy-v",
    "name": "Mrs. Sumathy V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sumathy-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/faculty-photos-srmist-12.jpg"
  },
  {
    "id": "fac-mrs-s-tamilselvi",
    "name": "Mrs. Tamilselvi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-s-tamilselvi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-S.-Tamilselvi.jpg"
  },
  {
    "id": "fac-ms-ushapriya-m",
    "name": "Mrs. Ushapriya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-ushapriya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-M.-Ushapriya.jpg"
  },
  {
    "id": "fac-mrs-vidhya-r",
    "name": "Mrs. Vidhya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-vidhya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-31-at-9.04.35-AM.jpeg"
  },
  {
    "id": "fac-mrs-vijayalakshmi-m",
    "name": "Mrs. Vijayalakshmi M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-vijayalakshmi-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-yasmeen-g",
    "name": "Mrs. Yasmeen Imtiaz G",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-yasmeen-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.46-AM-1.jpeg"
  },
  {
    "id": "fac-mrs-annapoorani-m",
    "name": "Mrs.Annapoorani  M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-annapoorani-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-07-at-12.35.16.jpeg"
  },
  {
    "id": "fac-ms-aabitha-banu-uabaithullah",
    "name": "Ms. Aabitha Banu Uabaithullah",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-aabitha-banu-uabaithullah/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-agnel-benita-a",
    "name": "Ms. Agnel Benita A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-agnel-benita-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-8.jpg"
  },
  {
    "id": "fac-ms-akhila-t-s",
    "name": "Ms. Akhila T S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-akhila-t-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Faculty-Photos-srmist-17.jpg"
  },
  {
    "id": "fac-ms-akilandasowmya-g",
    "name": "Ms. Akilandasowmya G",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-akilandasowmya-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/photo-e1786098357868.png",
    "empId": "103675"
  },
  {
    "id": "fac-ms-akshada-nitin-khatavkar",
    "name": "Ms. Akshada Nitin Khatavkar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-akshada-nitin-khatavkar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Archetech-Faculty-Photos-6.jpg"
  },
  {
    "id": "fac-ms-annie-anjali-shaji",
    "name": "Ms. Annie Anjali Shaji",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-annie-anjali-shaji/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-1.jpg"
  },
  {
    "id": "fac-ms-anu-p-m",
    "name": "Ms. Anu P M",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-anu-p-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-anuradha-r",
    "name": "Ms. Anuradha R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-anuradha-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Anu.jpg"
  },
  {
    "id": "fac-ms-apurva-a",
    "name": "Ms. Apurva A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-apurva-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/srmist-faculty-5.jpg"
  },
  {
    "id": "fac-aruna-g",
    "name": "Ms. Aruna G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/aruna-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/06/WhatsApp-Image-2023-07-25-at-11.56.30-AM.jpeg"
  },
  {
    "id": "fac-ms-aruna-s",
    "name": "Ms. Aruna S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-aruna-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/aruna-pic-1.jpg"
  },
  {
    "id": "fac-ms-asis-marceline-v",
    "name": "Ms. Asis Marceline V",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-asis-marceline-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-b-janapriya",
    "name": "Ms. B Janapriya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-b-janapriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-baby-saral-g",
    "name": "Ms. Baby Saral G",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-baby-saral-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Saral-photos-srmist-1.jpg"
  },
  {
    "id": "fac-ms-bavana-g",
    "name": "Ms. Bavana Ganesan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-bavana-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/DSC_4492-1.jpg"
  },
  {
    "id": "fac-mrs-bibsy-adlin-kumari-r",
    "name": "Ms. Bibsy Adlin Kumari R",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-bibsy-adlin-kumari-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/srmist-faculty-43.jpg"
  },
  {
    "id": "fac-ms-carlin-jebakani-p",
    "name": "Ms. Carlin Jebakani P",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-carlin-jebakani-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/20-06-2025-faculty-profile-26.jpg"
  },
  {
    "id": "fac-s-chandraprabha",
    "name": "Ms. Chandraprabha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-chandraprabha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/08/S-CHANDRAPRABHA-scaled.jpg"
  },
  {
    "id": "fac-ms-deborah-beulah-ebenezer",
    "name": "Ms. Deborah Beulah Ebenezer",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-deborah-beulah-ebenezer/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-deepika-s",
    "name": "Ms. Deepika S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-deepika-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-12.jpg"
  },
  {
    "id": "fac-ms-deepthi-kp",
    "name": "Ms. Deepthi KP",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-deepthi-kp/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Deepthi.jpg"
  },
  {
    "id": "fac-ms-devika-ramachandran",
    "name": "Ms. Devika Ramachandran",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-devika-ramachandran/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/Ms.-Devika-Ramachandran-.jpg"
  },
  {
    "id": "fac-ms-r-dhivya",
    "name": "Ms. Dhivya R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-r-dhivya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG-20230413-WA0002.jpg"
  },
  {
    "id": "fac-dr-divya-varshini-r",
    "name": "Ms. Divya Varshini R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-divya-varshini-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/2024-09-03-21-07-28-430-1.jpg"
  },
  {
    "id": "fac-ms-divyaa-p-r",
    "name": "Ms. Divyaa P R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-divyaa-p-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/divyaa.jpg"
  },
  {
    "id": "fac-ms-diya-shaju",
    "name": "Ms. Diya Shaju",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-diya-shaju/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-fraso-j",
    "name": "Ms. Fraso J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-fraso-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/faculty-pic-e1791535956702.jpeg"
  },
  {
    "id": "fac-ms-freya-corera-j",
    "name": "Ms. Freya Corera J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-freya-corera-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-29.png"
  },
  {
    "id": "fac-ms-d-gayathiri",
    "name": "Ms. Gayathiri D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-d-gayathiri/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Ms_D_Gayathiri.png"
  },
  {
    "id": "fac-ms-gayathri-k-2",
    "name": "Ms. Gayathri K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gayathri-k-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0020.jpg"
  },
  {
    "id": "fac-ms-gayathri-m",
    "name": "Ms. Gayathri M",
    "designation": "Assistant Professor(Jr)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gayathri-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/SRM-Images-2.jpg"
  },
  {
    "id": "fac-ms-gomathi-g",
    "name": "Ms. Gomathi G",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gomathi-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-gomathy-lakshmi-k",
    "name": "Ms. Gomathy Lakshmi K",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gomathy-lakshmi-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/20-06-2025-faculty-profile-15-1.jpg"
  },
  {
    "id": "fac-ms-a-grace-ansica",
    "name": "Ms. Grace Ansica A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-a-grace-ansica/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Grace_.jpg"
  },
  {
    "id": "fac-ms-harini-k",
    "name": "Ms. Harini K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-harini-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-13-at-10.43.16-AM.jpeg"
  },
  {
    "id": "fac-ms-jacqueline-martina-s",
    "name": "Ms. Jacquline Martina S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jacqueline-martina-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Institute-of-Hotel-and-Catering-Management-faculty-profile-srm-2.jpg"
  },
  {
    "id": "fac-janani-c",
    "name": "Ms. Janani C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/janani-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/33-1.jpg"
  },
  {
    "id": "fac-ms-jasmine-ankita-bage",
    "name": "Ms. Jasmine Ankita Bage",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jasmine-ankita-bage/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/srmist-faculty-6.jpg"
  },
  {
    "id": "fac-ms-jaya-poornima-v",
    "name": "Ms. Jaya Poornima V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jaya-poornima-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Jayapoornima.jpg"
  },
  {
    "id": "fac-ms-jayati-c-banerjee",
    "name": "Ms. Jayati C Banerjee",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jayati-c-banerjee/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1388-transformed.png"
  },
  {
    "id": "fac-ms-justina-jerusha-j",
    "name": "Ms. Justina Jerusha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-justina-jerusha-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-jyothsna-k",
    "name": "Ms. Jyothsna K",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jyothsna-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/jyo.jpeg"
  },
  {
    "id": "fac-kalaiarasi-b",
    "name": "Ms. Kalaiarasi B",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kalaiarasi-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6369117185.jpg"
  },
  {
    "id": "fac-ms-k-kalaimathy",
    "name": "Ms. Kalaimathy K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-k-kalaimathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Kalai_.jpg"
  },
  {
    "id": "fac-ms-kalaiyarasi-n",
    "name": "Ms. Kalaiyarasi N",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kalaiyarasi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-karthika-shree-s",
    "name": "Ms. Karthika Shree S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-karthika-shree-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/KARTHIKA-PHOTO.jpg"
  },
  {
    "id": "fac-ms-kaviya-m",
    "name": "Ms. Kaviya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kaviya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-28-at-09.59.49-min.jpeg"
  },
  {
    "id": "fac-ms-keerthana-p",
    "name": "Ms. Keerthana P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-keerthana-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/1-3-scaled.jpg"
  },
  {
    "id": "fac-ar-krithika-r",
    "name": "Ms. Krithika R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ar-krithika-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/Ar.Krithika.jpg"
  },
  {
    "id": "fac-ms-lakshmi-m-p",
    "name": "Ms. Lakshmi M P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-lakshmi-m-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240321-WA0021.jpg"
  },
  {
    "id": "fac-ms-p-logapriya",
    "name": "Ms. Logapriya P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-p-logapriya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/ChatGPT_Image_Jul_16_2026_09_50_-2.png"
  },
  {
    "id": "fac-ms-lumina-l",
    "name": "Ms. Lumina L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-lumina-l/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Lumina-L-Documents_compressed-3_page-0001-e1765357417918.jpg"
  },
  {
    "id": "fac-ms-manjari-krishnamoorthy",
    "name": "Ms. Manjari Krishnamoorthy",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-manjari-krishnamoorthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Manjari-1.jpg"
  },
  {
    "id": "fac-ms-mariya-joseph",
    "name": "Ms. Mariya Joseph",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-mariya-joseph/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/01/LAW-V15.jpg"
  },
  {
    "id": "fac-ms-mohana-vidhya-m",
    "name": "Ms. Mohana Vidhya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-mohana-vidhya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-monica-jaison",
    "name": "Ms. Monica Jaison",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-monica-jaison/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-nidhi-suchendra-agni",
    "name": "Ms. Nidhi Suchendra Agni",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nidhi-suchendra-agni/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/06/5Y0A1549.jpg"
  },
  {
    "id": "fac-ms-nirmala-murali",
    "name": "Ms. Nirmala Murali",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nirmala-murali/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-niveditha-j",
    "name": "Ms. Niveditha J",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-niveditha-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-nivetha-devi-r",
    "name": "Ms. Nivetha Devi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nivetha-devi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/03/Nivi_Passport-Size-Photo-e1773929236341.png"
  },
  {
    "id": "fac-ms-oinam-robita-chanu",
    "name": "Ms. Oinam Robita Chanu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-oinam-robita-chanu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-11.40.36.jpeg"
  },
  {
    "id": "fac-ms-padmavathy-t",
    "name": "Ms. Padmavathy T",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-padmavathy-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-31.jpg"
  },
  {
    "id": "fac-ms-pallavi-parida",
    "name": "Ms. Pallavi Parida",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-pallavi-parida/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mrs-k-parvathy",
    "name": "Ms. Parvathy K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-k-parvathy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/25.jpg"
  },
  {
    "id": "fac-ms-poorani-p",
    "name": "Ms. Poorani P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-poorani-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/SRM-College-of-Occupational-Therapy-photos-7.jpg"
  },
  {
    "id": "fac-prathiba-s",
    "name": "Ms. Prathiba S",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prathiba-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-preethi-c",
    "name": "Ms. Preethi C",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-preethi-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/peerthi.jpg"
  },
  {
    "id": "fac-ms-priyadharshini-s",
    "name": "Ms. Priyadharshini S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyadharshini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-priyanka-d",
    "name": "Ms. Priyanka D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyanka-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-priyanka-t-gopal",
    "name": "Ms. Priyanka T Gopal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyanka-t-gopal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/04/19.jpg"
  },
  {
    "id": "fac-ms-priyasri-g-r",
    "name": "Ms. Priyasri G R",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-priyasri-g-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-12.jpg"
  },
  {
    "id": "fac-ms-puja-jena",
    "name": "Ms. Puja Jena",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-puja-jena/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/DocScanner-18-Apr-2025-02-20-PM_page-0001.jpg"
  },
  {
    "id": "fac-ms-ramya-n",
    "name": "Ms. Ramya N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-ramya-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-rathiga-a",
    "name": "Ms. Rathiga A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-rathiga-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/AR-Faculty-profile-photo.jpg"
  },
  {
    "id": "fac-rebecca-mercy-victoria-m",
    "name": "Ms. Rebecca Mercy Victoria M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/rebecca-mercy-victoria-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-reena-k",
    "name": "Ms. Reena K",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-reena-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-richa-gulati",
    "name": "Ms. Richa Gulati",
    "designation": "Research Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/richa-gulati/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/20.-s.Richa-Gulati-Medical-Research.jpg"
  },
  {
    "id": "fac-ms-ridhikamini-basu-mallick",
    "name": "Ms. Ridhikamini Basu Mallick",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-ridhikamini-basu-mallick/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/pic2.jpeg"
  },
  {
    "id": "fac-mr-ritu-ajay",
    "name": "Ms. Ritu Ajay",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ritu-ajay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/srmist-faculty-25-1.png"
  },
  {
    "id": "fac-ms-rogina-j-s-savarimuthu",
    "name": "Ms. Rogina J S Savarimuthu",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-rogina-j-s-savarimuthu/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/Ms.-Rogina-photo.jpg"
  },
  {
    "id": "fac-ms-sasi-rekha-sankar",
    "name": "Ms. Sasi Rekha Sankar",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sasi-rekha-sankar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4348.jpg"
  },
  {
    "id": "fac-ms-sasikala-d",
    "name": "Ms. Sasikala D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sasikala-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/D-SASIKALA.jpg"
  },
  {
    "id": "fac-ms-sawmiya-rajaram",
    "name": "Ms. Sawmiya Rajaram",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sawmiya-rajaram/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-shanmathi-s",
    "name": "Ms. Shanmathi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-shanmathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/shanphoto.jpg"
  },
  {
    "id": "fac-ms-sharon-mathew",
    "name": "Ms. Sharon Mathew",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sharon-mathew/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/srmist-faculty-21.jpg"
  },
  {
    "id": "fac-ms-shatakshi-arora",
    "name": "Ms. Shatakshi Arora",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-shatakshi-arora/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Shatakshi-photo-1.jpg"
  },
  {
    "id": "fac-ms-shreya-jaiswal",
    "name": "Ms. Shreya Jaiswal",
    "designation": "Assistant Professor (Jr. G)",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-shreya-jaiswal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/SRM-profile-updated.png"
  },
  {
    "id": "fac-shreyasi-bhattacharya",
    "name": "Ms. Shreyasi Bhattacharya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/shreyasi-bhattacharya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-shubhi-agrawal",
    "name": "Ms. Shubhi Agrawal",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-shubhi-agrawal/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-siddhi-nigam",
    "name": "Ms. Siddhi Nigam",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-siddhi-nigam/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Siddhi-picture.png"
  },
  {
    "id": "fac-ms-simi-gracia-sunil-christopher",
    "name": "Ms. Simi Gracia Sunil Christopher",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-simi-gracia-sunil-christopher/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-sivaranjani-sedhuraman",
    "name": "Ms. Sivaranjani Sedhuraman",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sivaranjani-sedhuraman/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-sowmiya-k",
    "name": "Ms. Sowmiya. K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sowmiya-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-sreelekha-s",
    "name": "Ms. Sreelekha S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sreelekha-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SRM-College-of-Occupational-Therapy-photos-3.jpg"
  },
  {
    "id": "fac-ms-sridevi-n",
    "name": "Ms. Sridevi N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sridevi-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-d-sukheshini",
    "name": "Ms. Sukheshini D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-d-sukheshini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Sukeshini.jpg"
  },
  {
    "id": "fac-__trashed-61",
    "name": "Ms. Sundaravalli V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/__trashed-61/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Ms.-Sundaravalli-V.png"
  },
  {
    "id": "fac-ms-swati-kumari",
    "name": "Ms. Swati Kumari",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-swati-kumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-tharangini-k",
    "name": "Ms. Tharangini K",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/tharangini-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/07/tharangini.jpg"
  },
  {
    "id": "fac-ms-titiksha-das",
    "name": "Ms. Titiksha Das",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-titiksha-das/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-toshali-pattnaik",
    "name": "Ms. Toshali Pattnaik",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-toshali-pattnaik/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Toshali_Professional-image.png"
  },
  {
    "id": "fac-valaramathy-n",
    "name": "Ms. Valarmathy N",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/valaramathy-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/photoclip.jpg"
  },
  {
    "id": "fac-ms-vennila-r",
    "name": "Ms. Vennila R",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vennila-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/srmist-faculty-24.jpg"
  },
  {
    "id": "fac-j-v-vidhya-2",
    "name": "Ms. Vidhya J V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/j-v-vidhya-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/J.V.%20Vidhya.jpg"
  },
  {
    "id": "fac-ms-vijila-j",
    "name": "Ms. Vijila J",
    "designation": "Assistant Professor Jr G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vijila-j/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-vinitha-a",
    "name": "Ms. Vinitha A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vinitha-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-vishva-dharani-v-m",
    "name": "Ms. Vishva Dharani V M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-vishva-dharani-v-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Vishwadharani.jpg"
  },
  {
    "id": "fac-ms-yazhini-manivannan",
    "name": "Ms. Yazhini Manivannan",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-yazhini-manivannan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-yuva-poornima-a",
    "name": "Ms. Yuva Poornima A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-yuva-poornima-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-10.jpg"
  },
  {
    "id": "fac-ms-sivappriya-m",
    "name": "Sivappriya M",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sivappriya-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/faculty-photos-srmist-22.jpg"
  },
  {
    "id": "fac-thiyagarajan-subramanian",
    "name": "Thiyagarajan Subramanian",
    "designation": "Research Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/thiyagarajan-subramanian/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Photo_Thiyagarajan.jpg"
  },
  {
    "id": "fac-dr-yeddula-nikhileshwar-reddy",
    "name": "Yeddula Nikhileshwar Reddy Ph.D.",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-yeddula-nikhileshwar-reddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Dr.-Yeddula-Nikhileshwar-Reddy-1-e1753248080494.jpg"
  },
  {
    "id": "fac-mrs-anna-anbumozhi",
    "name": "Dr. Anna Anbumozhi",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-anna-anbumozhi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4279.jpg"
  },
  {
    "id": "fac-mrs-praveena-anjelin-d",
    "name": "Dr. Praveena Anjelin D",
    "designation": "Assistant Professor - Jr.G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-praveena-anjelin-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4277.jpg"
  },
  {
    "id": "fac-mrs-mythili-r",
    "name": "Mrs. Mythili R",
    "designation": "Assistant Professor - Jr.G",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-mythili-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4253.jpg"
  },
  {
    "id": "fac-ms-t-l-abinaya",
    "name": "Dr. Abinaya T.L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-t-l-abinaya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Abinaya.jpg"
  },
  {
    "id": "fac-dr-debasmita-bandyopadhyay",
    "name": "Dr. Debasmita Bandyopadhyay",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-debasmita-bandyopadhyay/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-dr-p-karuppusamy",
    "name": "Dr. Karuppusamy P",
    "designation": "Associate Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-karuppusamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Mr.karuppusamy.jpg"
  },
  {
    "id": "fac-dr-keerthi-p",
    "name": "Dr. Keerthi P",
    "designation": "Research Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-keerthi-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Keerthi-Profile-photo.png"
  },
  {
    "id": "fac-ganga-devi-g-2",
    "name": "Ganga Devi G",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ganga-devi-g-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ganga-scaled.jpg"
  },
  {
    "id": "fac-mr-antony-joe-v",
    "name": "Mr. Antony Joe V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-antony-joe-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/antony.jpg"
  },
  {
    "id": "fac-mr-n-ashok",
    "name": "Mr. Ashok N",
    "designation": "Senior Physio Therapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-n-ashok/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-49.jpg"
  },
  {
    "id": "fac-mr-v-krishnamourthy",
    "name": "Mr. Krishnamourthy V",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-krishnamourthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Krishnamourthy-V.png"
  },
  {
    "id": "fac-mr-r-praveen-kumar",
    "name": "Mr. Praveen Kumar R",
    "designation": "Program Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-r-praveen-kumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/photo-0607-scaled.jpg"
  },
  {
    "id": "fac-v-saravanan",
    "name": "Mr. Saravanan V",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-saravanan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Mr.Sarabvanan.jpg"
  },
  {
    "id": "fac-sudhagar-a",
    "name": "Mr. Sudhagar A",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sudhagar-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5267-1.jpg"
  },
  {
    "id": "fac-suresh-kumar-c",
    "name": "Mr. Suresh Kumar C",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/suresh-kumar-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20220212_110430.jpg"
  },
  {
    "id": "fac-abizha-g",
    "name": "Mrs. Abizha G",
    "designation": "Nursing tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/abizha-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Abizha-G.jpg"
  },
  {
    "id": "fac-mrs-n-dhivya",
    "name": "Mrs. Dhivya N",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-n-dhivya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/01/IMG-20240927-WA0041-1.jpg"
  },
  {
    "id": "fac-mrs-jeya-indira-r",
    "name": "Mrs. Jeya Indira R",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-jeya-indira-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5365.jpg"
  },
  {
    "id": "fac-mrs-selvi-s",
    "name": "Mrs. Selvi S",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-selvi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Selvi.-S.jpg"
  },
  {
    "id": "fac-suganya-n",
    "name": "Mrs. Suganya N",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/suganya-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-N.-Suganya.jpg"
  },
  {
    "id": "fac-vinitha-d",
    "name": "Mrs. Vinitha D",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vinitha-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-D.-Vinitha.jpg"
  },
  {
    "id": "fac-ms-archana-m",
    "name": "Ms. Archana M",
    "designation": "Nursing Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-archana-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/IMG-20260107-WA0032.jpg"
  },
  {
    "id": "fac-ms-gnana-jemila-p",
    "name": "Ms. Gnana Jemila P",
    "designation": "Nursing Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-gnana-jemila-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Mrs.Gnana-Jemila-.jpg"
  },
  {
    "id": "fac-v-indumathi",
    "name": "Ms. Indumathi V",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/v-indumathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4356.jpg"
  },
  {
    "id": "fac-mary-florence-d",
    "name": "Ms. Mary Florence D",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mary-florence-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Mary-scaled.jpg"
  },
  {
    "id": "fac-ms-nandhini-s",
    "name": "Ms. Nandhini S",
    "designation": "Clinical Therapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nandhini-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240828-WA0020.jpg"
  },
  {
    "id": "fac-ms-pei-chi-kan",
    "name": "Ms. Pei-Chi Kan",
    "designation": "Mandarin Chinese Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-pei-chi-kan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-ms-ramavathy-p",
    "name": "Ms. Ramavathy P",
    "designation": "Nursing Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-ramavathy-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/12/9025611933.jpg-.jpg"
  },
  {
    "id": "fac-ms-sai-varsaa",
    "name": "Ms. Sai Varsaa",
    "designation": "Research Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sai-varsaa/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/11/1697164580236-1-scaled.jpg"
  },
  {
    "id": "fac-ms-sujatha-sathiya",
    "name": "Ms. Sujatha Sathiya",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sujatha-sathiya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Sujatha-Sathiya-scaled.jpg"
  },
  {
    "id": "fac-vinothini-v",
    "name": "Ms. Vinothini. V",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vinothini-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Mrs.Vinothini-V.jpg"
  },
  {
    "id": "fac-prabhu-d",
    "name": "Prabhu D",
    "designation": "Research Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/prabhu-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/17.Mr_.D.Prabhu-Medical-Research.jpg"
  },
  {
    "id": "fac-dr-krishna-r-reddy",
    "name": "Dr. Krishna R Reddy",
    "designation": "Adjunct Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-krishna-r-reddy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Krishna-R-reddy-1.webp"
  },
  {
    "id": "fac-dr-mohammed-alias-yusof",
    "name": "Dr. Mohammed Alias Yusof",
    "designation": "Adjunct Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-mohammed-alias-yusof/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Mohamad1.jpg"
  },
  {
    "id": "fac-dr-pratim-kumar-chattaraj",
    "name": "Dr. Pratim Kumar Chattaraj",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-pratim-kumar-chattaraj/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PKC-1-1.jpg"
  },
  {
    "id": "fac-dr-g-sarathchandra",
    "name": "Dr. Sarathchandra G",
    "designation": "Adjunct Faculty",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-g-sarathchandra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/1.-New-Dr.-G.-Sarathchandra-Sir.png"
  },
  {
    "id": "fac-ilavalagan-p",
    "name": "ILAVALAGAN P",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ilavalagan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/02/image6-1.jpeg"
  },
  {
    "id": "fac-kousalya-t",
    "name": "Kousalya T",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/kousalya-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/02/Kousalya-T.jpg"
  },
  {
    "id": "fac-mr-chandra-priyan-p",
    "name": "Mr. Chandra Priyan P",
    "designation": "Animator",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-chandra-priyan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/work-scaled.jpg"
  },
  {
    "id": "fac-mr-dakshina-moorthy-v",
    "name": "Mr. Dakshina Moorthy V",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-dakshina-moorthy-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-david-kovilraj-s",
    "name": "Mr. David Kovilraj S",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-david-kovilraj-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/david-photo-srm-2.jpeg"
  },
  {
    "id": "fac-mr-denish-kumar-b-g",
    "name": "Mr. Denish Kumar B G",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-denish-kumar-b-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Ar.Dinesh.jpg"
  },
  {
    "id": "fac-mr-diwagar-b",
    "name": "Mr. Diwagar B",
    "designation": "Clinical Therapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-diwagar-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-61.jpg"
  },
  {
    "id": "fac-mr-gobinath-gopalsamy",
    "name": "Mr. Gobinath Gopalsamy",
    "designation": "Pastry Chef Cum Demonstrator",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-gobinath-gopalsamy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-hari-prakash-d",
    "name": "Mr. Hari Prakash D",
    "designation": "Editor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-hari-prakash-d/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/700150-scaled.jpg"
  },
  {
    "id": "fac-mr-harilingam-m",
    "name": "Mr. Harilingam M",
    "designation": "Clinical Physiotherapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-harilingam-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/hari-ph.jpg"
  },
  {
    "id": "fac-mr-kamal-s-2",
    "name": "Mr. Kamal S",
    "designation": "Fine Artist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-kamal-s-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/DSC_9507-1-1-scaled.jpg"
  },
  {
    "id": "fac-mr-kumar-r",
    "name": "Mr. Kumar R",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-kumar-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/10/Kumar-mage.jpg"
  },
  {
    "id": "fac-mr-monesh-mariappan",
    "name": "Mr. Monesh Mariappan",
    "designation": "Pastry Chef Cum Demonstrator",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-monesh-mariappan/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-neelakandan-r",
    "name": "Mr. Neelakandan R",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-neelakandan-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4238.jpg"
  },
  {
    "id": "fac-mr-pradeshwaran-v",
    "name": "Mr. Pradeshwaran V",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-pradeshwaran-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/srmist-faculty-photos-29.jpg"
  },
  {
    "id": "fac-mr-ragupathi-s",
    "name": "Mr. Ragupathi S",
    "designation": "Clinical Physiotherapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ragupathi-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240828-WA0019.jpg"
  },
  {
    "id": "fac-mr-ravichandran-p",
    "name": "Mr. Ravichandran P",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-ravichandran-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/themes/oceanwp/wp-content/uploads/2022/04/user-avatar-placeholder.png"
  },
  {
    "id": "fac-mr-saravanan-k",
    "name": "Mr. Saravanan K",
    "designation": "Cinematographer",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-saravanan-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_9396-scaled.jpg"
  },
  {
    "id": "fac-mr-shyam-jebadev-m",
    "name": "Mr. Shyam Jebadev M",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-shyam-jebadev-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/09/B-50972-1.jpg"
  },
  {
    "id": "fac-mr-simeon-2",
    "name": "Mr. Simeon",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-simeon-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/SIMION.jpg"
  },
  {
    "id": "fac-mr-sivagnanam-s",
    "name": "Mr. Sivagnanam S",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-sivagnanam-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-19.jpg"
  },
  {
    "id": "fac-mr-s-srinivasasenthil",
    "name": "Mr. Srinivasa Senthil S",
    "designation": "Teaching Asst.",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-s-srinivasasenthil/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/04/Faculty-Photos-srmist-105.jpg"
  },
  {
    "id": "fac-vasantharaj-c",
    "name": "Mr. Vasantharaj C",
    "designation": "Sound engineer",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/vasantharaj-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/03/9427-scaled.jpg"
  },
  {
    "id": "fac-mr-viswanath",
    "name": "Mr. Viswanath. P",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-viswanath/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Mr.-Viswanath.jpg"
  },
  {
    "id": "fac-mrs-p-beaula-priya-tharisini",
    "name": "Mrs. Beaula Priya Tharisini P",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-p-beaula-priya-tharisini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Photoroom_20240812_165809.jpg"
  },
  {
    "id": "fac-mrs-jayamalli-n",
    "name": "Mrs. Jayamalli N",
    "designation": "Nursing Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-jayamalli-n/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Mrs.N.-Jaya-Malli.jpg"
  },
  {
    "id": "fac-a-louismary",
    "name": "Mrs. Louismary A",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/a-louismary/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/LOUIS-MARY.jpg"
  },
  {
    "id": "fac-mrs-nithiya-r",
    "name": "Mrs. Nithiya R",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-nithiya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/IMG-20260107-WA00041.jpg"
  },
  {
    "id": "fac-mrs-pushpa-g",
    "name": "Mrs. Pushpa G",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-pushpa-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/06/PUSHPA-G.jpg"
  },
  {
    "id": "fac-m-rukmani",
    "name": "Mrs. Rukmani M",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-rukmani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/RUKUMANI-1.jpg"
  },
  {
    "id": "fac-mrs-senthil-vadivu-r",
    "name": "Mrs. Senthil Vadivu R",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mrs-senthil-vadivu-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/20-06-2025-faculty-profile-4-1.jpg"
  },
  {
    "id": "fac-sravanthi-v",
    "name": "Mrs. Sravanthi V",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sravanthi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/IMG_E0163.JPG-3-scaled-e1784519822143.jpg"
  },
  {
    "id": "fac-s-sumathi",
    "name": "Mrs. Sumathi S",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-sumathi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/SUMATHI.jpg"
  },
  {
    "id": "fac-ms-annie-jasline-b",
    "name": "Ms. Annie Jasline B",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-annie-jasline-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANNIE.jpg"
  },
  {
    "id": "fac-anusiya-s",
    "name": "Ms. Anusiya S",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/anusiya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/7e4cebfe-17eb-4be4-a632-4c711af32cad.jpg"
  },
  {
    "id": "fac-ms-p-anusuya",
    "name": "Ms. Anusuya P",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-p-anusuya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANUSUYA-P.jpg"
  },
  {
    "id": "fac-m-aswini",
    "name": "Ms. Aswini M",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/m-aswini/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/4-1.jpg"
  },
  {
    "id": "fac-ms-chandralekha",
    "name": "Ms. Chandralekha. R",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-chandralekha/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-20-32-14.jpg"
  },
  {
    "id": "fac-divya-dharshini-m",
    "name": "Ms. Divya Dharshini M",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/divya-dharshini-m/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/1-2-scaled.jpg"
  },
  {
    "id": "fac-ms-divya-r",
    "name": "Ms. Divya R",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-divya-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/DIVYA-R.jpg"
  },
  {
    "id": "fac-ms-helen-christinal-y",
    "name": "Ms. Helen Christinal Y",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-helen-christinal-y/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/HELEN-CRISTINAL.jpg"
  },
  {
    "id": "fac-r-hema-rajakumari",
    "name": "Ms. Hema Rajakumari R",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/r-hema-rajakumari/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/HEMA.jpg"
  },
  {
    "id": "fac-ms-jenifer-r",
    "name": "Ms. Jenifer R",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jenifer-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/JENIFER.jpg"
  },
  {
    "id": "fac-ms-joe-infantia",
    "name": "Ms. Joe Infantia",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-joe-infantia/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/11/5Y0A8569-scaled-e1732716636678.jpg"
  },
  {
    "id": "fac-ms-jothi-lakshmi-a",
    "name": "Ms. Jothilakshmi A",
    "designation": "Clinical Physiotherapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-jothi-lakshmi-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0032-1.jpg"
  },
  {
    "id": "fac-ms-kalpana-s",
    "name": "Ms. Kalpana S",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kalpana-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Ms.Kalpana-S.jpg"
  },
  {
    "id": "fac-ms-kavitha-g-2",
    "name": "Ms. Kavitha G",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kavitha-g-2/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/KAVITHA.jpg"
  },
  {
    "id": "fac-ms-kavitha-g",
    "name": "Ms. Kavitha G",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kavitha-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_5674-scaled.jpg"
  },
  {
    "id": "fac-ms-keerthana-s",
    "name": "Ms. Keerthana S",
    "designation": "Tutor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-keerthana-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Ms.Keerthana-S.jpg"
  },
  {
    "id": "fac-ms-latha-kumari-c",
    "name": "Ms. Latha Kumari C",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-latha-kumari-c/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/LATHA-KUMARI.jpg"
  },
  {
    "id": "fac-mohanapriya-p",
    "name": "Ms. Mohanapriya P",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mohanapriya-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/10/IMG-20251006-WA0002.jpg"
  },
  {
    "id": "fac-ms-nethravathi-v",
    "name": "Ms. Nethravathi V",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-nethravathi-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/01/Ms.Nethravathi-V.jpg"
  },
  {
    "id": "fac-k-pavithra",
    "name": "Ms. Pavithra k",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/k-pavithra/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Mrs.-Pavithra-K.jpg"
  },
  {
    "id": "fac-s-prema",
    "name": "Ms. Prema S",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-prema/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/PREMA.jpg"
  },
  {
    "id": "fac-ms-sanghavi-vv",
    "name": "Ms. Sanghavi V V",
    "designation": "Visiting Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sanghavi-vv/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Sanghavi-VV.jpg"
  },
  {
    "id": "fac-ms-santhiya-g",
    "name": "Ms. Santhiya G",
    "designation": "Clinical Physiotherapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-santhiya-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-1.jpg"
  },
  {
    "id": "fac-ms-sasikala-k",
    "name": "Ms. Sasikala K",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sasikala-k/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/2.jpg"
  },
  {
    "id": "fac-ms-sony-j-r",
    "name": "Ms. Sony J R",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-sony-j-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Profile-pic-scaled.jpg"
  },
  {
    "id": "fac-ms-r-p-sumi",
    "name": "Ms. Sumi R P",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-r-p-sumi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/R-P-SUMI.jpg"
  },
  {
    "id": "fac-s-vanaja",
    "name": "Ms. Vanaja S",
    "designation": "Clinical Instructor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/s-vanaja/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/VANAJA-B.jpg"
  },
  {
    "id": "fac-ms-viji-priya-s",
    "name": "Ms. VijiPriya S",
    "designation": "Clinical Physiotherapist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-viji-priya-s/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0031.jpg"
  },
  {
    "id": "fac-sabarish-nandhan-p",
    "name": "Sabarish Nandhan P",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sabarish-nandhan-p/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sabarish-Nandhan.jpg"
  },
  {
    "id": "fac-sharanyaa-k-v",
    "name": "Sharanyaa K V",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/sharanyaa-k-v/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/Sharanyaa-scaled.jpg"
  },
  {
    "id": "fac-praveena-t",
    "name": "Praveena T",
    "designation": "Teaching Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/praveena-t/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/02/02.jpg"
  },
  {
    "id": "fac-dhanalakshmi-r",
    "name": "Dhanalakshmi R",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dhanalakshmi-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/R.-Dhanalakshmi.jpg"
  },
  {
    "id": "fac-dr-anantha-ramana",
    "name": "Dr Anantha Raman P",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-anantha-ramana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/07/Anandh_photo-2.jpg"
  },
  {
    "id": "fac-dr-abirami-g",
    "name": "Dr. Abirami G",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-abirami-g/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Image.jpg"
  },
  {
    "id": "fac-dr-dhruva-nandi",
    "name": "Dr. Dhruva Nandi",
    "designation": "Research Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-dhruva-nandi/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2023/10/10.Dr_.Dhruva-Nandhi-Medical-Research.jpg"
  },
  {
    "id": "fac-227769",
    "name": "Dr. Jishnu D",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/227769/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/11/1001506864.png"
  },
  {
    "id": "fac-ms-kavita-r",
    "name": "Dr. Kavita Singla",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-kavita-r/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/Image-2.jpg"
  },
  {
    "id": "fac-dr-marina-a",
    "name": "Dr. Marina A",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-marina-a/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-24-at-2.01.21-PM-1-scaled.jpeg"
  },
  {
    "id": "fac-mr-mohit-singh-rana",
    "name": "Dr. Mohit Singh Rana",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-mohit-singh-rana/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/Mohit-pic-new.jpg"
  },
  {
    "id": "fac-dr-murugan-n-2__trashed",
    "name": "Dr. Murugan N",
    "designation": "Assistant Professor -Senior Grade",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-murugan-n-2__trashed/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Dr.NM_.Photo_.rece41.jpg"
  },
  {
    "id": "fac-268167",
    "name": "Dr. Nandhini Priya K L",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/268167/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-12.27.58-PM-copy.jpeg"
  },
  {
    "id": "fac-dr-p-nithya",
    "name": "Dr. P. Nithya",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-p-nithya/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/09/Nithya-P.jpg"
  },
  {
    "id": "fac-dr-r-suriyaprakash",
    "name": "Dr. R. Suriyaprakash",
    "designation": "Scientist",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-r-suriyaprakash/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/05/image.jpg"
  },
  {
    "id": "fac-dr-sulagna",
    "name": "Dr. Sulagna",
    "designation": "Program Associate",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/dr-sulagna/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/08/IMG-20260811-WA0003.jpg"
  },
  {
    "id": "fac-209529",
    "name": "Dr.L.Ramazeame",
    "designation": "Assistant professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/209529/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/03/Dr.-L.-Ramazeame.jpg"
  },
  {
    "id": "fac-mr-m-anbukkani",
    "name": "Mr. Anbukkani M",
    "designation": "Verbal Aptitude Trainer",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-m-anbukkani/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7344.jpg"
  },
  {
    "id": "fac-mr-v-s-bhaskar",
    "name": "Mr. Bhaskar V S",
    "designation": "Teaching Assistant",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-v-s-bhaskar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-78.jpg"
  },
  {
    "id": "fac-mr-c-s-palani-ganesa-chakravarthy",
    "name": "Mr. Palani Ganesa Chakravarthy C S",
    "designation": "Teacher Trainee",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-c-s-palani-ganesa-chakravarthy/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-80.jpg"
  },
  {
    "id": "fac-mr-saiprasanna-b",
    "name": "Mr. Saiprasanna B",
    "designation": "Multimedia Designer",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/mr-saiprasanna-b/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2025/08/Saiprasanna-scaled.jpg"
  },
  {
    "id": "fac-ms-bhuvana-udhayakumar",
    "name": "Mrs. Bhuvana Udhayakumar",
    "designation": "Visiting Faculty",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-bhuvana-udhayakumar/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1416-transformed.png"
  },
  {
    "id": "fac-ms-ling-yun-tsai",
    "name": "Ms. Ling Yun Tsai",
    "designation": "Director of TEC-SRMIST & Mandarin Instructor of EFL department",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-ling-yun-tsai/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2022/10/\u8521\u7fce\u82b804-1.jpg"
  },
  {
    "id": "fac-ms-zatale-shubhangi-laxmanrao",
    "name": "Ms.Zatale Shubhangi Laxmanrao",
    "designation": "Assistant Professor",
    "department": "",
    "profileUrl": "https://www.srmist.edu.in/faculty/ms-zatale-shubhangi-laxmanrao/",
    "avatarUrl": "https://www.srmist.edu.in/wp-content/uploads/2026/07/SRM-College-of-Occupational-Therapy-photos-4-1.jpg"
  }
];
